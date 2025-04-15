'use client'; // Required for framer-motion components

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiCopy, FiCheck } from 'react-icons/fi';
import { Navbar, Experience, TechStack, AnimatedTextCharacter, Footer, InfoGrid, AboutMe, ContactPopup, CallToActionSection } from '@/components';
import { Terminal, TypingAnimation } from "@/components/magicui/terminal";
import { Marquee } from "@/components/magicui/marquee";
// Example lines for the terminal animations
const terminalLines1 = [
  "git clone https://github.com/user/project.git",
  "cd project",
  "npm install",
  "npm run dev",
  "✓ Ready in 1.2s",
  "○ Compiling /pages/index.tsx...",
  "✓ Compiled successfully."
];

const terminalLines2 = [
  "docker build -t my-app .",
  "Sending build context to Docker daemon...",
  "Step 1/5 : FROM node:18-alpine",
  "Step 2/5 : WORKDIR /app",
  "Step 3/5 : COPY package*.json ./",
  "Step 4/5 : RUN npm ci",
  "Step 5/5 : COPY . .",
  "Successfully built a0b1c2d3e4f5",
  "Successfully tagged my-app:latest",
  "docker run -p 3000:3000 my-app"
];

const devWords = [
  "ACCESSIBLE",
  "RESPONSIVE",
  "DYNAMIC",
  "SCALABLE",
  "SEARCH OPTIMIZED",
  "INTERACTIVE",
  "PERFORMANT", // Added a few more
  "SECURE"
];

const Separator = () => (
  <span className="mx-4 text-blue-300 opacity-80 [text-shadow:0_0_8px_theme(colors.blue.400/0.8)]">
    ✨
  </span>
);

export default function Home() {
  const [copied, setCopied] = useState(false); // State for copy confirmation
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup
  const email = "emmanuelnyatepe35@gmail.com";

  // Function to handle copying email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2s
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };

  // Function to open the popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-gray-100 font-sans overflow-x-hidden">
      <Navbar />

      {/* Main content needs to be relative to sit above the background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id='home' className="min-h-screen flex flex-col items-center justify-center text-center gap-8 px-4 relative">
          {/* Text Content Wrapper with relative positioning and z-index */}
          <div className="relative z-10 mb-8">
            <AnimatedTextCharacter
              text="Hi, I'm Emmanuel Nyatepe"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              stagger={0.03}
              delay={0.2}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              className="mt-4 text-xl sm:text-2xl text-gray-300 max-w-xl mx-auto"
            >
              A Software Engineer building seamless digital experiences.
            </motion.p>

            {/* Let's Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              {/* Styled Button */}
              <button
                onClick={handleOpenPopup}
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-gray-800 border border-gray-700 rounded-full text-base font-medium text-gray-200 hover:bg-gray-700 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let`&apos;`s Connect
                  <span className="bg-gray-200 text-gray-900 rounded-full p-1 group-hover:translate-x-1 transition-transform duration-300">
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </span>
                <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-md"></span>
              </button>

              {/* Email Display with Copy Icon */}
              <div
                onClick={handleCopyEmail}
                className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-gray-200 transition-colors duration-300 p-2 rounded-md bg-gray-800/50 border border-transparent hover:border-gray-700 relative"
              >
                <FiCopy className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{email}</span>
                {/* Copied Confirmation Tooltip */}
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-lime-600 text-white text-xs px-2 py-1 rounded-md shadow-lg flex items-center gap-1"
                    >
                      <FiCheck className="w-3 h-3" /> Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Magic UI Terminals (remain absolutely positioned, will be behind z-10) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="absolute top-[10%] left-0 w-72 h-48 hidden lg:block"
          >
            <Terminal className="w-full h-full">
              <TypingAnimation duration={50} className="whitespace-pre-wrap">
                {terminalLines1.join('\n')}
              </TypingAnimation>
            </Terminal>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-[10%] right-[10%] w-80 h-52 hidden lg:block"
          >
            <Terminal className="w-full h-full">
              <TypingAnimation duration={40} className="whitespace-pre-wrap">
                {terminalLines2.join('\n')}
              </TypingAnimation>
            </Terminal>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="absolute top-[70%] right-[5%] w-64 h-40 hidden xl:block"
          >
            <Terminal className="w-full h-full">
              <TypingAnimation duration={60} className="whitespace-pre-wrap">
                {[...terminalLines1].reverse().join('\n')}
              </TypingAnimation>
            </Terminal>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.0, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <svg className="w-6 h-6 text-gray-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </motion.div>
        </section>

        <section className='w-full h-full flex items-center justify-center'>
          <InfoGrid />
        </section>

        {/* Tech Stack Section - Increased padding and heading glow */}
        <section id='techstack' className="py-20 md:py-32 px-4 text-center"> {/* Increased py */}
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
            I constantly try to improve
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [text-shadow:0_0_12px_theme(colors.purple.500/0.6)]"> {/* Added text-shadow */}
            My Tech Stack
          </h2>
          <div className="max-w-4xl mx-auto">
            <TechStack />
          </div>
        </section>

        {/* Work Experience Section */}
        <section id='experience' className="  px-4 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
            My Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent [text-shadow:0_0_12px_theme(colors.emerald.500/0.5)]">
            Work Experience
          </h2>
          {/* Wider container for the experience timeline */}
          <div className="max-w-6xl mx-auto">
            <Experience />
          </div>
        </section>

        {/* Double Marquee Section */}
        {/* Increased vertical padding for more space */}
        <section className="py-16 md:py-24 relative w-full overflow-hidden space-y-2 md:space-y-0">
          {/* First Marquee (Blue, Tilted Left) */}
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-r from-blue-600/80 via-blue-500/90 to-blue-600/80 py-4 md:py-6 shadow-xl [transform:rotate(-2deg)_scale(1.1)] z-10">
            <Marquee pauseOnHover className="[--duration:30s]">
              {devWords.map((word) => (
                <div key={word + "-1"} className="flex items-center">
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-wider text-white mx-4">{word}</span>
                  <Separator />
                </div>
              ))}
              {/* Duplicate content for seamless looping */}
              {devWords.map((word) => (
                <div key={word + "-1-loop"} className="flex items-center">
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-wider text-white mx-4">{word}</span>
                  <Separator />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Second Marquee (Purple, Tilted Right, Reversed) */}
          {/* Use negative margin to pull it up slightly for overlap */}
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-r from-purple-600/80 via-purple-500/90 to-purple-600/80 py-4 md:py-6 shadow-xl [transform:rotate(2deg)_scale(1.1)] -mt-4 md:-mt-8">
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {/* Use slightly different words or order for variety */}
              {[...devWords].reverse().map((word) => (
                <div key={word + "-2"} className="flex items-center">
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-wider text-white mx-4">{word}</span>
                  <Separator />
                </div>
              ))}
              {/* Duplicate content for seamless looping */}
              {[...devWords].reverse().map((word) => (
                <div key={word + "-2-loop"} className="flex items-center">
                  <span className="text-lg md:text-xl font-semibold uppercase tracking-wider text-white mx-4">{word}</span>
                  <Separator />
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        <section id='about' className='w-full h-full flex items-center justify-center px-14'>
          <AboutMe />
        </section>

        <section id='projects' className='w-full h-full flex items-center justify-center'>
          {/* <ProjectShowcase /> */}
        </section>

        {/* Call To Action Section (formerly SpinningTextSection) */}
        <section id='contact' className='w-full h-full'>
          <CallToActionSection onGetInTouchClick={handleOpenPopup} />
        </section>
        {/* <CallToActionSection onGetInTouchClick={handleOpenPopup} /> */}

        <Footer />
      </div>

      {/* Render Contact Popup */}
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
