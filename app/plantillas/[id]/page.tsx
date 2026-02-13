"use client"

import Link from "next/link"
import { ArrowLeft, Eye, Rocket } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useEffect, use } from "react"
import { getProjectTemplates } from 'api-lofty'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import TemplatesCard from "@/components/templates-card"

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

export default function TemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [template, setTemplate] = useState<Template | null>(null)
  const [suggestedTemplates, setSuggestedTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchTemplateDetails = async () => {
      try {
        const data = await getProjectTemplates()
          //console.log('Fetched template data:', data)
        // Find the template by id
          const selectedTemplate = (data.data as unknown as Template[]).find((t: Template) => t._id === id)
          if (selectedTemplate) {
            setTemplate(selectedTemplate)
            // Fetch suggested templates (all except current one)
            const suggestions: Template[] = (data.data as unknown as Template[])
              .filter((t: Template) => t._id !== id)
            setSuggestedTemplates(suggestions)
          }
      } catch (error) {
        console.error('Error fetching template details:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchTemplateDetails()
  }, [id])

  const handleTemplateClick = (template: Template) => {
    router.push(`/plantillas/${template._id}`)
    window.scrollTo(0, 0)
  }

  const handlePreview = () => {
    if (template?.slug || template?.url) {
      const previewUrl = (template.slug || template.url).startsWith('http')
        ? (template.slug || template.url)
        : `https://${template.slug || template.url}.loftyapps.website`
      window.open(previewUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleObtainTemplate = () => {
    if (!template) return
    const url = `https://platform.loftyapps.com?createproject=true&idtemplate=${template._id}`
    window.location.href = url
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#e0e5ec]">
        <div className="text-center">
          <p className="text-lg text-gray-600">Cargando detalles de la plantilla...</p>
        </div>
      </div>
    )
  }

  if (!template) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#e0e5ec]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1a202c] mb-4">Plantilla no encontrada</h1>
          <Link href="/plantillas" className="text-[#0891b2] hover:underline">
            Volver a plantillas
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#e0e5ec] text-[#2c3e50]">
      <main className="flex-1 pt-24">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 md:px-6 pt-8 pb-2">
          <div className="border-b border-gray-300/50 mb-1"></div>
          <Link
            href="/plantillas"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0891b2] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a plantillas
          </Link>
        </div>

        {/* Template Hero */}
        <section className="pt-4 pb-12 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  {template.category && (
                    <div className="inline-block neu-flat px-4 py-2 rounded-full mb-6">
                      <span className="text-sm font-bold text-[#0891b2]">{template.category}</span>
                    </div>
                  )}
                  <h1 className="text-4xl md:text-6xl font-black mb-6 text-balance leading-tight">{template.name}</h1>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{template.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-sm text-gray-500 mb-2">Precio</h3>
                    <p className="text-4xl font-black text-[#0891b2]">
                      {template.price > 0 
                        ? `HNL ${template.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                        : 'Gratis'}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleObtainTemplate}
                      disabled={!template._id}
                      className="neu-btn-primary px-8 py-4 text-base font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Rocket className="h-5 w-5" />
                      Obtener Plantilla
                    </button>
                    <button 
                      onClick={handlePreview}
                      disabled={!(template.slug || template.url)}
                      className="neu-btn px-8 py-4 text-base font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Eye className="h-5 w-5" />
                      Vista Previa
                    </button>
                  </div>
                </div>
                <div className="neu-flat rounded-2xl overflow-hidden">
                  {(template.slug || template.url) ? (
                    <div className="w-full h-[800px]">
                      <Thumbnail
                        url={`https://${template.slug || template.url}.loftyapps.website`}
                        iframeHeight={1920}
                        iframeWidth={1080}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-[800px] flex items-center justify-center bg-gray-100">
                      <p className="text-gray-400">Vista previa no disponible</p>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Suggested Templates Section */}
        {suggestedTemplates.length > 0 && (
          <section className="py-20 px-4 md:px-6 bg-[#d1d9e0]">
            <div className="container mx-auto max-w-7xl">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Plantillas Similares</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                <TemplatesCard
                  templates={suggestedTemplates.slice(0, 8)}
                  onTemplateClick={handleTemplateClick}
                />
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="neu-flat rounded-3xl p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-balance">
                  ¿Listo para empezar con esta plantilla?
                </h2>
                <p className="text-lg text-gray-600 mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
                  Personaliza esta plantilla según tus necesidades y lánzala en minutos
                </p>
                <button 
                  onClick={handleObtainTemplate}
                  disabled={!template._id}
                  className="neu-btn-primary px-8 py-4 text-base font-bold hover:shadow-xl transition-all inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Rocket className="h-5 w-5" />
                  Comenzar Ahora
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  )
}
