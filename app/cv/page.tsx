'use client'

import FormComponent, { ContactFormData } from '../components/FormComponent'



export default function CV() {
  const handleSubmit = async (data: ContactFormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        service: 'CV',
      }),
    })

    if (!response.ok) {
      throw new Error('Erreur lors de l’envoi')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Création de CV
                <span className="block text-blue-200">Professionnel</span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                CV modernes, optimisés pour les ATS, adaptés à votre profil professionnel.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-8">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                  <svg className="w-20 h-20 sm:w-24 sm:h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Notre Service CV
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nous créons des CV professionnels qui mettent en valeur vos compétences et expériences.
                Nos CV sont conçus pour passer les filtres ATS des recruteurs et attirer l&apos;attention.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Design moderne et professionnel</h3>
                    <p className="text-gray-600">Templates élégants et contemporains</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Optimisé pour les ATS</h3>
                    <p className="text-gray-600">Compatible avec tous les systèmes de recrutement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Personnalisé selon votre profil</h3>
                    <p className="text-gray-600">Adapté à votre secteur et expérience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Formats PDF et Word</h3>
                    <p className="text-gray-600">Livraison dans tous les formats demandés</p>
                  </div>
                </div>
              </div>
            </div>
           {/* RIGHT FORM */}
          <FormComponent
            title="Commander un CV"
            services={[
              'CV Standard',
              'CV Créatif',
              'CV Technique',
              'CV Académique'
            ]}
            buttonColor="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            onSubmit={handleSubmit}
          />
          </div>
        </div>
      </section>

      
    </div>
  )
}