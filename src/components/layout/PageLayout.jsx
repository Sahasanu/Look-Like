import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CONTACT_INFO } from '../../constants/navigation';
import { WhatsAppIcon } from '../icons';
import { Sliders } from 'lucide-react';

export function PageLayout({ 
  children, 
  currentPage = 'home', 
  onNavigate, 
  onNotify, 
  onOpenBooking,
  onOpenManagement
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-on-surface overflow-x-clip">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={onNavigate} 
        onOpenBooking={onOpenBooking} 
        onOpenManagement={onOpenManagement}
      />
      <main className="w-full pt-16 sm:pt-18 bg-white flex-grow min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)]">
        {children}
      </main>
      <Footer 
        onNotify={onNotify} 
        onNavigate={onNavigate} 
        onOpenManagement={onOpenManagement}
      />

      {/* Floating Discreet Management Panel Trigger */}
      {onOpenManagement && (
        <aside aria-label="Management Panel Quick Access" className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40">
          <button
            type="button"
            onClick={onOpenManagement}
            title="Open Content Management (Lookbook & Partners)"
            className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-deep-espresso hover:text-[#D6204E] border border-border-warm/90 px-3 py-2 sm:py-2.5 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 text-xs font-semibold cursor-pointer group select-none"
          >
            <Sliders className="w-3.5 h-3.5 text-[#D6204E] group-hover:rotate-45 transition-transform duration-300" />
            <span className="hidden xs:inline">Manage</span>
          </button>
        </aside>
      )}

      {/* Floating Persistent WhatsApp Concierge Button */}
      <aside aria-label="Quick WhatsApp Concierge" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
        <a
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center bg-whatsapp-green text-ivory-cream p-3 sm:p-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
          href={`https://wa.me/${CONTACT_INFO.defaultWhatsApp}?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Look%20%26%20Like.`}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>
      </aside>
    </div>
  );
}
