import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LotusIcon } from '../../../components/icons';

export function CategoryCard({ meta = {}, category = {}, onBookCategory }) {
  const IconComponent = meta.icon || LotusIcon;
  const treatmentsCount = category?.items?.length;

  return (
    <div className="group relative w-full overflow-hidden rounded-[1.75rem] border border-[#F0CDD7]/90 bg-white shadow-[0_6px_24px_rgba(214,32,78,0.06)] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(214,32,78,0.12)]">
      {/* Prominent Beauty Service Image */}
      <div className="relative w-full h-64 sm:h-72 lg:h-[320px] overflow-hidden bg-[#FFF3F6]">
        <img
          src={meta.image}
          alt={meta.title}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
        />

        {/* Soft Luxury Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent pointer-events-none" />

        {/* Floating Treatment Count Badge */}
        {treatmentsCount ? (
          <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-white/80 shadow-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6204E]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6204E]">
              {treatmentsCount} TREATMENTS
            </span>
          </div>
        ) : null}

        {/* Category Circular Badge Overlapping Bottom-Left */}
        <div className="absolute -bottom-5 left-5 z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-white bg-white text-[#D6204E] shadow-md ring-1 ring-[#F0CDD7] transition-transform duration-300 group-hover:scale-110">
          <IconComponent className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
        </div>
      </div>

      {/* Minimal, Clean Card Content */}
      <div className="flex flex-col px-5 pt-8 pb-5 sm:px-6 sm:pb-6">
        {/* Title and Starting Price */}
        <div className="flex items-baseline justify-between gap-2 mb-1.5">
          <h3 className="font-serif text-2xl font-bold leading-tight text-deep-espresso transition-colors group-hover:text-[#D6204E]">
            {meta.title}
          </h3>

          {meta.startingPrice && (
            <span className="font-serif text-sm sm:text-base italic font-semibold text-[#D6204E] whitespace-nowrap">
              From {meta.startingPrice}
            </span>
          )}
        </div>

        {/* Concise Subtitle */}
        {meta.subtitle && (
          <p className="text-xs sm:text-sm text-[#7A6B70] leading-relaxed mb-4 line-clamp-2">
            {meta.subtitle}
          </p>
        )}

        {/* Prominent Action Button matching Salon Brand Crimson */}
        <button
          type="button"
          onClick={() => onBookCategory?.(category?.key)}
          className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D6204E] to-[#B81942] hover:from-[#B81942] hover:to-[#961234] px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] cursor-pointer"
        >
          <span>Reserve {meta.title} Chair</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
