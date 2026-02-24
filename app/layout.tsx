import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import HeaderNavbar from '@/components/header-navbar'
import './globals.css'

import Footer from '@/components/footer';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'LoftyApps',
    template: '%s | LoftyApps'
  },
  description: 'Lofty Apps es una plataforma no-code que permite crear sitios web, tiendas en línea y aplicaciones web de forma rápida, profesional y sin necesidad de conocimientos técnicos.',
  keywords: ['plantillas', 'desarrollo web', 'herramientas', 'LoftyApps', 'templates', 'developer tools'],
  authors: [{ name: 'LoftyApps' }],
  creator: 'LoftyApps',
  publisher: 'LoftyApps',
  metadataBase: new URL('https://loftyapps.com'),
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '16x16 32x32',
        type: 'image/x-icon',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/favicon.ico',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'LoftyApps',
    title: 'LoftyApps',
    description: 'Lofty Apps es una plataforma no-code que permite crear sitios web, tiendas en línea y aplicaciones web de forma rápida, profesional y sin necesidad de conocimientos técnicos.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LoftyApps',
    description: 'Lofty Apps es una plataforma no-code que permite crear sitios web, tiendas en línea y aplicaciones web de forma rápida, profesional y sin necesidad de conocimientos técnicos.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <HeaderNavbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
