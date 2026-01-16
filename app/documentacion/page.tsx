"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Home, BookOpen, Code2, Layers, Zap, Globe, Shield, ChevronRight } from "lucide-react"
import CurrencySelector from "@/components/currency-selector"

const sections = [
  {
    id: "inicio",
    title: "Inicio",
    icon: Home,
    content: {
      title: "Bienvenido a Lofty Apps",
      description: "Tu plataforma no-code para crear aplicaciones web potentes sin escribir código.",
      subsections: [
        {
          subtitle: "¿Qué es Lofty Apps?",
          text: "Lofty Apps es una plataforma no-code que te permite crear aplicaciones web completas, sitios profesionales y dashboards interactivos sin necesidad de conocimientos de programación. Utilizando nuestro editor visual intuitivo, puedes arrastrar y soltar componentes, conectar bases de datos y publicar tu aplicación en minutos.",
        },
        {
          subtitle: "Características principales",
          text: "Editor visual de arrastrar y soltar, conexión con bases de datos en tiempo real, plantillas prediseñadas profesionales, integración con APIs externas, despliegue automático y hosting incluido, dominio personalizado y SSL, colaboración en tiempo real.",
        },
      ],
    },
  },
  {
    id: "primeros-pasos",
    title: "Primeros Pasos",
    icon: BookOpen,
    content: {
      title: "Comenzando con Lofty Apps",
      description: "Aprende los conceptos básicos para crear tu primera aplicación.",
      subsections: [
        {
          subtitle: "Crear tu primera aplicación",
          text: "1. Regístrate en Lofty Apps con tu correo electrónico.\n2. Haz clic en 'Nueva Aplicación' desde tu dashboard.\n3. Selecciona una plantilla o comienza desde cero.\n4. Arrastra componentes desde el panel lateral al lienzo.\n5. Personaliza los estilos y propiedades de cada componente.\n6. Haz clic en 'Vista Previa' para ver tu aplicación en acción.\n7. Cuando estés listo, haz clic en 'Publicar'.",
        },
        {
          subtitle: "El editor visual",
          text: "El editor de Lofty Apps está dividido en tres áreas principales: Panel de componentes (izquierda), Lienzo de diseño (centro), Panel de propiedades (derecha). Puedes arrastrar cualquier componente desde el panel izquierdo al lienzo central. Al seleccionar un componente, sus propiedades aparecerán en el panel derecho donde podrás personalizar colores, textos, tamaños y comportamientos.",
        },
      ],
    },
  },
  {
    id: "componentes",
    title: "Componentes",
    icon: Layers,
    content: {
      title: "Biblioteca de Componentes",
      description: "Explora todos los componentes disponibles en Lofty Apps.",
      subsections: [
        {
          subtitle: "Componentes básicos",
          text: "Texto: Párrafos, títulos y texto enriquecido.\nBotones: Botones con diferentes estilos y acciones.\nImágenes: Carga y muestra imágenes con opciones de ajuste.\nContenedores: Agrupa elementos con layouts flex o grid.\nFormas: Rectángulos, círculos y formas personalizadas.",
        },
        {
          subtitle: "Componentes de formulario",
          text: "Input de texto, área de texto, casillas de verificación, botones de radio, selectores desplegables, selector de fecha, carga de archivos, botón de envío. Todos los componentes de formulario incluyen validación integrada y manejo de errores.",
        },
        {
          subtitle: "Componentes de datos",
          text: "Tablas de datos con paginación y ordenamiento, listas dinámicas con repetidores, gráficos y visualizaciones, tarjetas de información, badges y etiquetas. Conecta estos componentes directamente a tu base de datos para mostrar información en tiempo real.",
        },
      ],
    },
  },
  {
    id: "bases-datos",
    title: "Bases de Datos",
    icon: Code2,
    content: {
      title: "Trabajando con Datos",
      description: "Conecta y gestiona bases de datos en tus aplicaciones.",
      subsections: [
        {
          subtitle: "Crear una tabla",
          text: "1. Ve a la sección 'Datos' en tu proyecto.\n2. Haz clic en 'Nueva Tabla'.\n3. Define el nombre y los campos de tu tabla.\n4. Elige el tipo de dato para cada campo (texto, número, fecha, etc.).\n5. Configura validaciones y valores predeterminados.\n6. Guarda tu tabla.",
        },
        {
          subtitle: "Conectar componentes a datos",
          text: "Selecciona un componente de datos en tu aplicación, en el panel de propiedades, busca la sección 'Fuente de Datos', elige la tabla que deseas conectar, mapea los campos de la tabla a las propiedades del componente, configura filtros y ordenamiento si es necesario. Los datos se actualizarán automáticamente en tiempo real.",
        },
        {
          subtitle: "Operaciones CRUD",
          text: "Crear: Usa formularios conectados para insertar nuevos registros.\nLeer: Muestra datos en tablas, listas o tarjetas.\nActualizar: Permite edición en línea o mediante formularios.\nEliminar: Configura botones con acciones de eliminación con confirmación.",
        },
      ],
    },
  },
  {
    id: "publicacion",
    title: "Publicación",
    icon: Globe,
    content: {
      title: "Publicar tu Aplicación",
      description: "Despliega tu aplicación y compártela con el mundo.",
      subsections: [
        {
          subtitle: "Publicar por primera vez",
          text: "1. Asegúrate de haber guardado todos los cambios.\n2. Haz clic en el botón 'Publicar' en la esquina superior derecha.\n3. Elige un subdominio único (ej: miapp.loftyapps.com).\n4. Revisa la configuración de SEO (título, descripción, imagen).\n5. Confirma la publicación.\n6. Tu aplicación estará disponible en segundos.",
        },
        {
          subtitle: "Dominios personalizados",
          text: "Para usar tu propio dominio: Ve a Configuración > Dominio personalizado, ingresa tu dominio (ej: www.miapp.com), copia los registros DNS proporcionados, configura estos registros en tu proveedor de dominio, espera la verificación (puede tardar hasta 48 horas), una vez verificado, tu aplicación estará disponible en tu dominio con SSL automático.",
        },
        {
          subtitle: "Actualizaciones",
          text: "Cuando realices cambios en tu aplicación, simplemente haz clic en 'Publicar' nuevamente. Las actualizaciones se despliegan instantáneamente sin tiempo de inactividad. Puedes ver el historial de versiones en la sección 'Despliegues'.",
        },
      ],
    },
  },
  {
    id: "integraciones",
    title: "Integraciones",
    icon: Zap,
    content: {
      title: "Conectar Servicios Externos",
      description: "Integra APIs y servicios de terceros en tus aplicaciones.",
      subsections: [
        {
          subtitle: "APIs REST",
          text: "Lofty Apps te permite conectar cualquier API REST: Ve a Configuración > Integraciones > Nueva API, ingresa la URL base de la API, configura la autenticación (API Key, Bearer Token, OAuth), guarda la conexión. Luego puedes usar esta API en tus componentes para obtener o enviar datos.",
        },
        {
          subtitle: "Integraciones preconstruidas",
          text: "Ofrecemos integraciones nativas con servicios populares: Stripe para pagos, SendGrid para emails, Twilio para SMS, Google Maps para mapas, Cloudinary para imágenes, Auth0 para autenticación. Activa estas integraciones con un solo clic desde el panel de integraciones.",
        },
        {
          subtitle: "Webhooks",
          text: "Configura webhooks para recibir notificaciones de eventos externos. Crea un endpoint de webhook en tu aplicación, copia la URL del webhook, configúralo en el servicio externo, procesa los datos recibidos usando flujos de trabajo.",
        },
      ],
    },
  },
  {
    id: "seguridad",
    title: "Seguridad",
    icon: Shield,
    content: {
      title: "Seguridad y Autenticación",
      description: "Protege tus aplicaciones con autenticación y permisos.",
      subsections: [
        {
          subtitle: "Autenticación de usuarios",
          text: "Lofty Apps incluye un sistema de autenticación integrado: Activa la autenticación en Configuración > Autenticación, elige los métodos: Email/Contraseña, Google, GitHub, Magic Links, agrega el componente 'Login Form' a tu aplicación, configura páginas protegidas que requieran autenticación, define roles y permisos de usuario.",
        },
        {
          subtitle: "Roles y permisos",
          text: "Define diferentes roles (Admin, Editor, Viewer) en Configuración > Roles. Asigna permisos específicos a cada rol (leer, escribir, eliminar). Configura reglas de acceso a nivel de tabla y campo. Protege componentes y páginas basándose en roles.",
        },
        {
          subtitle: "Seguridad de datos",
          text: "Todas las conexiones usan HTTPS/SSL por defecto. Los datos se cifran en tránsito y en reposo. Realiza copias de seguridad automáticas diarias. Implementa límites de tasa para prevenir abusos. Valida todas las entradas de usuario automáticamente.",
        },
      ],
    },
  },
]

export default function DocumentacionPage() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [searchQuery, setSearchQuery] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const currentSection = sections.find((s) => s.id === activeSection)

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col bg-[#e0e5ec] text-[#2c3e50]">
      {/* Main Content */}
      <div className="flex pt-20 min-h-screen">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-20 h-[calc(100vh-5rem)] w-72 border-r border-gray-300/50 bg-[#e0e5ec] overflow-y-auto transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-40`}
        >
          <div className="p-6 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar en la documentación..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm neu-pressed rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 bg-transparent text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {filteredSections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === section.id
                        ? "neu-flat text-[#0891b2]"
                        : "text-gray-600 hover:text-[#0891b2] hover:neu-flat"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {section.title}
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <main className={`flex-1 transition-all ${sidebarOpen ? "md:ml-72" : ""}`}>
          <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
            {currentSection && (
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/documentacion" className="hover:text-[#0891b2]">
                      Documentación
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-[#0891b2]">{currentSection.title}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c] text-balance">
                    {currentSection.content.title}
                  </h1>
                  <p className="text-lg text-gray-600 text-pretty">{currentSection.content.description}</p>
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                  {currentSection.content.subsections.map((subsection, index) => (
                    <div key={index} className="neu-flat p-8 rounded-2xl space-y-4">
                      <h2 className="text-2xl font-bold text-[#1a202c]">{subsection.subtitle}</h2>
                      <div className="prose prose-gray max-w-none">
                        {subsection.text.split("\n").map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-700 leading-relaxed mb-3">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Footer */}
                <div className="flex justify-between items-center pt-8 border-t border-gray-300/50">
                  {sections.findIndex((s) => s.id === activeSection) > 0 && (
                    <button
                      onClick={() =>
                        setActiveSection(sections[sections.findIndex((s) => s.id === activeSection) - 1].id)
                      }
                      className="neu-btn px-6 py-3 text-sm font-medium flex items-center gap-2 hover:text-[#0891b2]"
                    >
                      <ChevronRight className="h-4 w-4 rotate-180" />
                      Anterior
                    </button>
                  )}
                  {sections.findIndex((s) => s.id === activeSection) < sections.length - 1 && (
                    <button
                      onClick={() =>
                        setActiveSection(sections[sections.findIndex((s) => s.id === activeSection) + 1].id)
                      }
                      className="neu-btn px-6 py-3 text-sm font-medium flex items-center gap-2 hover:text-[#0891b2] ml-auto"
                    >
                      Siguiente
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225 1.664 4.771 4.919 4.919 1.266.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.874s-.644-1.874-1.439-1.874z" />
                  </svg>
                </Link>
                <Link href="#" className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="#" className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
                  <Link href="/privacy-politics" className="hover:text-[#0891b2] transition-colors">
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
