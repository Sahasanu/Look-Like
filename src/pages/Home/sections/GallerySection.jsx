import React from 'react';
import { GALLERY_ITEMS } from '../../../constants/gallery';
import { CategoryCard } from './CategoryCard';

export function GallerySection({ onSelectCategory }) {
  return (
    <section className="w-full bg-white py-10 sm:py-16 lg:py-24" id="showcase-gallery">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <span className="font-label-sm text-xs sm:text-label-sm uppercase tracking-widest text-terracotta-rose font-semibold block mb-2">
              ✦ The Gallery Showcase
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-display-md text-deep-espresso tracking-tight">
              Artistry across our{" "}
              <span className="italic font-normal text-terracotta-rose font-serif">4 core</span> specialties.
            </h2>
          </div>
          <p className="font-body-md text-xs sm:text-sm md:text-base text-on-surface-variant max-w-md leading-relaxed">
            A visual journey through tailored ritual treatments, sculptural color work, and restorative spa transformations.
          </p>
        </div>

        {/* 4 Core Category Cards Grid with Arched Silhouettes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <CategoryCard
              key={item.id}
              item={item}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
