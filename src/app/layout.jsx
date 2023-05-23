export const metadata = {
  title: 'Ecommerce com sanity e next',
  description: 'site ecommerce para exibição de produtos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body>{children}</body>
    </html>
  )
}
