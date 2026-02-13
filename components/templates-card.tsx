import dynamic from "next/dynamic"
import { ScrollReveal } from "@/components/scroll-reveal"

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

interface TemplatesCardProps {
  templates: Template[]
  onTemplateClick: (template: Template) => void
}

export default function TemplatesCard({ templates, onTemplateClick }: TemplatesCardProps) {
  return (
    <>
      {templates.map((template, index) => (
        <ScrollReveal key={template._id} delay={index * 50}>
          <div
            onClick={() => onTemplateClick(template)}
            className="neu-flat rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer min-h-[500px] sm:min-h-[420px]"
          >
            <div className="relative overflow-hidden bg-[#e9e8e5] w-full rounded-t-xl">
              <div className="flex justify-center items-center overflow-hidden w-full h-[520px] sm:h-[400px] rounded-t-xl mx-auto">
                {(template.slug || template.url) && (
                  <Thumbnail
                    url={
                      (template.slug || template.url).startsWith('http')
                        ? (template.slug || template.url)
                        : `https://${template.slug || template.url}.loftyapps.website`
                    }
                    iframeHeight={1920}
                    iframeWidth={1920}
                    className="w-full h-full"
                  />
                )}
              </div>
              {template.price !== undefined && (
                <div className="absolute top-3 right-3">
                  <span className="neu-flat text-xs font-bold px-3 py-1.5 rounded-full text-[#0891b2]">
                    {template.price > 0
                      ? `HNL ${template.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                      : 'Gratis'
                    }
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1a202c] mb-3 group-hover:text-[#0891b2] transition-colors line-clamp-2 min-h-[56px]">
                {template.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {template.description}
              </p>
              <div className="neu-btn w-full py-2.5 text-sm font-bold group-hover:shadow-lg transition-all text-center">
                Ver Plantilla
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </>
  )
}
