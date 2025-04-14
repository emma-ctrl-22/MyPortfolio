'use client'; // Required for framer-motion components

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react'; // Import useState
import { FiArrowRight, FiCopy, FiCheck } from 'react-icons/fi'; // Import icons
import {
    Navbar,
    Experience,
    AnimatedBackground,
    AnimatedTextCharacter,
    Footer,
    InfoGrid
} from '@/components';
import {
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

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

export default function Home() {
  const [copied, setCopied] = useState(false); // State for copy confirmation
  const email = "emmanuelnyatepe35@gmail.com";

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "circOut" }
    }
  };

  // Function to handle copying email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2s
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };

  return (
    // Add relative positioning for the absolute background
    <div className="relative min-h-screen bg-black text-gray-100 font-sans overflow-x-hidden">
      <AnimatedBackground /> {/* Add the animated background */}
      <Navbar />

      {/* Main content needs to be relative to sit above the background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center gap-8 px-4 relative">
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
                 onClick={handleCopyEmail}
                 className="group relative inline-flex items-center justify-center px-6 py-3 bg-gray-800 border border-gray-700 rounded-full text-base font-medium text-gray-200 hover:bg-gray-700 transition-all duration-300 overflow-hidden"
               >
                 <span className="relative z-10 flex items-center gap-2">
                   Let's Connect
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

        <InfoGrid />

        <main className="max-w-4xl mx-auto flex flex-col gap-24 sm:gap-32 px-8 pb-24 sm:pb-32">
          {/* About Section */}
          <motion.section
            id="about"
            className="flex flex-col gap-6 scroll-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I hold a B.Sc. in Computer Science from Valley View University and have been professionally building software since 2022. I'm passionate about creating efficient, user-friendly, and visually appealing applications.
            </p>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            className="flex flex-col gap-6 scroll-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Next.js", "React", "Firebase", "Qt", "JavaScript", "TypeScript",
                "C++", "Express", "Node.js", "Electron", "React Native", "Git",
                "Supabase", "Tailwind CSS", "Framer Motion", "GSAP" // Added GSAP just in case
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="bg-gray-800 border border-gray-700 text-gray-200 px-4 py-2 rounded-lg text-base font-medium shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ amount: 0.2 }}
             variants={sectionVariants}
          >
            <Experience />
          </motion.div>

          {/* Projects Section */}
          <motion.section
            id="projects"
            className="flex flex-col gap-6 scroll-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold">Projects</h2>
            <p className="text-gray-400 text-lg">
              Showcasing my work soon...
            </p>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            className="flex flex-col gap-6 scroll-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold">Get In Touch</h2>
            <p className="text-gray-400 text-lg">
              Contact details or form coming soon...
            </p>
          </motion.section>

        </main>

        <Footer />
      </div>
    </div>
  );
}
