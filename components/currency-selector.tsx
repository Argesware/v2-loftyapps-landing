"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export type Currency = "HNL" | "USD"

interface CurrencySelectorProps {
  onCurrencyChange?: (currency: Currency) => void
  defaultCurrency?: Currency
}

export default function CurrencySelector({ onCurrencyChange, defaultCurrency = "USD" }: CurrencySelectorProps) {
  const [currency, setCurrency] = useState<Currency>(defaultCurrency)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load saved currency from localStorage
    const savedCurrency = localStorage.getItem("lofty-currency") as Currency
    if (savedCurrency) {
      setCurrency(savedCurrency)
      onCurrencyChange?.(savedCurrency)
    }
  }, [])

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency)
    localStorage.setItem("lofty-currency", newCurrency)
    onCurrencyChange?.(newCurrency)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="neu-btn px-4 py-2 text-sm font-medium flex items-center gap-2"
      >
        {currency}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-32 neu-flat rounded-lg overflow-hidden z-50">
            <button
              onClick={() => handleCurrencyChange("USD")}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-200/50 transition-colors ${
                currency === "USD" ? "text-[#0891b2] font-bold" : "text-gray-600"
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => handleCurrencyChange("HNL")}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-200/50 transition-colors ${
                currency === "HNL" ? "text-[#0891b2] font-bold" : "text-gray-600"
              }`}
            >
              HNL (L)
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// Hook to use currency in components
export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>("USD")

  useEffect(() => {
    const savedCurrency = localStorage.getItem("lofty-currency") as Currency
    if (savedCurrency) {
      setCurrency(savedCurrency)
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "lofty-currency" && e.newValue) {
        setCurrency(e.newValue as Currency)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  return currency
}
