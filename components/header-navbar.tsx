"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import CurrencySelector from "@/components/currency-selector"

export default function HeaderNavbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 z-50 w-full bg-[#e0e5ec]/90 backdrop-blur-sm border-b border-gray-300/50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo-black.png" alt="Lofty Apps" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link 
            href="/documentacion" 
            className={`hover:text-[#0891b2] transition-colors ${isActive('/documentacion') ? 'text-[#0891b2] font-semibold' : ''}`}
          >
            Documentación
          </Link>
          <Link 
            href="/plantillas" 
            className={`hover:text-[#0891b2] transition-colors ${isActive('/plantillas') ? 'text-[#0891b2] font-semibold' : ''}`}
          >
            Plantillas
          </Link>
          <Link 
            href="/precios" 
            className={`hover:text-[#0891b2] transition-colors ${isActive('/precios') ? 'text-[#0891b2] font-semibold' : ''}`}
          >
            Precios
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <CurrencySelector />
          <Link href="https://platform.loftyapps.com/" className="hidden text-sm font-medium text-gray-600 hover:text-[#1a202c] md:block">
            Iniciar Sesión
          </Link>
          <Link href="https://platform.loftyapps.com/">
            <button className="neu-btn px-6 py-2.5 text-sm font-bold">Comenzar</button>
          </Link>
        </div>
      </div>
    </header>
  )
}
