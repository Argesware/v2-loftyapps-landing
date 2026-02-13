"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useEffect } from "react"
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
  slug?: string
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
          url: project.slug || project.url || project.domain || '',
          slug: project.slug,
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
    </div>
  )
}
