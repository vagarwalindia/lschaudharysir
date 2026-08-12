"use client";

import { MessageCircle } from "lucide-react";

/**
 * Fixed floating action button for direct WhatsApp contact.
 * Replace the phone number in the href with the real business WhatsApp number.
 */
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20VetVentures%2C%20I'd%20like%20to%20know%20more!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle size={26} fill="white" className="text-green-600" />
    </a>
  );
}
