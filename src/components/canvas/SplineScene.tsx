'use client';

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  sceneUrl?: string;
  className?: string;
}

export const SplineScene: React.FC<SplineSceneProps> = ({
  sceneUrl = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode", // Default demo physics scene
  className = "w-full h-full min-h-[380px]"
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/80 backdrop-blur-sm z-10">
          <div className="w-8 h-8 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-2 text-xs font-medium text-gray-500">Initializing 3D Physics...</p>
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 p-6 text-center text-gray-500">
          <p className="text-sm font-semibold">Unable to stream 3D scene</p>
          <p className="text-xs mt-1">Please verify your Spline scene URL or network access.</p>
        </div>
      ) : (
        <Spline
          scene={sceneUrl}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default SplineScene;
