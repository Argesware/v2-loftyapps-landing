import Link from "next/link"
import { ArrowLeft, Eye, Rocket } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

// Datos de plantillas (mismo array que en la página principal)
const templates = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Tienda online completa con carrito de compras, pagos integrados y panel de administración.",
    fullDescription:
      "Esta plantilla incluye todo lo necesario para lanzar tu tienda online profesional. Cuenta con un sistema completo de carrito de compras, integración con pasarelas de pago, gestión de inventario, panel de administración para vendedores, sistema de valoraciones y reseñas, y diseño responsive optimizado para conversión.",
    image: "/modern-ecommerce-interface.png",
    category: "E-commerce",
    features: [
      "Carrito de compras inteligente",
      "Integración con Stripe y PayPal",
      "Panel de administración completo",
      "Gestión de inventario en tiempo real",
      "Sistema de reseñas y valoraciones",
      "Diseño responsive y optimizado",
      "SEO optimizado",
      "Análisis y reportes de ventas",
    ],
  },
  {
    id: 2,
    title: "Dashboard Empresarial",
    description: "Panel de control analítico con gráficos, tablas y widgets personalizables para negocios.",
    fullDescription:
      "Dashboard profesional diseñado para empresas que necesitan visualizar y analizar datos en tiempo real. Incluye múltiples tipos de gráficos, tablas interactivas, widgets personalizables, exportación de reportes, y sistema de alertas para métricas importantes.",
    image: "/business-analytics-dashboard.png",
    category: "Business",
    features: [
      "Gráficos interactivos avanzados",
      "Tablas de datos con filtros",
      "Widgets personalizables",
      "Exportación a PDF y Excel",
      "Sistema de alertas automáticas",
      "Múltiples vistas y paneles",
      "Integración con APIs",
      "Actualizaciones en tiempo real",
    ],
  },
  {
    id: 3,
    title: "Landing Page SaaS",
    description: "Página de aterrizaje moderna para productos SaaS con secciones de precios y características.",
    fullDescription:
      "Landing page optimizada para conversión diseñada específicamente para productos SaaS. Incluye secciones de hero impactante, características destacadas, planes de precios, testimonios de clientes, FAQ, y formularios de captura de leads integrados con tu CRM favorito.",
    image: "/saas-landing-page.png",
    category: "Marketing",
    features: [
      "Hero section con CTA destacado",
      "Sección de características visuales",
      "Planes de precios comparativos",
      "Testimonios de clientes",
      "FAQ interactivo",
      "Formularios de captura de leads",
      "Integración con CRM",
      "Optimizada para conversión",
    ],
  },
  {
    id: 4,
    title: "Blog Personal",
    description: "Sitio de blog minimalista con gestión de artículos, categorías y comentarios.",
    fullDescription:
      "Plataforma de blogging elegante y minimalista perfecta para escritores, creadores de contenido y profesionales. Incluye editor de texto enriquecido, sistema de categorías y etiquetas, comentarios moderados, búsqueda de artículos, y optimización SEO completa.",
    image: "/minimalist-blog-layout.png",
    category: "Content",
    features: [
      "Editor de texto enriquecido",
      "Sistema de categorías y etiquetas",
      "Comentarios moderados",
      "Búsqueda avanzada de artículos",
      "Newsletter integrado",
      "Compartir en redes sociales",
      "SEO optimizado",
      "Diseño minimalista y legible",
    ],
  },
  {
    id: 5,
    title: "Portfolio Creativo",
    description: "Portafolio profesional para diseñadores y creativos con galerías y proyectos destacados.",
    fullDescription:
      "Portfolio impactante diseñado para mostrar tu trabajo creativo de la mejor manera. Incluye galerías de imágenes optimizadas, páginas de proyectos detalladas, sección de sobre mí, formulario de contacto, y animaciones suaves que capturan la atención sin distraer del contenido.",
    image: "/creative-portfolio-showcase.png",
    category: "Portfolio",
    features: [
      "Galerías de imágenes optimizadas",
      "Páginas de proyectos detalladas",
      "Lightbox para imágenes",
      "Formulario de contacto",
      "Sección sobre mí",
      "Animaciones suaves",
      "Diseño visual impactante",
      "Carga rápida optimizada",
    ],
  },
  {
    id: 6,
    title: "App de Reservas",
    description: "Sistema de reservas y citas con calendario, notificaciones y gestión de clientes.",
    fullDescription:
      "Sistema completo de gestión de citas y reservas perfecto para negocios de servicios. Incluye calendario interactivo, recordatorios automáticos por email y SMS, gestión de clientes, historial de citas, pagos anticipados, y panel de administración para múltiples usuarios.",
    image: "/booking-appointment-app.jpg",
    category: "Business",
    features: [
      "Calendario interactivo",
      "Recordatorios automáticos",
      "Gestión de clientes",
      "Historial de citas",
      "Pagos anticipados",
      "Panel de administración",
      "Múltiples usuarios",
      "Integración con calendarios",
    ],
  },
  {
    id: 7,
    title: "Red Social",
    description: "Plataforma social con perfiles de usuario, publicaciones, likes y sistema de mensajería.",
    fullDescription:
      "Plataforma de red social completa con todas las funcionalidades que tus usuarios esperan. Incluye perfiles personalizables, feed de publicaciones, sistema de likes y comentarios, mensajería privada, notificaciones en tiempo real, y sistema de seguimiento de usuarios.",
    image: "/social-media-platform.png",
    category: "Social",
    features: [
      "Perfiles de usuario personalizables",
      "Feed de publicaciones",
      "Likes y comentarios",
      "Mensajería privada",
      "Notificaciones en tiempo real",
      "Sistema de seguimiento",
      "Compartir multimedia",
      "Moderación de contenido",
    ],
  },
  {
    id: 8,
    title: "Marketplace",
    description: "Mercado multi-vendedor con sistema de vendedores, productos y comisiones.",
    fullDescription:
      "Marketplace robusto que permite a múltiples vendedores listar sus productos. Incluye sistema de vendedores con dashboards individuales, gestión de comisiones automática, sistema de valoraciones, chat entre compradores y vendedores, y procesamiento de pagos seguros con división automática.",
    image: "/marketplace-vendor-platform.jpg",
    category: "E-commerce",
    features: [
      "Multi-vendedor",
      "Dashboards individuales",
      "Gestión de comisiones",
      "Sistema de valoraciones",
      "Chat integrado",
      "Pagos divididos automáticos",
      "Gestión de disputas",
      "Reportes de ventas",
    ],
  },
  {
    id: 9,
    title: "LMS Educativo",
    description: "Sistema de gestión de aprendizaje con cursos, lecciones, evaluaciones y certificados.",
    fullDescription:
      "Plataforma educativa completa para crear y vender cursos online. Incluye creación de cursos con lecciones multimedia, evaluaciones y quizzes, seguimiento de progreso de estudiantes, emisión de certificados, foros de discusión, y sistema de calificaciones.",
    image: "/elearning-platform-courses.jpg",
    category: "Education",
    features: [
      "Creación de cursos multimedia",
      "Evaluaciones y quizzes",
      "Seguimiento de progreso",
      "Emisión de certificados",
      "Foros de discusión",
      "Sistema de calificaciones",
      "Contenido descargable",
      "Gamificación opcional",
    ],
  },
]

export default async function TemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const template = templates.find((t) => t.id === Number.parseInt(id))

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
            <Link href="/login" className="hidden text-sm font-medium text-gray-600 hover:text-[#1a202c] md:block">
              Iniciar Sesión
            </Link>
            <button className="neu-btn px-6 py-2.5 text-sm font-bold">Comenzar</button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Link
            href="/plantillas"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0891b2] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a plantillas
          </Link>
        </div>

        {/* Template Hero */}
        <section className="py-12 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block neu-flat px-4 py-2 rounded-full mb-6">
                    <span className="text-sm font-bold text-[#0891b2]">{template.category}</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black mb-6 text-balance leading-tight">{template.title}</h1>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{template.fullDescription}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="neu-btn-primary px-8 py-4 text-base font-bold flex items-center justify-center gap-2">
                      <Rocket className="h-5 w-5" />
                      Usar Plantilla
                    </button>
                    <button className="neu-btn px-8 py-4 text-base font-bold flex items-center justify-center gap-2">
                      <Eye className="h-5 w-5" />
                      Vista Previa
                    </button>
                  </div>
                </div>
                <div className="neu-flat rounded-2xl overflow-hidden">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-6 bg-[#d1d9e0]">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Características Incluidas</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {template.features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="neu-flat rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-3">
                      <div className="neu-flat rounded-lg p-2 mt-1">
                        <div className="h-2 w-2 rounded-full bg-[#0891b2]"></div>
                      </div>
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

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
                <button className="neu-btn-primary px-8 py-4 text-base font-bold hover:shadow-xl transition-all inline-flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Comenzar Ahora
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                  <Link href="/politica-privacidad" className="hover:text-[#0891b2] transition-colors">
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
