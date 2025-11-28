'use client'
import React from 'react';

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-screen-overlay">
      <div className="loading-content">
        {/* Minimal rotating logo */}
        <div className="logo-container">
          {/* <svg viewBox="0 0 100 100" className="logo-svg">
            <path
              className="logo-path"
              d="M 30 10 L 50 10 A 30 30 0 0 1 50 70 L 30 70 L 30 55 L 45 55 A 15 15 0 0 0 45 25 L 30 25 A 15 15 0 0 0 15 40 A 15 15 0 0 0 30 55 L 30 70 A 30 30 0 0 1 30 10 Z"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
        </div>

        {/* Minimal progress bar */}
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
      </div>

      <style jsx>{`
        .loading-screen-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
        }

        /* Logo */
        .logo-container {
          width: 60px;
          height: 60px;
        }

        .logo-svg {
          width: 100%;
          height: 100%;
          animation: rotate 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .logo-path {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes draw {
          0% {
            stroke-dashoffset: 300;
            opacity: 0.3;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -300;
            opacity: 0.3;
          }
        }

        /* Progress bar */
        .progress-container {
          width: 120px;
          height: 2px;
          background: #e5e7eb;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar {
          width: 100%;
          height: 100%;
          background: #0EA5E9;
          border-radius: 2px;
          animation: progress 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: left;
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Responsive */
        @media (max-width: 640px) {
          .logo-container {
            width: 50px;
            height: 50px;
          }

          .progress-container {
            width: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
