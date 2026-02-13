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

  function redirectTo() {
    window.open('https://platform.loftyapps.com', "_blank");
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#e0e5ec] text-[#2c3e50]">
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
        <section className="py-12 md:py-20" id="lofty-price-section">
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

                  <button
                    className="neu-btn w-full py-3 font-bold mb-8"
                    onClick={() => redirectTo()}
                  >
                    Comenzar Gratis
                  </button>

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

                  <button
                    className="neu-btn-primary w-full py-3 font-bold mb-8 flex items-center justify-center gap-2"
                    onClick={() => redirectTo()}
                  >
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

                  <button
                    className="neu-btn w-full py-3 font-bold mb-8"
                    onClick={() => redirectTo()}
                  >
                    Comenzar Ahora
                  </button>

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

                  <button
                    className="neu-btn w-full py-3 font-bold mb-8"
                    onClick={() => redirectTo()}
                  >
                    Comenzar Ahora
                  </button>

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
                  <button
                    className="neu-btn-primary h-14 px-10 text-lg font-bold w-full sm:w-auto flex items-center justify-center gap-2"
                    onClick={() => redirectTo()} 
                  >
                    Comenzar Gratis <ArrowRight className="h-5 w-5" />
                  </button>
                  <button
                    className="neu-btn h-14 px-10 text-lg font-medium w-full sm:w-auto"
                    onClick={() => window.location.href="#lofty-price-section"}
                  >
                    Comparar Planes
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  )
}
