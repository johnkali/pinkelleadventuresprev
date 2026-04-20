import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function WhatsAppFloat() {
  return (
    <a
      href=""
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
      aria-label="Chat on WhatsApp">
      <MessageCircle className="h-6 w-6"/>
    </a>
  )
}