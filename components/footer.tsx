import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300/50 bg-[#e0e5ec] py-16">
        <div className="container container-xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logo-black.png" alt="Lofty Apps" className="w-40 max-w-[35%] h-auto m-0 p-0" />
              </div>
              <p className="text-sm text-gray-600 max-w-xs leading-relaxed mb-6">
                La plataforma completa para construir aplicaciones web sin
                código. Empoderando creadores en todo el mundo.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/loftyappslatam/"
                  className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100092092552915&locale=es_LA"
                  className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/lofty-apps"
                  className="neu-icon-box h-10 w-10 text-gray-600 hover:text-[#0891b2] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@loftyapps1494"
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
                    href="/terminos-y-condiciones"
                    className="hover:text-[#0891b2] transition-colors"
                  >
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politicas-de-privacidad"
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
  );
}
