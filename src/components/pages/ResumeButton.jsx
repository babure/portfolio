"use client";

import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <div className="flex justify-center">
      <a
        href="/Babu_Reddy_Resume.pdf"
        download
        className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-300 dark:from-yellow-400 dark:to-yellow-500 text-gray-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-150 group relative overflow-hidden hover:scale-105 active:scale-95"
        title="Download my resume (PDF)"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-30 transition-opacity duration-150" />

        {/* Floating rocket emoji with fun movement */}
        <span className="text-xl relative z-10 rocket-float">🚀</span>

        <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-150">
          Grab My Resume (It's PDF-licious!)
        </span>

        {/* Bouncing download icon */}
        <div className="relative z-10 download-bounce">
          <Download className="h-5 w-5 group-hover:text-gray-900 transition-colors duration-150" />
        </div>

        {/* Quick shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out shimmer-delay" />
      </a>

      <style jsx>{`
        .rocket-float {
          animation: rocketFloat 2s ease-in-out infinite;
        }

        .download-bounce {
          transition: transform 0.15s ease;
        }

        .group:hover .download-bounce {
          animation: downloadBounce 0.8s ease-in-out infinite;
        }

        .shimmer-delay {
          animation-delay: 0.1s;
        }

        @keyframes rocketFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-3px) translateX(1px) rotate(2deg);
          }
          50% {
            transform: translateY(-1px) translateX(-1px) rotate(-1deg);
          }
          75% {
            transform: translateY(-4px) translateX(0.5px) rotate(1deg);
          }
        }

        @keyframes downloadBounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        /* Performance optimizations */
        .rocket-float,
        .download-bounce {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
