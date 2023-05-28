"use client"
import { Navbar } from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'catalogo de produtos',
  description: 'catálogo de produtos variados',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
