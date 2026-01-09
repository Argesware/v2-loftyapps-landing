"use client"

import Link from "next/link"
import { Check, X, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import CurrencySelector, { useCurrency } from "@/components/currency-selector"

const pricingData = {
  gratuito: {
    name: "Gratuito",
    description: "Perfecto para comenzar",
    priceUSD: 0,
    priceHNL: 0,
    features: [
      { text: "3 colaboradores para administrar el producto digital", included: true },
      { text: "500 MB para almacenamiento de imágenes o videos", included: true },
      { text: "Ambiente para realizar pruebas", included: true },
      { text: "Ambiente de producción", included: false },
      { text: "Dominio personalizado", included: false },
    ],
  },
  intro: {
    name: "Intro",
    description: "Para proyectos en crecimiento",
    priceUSD: 150,
    priceHNL: 3950,
    popular: true,
    features: [
      { text: "5 colaboradores", included: true },
      { text: "1 GB de almacenamiento de imágenes o videos", included: true },
      { text: "Ambiente para realizar pruebas", included: true },
      { text: "Ambiente de producción", included: true },
      { text: "5 GB de almacenamiento de datos en producción", included: true },
      { text: "Poder asignar un dominio propio", included: true },
    ],
  },
  medio: {
    name: "Medio",
    description: "Para proyectos profesionales",
    priceUSD: 420,
    priceHNL: 10550,
    features: [
      { text: "10 colaboradores", included: true },
      { text: "2 GB de almacenamiento de imágenes o videos", included: true },
      { text: "Ambiente para realizar pruebas", included: true },
      { text: "Ambiente de producción", included: true },
      { text: "15 GB de almacenamiento de datos en producción", included: true },
      { text: "Poder asignar un dominio propio", included: true },
    ],
  },
  avanzado: {
    name: "Avanzado",
    description: "Para equipos grandes",
    priceUSD: 950,
    priceHNL: 23850,
    features: [
      { text: "20 colaboradores", included: true },
      { text: "4 GB de almacenamiento de imágenes o videos", included: true },
      { text: "Ambiente para realizar pruebas", included: true },
      { text: "Ambiente de producción", included: true },
      { text: "30 GB de almacenamiento de datos en producción", included: true },
      { text: "Poder asignar un dominio propio", included: true },
    ],
  },
}

export default function PreciosPage() {
  const currency = useCurrency()

  const formatPrice = (priceUSD: number, priceHNL: number) => {
    if (currency === "HNL") {
      return `L ${priceHNL.toLocaleString()}`
    }
    return `$${priceUSD}`
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
            <Link href="/plantillas" className="hover:text-[#0891b2] transition-colors">
              Plantillas
            </Link>
            <Link href="/precios" className="text-[#0891b2]">
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
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0891b2]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative mx-auto px-4 text-center md:px-6">
            <ScrollReveal direction="up" delay={100}>
              <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl text-[#1a202c] pb-4 drop-shadow-lg">
                Planes simples,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c3e50] to-gray-500">
                  precios transparentes.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl leading-relaxed">
                Elige el plan perfecto para tu proyecto. Cambia o cancela en cualquier momento.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Free Plan */}
              <ScrollReveal direction="up" delay={0}>
                <div className="neu-flat p-8 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#1a202c] mb-2">{pricingData.gratuito.name}</h3>
                    <p className="text-gray-600 text-sm">{pricingData.gratuito.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-[#1a202c]">
                        {formatPrice(pricingData.gratuito.priceUSD, pricingData.gratuito.priceHNL)}
                      </span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                  </div>

                  <button className="neu-btn w-full py-3 font-bold mb-8">Comenzar Gratis</button>

                  <div className="space-y-4 flex-1">
                    {pricingData.gratuito.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`${
                            feature.included ? "neu-icon-box text-[#0891b2]" : "neu-pressed"
                          } h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          {feature.included ? <Check className="h-4 w-4" /> : <X className="h-4 w-4 text-gray-400" />}
                        </div>
                        <span className={`text-sm ${feature.included ? "text-gray-600" : "text-gray-400"}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Pro Plan - Popular */}
              <ScrollReveal direction="up" delay={100}>
                <div className="neu-flat p-8 flex flex-col h-full relative border-2 border-[#0891b2]/20">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="neu-btn-primary px-6 py-1 text-sm font-bold">Más Popular</div>
                  </div>

                  <div className="mb-8 mt-4">
                    <h3 className="text-2xl font-bold text-[#1a202c] mb-2">{pricingData.intro.name}</h3>
                    <p className="text-gray-600 text-sm">{pricingData.intro.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-[#1a202c]">
                        {formatPrice(pricingData.intro.priceUSD, pricingData.intro.priceHNL)}
                      </span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Facturado mensualmente</p>
                  </div>

                  <button className="neu-btn-primary w-full py-3 font-bold mb-8 flex items-center justify-center gap-2">
                    Comenzar Ahora <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="space-y-4 flex-1">
                    {pricingData.intro.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="neu-icon-box h-6 w-6 rounded-full text-[#0891b2] flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-gray-600">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Medio Plan */}
              <ScrollReveal direction="up" delay={200}>
                <div className="neu-flat p-8 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#1a202c] mb-2">{pricingData.medio.name}</h3>
                    <p className="text-gray-600 text-sm">{pricingData.medio.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-[#1a202c]">
                        {formatPrice(pricingData.medio.priceUSD, pricingData.medio.priceHNL)}
                      </span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Facturado mensualmente</p>
                  </div>

                  <button className="neu-btn w-full py-3 font-bold mb-8">Comenzar Ahora</button>

                  <div className="space-y-4 flex-1">
                    {pricingData.medio.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="neu-icon-box h-6 w-6 rounded-full text-[#0891b2] flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-gray-600">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Avanzado Plan */}
              <ScrollReveal direction="up" delay={300}>
                <div className="neu-flat p-8 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#1a202c] mb-2">{pricingData.avanzado.name}</h3>
                    <p className="text-gray-600 text-sm">{pricingData.avanzado.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-[#1a202c]">
                        {formatPrice(pricingData.avanzado.priceUSD, pricingData.avanzado.priceHNL)}
                      </span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Facturado mensualmente</p>
                  </div>

                  <button className="neu-btn w-full py-3 font-bold mb-8">Comenzar Ahora</button>

                  <div className="space-y-4 flex-1">
                    {pricingData.avanzado.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="neu-icon-box h-6 w-6 rounded-full text-[#0891b2] flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-gray-600">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <ScrollReveal direction="up" delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-[#1a202c] md:text-5xl mb-6">
                  Preguntas Frecuentes
                </h2>
                <p className="text-lg text-gray-600">
                  ¿Tienes dudas? Aquí están las respuestas a las preguntas más comunes.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal direction="up" delay={0}>
                <div className="neu-flat p-6">
                  <h3 className="text-lg font-bold text-[#1a202c] mb-3">
                    ¿Puedo cambiar de plan en cualquier momento?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplican inmediatamente
                    y se ajusta el cobro proporcionalmente.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <div className="neu-flat p-6">
                  <h3 className="text-lg font-bold text-[#1a202c] mb-3">¿Qué métodos de pago aceptan?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aceptamos todas las tarjetas de crédito principales (Visa, Mastercard, American Express) y PayPal.
                    Los planes empresariales pueden pagar por factura.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <div className="neu-flat p-6">
                  <h3 className="text-lg font-bold text-[#1a202c] mb-3">¿Hay algún costo oculto?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No, todos nuestros precios son transparentes. El precio que ves es el precio que pagas. Sin cargos
                    adicionales ni sorpresas.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="neu-flat p-6">
                  <h3 className="text-lg font-bold text-[#1a202c] mb-3">
                    ¿Ofrecen descuentos para estudiantes o ONGs?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sí, ofrecemos descuentos especiales para estudiantes, educadores y organizaciones sin fines de
                    lucro. Contáctanos para más información.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container relative mx-auto px-4 text-center md:px-6">
            <ScrollReveal direction="up" delay={0}>
              <div className="neu-flat p-12 md:p-20 max-w-5xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0891b2]/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

                <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-[#1a202c] md:text-5xl mb-6 relative z-10">
                  ¿Listo para comenzar?
                </h2>
                <p className="mx-auto max-w-xl text-lg text-gray-600 mb-10 relative z-10">
                  Únete a miles de creadores construyendo aplicaciones increíbles con Lofty Apps.
                </p>
                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row relative z-10">
                  <button className="neu-btn-primary h-14 px-10 text-lg font-bold w-full sm:w-auto flex items-center justify-center gap-2">
                    Comenzar Gratis <ArrowRight className="h-5 w-5" />
                  </button>
                  <button className="neu-btn h-14 px-10 text-lg font-medium w-full sm:w-auto">Comparar Planes</button>
                </div>
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.205.013-3.663.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.69-.073 4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
