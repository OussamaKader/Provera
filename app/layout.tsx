import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Provera - Services Digitaux Professionnels',
    template: '%s | Provera'
  },
  description: 'Services digitaux professionnels : création de CV, projets PFE, développement web et mobile. Solutions sur mesure pour étudiants et professionnels.',
  keywords: ['CV', 'PFE', 'services web', 'développement', 'Maroc', 'étudiants', 'professionnels'],
  authors: [{ name: 'Provera' }],
  creator: 'Provera',
  publisher: 'Provera',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.provera.one/'),
  alternates: {
    canonical: '/',
  },

  // ✅ Favicon uniquement
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },

  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://www.provera.one/',
    title: 'Provera - Services Digitaux Professionnels',
    description: 'Services digitaux professionnels : création de CV, projets PFE, développement web et mobile.',
    siteName: 'Provera',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Provera - Services Digitaux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Provera - Services Digitaux Professionnels',
    description: 'Services digitaux professionnels : création de CV, projets PFE, développement web et mobile.',
    images: ['/og-image.jpg'],
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
    google: 'votre-code-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}