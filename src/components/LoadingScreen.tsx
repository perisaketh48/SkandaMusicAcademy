import { useState, useRef, useEffect } from "react";

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen = ({ onFinished }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => onFinished(), 600);
  };

  const handleError = () => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinished(), 600);
    }, 1000);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#f2f2f2] flex items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/loader.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        onError={handleError}
        className="w-[500px] h-[500px] object-contain"
      />
    </div>
  );
};

export default LoadingScreen;
