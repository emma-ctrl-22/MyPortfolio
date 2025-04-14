'use client';

import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial canvas size
    setCanvasSize();
    
    // Update canvas size when window resizes
    window.addEventListener('resize', setCanvasSize);
    
    // Create nebula clouds
    const nebulae: Nebula[] = [];
    const numNebulae = 5;
    
    // Star colors for a more galaxy-like feel
    const starColors = [
      '#ffffff', // White
      '#fffacd', // Lemon chiffon (yellowish white)
      '#b0e0e6', // Powder blue
      '#ffd700', // Gold
      '#ff8c00', // Dark orange
      '#ff4500', // Orange red
      '#8a2be2', // Blue violet
      '#4682b4', // Steel blue
    ];
    
    // Create nebulae
    for (let i = 0; i < numNebulae; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 200,
        color: i % 2 === 0 ? '#4b0082' : '#800080', // Indigo and purple
        opacity: Math.random() * 0.05 + 0.01,
        speed: Math.random() * 0.02 + 0.01,
        direction: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.005 + 0.001,
        pulseFactor: Math.random() * Math.PI * 2,
      });
    }
    
    // Star properties
    const stars: Star[] = [];
    const numStars = Math.floor(window.innerWidth * window.innerHeight / 600); // More stars
    
    // Shooting star properties
    const shootingStars: ShootingStar[] = [];
    let shootingStarTimer = 0;
    
    // Create initial stars
    for (let i = 0; i < numStars; i++) {
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      const size = Math.random() * 2.5 + 0.5; // Larger stars
      
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        color: color,
        opacity: Math.random() * 0.9 + 0.1,
        speed: Math.random() * 0.02 + 0.005,
        pulseSpeed: Math.random() * 0.05 + 0.01,
        pulseFactor: Math.random() * Math.PI * 2, // Random starting phase
        glowing: Math.random() > 0.7, // Some stars will have glow
        glowSize: size * (Math.random() * 4 + 2), // Glow radius
        twinkleSpeed: Math.random() * 0.08 + 0.02, // Different twinkle speeds
      });
    }
    
    // Helper to add a glow effect to stars and shooting stars
    const drawGlow = (x: number, y: number, radius: number, color: string, opacity: number) => {
      const gradient = ctx.createRadialGradient(
        x, y, 0,
        x, y, radius
      );
      gradient.addColorStop(0, color.replace(')', `, ${opacity})`).replace('rgb', 'rgba'));
      gradient.addColorStop(0.4, color.replace(')', `, ${opacity * 0.5})`).replace('rgb', 'rgba'));
      gradient.addColorStop(1, color.replace(')', `, 0)`).replace('rgb', 'rgba'));
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Animation function
    function animate() {
      requestAnimationFrame(animate);
      
      // Clear the canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebula clouds
      nebulae.forEach(nebula => {
        // Update pulse factor
        nebula.pulseFactor += nebula.pulseSpeed;
        const pulse = Math.sin(nebula.pulseFactor) * 0.3 + 0.7;
        
        // Create gradient for nebula
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius * pulse
        );
        
        // Get nebula color with transparency
        const baseColor = nebula.color;
        const rgbColor = hexToRgb(baseColor);
        
        gradient.addColorStop(0, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${nebula.opacity * 2})`);
        gradient.addColorStop(0.3, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${nebula.opacity})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius * pulse, 0, Math.PI * 2);
        ctx.fill();
        
        // Move nebula
        nebula.x += Math.cos(nebula.direction) * nebula.speed;
        nebula.y += Math.sin(nebula.direction) * nebula.speed;
        
        // Wrap around if nebula goes off screen (with buffer)
        const buffer = nebula.radius;
        if (nebula.x < -buffer) nebula.x = canvas.width + buffer;
        if (nebula.x > canvas.width + buffer) nebula.x = -buffer;
        if (nebula.y < -buffer) nebula.y = canvas.height + buffer;
        if (nebula.y > canvas.height + buffer) nebula.y = -buffer;
      });
      
      // Draw and update stars
      stars.forEach(star => {
        // Update the star's pulse
        star.pulseFactor += star.pulseSpeed;
        const pulse = Math.sin(star.pulseFactor) * 0.5 + 0.5;
        
        // Convert hex to rgb for stars
        const rgbColor = hexToRgb(star.color);
        
        // Draw star glow for larger/glowing stars
        if (star.glowing) {
          drawGlow(
            star.x, 
            star.y, 
            star.glowSize * pulse, 
            `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`, 
            star.opacity * 0.3
          );
        }
        
        // Draw the star with pulsing effect
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * (0.7 + 0.3 * pulse), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${star.opacity * pulse})`;
        ctx.fill();
        
        // Add a bright center for bigger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();
        }
        
        // Move star
        star.y += star.speed;
        star.pulseFactor += star.twinkleSpeed; // Independent twinkle speed
        
        // Reset star if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Create new shooting stars randomly
      shootingStarTimer++;
      if (shootingStarTimer > Math.random() * 80 + 40) { // More frequent shooting stars
        shootingStarTimer = 0;
        
        // Pick a random color for the shooting star
        const colorIndex = Math.floor(Math.random() * starColors.length);
        const shootingStarColor = starColors[colorIndex];
        const rgbColor = hexToRgb(shootingStarColor);
        
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 150 + 100,
          speed: Math.random() * 15 + 12,
          angle: Math.PI / 4 + Math.random() * Math.PI / 4,
          opacity: 1,
          color: shootingStarColor,
          rgbColor: rgbColor,
          width: Math.random() * 3 + 2, // Wider shooting stars
          trail: [] // Store trail points
        });
      }
      
      // Draw and update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const shootingStar = shootingStars[i];
        
        // Calculate trail end point
        const endX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const endY = shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.length;
        
        // Store current position in trail
        if (shootingStar.trail.length > 20) {
          shootingStar.trail.shift(); // Remove oldest point
        }
        shootingStar.trail.push({ x: shootingStar.x, y: shootingStar.y, opacity: shootingStar.opacity });
        
        // Draw glowing head of shooting star
        drawGlow(
          shootingStar.x, 
          shootingStar.y, 
          shootingStar.width * 4, 
          `rgb(${shootingStar.rgbColor.r}, ${shootingStar.rgbColor.g}, ${shootingStar.rgbColor.b})`, 
          shootingStar.opacity * 0.5
        );
        
        // Draw main trail
        const gradient = ctx.createLinearGradient(
          shootingStar.x, shootingStar.y,
          endX, endY
        );
        
        gradient.addColorStop(0, `rgba(${shootingStar.rgbColor.r}, ${shootingStar.rgbColor.g}, ${shootingStar.rgbColor.b}, ${shootingStar.opacity})`);
        gradient.addColorStop(0.3, `rgba(${shootingStar.rgbColor.r}, ${shootingStar.rgbColor.g}, ${shootingStar.rgbColor.b}, ${shootingStar.opacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = shootingStar.width;
        ctx.stroke();
        
        // Draw sparkling effect along the trail
        for (let j = 0; j < shootingStar.trail.length; j += 3) { // Only draw some points for performance
          const point = shootingStar.trail[j];
          const sparkSize = Math.random() * 2 + 1;
          const sparkOpacity = point.opacity * (Math.random() * 0.5 + 0.5);
          
          ctx.beginPath();
          ctx.arc(
            point.x + (Math.random() * 10 - 5), 
            point.y + (Math.random() * 10 - 5), 
            sparkSize, 
            0, 
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${sparkOpacity})`;
          ctx.fill();
        }
        
        // Update shooting star position
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        
        // Fade out as it moves
        shootingStar.opacity -= 0.015;
        
        // Remove if it's off screen or faded out
        if (
          shootingStar.x < 0 ||
          shootingStar.x > canvas.width ||
          shootingStar.y > canvas.height ||
          shootingStar.opacity <= 0
        ) {
          shootingStars.splice(i, 1);
        }
      }
    }
    
    // Helper function to convert hex to rgb
    function hexToRgb(hex: string) {
      // Remove # if present
      hex = hex.replace(/^#/, '');
      
      // Parse components
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      
      return { r, g, b };
    }
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

// TypeScript interfaces
interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  speed: number;
  pulseSpeed: number;
  pulseFactor: number;
  glowing: boolean;
  glowSize: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  color: string;
  rgbColor: { r: number, g: number, b: number };
  width: number;
  trail: Array<{ x: number, y: number, opacity: number }>;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  speed: number;
  direction: number;
  pulseSpeed: number;
  pulseFactor: number;
}

export default AnimatedBackground;