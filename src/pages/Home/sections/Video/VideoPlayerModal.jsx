import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function VideoPlayerModal({ video, isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setIsPlaying(true);
      setProgress(15);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Simulated playback time advancement
  useEffect(() => {
    let interval;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 98 ? 0 : prev + 1.2));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen || !video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      {/* Cinematic Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-deep-espresso text-ivory-cream rounded-2xl sm:rounded-3xl shadow-2xl p-3.5 sm:p-6 md:p-7 z-10 border border-white/20 overflow-hidden max-h-[94vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-3 sm:mb-5">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta-rose animate-ping shrink-0" />
            <span className="font-label-sm text-[10px] sm:text-xs uppercase tracking-widest text-terracotta-rose font-bold truncate">
              {video.category || "Atelier Experience"} · {video.quality || "4K UHD"}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close video player"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-terracotta-rose text-ivory-cream flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* 16:9 Video Canvas Frame */}
        <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 group">
          <img
            src={video.thumbnailUrl}
            alt={video.alt || video.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-70 scale-102' : 'opacity-85'}`}
          />

          {/* Cinematic lighting gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

          {/* Central Interactive Play/Pause Indicator on Canvas Click */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute inset-0 m-auto w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:scale-110 hover:bg-terracotta-rose transition-all duration-300 shadow-2xl cursor-pointer"
          >
            <span className="material-symbols-outlined text-[28px] sm:text-[42px] ml-0.5">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          {/* Custom Media Controls Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2 z-10">
            {/* Progress Bar */}
            <div
              className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                setProgress(clickPos * 100);
              }}
            >
              <div
                className="h-full bg-terracotta-rose rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom Bar Controls */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-ivory-cream/90 pt-1">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  className="hover:text-terracotta-rose transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] sm:text-[22px]">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  className="hover:text-terracotta-rose transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                    {isMuted ? 'volume_off' : 'volume_up'}
                  </span>
                </button>

                <span className="font-mono text-[10px] sm:text-xs text-ivory-cream/70">
                  {isPlaying ? '0:42' : '0:18'} / {video.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="font-label-sm text-[9px] sm:text-[11px] uppercase tracking-wider text-rose-gold font-semibold hidden xs:inline">
                  Stereo Acoustic
                </span>
                <span className="material-symbols-outlined text-[18px] sm:text-[20px] opacity-70">
                  fullscreen
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Information & Direct Booking CTA */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-5 pt-3 border-t border-white/10">
          <div className="max-w-xl">
            <h3 id="video-modal-title" className="font-headline-sm text-base sm:text-xl text-ivory-cream font-serif">
              {video.title}
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-ivory-cream/70 mt-0.5 sm:mt-1 leading-relaxed">
              {video.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#branch-booking"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-terracotta-rose hover:bg-rose-gold text-ivory-cream font-label-md text-xs uppercase tracking-wider px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-md cursor-pointer active:scale-95 text-center"
            >
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">calendar_month</span>
              <span>Reserve Chair</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
