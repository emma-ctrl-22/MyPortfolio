'use client'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Zenith Minds',
        description: 'Educational platform connecting students and instructors globally',
        tech: ['nextdotjs', 'react', 'typescript', 'tailwindcss', 'zod', 'mongodb'],
        url: 'https://aayushbharti.in',
        githubUrl: '#',
        status: 'coming-soon'
    },
    {
        title: 'StarForge',
        description: 'AI SaaS landing page with modern UI/UX design',
        tech: ['react', 'vite', 'javascript', 'vercel'],
        url: 'https://ab-star-forge.vercel.app',
        githubUrl: '#',
        status: 'live'
    },
    {
        title: 'Next Ventures',
        description: 'Virtual pitch competition platform for entrepreneurs',
        tech: ['nextdotjs', 'sanity', 'auth0', 'framer'],
        url: '#',
        githubUrl: '#',
        status: 'development'
    }
];
const ProjectsShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>('.project-section');
        
        sections.forEach((section, i) => {
          ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: '+=80%',
            scrub: true,
            onEnter: () => {
              gsap.to(section, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8
              });
              if(i > 0) {
                gsap.to(sections[i-1], {
                  opacity: 0.2,
                  scale: 0.8,
                  duration: 0.3
                });
              }
            },
            onLeaveBack: () => {
              gsap.to(section, {
                opacity: 0.2,
                scale: 0.8,
                duration: 0.3
              });
            }
          });
        });
  
        // Main pinning for container
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${projects.length * 100}%`,
          pin: true,
          anticipatePin: 1,
          markers: true // Remove in production
        });
      }, containerRef);
  
      return () => ctx.revert();
    }, []);
  
    return (
      <div 
        ref={containerRef} 
        className="relative w-full"
        style={{ height: `${projects.length * 100}vh` }}
      >
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="project-section sticky top-0 h-screen w-full flex items-center justify-center opacity-20 scale-80"
            style={{ transformOrigin: 'center center' }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    );
  };
  
  export default ProjectsShowcase;