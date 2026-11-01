import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Standard content container matching 1280px max-width and robust responsive margin gutters.
 * Defaults to 16px (px-4) on small phones, 24px (sm:px-6) on large phones/tablets,
 * 32px (md:px-8) on laptops, and 48px-64px (lg:px-12) on desktop screens.
 */
export function Container({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={cn(
        "max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
