"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import CurrencySelector from "@/components/currency-selector"
import { useState } from "react"

export default function HeaderNavbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 z-50 w-full bg-[#e0e5ec]/90 backdrop-blur-sm border-b border-gray-300/50">
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          .logo-tablet { width: 12% !important; max-width: 120px; }
          .nav-tablet { gap: 1rem !important; }
          .btn-tablet { padding-left: 1rem !important; padding-right: 1rem !important; }
          .right-section-tablet { gap: 0.5rem !important; }
        }
      `}</style>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center min-w-0 flex-shrink-0 logo-tablet" style={{width: '18%'}}>
          <img src="/images/logo-black.png" alt="Lofty Apps" className="w-full max-w-xs h-auto m-0 p-0" />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 nav-tablet">
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
        <div className="flex items-center gap-4 right-section-tablet">
          <CurrencySelector />
          <Link href="https://platform.loftyapps.com/" className="hidden text-sm font-medium text-gray-600 hover:text-[#1a202c] md:block">
            Iniciar Sesión
          </Link>
          <Link href="https://platform.loftyapps.com/">
            <button className="neu-btn px-6 py-2.5 text-sm font-bold btn-tablet">Comenzar</button>
          </Link>
          {/* Hamburger Icon moved here */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Abrir menú</span>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                // X icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#e0e5ec]/95 border-b border-gray-300/50 shadow-lg z-40">
          <nav className="flex flex-col gap-2 px-6 py-4 text-base font-medium text-gray-700">
            <Link
              href="/"
              className={`py-2 px-2 rounded hover:bg-[#0891b2]/10 transition-colors ${isActive('/') ? 'text-[#0891b2] font-semibold' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/documentacion"
              className={`py-2 px-2 rounded hover:bg-[#0891b2]/10 transition-colors ${isActive('/documentacion') ? 'text-[#0891b2] font-semibold' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Documentación
            </Link>
            <Link
              href="/plantillas"
              className={`py-2 px-2 rounded hover:bg-[#0891b2]/10 transition-colors ${isActive('/plantillas') ? 'text-[#0891b2] font-semibold' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Plantillas
            </Link>
            <Link
              href="/precios"
              className={`py-2 px-2 rounded hover:bg-[#0891b2]/10 transition-colors ${isActive('/precios') ? 'text-[#0891b2] font-semibold' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Precios
            </Link>
            <Link
              href="https://platform.loftyapps.com/"
              className="py-2 px-2 rounded hover:bg-[#0891b2]/10 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Iniciar Sesión
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
