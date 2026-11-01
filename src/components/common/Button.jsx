import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Universal Button component supporting both <button> and <a> links with Maison Belle styling.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  icon,
  type = 'button',
  onClick,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-terracotta-rose/50 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    // Espresso dark pill button with terracotta hover
    primary: "bg-deep-espresso text-ivory-cream hover:bg-terracotta-rose hover:text-on-primary rounded-full shadow-[0_4px_16px_rgba(42,31,27,0.08)] hover:shadow-lg active:scale-[0.98]",
    // Rose accent button
    rose: "bg-terracotta-rose text-ivory-cream hover:bg-deep-espresso rounded-full shadow-md hover:shadow-lg active:scale-[0.98]",
    // Secondary subtle outline pill
    outline: "bg-transparent text-deep-espresso hover:bg-blush-mist border border-deep-espresso/20 hover:border-deep-espresso rounded-full shadow-sm active:scale-[0.98]",
    // WhatsApp energetic button
    whatsapp: "bg-whatsapp-green text-ivory-cream hover:bg-emerald-600 rounded-xl shadow-md hover:shadow-lg active:scale-[0.98]",
    // Dark square/rounded block button
    darkBlock: "bg-deep-espresso text-ivory-cream hover:bg-terracotta-rose rounded-xl shadow-sm hover:shadow-md active:scale-[0.98]",
    // Ghost text button
    ghost: "bg-transparent text-deep-espresso hover:text-terracotta-rose p-0"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm",
    lg: "px-6 sm:px-8 py-3 sm:py-4 text-sm"
  };

  const computedClass = cn(
    baseStyles,
    variants[variant] || variants.primary,
    variant !== 'ghost' && (sizes[size] || sizes.md),
    className
  );

  if (href) {
    return (
      <a href={href} className={computedClass} onClick={onClick} {...props}>
        {icon && <span className="mr-2 flex items-center">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={computedClass} onClick={onClick} {...props}>
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
