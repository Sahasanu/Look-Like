import React from 'react';
import { BookingForm } from './BookingForm';

export function BookingSection({ preselectedCategory, onNotify }) {
  return (
    <section className="w-full bg-white py-10 sm:py-16 lg:py-24 border-y border-border-warm/40" id="branch-booking">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <BookingForm preselectedCategory={preselectedCategory} onNotify={onNotify} />
        </div>
      </div>
    </section>
  );
}
