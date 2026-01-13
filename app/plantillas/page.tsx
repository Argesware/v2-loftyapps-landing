"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useEffect } from "react"
import CurrencySelector from "@/components/currency-selector"
import { getProjectTemplates } from 'api-lofty'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import TemplatesCard from "@/components/templates-card" // <-- import new component

// Dynamically import Thumbnail to avoid SSR issues
const Thumbnail = dynamic(() => import('react-webpage-thumbnail'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
      <p className="text-gray-400 text-sm">Cargando vista previa...</p>
    </div>
  ),
})

interface Template {
  _id: string
  name: string
  description: string
  url: string
  price: number
  category?: string
}

export default function PlantillasPage() {
  const [templateData, setTemplateData] = useState<Template[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const data = await getProjectTemplates()
        const mappedData: Template[] = data.data.map((project: any) => ({
          _id: project._id || project.id || '',
          name: project.name || '',
          description: project.description || '',
          url: project.url || project.domain || project.slug || '',
          price: project.price ?? 0,
          category: project.category
        }))
        setTemplateData(mappedData)
        console.log('Fetched templates:', mappedData);
      } catch (error) {
        console.error('Error fetching templates:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchTemplates()
  }, [])

  const filteredTemplates = templateData.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleTemplateClick = (template: Template) => {
    router.push(`/plantillas/${template._id}`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#e0e5ec] text-[#2c3e50]">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-[#e0e5ec]/90 backdrop-blur-sm border-b border-gray-300/50">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo-black.png" alt="Lofty Apps" className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/documentacion" className="hover:text-[#0891b2] transition-colors">
              Documentación
            </Link>
            <Link href="/plantillas" className="text-[#0891b2] font-semibold">
              Plantillas
            </Link>
            <Link href="/precios" className="hover:text-[#0891b2] transition-colors">
              Precios
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <CurrencySelector />
            <Link href="/login" className="hidden text-sm font-medium text-gray-600 hover:text-[#1a202c] md:block">
              Iniciar Sesión
            </Link>
            <button className="neu-btn px-6 py-2.5 text-sm font-bold">Comenzar</button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 lg:px-12 2xl:px-32">
          <div>
            <ScrollReveal>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-balance leading-tight">
                  Plantillas <span className="text-[#0891b2]">Profesionales</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 text-pretty max-w-2xl mx-auto leading-relaxed">
                  Comienza tu proyecto con nuestras plantillas prediseñadas. Personalízalas y lánzalas en minutos.
                </p>
              </div>
            </ScrollReveal>

            {/* Search Bar */}
            <ScrollReveal delay={100}>
              <div className="max-w-2xl mx-auto mb-16">
                <div className="neu-pressed rounded-2xl p-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar plantillas..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent px-12 py-4 text-base text-[#1a202c] placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-20">
                <p className="text-gray-600">Cargando plantillas...</p>
              </div>
            )}

            {/* Templates Grid */}
            {!loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                <TemplatesCard
                  templates={filteredTemplates}
                  onTemplateClick={handleTemplateClick}
                />
              </div>
            )}

            {/* No Results */}
            {!loading && filteredTemplates.length === 0 && (
              <div className="text-center py-20">
                <div className="neu-flat rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a202c] mb-3">No se encontraron plantillas</h3>
                <p className="text-gray-600">Intenta con otros términos de búsqueda</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="neu-flat rounded-3xl p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-balance">¿No encuentras lo que buscas?</h2>
                <p className="text-lg text-gray-600 mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
                  Crea tu propia aplicación desde cero con nuestro editor visual intuitivo
                </p>
                <button className="neu-btn px-8 py-4 text-base font-bold hover:shadow-xl transition-all">
                  Comenzar desde Cero
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300/50 bg-[#e0e5ec] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logo-black.png" alt="Lofty Apps" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-gray-600 max-w-xs leading-relaxed mb-6">
                La plataforma completa para construir aplicaciones web sin código. Empoderando creadores en todo el
                mundo.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="#" className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="#" className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link href="#" className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link href="#" className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a202c] mb-6 uppercase tracking-wider">Producto</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <Link href="/documentacion" className="hover:text-[#0891b2] transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="/plantillas" className="hover:text-[#0891b2] transition-colors">
                    Plantillas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#0891b2] transition-colors">
                    Integraciones
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="hover:text-[#0891b2] transition-colors">
                    Precios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a202c] mb-6 uppercase tracking-wider">Compañía</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <Link href="/terms" className="hover:text-[#0891b2] transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#0891b2] transition-colors">
                    Políticas de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-300/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">© 2025 Lofty Apps Inc. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
