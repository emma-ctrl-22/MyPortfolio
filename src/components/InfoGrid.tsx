'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiMail, FiArrowRight } from 'react-icons/fi';
import { Globe } from "@/components/magicui/globe";
import type { COBEOptions } from 'cobe';
import { slugs } from '@/utils/stack-icons';
import { IconCloud } from './magicui/icon-cloud';
import { FaGithub, FaLinkedinIn, FaRobot, FaRegCopy } from "react-icons/fa";
import { OrbitingCircles } from './magicui/orbiting-circles';
import { FaWhatsapp, FaPhoneAlt, FaSnapchat } from 'react-icons/fa';
import EducationalTimeline from './EducationalTimeline';
import { FcGraduationCap } from "react-icons/fc";

const InfoGrid = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedHandle, setSelectedHandle] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = async () => {
    if (selectedHandle) {
      try {
        await navigator.clipboard.writeText(selectedHandle);
        setToastMessage('Copied to clipboard!');
      } catch {
        setToastMessage('Failed to copy');
      } finally {
        setTimeout(() => setToastMessage(null), 2000);
      }
    }
  };

  // Updated social handles with new entries
  const socialHandles = {
    github: 'github.com/emma-ctrl-22',
    email: 'emmanuelnyatepe35@gmail.com',
    linkedin: 'linkedin.com/in/emmanuel-nyatepe-b27a82207',
    whatsapp: '+233559925298',
    phone: '+233559925298',
    snapchat: 'steals_codes'
  };

  // Set the handle directly when an icon is clicked
  const setGithubHandle = () => {
    setSelectedHandle(socialHandles.github);
  };

  const setLinkedinHandle = () => {
    setSelectedHandle(socialHandles.linkedin);
  };

  const setWhatsappHandle = () => {
    setSelectedHandle(socialHandles.whatsapp);
  };

  const setEmailHandle = () => {
    setSelectedHandle(socialHandles.email);
  };

  const setPhoneHandle = () => {
    setSelectedHandle(socialHandles.phone);
  };

  const setSnapchatHandle = () => {
    setSelectedHandle(socialHandles.snapchat);
  };

  // Gradient animation for output box
  const outputBoxStyle = `w-full mt-4 p-4 rounded-lg border bg-gradient-to-br transition-all duration-300 
  ${selectedHandle ?
      'from-blue-400/20 to-purple-400/20 border-blue-400/50' :
      'border-white/10 bg-transparent'}`;


  // Toast animation variants
  const toastVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
  };

  // Globe configuration
  const globeConfig: COBEOptions = {
    width: 600,
    height: 600,
    onRender: (_state) => {
      // Simplified onRender if direct manipulation isn't needed
      // state.phi = phi.current;
      // state.theta = theta.current;
      console.log(_state);
    },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.6,
    mapSamples: 16000,
    mapBrightness: 3,
    baseColor: [0.3, 0.3, 0.6] as [number, number, number],
    markerColor: [0.9, 0.1, 0.1] as [number, number, number],
    glowColor: [0.2, 0.8, 1] as [number, number, number],
    markers: [
      { location: [5.6037, -0.1870] as [number, number], size: 0.07 },
    ],
  };

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/8B5CF6/${slug}` // Using violet-500 as base color
  );

  const baseShadow = "shadow-[0_0_15px_rgba(255,255,255,0.1),inset_0_0_10px_rgba(255,255,255,0.08)]";
  const hoverShadow = "hover:shadow-[0_0_25px_rgba(255,255,255,0.2),inset_0_0_15px_rgba(255,255,255,0.15)]";
  const transitionClasses = "transition-shadow duration-300 ease-out";

  return (
    <motion.section
      className="p-4 sm:p-6 flex flex-col lg:flex-row self-center gap-4 lg:gap-6 w-full lg:w-[90vw] min-h-screen lg:h-[90vh]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            key="toast"
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-8 z-50 right-8 bg-gray-800/80 backdrop-blur-lg px-6 py-3 rounded-lg border border-white/10"
          >
            <span className="text-blue-400">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className='w-full lg:w-2/3 h-full flex flex-col gap-4 lg:gap-6'>
        {/* Top Row: Contact Info - Stacks vertically on mobile, row on medium+ screens */}
        <div className={`bg-transparent backdrop-blur-lg border border-white/10 flex flex-col md:flex-row w-full h-auto md:h-1/2 rounded-lg p-4 ${baseShadow} ${hoverShadow} ${transitionClasses}`}>
          {/* Left Orbit Section - Takes full width on mobile */}
          <div className='relative h-64 md:h-full w-full md:w-1/2 overflow-hidden flex items-center justify-center'>
            {/* ... OrbitingCircles ... */}            <OrbitingCircles
              iconSize={70}
              radius={120}
            >
              <FaGithub 
                size={30} 
                className='cursor-pointer hover:text-purple-400' 
                onClick={setGithubHandle}
              />
              <FaLinkedinIn 
                size={30} 
                className='cursor-pointer hover:text-blue-400' 
                onClick={setLinkedinHandle}
              />
              <FaWhatsapp 
                size={30} 
                className='cursor-pointer hover:text-green-400' 
                onClick={setWhatsappHandle}
              />
            </OrbitingCircles>

            <OrbitingCircles
              iconSize={60}
              radius={70}
              reverse
            >
              <FiMail 
                className='cursor-pointer hover:text-red-400' 
                onClick={setEmailHandle}
              />
              <FaPhoneAlt 
                className='cursor-pointer hover:text-cyan-400' 
                onClick={setPhoneHandle}
              />
              <FaSnapchat 
                className='cursor-pointer hover:text-yellow-400' 
                onClick={setSnapchatHandle}
              />
            </OrbitingCircles>
          </div>

          {/* Right Content Section */}
          <div className='w-full md:w-1/2 flex flex-col justify-center items-start p-4 md:p-8 space-y-4 md:space-y-6'>
            <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center md:text-left w-full'>
              Let&apos;s work together
            </h2>
            <p className='text-sm text-gray-300 text-center md:text-left w-full'>
              Click an icon to reveal contact info
            </p>

            {/* Output Box */}
            <div className={`${outputBoxStyle} w-full`}> 
              <div className='flex items-center justify-between'>
                <span className='text-gray-200 font-mono tracking-wide'>
                  {selectedHandle || 'None selected'}
                </span>
                {selectedHandle && (
                  <FaRegCopy
                    onClick={handleCopy}
                    className="cursor-pointer text-blue-400 hover:scale-110 transition-transform"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-auto lg:h-1/2 flex flex-col lg:flex-row gap-4 lg:gap-6'>
          <div className={`bg-transparent backdrop-blur-lg border border-white/10 relative flex h-full w-full md:w-1/2 rounded-lg items-center justify-center overflow-hidden ${baseShadow} ${hoverShadow} ${transitionClasses}`}>
            <IconCloud
              images={images}
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-lg md:text-xl">Tech Stack</h2>
              <FaRobot className="w-6 h-6 md:w-8 md:h-8 animate-bounce" />
            </div>
          </div>
          <div className={`bg-transparent relative h-full py-8 md:p-0 w-full md:w-1/2 rounded-lg backdrop-blur-lg border border-white/10 ${baseShadow} ${hoverShadow} ${transitionClasses}`}>
            <EducationalTimeline />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-xl">Educational Background</h2>
              <FcGraduationCap className='w-8 h-8' />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full lg:w-1/3 h-[50vh] lg:h-full rounded-2xl bg-transparent backdrop-blur-lg border border-white/10 overflow-hidden relative mt-4 lg:mt-0 flex flex-col ${baseShadow} ${hoverShadow} ${transitionClasses}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 mt-4 px-6 pt-2 text-center flex-shrink-0">
         I am flexible with time zones
        </h3>
        <div className="relative flex items-center justify-center w-full h-full">
          <Globe config={globeConfig} />
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10">
          <div className="flex items-center px-6 py-4 text-gray-300 gap-2">
            <FiMapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <span className="text-lg">Accra, Ghana</span>
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
          </div>
          <div
            className={`w-full bg-gray-900/70 transform transition-transform duration-300 ease-in-out ${isHovering ? 'translate-y-0' : 'translate-y-full'
              }`}
          >
            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 py-4"
            >
              Connect now <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InfoGrid;