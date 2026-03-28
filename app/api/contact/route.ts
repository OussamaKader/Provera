import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim()
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, service } = await request.json()

    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    const cleanName = sanitizeInput(name)
    const cleanEmail = email.trim().toLowerCase()
    const cleanMessage = sanitizeInput(message)
    const cleanService = sanitizeInput(service)

    if (!validateEmail(cleanEmail)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    if (cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { error: 'Le nom doit contenir entre 2 et 100 caractères' },
        { status: 400 }
      )
    }

    if (cleanMessage.length < 10 || cleanMessage.length > 5000) {
      return NextResponse.json(
        { error: 'Le message doit contenir entre 10 et 5000 caractères' },
        { status: 400 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const emailResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'oussamamedlemine167@gmail.com',
      subject: `Nouvelle demande: ${cleanService}`,
      html: `
        <h2>Nouvelle demande de service</h2>
        <p><strong>Nom:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Service demandé:</strong> ${cleanService}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Envoyé depuis le formulaire de contact de provera.one</small></p>
      `,
    })

    if (emailResponse.error) {
      console.error('Erreur Resend:', emailResponse.error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Message envoyé avec succès' })
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}