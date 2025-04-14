import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "./magicui/animated-beam";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.3)] overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const EducationTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const highSchoolRef = useRef<HTMLDivElement>(null);
  const universityRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      className="h-full w-full p-6 relative overflow-hidden"
      ref={containerRef}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-row items-center justify-between h-full gap-8"
      >
        {/* Timeline Nodes */}
        <div className="flex flex-col items-center gap-2">
          <Circle ref={startRef} className="border-blue-500">
            <span className="text-blue-600 font-bold">→</span>
          </Circle>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Circle ref={highSchoolRef} className="border-green-500 bg-white/90">
            <Image
              src="/images/bishop-herman.png"
              alt="Bishop Herman College"
              width={48}
              height={48}
              className="w-full h-full object-cover rounded-full"
            />
          </Circle>
          <div className="text-center max-w-[160px]">
            <p className="text-green-600 font-semibold text-sm">Bishop Herman College</p>
            <p className="text-yellow-400 text-xs mt-1">General Science</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Circle ref={universityRef} className="border-purple-500 bg-white/90">
            <Image
              src="/images/vvu.png"
              alt="Valley View University"
              width={48}
              height={48}
              className="w-full h-full object-cover rounded-full"
            />
          </Circle>
          <div className="text-center max-w-[160px]">
            <p className="text-purple-400 font-semibold text-sm">Valley View University</p>
            <p className="text-blue-600 text-xs mt-1">BSc Computer Science</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Circle ref={endRef} className="border-yellow-500">
            <span className="text-yellow-600 font-bold">✓</span>
          </Circle>
        </div>

        {/* Horizontal Animated Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={startRef}
          toRef={highSchoolRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={highSchoolRef}
          toRef={universityRef}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={universityRef}
          toRef={endRef}
          duration={3}
        />
      </motion.div>
    </div>
  );
};

export default EducationTimeline;