import './globals.css'
import { ReactNode } from 'react'
import { Archivo } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import SideBar from '@/components/SideBar'

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
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body className={`${archivo.className}`}>
        <div>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
