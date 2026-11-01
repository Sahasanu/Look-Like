import React from 'react';

export function FeaturedVideo({ video, onPlay }) {
  if (!video) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] bg-noir-charcoal aspect-[16/9] sm:aspect-[16/9] border border-white/15 group">
      {/* Thumbnail Image */}
      <img
        src={video.thumbnailUrl}
        alt={video.alt || video.title}
        className="w-full h-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-103"
      />

      {/* Ambient Gradient Overlays for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso via-deep-espresso/40 to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-espresso/60 via-transparent to-deep-espresso/40 pointer-events-none" />

      {/* Top Header Bar Badges */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none z-10">
        <div className="inline-flex items-center gap-2 bg-deep-espresso/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-terracotta-rose animate-pulse" />
          <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-widest text-ivory-cream font-bold">
            Featured Experience
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-label-sm text-[11px] text-ivory-cream/90 font-medium">
          <span className="material-symbols-outlined text-[14px] text-rose-gold">hd</span>
          <span>{video.quality || "4K UHD"}</span>
        </div>
      </div>

      {/* Central Play Button */}
      <button
        type="button"
        onClick={() => onPlay(video)}
        aria-label={`Play featured film: ${video.title}`}
        className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-ivory-cream hover:bg-terracotta-rose hover:border-terracotta-rose hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_50px_rgba(196,135,122,0.35)] cursor-pointer z-20 group/play"
      >
        <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-30 pointer-events-none" />
        <span className="material-symbols-outlined text-[42px] sm:text-[48px] ml-1.5 transition-transform duration-300 group-hover/play:scale-110">
          play_arrow
        </span>
      </button>

      {/* Bottom Content Bar Overlay */}
      <div className="absolute bottom-4 sm:bottom-7 left-4 sm:left-8 right-4 sm:right-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none">
        <div className="max-w-xl">
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-terracotta-rose font-semibold block mb-1">
            {video.category} · {video.duration}
          </span>
          <h3 className="font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md text-ivory-cream font-serif tracking-tight leading-snug">
            {video.title}
          </h3>
          {video.description && (
            <p className="font-body-sm text-xs sm:text-body-sm text-ivory-cream/80 line-clamp-2 mt-1.5 leading-relaxed hidden sm:block">
              {video.description}
            </p>
          )}
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <span className="hidden lg:inline-flex items-center gap-1.5 font-label-sm text-xs text-ivory-cream/70 uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px] text-terracotta-rose">place</span>
            London · Paris · Palm Bay
          </span>
          <button
            type="button"
            onClick={() => onPlay(video)}
            className="pointer-events-auto inline-flex items-center gap-2 bg-terracotta-rose hover:bg-rose-gold text-ivory-cream font-label-md text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 shadow-md cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
            <span>Watch Film</span>
          </button>
        </div>
      </div>
    </div>
  );
}
