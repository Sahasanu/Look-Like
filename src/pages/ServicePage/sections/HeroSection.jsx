import React from 'react';
import { Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full pt-5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] uppercase text-[#D6204E] mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            — COMPLETE SALON ATELIER MENU —
          </span>

          <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-deep-espresso tracking-tight leading-[1.1] mb-3 sm:mb-4">
            Our Services,{' '}
            <span className="italic font-normal text-[#D6204E] font-serif">
              by Category
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
