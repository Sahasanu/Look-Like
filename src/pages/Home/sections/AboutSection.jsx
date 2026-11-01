import React from 'react';
import { ABOUT_ASSETS } from '../../../constants/team';
import { TeamSection } from './Team/TeamSection';

export function AboutSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-16 lg:py-20" id="about-us">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Story Narrative & Architectural Framing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-16 sm:mb-24">
          {/* Interior Architecture Photo Cluster */}
          <div className="lg:col-span-6 relative">
            <div className="w-full h-[280px] sm:h-[380px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-border-warm/40">
              <img
                className="w-full h-full object-cover"
                alt={ABOUT_ASSETS.interiorAlt}
                src={ABOUT_ASSETS.interiorUrl}
              />
            </div>

            {/* Overlapping Secondary Detail Card */}
            <div className="absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-8 w-48 sm:w-64 bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-2xl hidden sm:block border border-border-warm">
              <div className="w-full h-28 sm:h-36 rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-3">
                <img
                  className="w-full h-full object-cover"
                  alt={ABOUT_ASSETS.suiteAlt}
                  src={ABOUT_ASSETS.suiteUrl}
                />
              </div>
              <p className="font-headline-sm text-sm sm:text-[16px] text-deep-espresso">Private Suites</p>
              <p className="font-body-sm text-[11px] sm:text-[12px] text-on-surface-variant">
                Uninterrupted peace for mindful restoration.
              </p>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
            <span className="font-label-sm text-xs sm:text-label-sm uppercase tracking-widest text-terracotta-rose font-semibold block mb-2">
              Our Studio Philosophy
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-display-md text-deep-espresso leading-tight mb-4 sm:mb-6">
              A sanctuary for <br />
              <span className="italic font-normal text-terracotta-rose font-serif">your</span> beauty ritual
            </h2>
            <p className="font-body-md sm:font-body-lg text-sm sm:text-base md:text-body-lg text-on-surface-variant mb-4 sm:mb-6 leading-relaxed">
              Look &amp; Like was created for people who want salon results without the salon rush. Private styling stations, premium international products, and artists who truly listen.
            </p>
            <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
              Sip a warm herbal infusion or artisanal espresso, unwind in acoustic tranquility, and leave feeling like the most radiant version of yourself.
            </p>

            {/* 3 Stats Counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full pt-6 border-t border-border-warm/40">
              <div className="text-center sm:text-left">
                <span className="font-display-md text-2xl sm:text-3xl lg:text-display-md text-deep-espresso font-bold block leading-none">
                  8+
                </span>
                <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant uppercase tracking-wider block mt-1.5 sm:mt-2">
                  Years of Excellence
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="font-display-md text-2xl sm:text-3xl lg:text-display-md text-deep-espresso font-bold block leading-none">
                  18+
                </span>
                <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant uppercase tracking-wider block mt-1.5 sm:mt-2">
                  Master Artists
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="font-display-md text-2xl sm:text-3xl lg:text-display-md text-deep-espresso font-bold block leading-none">
                  45k+
                </span>
                <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant uppercase tracking-wider block mt-1.5 sm:mt-2">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Team Sub-section */}
        {/* <TeamSection /> */}
      </div>
    </section>
  );
}
