import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Velora - Services Digitaux Professionnels',
    template: '%s | Velora'
  },
  description: 'Services digitaux professionnels : création de CV, projets PFE, développement web et mobile. Solutions sur mesure pour étudiants et professionnels.',
  keywords: ['CV', 'PFE', 'services web', 'développement', 'Maroc', 'étudiants', 'professionnels'],
  authors: [{ name: 'Velora' }],
  creator: 'Velora',
  publisher: 'Velora',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://velora.ma'), // Remplacer par votre domaine
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://velora.ma',
    title: 'Velora - Services Digitaux Professionnels',
    description: 'Services digitaux professionnels : création de CV, projets PFE, développement web et mobile.',
    siteName: 'Velora',
    images: [
      {
        url: '/og-image.jpg', // Ajouter une image Open Graph
        width: 1200,
        height: 630,
        alt: 'Velora - Services Digitaux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velora - Services Digitaux Professionnels',
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
    google: 'votre-code-google-site-verification', // Ajouter votre code de vérification Google
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}