import './globals.css'
import { ReactNode } from 'react'
import { Archivo } from 'next/font/google'

const archivo = Archivo({
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'WatchGather',
  description: 'Escolha filmes para assistir com amigos e votem juntos!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="br">
      <body className={`${archivo.className}`}>{children}</body>
    </html>
  )
}
