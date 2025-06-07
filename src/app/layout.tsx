import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Foco Mágico - Produtividade Gamificada para TDAH',
  description: 'App de produtividade gamificado especialmente desenvolvido para crianças e adolescentes com TDAH',
  keywords: ['TDAH', 'produtividade', 'pomodoro', 'gamificação', 'crianças', 'adolescentes'],
  authors: [{ name: 'Foco Mágico Team' }],
  creator: 'Foco Mágico',
  publisher: 'Foco Mágico',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Foco Mágico - Produtividade Gamificada para TDAH',
    description: 'App de produtividade gamificado especialmente desenvolvido para crianças e adolescentes com TDAH',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'Foco Mágico',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foco Mágico - Produtividade Gamificada para TDAH',
    description: 'App de produtividade gamificado especialmente desenvolvido para crianças e adolescentes com TDAH',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}