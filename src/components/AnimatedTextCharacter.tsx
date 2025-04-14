'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextCharacterProps {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const AnimatedTextCharacter: React.FC<AnimatedTextCharacterProps> = ({
  text,
  className = '',
  stagger = 0.05,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
}) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll('span');
    if (chars.length === 0) return;

    // Set initial state (invisible and slightly offset)
    gsap.set(chars, { opacity: 0, y: yOffset });

    // Animate characters into view
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: duration,
      stagger: stagger,
      delay: delay,
      ease: 'power3.out',
    });

    // Optional: Return a cleanup function if needed, though GSAP usually handles this
    // return () => { gsap.killTweensOf(chars); };
  }, [text, duration, stagger, delay, yOffset]); // Rerun if text or animation params change

  return (
    // Use an appropriate heading level or div based on context
    <h1 ref={textRef} className={className} aria-label={text}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{ display: 'inline-block' }} // Needed for transforms
          // Handle spaces explicitly to preserve them
          dangerouslySetInnerHTML={{ __html: char === ' ' ? '&nbsp;' : char }}
        />
      ))}
    </h1>
  );
};

export default AnimatedTextCharacter; 