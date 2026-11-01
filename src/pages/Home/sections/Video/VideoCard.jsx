import React from 'react';

export function VideoCard({ video, onPlay }) {
  return (
    <article
      onClick={() => onPlay(video)}
      className="group flex flex-col text-left rounded-2xl sm:rounded-3xl overflow-hidden bg-white hover:bg-white border border-[#F0CDD7]/80 hover:border-[#D6204E]/60 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer h-full"
    >
      {/* 16:9 Landscape Thumbnail Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#FFF3F6]">
        <img
          src={video.thumbnailUrl}
          alt={video.alt || video.title}
          className="w-full h-full object-cover opacity-95 transition-transform duration-500 ease-out group-hover:scale-105 select-none"
          loading="lazy"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 pointer-events-none" />

        {/* Floating Top Badges */}
        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
          <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-full shadow-xs">
            {video.category}
          </span>
          <span className="bg-white/90 backdrop-blur-xs text-[#D6204E] font-bold text-[10px] px-2 py-0.5 rounded-full shadow-xs">
            {video.duration}
          </span>
        </div>

        {/* Centered Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-white/80 text-[#D6204E] flex items-center justify-center transition-all duration-300 group-hover:bg-[#D6204E] group-hover:border-[#D6204E] group-hover:text-white group-hover:scale-110 shadow-lg">
            <span className="material-symbols-outlined text-[24px] sm:text-[28px] ml-0.5">
              play_arrow
            </span>
          </div>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between gap-1 bg-white">
        <h3 className="font-bold text-xs sm:text-sm text-deep-espresso group-hover:text-[#D6204E] transition-colors leading-snug line-clamp-1">
          {video.title}
        </h3>
      
      </div>
    </article>
  );
}
