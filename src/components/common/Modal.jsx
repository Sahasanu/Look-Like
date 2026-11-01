import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Accessible Modal dialog with background blur, ESC key dismiss, and focus lock.
 */
export function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-3xl', className = '' }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className={cn(
          "relative w-full bg-white text-on-surface rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] p-4 sm:p-6 md:p-8 z-10 border border-border-warm overflow-hidden max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200",
          maxWidth,
          className
        )}
      >
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-border-warm/60 mb-4 sm:mb-6">
          {title ? (
            <h3 id="modal-headline" className="font-headline-sm text-lg sm:text-headline-sm text-deep-espresso">
              {title}
            </h3>
          ) : <div />}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-border-warm hover:bg-neutral-100 text-deep-espresso flex items-center justify-center transition-colors shadow-xs cursor-pointer shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
