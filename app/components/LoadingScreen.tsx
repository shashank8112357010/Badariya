"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({
  isLoading,
  onLoadingComplete,
}: LoadingScreenProps) {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onLoadingComplete?.();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3A643B] transition-opacity duration-300">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse">
          BADARIYA
        </h1>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </div>
    </div>
  );
}
