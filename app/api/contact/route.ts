import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import DOMPurify from 'isomorphic-dompurify'

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] }).trim()
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, service } = await request.json()

    // Validate required fields
    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const cleanName = sanitizeInput(name)
    const cleanEmail = email.trim().toLowerCase()
    const cleanMessage = sanitizeInput(message)
    const cleanService = sanitizeInput(service)

    // Validate email format
    if (!validateEmail(cleanEmail)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    // Validate input lengths
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

    // Validate service
    const allowedServices = ['CV', 'PFE', 'Services Web', 'Contact général']
    if (!allowedServices.includes(cleanService)) {
      return NextResponse.json(
        { error: 'Service invalide' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content with sanitized data
    const mailOptions = {
      from: process.env.EMAIL_USER,
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
        <p><small>Cet email a été envoyé depuis le formulaire de contact du site web.</small></p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Message envoyé avec succès' })
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}