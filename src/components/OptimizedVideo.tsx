import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Loader2 } from 'lucide-react';

interface VideoSource {
  src: string;
  type: string;
  quality?: 'high' | 'medium' | 'low';
}

interface OptimizedVideoProps {
  src: string;
  sources?: VideoSource[];
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  onLoadStart?: () => void;
  onCanPlay?: () => void;
  onError?: () => void;
}

export default function OptimizedVideo({
  src,
  sources = [],
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  preload = 'metadata',
  onLoadStart,
  onCanPlay,
  onError
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      setIsLoading(true);
      onLoadStart?.();
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      onCanPlay?.();
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      onError?.();
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [onLoadStart, onCanPlay, onError]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  if (hasError) {
    return (
      <div className={`bg-gray-100 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <div className="text-gray-500 mb-2">Unable to load video</div>
          <div className="text-sm text-gray-400">Please check your connection and try again</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative group bg-black rounded-lg overflow-hidden ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        preload={preload}
        playsInline
        webkit-playsinline="true"
        // Performance optimizations
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        {/* Multiple source formats for better browser support and compression */}
        {sources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
        {/* Fallback for browsers that don't support video */}
        <p className="text-white p-4">
          Your browser doesn't support HTML5 video. 
          <a href={src} className="text-primary-400 underline">Download the video</a> instead.
        </p>
      </video>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
            <div className="text-sm">Loading video...</div>
          </div>
        </div>
      )}

      {/* Custom Controls */}
      {controls && !isLoading && (
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={togglePlay}
                className="text-white hover:text-primary-400 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </button>
              
              <button
                onClick={toggleMute}
                className="text-white hover:text-primary-400 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>

            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-primary-400 transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Play Button Overlay for non-playing state */}
      {!isPlaying && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300 hover:scale-110"
            aria-label="Play video"
          >
            <Play className="h-8 w-8 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}