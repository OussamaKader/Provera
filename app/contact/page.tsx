'use client'

import FormComponent from '../components/FormComponent'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {

  const handleSubmit = async (data: { name: string; email: string; service: string; message: string }) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Erreur lors de l'envoi")
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Contactez-nous
                <span className="block text-indigo-200">Nous sommes là pour vous</span>
              </h1>
              <p className="text-lg sm:text-xl text-indigo-100 leading-relaxed">
                Une question ? Un projet ? N&apos;hésitez pas à nous contacter.
                Nous répondons sous 24h !
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-8">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                  <svg className="w-20 h-20 sm:w-24 sm:h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <FormComponent onSubmit={handleSubmit} />
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Informations de contact
            </h2>
            <p className="text-gray-600">
              Plusieurs moyens de nous joindre
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">oussamamedlemine167@gmail.com</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaWhatsapp className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>

              <a
                href="https://wa.me/22247185763"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition transform hover:scale-105"
              >
                +222 47 18 57 63
              </a>
            </div>

            {/* Adresse */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold mb-2">Adresse</h3>
              <p className="text-gray-600">Nouakchott, Mauritanie</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}