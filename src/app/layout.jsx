"use client"
import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'catalogo de produtos',
  description: 'catálogo de produtos variados',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
