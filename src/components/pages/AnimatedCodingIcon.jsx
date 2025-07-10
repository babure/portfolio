"use client";

import { useState, useEffect } from "react";

export default function AnimatedCodingIcon() {
  const [isTyping, setIsTyping] = useState(false);
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setIsTyping((prev) => !prev);
    }, 400);

    const intensityInterval = setInterval(() => {
      setIntensity((prev) => (prev + 1) % 3);
    }, 200);

    return () => {
      clearInterval(typingInterval);
      clearInterval(intensityInterval);
    };
  }, []);

  return (
    <div className="inline-flex items-center justify-center ml-1">
      <div className="relative w-6 h-6">
        <div className="absolute inset-0 bg-blue-400/30 rounded blur-sm animate-pulse duration-200" />
        <div className="absolute inset-0 bg-green-400/20 rounded blur-sm animate-ping duration-300" />

        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded w-6 h-6 border border-slate-600 overflow-hidden">
          <div className="bg-black rounded-sm m-0.5 h-3 relative overflow-hidden">
            <div className="space-y-px pt-px">
              <div className="flex items-center space-x-px">
                <div className="w-px h-px bg-green-400 animate-pulse duration-100" />
                <div
                  className={`h-px bg-green-400 transition-all duration-100 ${
                    isTyping ? "w-2" : "w-3"
                  } ${intensity === 0 ? "animate-pulse" : ""}`}
                />
              </div>
              <div className="flex items-center space-x-px">
                <div className="w-px h-px bg-blue-400 animate-pulse duration-150" />
                <div
                  className={`h-px bg-blue-400 transition-all duration-100 ${
                    isTyping ? "w-1" : "w-2"
                  } ${intensity === 1 ? "animate-pulse" : ""}`}
                />
              </div>
              <div className="flex items-center space-x-px">
                <div className="w-px h-px bg-yellow-400 animate-pulse duration-200" />
                <div
                  className={`h-px bg-yellow-400 transition-all duration-100 ${
                    isTyping ? "w-2" : "w-1"
                  } ${intensity === 2 ? "animate-pulse" : ""}`}
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-px h-1 bg-white animate-pulse duration-150" />

            <div className="absolute top-0 left-1 w-px h-full bg-gradient-to-b from-green-400 to-transparent opacity-60 animate-pulse duration-300" />
          </div>

          <div className="bg-slate-600 rounded-sm mx-0.5 mb-0.5 h-1">
            <div className="grid grid-cols-4 gap-px p-px">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-px h-px bg-slate-400 transition-all duration-50 ${
                    isTyping && (intensity + i) % 2 === 0
                      ? "bg-white scale-110"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute top-0 right-0 w-1 h-1">
            <div
              className={`w-full h-full rounded-full transition-all duration-100 ${
                intensity === 0
                  ? "bg-red-500 animate-ping"
                  : intensity === 1
                  ? "bg-orange-500 animate-pulse"
                  : "bg-yellow-500 animate-bounce"
              }`}
            />
          </div>
        </div>

        <div className="absolute -top-px -right-px">
          <div className="w-px h-px bg-yellow-400 animate-ping duration-200" />
        </div>
        <div className="absolute -bottom-px -left-px">
          <div className="w-px h-px bg-blue-400 animate-ping duration-300 delay-100" />
        </div>
        <div className="absolute top-1 -right-px">
          <div className="w-px h-px bg-green-400 animate-ping duration-250 delay-200" />
        </div>

        {intensity === 2 && (
          <div className="absolute inset-0 bg-red-500/20 rounded animate-pulse duration-100" />
        )}
      </div>
    </div>
  );
}
