import Link from 'next/link'
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">Provera</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Des services digitaux professionnels pour étudiants et entreprises.
              CV, rapports PFE, développement web et mobile.
            </p>
            <div className="flex space-x-4 text-gray-400 text-xl">

              <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">
                <FaLinkedin />
              </a>

              <a href="https://wa.me/22247185763" target="_blank" className="hover:text-white transition-colors">
                <FaWhatsapp />
              </a>

              <a href="https://x.com/abdelkaderous?s=21" target="_blank" className="hover:text-white transition-colors">
                <FaXTwitter />
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cv" className="text-gray-300 hover:text-white transition-colors">
                  Création de CV
                </Link>
              </li>
              <li>
                <Link href="/pfe" className="text-gray-300 hover:text-white transition-colors">
                  Rapports PFE
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services IT
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Aide</a></li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors" >
                  Contact
                </Link>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Statut</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Plateforme de Services. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Conditions</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}