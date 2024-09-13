"use client";

import { useState } from "react";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";
import ContactInfo from "./Contact";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="relative min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] flex justify-center p-4 md:p-8">
          <div className="max-w-2xl w-full space-y-12 relative">
            <div className="flex justify-between items-center">
              <ContactInfo />
              <ThemeToggle
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </div>
            <Header />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
