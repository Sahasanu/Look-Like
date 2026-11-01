import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { LOGO_URL, NAV_LINKS } from '../../constants/navigation';
import { MobileMenu } from './MobileMenu';

export function Navbar({ currentPage = 'home', onNavigate, onOpenBooking, onOpenManagement }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (link.page === 'services') {
      if (onNavigate) onNavigate('services');
    } else if (link.page === 'inspiration') {
      if (onNavigate) onNavigate('inspiration');
    } else {
      if (currentPage !== 'home' && onNavigate) {
        onNavigate('home');
      }
      if (link.href && link.href.startsWith('#') && link.href.length > 1) {
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookClick = (e) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(42,31,27,0.04)] border-b border-border-warm/60">
        <div className="py-3 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo Brand */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink min-w-0"
          >
            <img
              alt="Look & Like Logo"
              className="h-7 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
              src={LOGO_URL}
            />
            <div className="flex flex-col min-w-0">
              <span className="font-display-md text-base sm:text-xl font-bold text-deep-espresso tracking-tight leading-none truncate">
               Look &amp; Like
              </span>
              <span className="font-label-sm text-[10px] text-tertiary uppercase tracking-widest leading-none mt-1 hidden sm:block">
                Hair · Beauty · Spa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => {
              const isServicesActive = currentPage === 'services' && link.page === 'services';
              const isInspirationActive = currentPage === 'inspiration' && link.page === 'inspiration';
              const isHomeActive = currentPage === 'home' && link.label === 'Home';
              const isActive = isServicesActive || isInspirationActive || isHomeActive;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors py-1 relative cursor-pointer ${
                    isActive
                      ? 'text-deep-espresso font-bold'
                      : 'text-on-surface-variant hover:text-deep-espresso'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-deep-espresso rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Book Appointment CTA */}
            <a
              onClick={handleBookClick}
              className="inline-flex items-center justify-center bg-deep-espresso text-white hover:opacity-90 font-label-md text-[11px] sm:text-xs uppercase tracking-wider px-3 xs:px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-95 whitespace-nowrap"
              href="#branch-booking"
            >
              <span className="sm:hidden">Book Now</span>
              <span className="hidden sm:inline">Book Appointment</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full text-deep-espresso hover:bg-blush-mist flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={onNavigate}
        onOpenBooking={onOpenBooking}
        onOpenManagement={onOpenManagement}
      />
    </>
  );
}
