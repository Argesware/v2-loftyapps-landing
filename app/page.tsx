"use client";

import Link from "next/link";
import CurrencySelector from "@/components/currency-selector";

import {
  Play,
  Zap,
  Code2,
  Building2,
  Users,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/scroll-reveal";

export default function LandingPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      console.log("[v0] Generando producto digital con prompt:", prompt);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#e0e5ec] text-[#2c3e50] selection:bg-[#0891b2]/20 selection:text-[#164e63]">
      <style jsx>{`
        @media (min-width: 1200px) {
          .container-xl {
            width: 90% !important;
            max-width: 90% !important;
          }
          .textarea-xl {
            width: 75% !important;
            max-width: 75% !important;
          }
          .cta-xl {
            width: 80% !important;
            max-width: 80% !important;
          }
        }
        /* Fix logic flow text overflow between 768px and 1023px */
        @media (min-width: 768px) and (max-width: 1023px) {
          .logic-flow-break {
            white-space: pre-line !important;
            word-break: break-word !important;
            font-size: 0.95rem !important;
          }
        }
      `}</style>
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0891b2]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container container-xl relative mx-auto px-4 text-center md:px-6">
            <ScrollReveal direction="fade" delay={0}>
              <div className="inline-flex items-center neu-pressed px-4 py-2 text-sm text-gray-600 mb-8 rounded-full">
                <span className="flex h-2 w-2 rounded-full bg-[#0891b2] mr-3 shadow-[0_0_10px_#0891b2]"></span>
                Lofty Apps 2.0 ya está disponible
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-[#1a202c] pb-4 drop-shadow-lg">
                Crea software <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c3e50] to-gray-500">
                  sin escribir código.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl leading-relaxed">
                La plataforma completa para construir, lanzar y escalar tus
                aplicaciones. Deja de configurar infraestructura y comienza a
                innovar con Lofty.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="mx-auto mt-12 max-w-3xl textarea-xl">
                <div className="neu-flat rounded-2xl p-2">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe tu producto digital... ej: Una app de recetas con filtros por ingredientes y sistema de favoritos"
                    className="w-full neu-pressed px-6 py-4 rounded-xl text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0891b2] transition-all text-base resize-none min-h-[120px]"
                    disabled={isGenerating}
                    rows={4}
                  />
                  <button
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || isGenerating}
                    className="neu-btn-primary px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full mt-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Generando...
                      </>
                    ) : (
                      <>
                        <Zap className="h-5 w-5" />
                        Crear Ahora
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Prueba gratis, sin tarjeta de crédito. Crea tu primer producto
                  digital en segundos.
                </p>
              </div>
            </ScrollReveal>

            {/* Features Grid */}
            <section id="features" className="py-24 md:py-32 bg-[#e0e5ec]">
              <div className="container container-xl mx-auto px-4 md:px-6">
                <ScrollReveal direction="up" delay={0}>
                  <div className="mb-20 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-[#1a202c] md:text-5xl mb-6">
                      Todo lo que necesitas para construir.
                    </h2>
                    <p className="text-lg text-gray-600">
                      Lofty Apps te ofrece los bloques de construcción para
                      crear aplicaciones poderosas sin escribir una sola línea
                      de código.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Feature 1 */}
                  <ScrollReveal
                    direction="up"
                    delay={0}
                    className="md:col-span-2"
                  >
                    <div className="neu-flat p-8 group transition-transform hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                          <div className="neu-icon-box h-14 w-14 text-blue-500 mb-6 rounded-2xl">
                            <Building2 className="h-7 w-7" />
                          </div>
                          <h3 className="text-2xl font-bold text-[#1a202c] mb-3">
                            Constructor Visual
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Arrastra y suelta componentes para construir tu
                            interfaz. Lo que ves es exactamente lo que obtienes.
                            Responsivo por defecto.
                          </p>
                        </div>
                        <div className="flex-1 w-full">
                          <div className="neu-pressed h-48 w-full rounded-xl p-4 relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />
                            <div className="relative z-10 grid grid-cols-2 gap-3">
                              <div className="neu-flat-sm h-12 w-full" />
                              <div className="neu-flat-sm h-12 w-full" />
                              <div className="neu-flat-sm h-20 w-full col-span-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Feature 2 */}
                  <ScrollReveal direction="up" delay={100}>
                    <div className="neu-flat p-8 group transition-transform hover:-translate-y-1">
                      <div className="neu-icon-box h-14 w-14 text-purple-500 mb-6 rounded-2xl">
                        <Play className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1a202c] mb-3">
                        Despliegue Instantáneo
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-8">
                        Publica a producción en segundos. CDN global, SSL y
                        escalado manejados automáticamente.
                      </p>
                      <div className="flex justify-center">
                        <div className="neu-pressed h-24 w-24 rounded-full flex items-center justify-center relative">
                          <div className="absolute inset-0 rounded-full border-t-2 border-purple-500 animate-spin" />
                          <span className="font-mono text-purple-500 font-bold">
                            0.2s
                          </span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Feature 3 */}
                  <ScrollReveal direction="up" delay={200}>
                    <div className="neu-flat p-8 group transition-transform hover:-translate-y-1">
                      <div className="neu-icon-box h-14 w-14 text-pink-500 mb-6 rounded-2xl">
                        <Code2 className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1a202c] mb-3">
                        Flujos de Lógica
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Construye lógica compleja visualmente. Conecta acciones,
                        disparadores y bases de datos con facilidad.
                      </p>
                        <div className="mt-8 neu-pressed p-4 rounded-xl">
                          <div className="flex flex-col logic-flow-break text-xs font-mono">
                            <span className="flex items-center gap-2 text-pink-500">
                              <div className="h-2 w-2 rounded-full bg-pink-500" />
                              si (usuario.conectado)
                            </span>
                            <div className="ml-4 mt-2 h-px w-4 bg-gray-400" />
                            <span className="flex items-center gap-2 text-green-500 mt-1 ml-8">
                              <div className="h-2 w-2 rounded-full bg-green-500" />
                              redirigir('/panel')
                            </span>
                          </div>
                        </div>
                    </div>
                  </ScrollReveal>

                  {/* Feature 4 */}
                  <ScrollReveal
                    direction="up"
                    delay={300}
                    className="md:col-span-2"
                  >
                    <div className="neu-flat p-8 group transition-transform hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                        <div className="flex-1">
                          <div className="neu-icon-box h-10 w-10 text-emerald-500 mb-6 rounded-2xl">
                            <Users className="h-7 w-7" />
                          </div>
                          <h3 className="text-2xl font-bold text-[#1a202c] mb-3">
                            Base de Datos Global
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Base de datos integrada en tiempo real que escala
                            con tus usuarios. No requiere conocimientos de SQL.
                          </p>
                        </div>
                        <div className="flex-1 w-full">
                          <div className="neu-pressed h-48 w-full rounded-xl p-4 flex flex-col gap-3 justify-center">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="neu-flat-sm h-10 w-full flex items-center px-4 gap-3"
                              >
                                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                <div className="h-2 w-20 bg-gray-400 rounded-full" />
                                <div className="h-2 w-10 bg-gray-500 rounded-full ml-auto" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
              <div className="container container-xl relative mx-auto px-4 text-center md:px-6">
                <ScrollReveal direction="up" delay={0}>
                  <div className="neu-flat p-12 md:p-20 max-w-5xl mx-auto relative overflow-hidden cta-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0891b2]/10 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-[#1a202c] md:text-5xl mb-6 relative z-10">
                      ¿Listo para construir tu próxima gran idea?
                    </h2>
                    <p className="mx-auto max-w-xl text-lg text-gray-600 mb-10 relative z-10">
                      Únete a miles de creadores que están construyendo el
                      futuro con Lofty Apps. No requiere tarjeta de crédito.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row relative z-10">
                      <button className="neu-btn-primary h-14 px-10 text-lg font-bold w-full sm:w-auto">
                        Comienza a Construir Ahora
                      </button>
                      <button className="neu-btn h-14 px-10 text-lg font-medium w-full sm:w-auto">
                        Contacta Ventas
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 bg-[#e0e5ec]">
          <div className="container container-xl mx-auto px-4 md:px-6">
            <ScrollReveal direction="fade" delay={0}>
              <p className="text-center text-sm font-bold tracking-widest text-gray-500 mb-10">
                CONFIADO POR EQUIPOS INNOVADORES
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-30 grayscale">
                <div className="text-2xl font-black text-[#2c3e50]">ACME</div>
                <div className="text-2xl font-black text-[#2c3e50]">
                  GlobalBank
                </div>
                <div className="text-2xl font-black text-[#2c3e50]">Nebula</div>
                <div className="text-2xl font-black text-[#2c3e50]">Vertex</div>
                <div className="text-2xl font-black text-[#2c3e50]">
                  Horizon
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300/50 bg-[#e0e5ec] py-16">
        <div className="container container-xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/images/logo-black.png"
                  alt="Lofty Apps"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-gray-600 max-w-xs leading-relaxed mb-6">
                La plataforma completa para construir aplicaciones web sin
                código. Empoderando creadores en todo el mundo.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a202c] mb-6 uppercase tracking-wider">
                Producto
              </h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <Link
                    href="/documentacion"
                    className="hover:text-[#0891b2] transition-colors"
                  >
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plantillas"
                    className="hover:text-[#0891b2] transition-colors"
                  >
                    Plantillas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#0891b2] transition-colors"
                  >
                    Integraciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/precios"
                    className="hover:text-[#0891b2] transition-colors"
                  >
                    Precios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a202c] mb-6 uppercase tracking-wider">
                Compañía
              </h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-[#0891b2] transition-colors"
                  >
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#0891b2] transition-colors"
                  >
                    Políticas de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-300/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © 2025 Lofty Apps Inc. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
