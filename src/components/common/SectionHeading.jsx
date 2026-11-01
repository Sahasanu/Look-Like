import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Editorial section header component with consistent Maison aesthetic styling.
 */
export function SectionHeading({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  centered = false,
  inverted = false,
  className = ''
}) {
  return (
    <div className={cn(
      "flex flex-col gap-2",
      centered && "text-center max-w-2xl mx-auto",
      className
    )}>
      {eyebrow && (
        <span className={cn(
          "font-label-sm text-label-sm uppercase tracking-widest font-semibold block",
          inverted ? "text-terracotta-rose" : "text-terracotta-rose"
        )}>
          {eyebrow}
        </span>
      )}
      
      {title && (
        <h2 className={cn(
          "font-headline-lg text-headline-lg md:text-display-md tracking-tight",
          inverted ? "text-ivory-cream" : "text-deep-espresso"
        )}>
          {title}
          {highlightWord && (
            <>
              {" "}
              <span className="italic font-normal text-terracotta-rose font-serif">
                {highlightWord}
              </span>
            </>
          )}
        </h2>
      )}

      {subtitle && (
        <p className={cn(
          "font-body-md text-body-md mt-2 leading-relaxed",
          inverted ? "text-ivory-cream/80" : "text-on-surface-variant"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
