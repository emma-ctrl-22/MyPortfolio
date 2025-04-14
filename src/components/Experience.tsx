"use client";

import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "./magicui/animated-beam";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component

// Re-define Circle component locally for Experience, slightly larger
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; title?: string } // Added title for accessibility/tooltip if needed
>(({ className, children, title }, ref) => {
  return (
    <div
      ref={ref}
      title={title} // Optional: Add title attribute
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white/10 shadow-[0_0_20px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const hospitalRef = useRef<HTMLDivElement>(null);
  const wigalRef = useRef<HTMLDivElement>(null);
  const kamakRef = useRef<HTMLDivElement>(null);
  const tech231Ref = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Define nodes with specific vertical offsets for parent divs
  const nodes = [
    { 
      id: "start", 
      ref: startRef, 
      title: "Start", 
      color: "border-blue-500", 
      content: <span className="text-blue-500 font-bold text-xl">→</span>, 
      verticalOffset: "md:translate-y-0" 
    },
    {
      id: "hospital",
      ref: hospitalRef,
      title: "Junior Network Engineer (Intern)",
      company: "37 Military Hospital",
      imageUrl: "/images/37-H.png", // Added image URL
      duration: "Internship",
      color: "border-cyan-500",
      placeholderBg: "bg-cyan-900/50",
      textColor: "text-cyan-400",
      companyColor: "text-cyan-500",
      verticalOffset: "md:-translate-y-8" // Sketch: Slightly up
    },
    {
      id: "wigal",
      ref: wigalRef,
      title: "Frontend Developer (Intern)",
      company: "Wigal",
      imageUrl: "/images/wigal.png", // Added image URL
      duration: "Internship",
      color: "border-emerald-500",
      placeholderBg: "bg-emerald-900/50",
      textColor: "text-emerald-400",
      companyColor: "text-emerald-500",
      verticalOffset: "md:-translate-y-12" // Sketch: Bit higher
    },
    {
      id: "kamak",
      ref: kamakRef,
      title: "Software Engineer",
      company: "Kamak Paperless",
      imageUrl: "/images/kamak.png", // Added image URL
      duration: "Full-time",
      color: "border-indigo-500",
      placeholderBg: "bg-indigo-900/50",
      textColor: "text-indigo-400",
      companyColor: "text-indigo-500",
      verticalOffset: "md:-translate-y-48" // Sketch: Much higher
    },
    {
      id: "tech231",
      ref: tech231Ref,
      title: "Software Engineer",
      company: "Tech231 Liberia",
      imageUrl: "/images/tech231.png", // Added image URL
      duration: "Current",
      color: "border-amber-500",
      placeholderBg: "bg-amber-900/50",
      textColor: "text-amber-400",
      companyColor: "text-amber-500",
      verticalOffset: "md:-translate-y-40" // Sketch: High, slightly below Kamak
    },
    { 
      id: "end", 
      ref: endRef, 
      title: "End", 
      color: "border-gray-500", 
      content: <span className="text-gray-500 font-bold text-xl">✓</span>, 
      verticalOffset: "md:translate-y-24" // Sketch: Lower balance point
    },
  ];

  // Define beams connecting the node refs (parent divs)
  // Apply offsets to visually target the Circle center within the parent div
  const beams = [
    { from: startRef, to: hospitalRef, startOffset: 0, endOffset: -32 },   // Start(center) -> Hospital(top) -> Offset needed at end
    { from: hospitalRef, to: wigalRef, startOffset: -32, endOffset: -32 }, // Hospital(top) -> Wigal(top) -> Offset needed at both
    { from: wigalRef, to: kamakRef, startOffset: -32, endOffset: -32 },    // Wigal(top) -> Kamak(top) -> Offset needed at both
    { from: kamakRef, to: tech231Ref, startOffset: -32, endOffset: -32 }, // Kamak(top) -> Tech231(top) -> Offset needed at both
    { from: tech231Ref, to: endRef, startOffset: -32, endOffset: 0 },     // Tech231(top) -> End(center) -> Offset needed at start
  ];

  return (
    <div
      className="min-h-[85vh] w-full p-6 md:px-16 md:py-2 relative overflow-hidden flex items-center justify-center"
      ref={containerRef}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col md:flex-row items-center md:items-stretch justify-between h-full w-full gap-12 md:gap-16"
      >
        {/* Map through nodes, assign ref to the PARENT div */} 
        {nodes.map((node) => (
          <div
            key={node.id}
            ref={node.ref} // Assign ref to the parent div
            className={cn(
              "flex flex-col items-center text-center md:text-left gap-3 flex-1 transition-transform duration-500 ease-out", // Slower transition
              node.verticalOffset // Apply specific translate class
            )}
          >
            {/* Pass a dummy ref or no ref to Circle now */}
            <Circle className={`${node.color} bg-white`} title={node.title}>
              {/* Conditionally render Image or placeholder/icon */}
              {node.imageUrl ? (
                <Image
                  src={node.imageUrl}
                  alt={node.company ? `${node.company} Logo` : 'Company Logo'}
                  width={48} // Slightly smaller than circle (size-16 is 64px)
                  height={48}
                  className="object-contain rounded-full bg-white p-1" // White background, contain fit, padding
                />
              ) : node.content ? (
                node.content // Render start/end icon
              ) : (
                <div className={cn("w-10 h-10 rounded-full", node.placeholderBg)}></div> // Fallback placeholder
              )}
            </Circle>
            {node.company && (
              <div className="w-full md:max-w-xs"> 
                <p className={`font-semibold text-sm ${node.textColor}`}>{node.title}</p>
                <p className={`text-xs mt-1 ${node.companyColor}`}>{node.company}</p>
                <p className="text-gray-400 text-xs mt-0.5">{node.duration}</p>
              </div>
            )}
          </div>
        ))}

        {/* Map through beams, apply revised offsets */} 
        <div className="absolute top-0 left-0 w-full h-full hidden md:block pointer-events-none"> 
          {beams.map((beam, index) => (
            <AnimatedBeam
              key={index}
              containerRef={containerRef}
              fromRef={beam.from}
              toRef={beam.to}
              startYOffset={beam.startOffset} // Revised offset
              endYOffset={beam.endOffset}   // Revised offset
              duration={4 + index * 0.5} 
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience; 