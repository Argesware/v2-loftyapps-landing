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
    </div>
  )
}
