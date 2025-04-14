'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiMail, FiArrowRight } from 'react-icons/fi';
import { Globe } from "@/components/magicui/globe";
import type { COBEOptions } from 'cobe';
import { slugs } from '@/utils/stack-icons';
import { IconCloud } from './magicui/icon-cloud';
import { FaGithub, FaLinkedinIn, FaRobot, FaTwitter, FaRegCopy } from "react-icons/fa";
import { OrbitingCircles } from './magicui/orbiting-circles';

const InfoGrid = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const phi = useRef(0);
  const theta = useRef(0.3);
  const isPointerDown = useRef(false);
  const pointerInitialPosition = useRef({ x: 0, y: 0 });
  const initialPhi = useRef(0);
  const initialTheta = useRef(0);
  const [selectedHandle, setSelectedHandle] = useState<string | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = async () => {
    if (selectedHandle) {
      try {
        await navigator.clipboard.writeText(selectedHandle);
        setToastMessage('Copied to clipboard!');
      } catch (err) {
        setToastMessage('Failed to copy');
      } finally {
        setTimeout(() => setToastMessage(null), 2000);
      }
    }
  };

  // Placeholder handles (replace with your actual values)
  const socialHandles = {
    linkedin: 'linkedin.com/in/yourprofile',
    github: 'github.com/yourusername',
    twitter: 'twitter.com/yourhandle',
    email: 'contact@yourdomain.com'
  };

  const handleOrbitClick = (orbitType: 'primary' | 'secondary', index: number) => {
    const handles = {
      primary: [
        socialHandles.linkedin,
        socialHandles.github,
        socialHandles.twitter
      ],
      secondary: [
        socialHandles.email,
        socialHandles.github,
        socialHandles.twitter
      ]
    };
    setSelectedHandle(handles[orbitType][index]);
  };

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
    onRender: (state) => {
      // Only update when user is interacting
      if (!isPointerDown.current) {
        state.phi = phi.current;
        state.theta = theta.current;
      }
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

  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDown.current = true;
    pointerInitialPosition.current = { x: e.clientX, y: e.clientY };
    initialPhi.current = phi.current;
    initialTheta.current = theta.current;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isPointerDown.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;

    const deltaX = e.clientX - pointerInitialPosition.current.x;
    const deltaY = e.clientY - pointerInitialPosition.current.y;

    phi.current = initialPhi.current + deltaX * 0.005;
    theta.current = initialTheta.current + deltaY * 0.005;

    // Limit theta to avoid flipping
    theta.current = Math.max(Math.min(theta.current, Math.PI - 0.1), 0.1);
  };
  // Base styling for the glassy cards
  const cardBaseStyle = "bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 overflow-hidden relative shadow-lg";

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/8B5CF6/${slug}` // Using violet-500 as base color
  );

  return (
    <motion.section
      className="p-4 flex flex-row self-center gap-4 h-[90vh] w-[90vw]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Animate when 10% is visible
    >
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            key="toast"
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-8 right-8 bg-gray-800/80 backdrop-blur-lg px-6 py-3 rounded-lg border border-white/10"
          >
            <span className="text-blue-400">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className='w-2/3 h-full flex flex-col gap-4'>
        <div className='bg-transparent backdrop-blur-lg border border-white/10 flex flex-col md:flex-row w-full h-1/2 rounded-lg'>
          {/* Left Orbit Section */}
          <div className='relative h-full w-1/2 overflow-hidden flex items-center justify-center'>
            <OrbitingCircles
              iconSize={70}
              radius={120}
              onClick={(index) => handleOrbitClick('primary', index)}
            >
              <FaLinkedinIn size={30} className='cursor-pointer hover:text-blue-400' />
              <FaGithub size={30} className='cursor-pointer hover:text-purple-400' />
              <FaTwitter size={30} className='cursor-pointer hover:text-sky-400' />
            </OrbitingCircles>

            <OrbitingCircles
              iconSize={50}
              radius={70}
              reverse
              speed={2}
              onClick={(index) => handleOrbitClick('secondary', index)}
            >
              <FiMail className='cursor-pointer hover:text-red-400' />
              <FaGithub className='cursor-pointer hover:text-purple-400' />
              <FaTwitter className='cursor-pointer hover:text-sky-400' />
            </OrbitingCircles>
          </div>

          {/* Right Content Section */}
          <div className='w-1/2 flex flex-col justify-center items-start p-8 space-y-6'>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Let's work together on your next project
            </h2>

            <p className='text-sm text-gray-300'>
              Click on any social icon in orbit to reveal contact information
            </p>

            {/* Output Box */}
            <div
              className={`w-full mt-4 p-4 rounded-lg border transition-all duration-300 ${selectedHandle
                  ? 'border-blue-400/50 bg-blue-400/10'
                  : 'border-white/10 bg-transparent'
                }`}
            >
              <div className='flex items-center justify-between'>
                <span className='text-gray-200'>
                  {selectedHandle || 'Select a social icon to continue...'}
                </span>

                {selectedHandle && (
                  <FaRegCopy
                    onClick={handleCopy}
                    className={`cursor-pointer text-blue-400 transition-opacity ${selectedHandle ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-1/2 flex flex-row gap-4'>
          <div className='bg-transparent backdrop-blur-lg border border-white/10 relative flex h-full w-1/2 rounded-lg items-center justify-center overflow-hidden'>
            <IconCloud
              images={images}

            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-xl">Tech Stack</h2>
              <FaRobot className="w-8 h-8 animate-bounce" />
            </div>
          </div>
          <div className='bg-orange-600 h-full w-1/2 rounded-lg'></div>
        </div>
      </div>
      <div
        className='w-1/3 h-full rounded-2xl bg- backdrop-blur-lg border border-white/10 overflow-hidden relative'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Top Text */}
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 mt-4 px-6 pt-2 text-center">
          I'm very flexible with time zone communications
        </h3>
        <div className="relative flex items-center justify-center w-full h-[60%] flex-shrink-0  text-center overflow-hidden">
          <Globe config={globeConfig} className="top-[50px]" /> {/* Adjust positioning with className */}
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10">
          {/* Location display - always visible */}
          <div className="flex items-center px-6 py-4 text-gray-300 gap-2">
            <FiMapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <span className="text-lg">Accra, Ghana</span>
            {/* Blinking Dot */}
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
          </div>

          {/* Connect Now Link - Slides up on hover */}
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
