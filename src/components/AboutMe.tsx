"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { ScratchToReveal } from "./magicui/scratch-to-reveal";
import { cn } from "@/lib/utils";

const AboutMe = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const socials = {
    linkedin: "https://linkedin.com/in/emmanuel-nyatepe-b27a82207",
    github: "https://github.com/emma-ctrl-22",
    whatsapp: "https://wa.me/233559925298"
  };

  return (
    <motion.section 
      className="flex flex-col md:flex-row items-center gap-12 md:gap-16 min-h-[80vh] px-4 py-16 md:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left Column: Text Content */}
      <motion.div className="w-full md:w-2/3 space-y-6">
        <motion.p 
          className="text-sm text-gray-400 uppercase tracking-widest"
          variants={itemVariants}
        >
          More About Me
        </motion.p>
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          variants={itemVariants}
        >
          Full-Stack Developer and 
          a little bit of{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            everything
          </span>
        </motion.h2>
        <motion.p 
          className="text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          I&apos;m Emmanuel Nyatepe (or Bhobu, as some know me!), a proactive full-stack software engineer based in Accra, Ghana. 
          As an alumnus of Valley View University (VVU) and Bishop Herman College (BHOBUSCO), I have a passion for 
          creating dynamic web experiences. From frontend to backend, I thrive on 
          solving complex problems with clean, efficient code using technologies like React, Next.js, and Node.js.
        </motion.p>
        <motion.p 
          className="text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          When I&apos;m not coding, I&apos;m exploring new ideas and staying curious. I love embracing every part of life 
          and I&apos;m always eager to learn more, whether it&apos;s new tech or just understanding different perspectives.
        </motion.p>
        <motion.p 
          className="text-gray-300 leading-relaxed font-medium"
          variants={itemVariants}
        >
          I believe in waking up each day eager to make a difference, and I&apos;m currently open to new full-time and freelance opportunities!
        </motion.p>
        <motion.div 
          className="flex items-center gap-6 pt-4"
          variants={itemVariants}
        >
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><FaLinkedinIn size={20} /></a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
          <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-white transition-colors"><FaWhatsapp size={20} /></a>
        </motion.div>
      </motion.div>

      {/* Right Column: Image Reveal */}
      <motion.div 
        className="w-full md:w-1/3 flex justify-center items-center aspect-square max-w-sm md:max-w-md"
        variants={itemVariants}
      >
        <ScratchToReveal
          width={350}
          height={350}
          className="rounded-full overflow-hidden border-2 border-blue-600/30 shadow-2xl shadow-blue-500/20"
        >
          <Image
            src="/images/profile.jpg"
            alt="Emmanuel Nyatepe Profile Picture"
            width={350}
            height={350}
            className="object-cover w-full h-full"
          />
        </ScratchToReveal>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe; 