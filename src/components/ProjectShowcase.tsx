'use client'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
gsap.registerPlugin(ScrollTrigger);

// Define projects with correct status types
const projects: Project[] = [
    {
        title: 'Raffle Draw Application',
        description: 'Developed a desktop raffle draw application for MTN Liberia, enabling real-time, randomized draws. Engineered the backend with Node.js to handle secure draw logic, event logging, and winner selection.',
        tech: ['react', 'electron', 'nodedotjs','typescript','postgresql','tailwindcss','vite'],
        imageUrl: '/images/raffle.jpg',
        url: undefined, // Enterprise software, no public URL
        status: 'live'
    },
    {
        title: 'My Lineage App',
        description: 'A feature-rich mobile app to manage family trees and connect with relatives via social features. Features a dynamic family tree visualization and real-time chat.',
        tech: ['react', 'typescript', 'nodedotjs', 'expo', 'postgresql','streamlit','reactquery','firebase'],
        imageUrl: '/images/lineage.png', // You can update this path
        url: 'https://play.google.com/store/apps/details?id=com.lineageproject.mobile',
        status: 'live'
    },
    {
        title: 'AirState Land & Property Search',
        description: 'A real estate platform for users to upload land documents and request services like land surveying. Features Firebase Auth with OAuth and SMS notifications.',
        tech: ['react', 'firebase','typescript','tailwindcss','vite','reactrouter'],
        imageUrl: '/images/airstate.png', // You can update this path
        url: 'https://airstatefinder.web.app',
        status: 'live'
    },
    {
        title: 'Drip in Jerseys',
        description: 'A performance-optimized e-commerce website using Next.js with a focus on SEO. Integrates Firebase, SMS notifications, and Google Maps for delivery.',
        tech: ['nextdotjs', 'firebase', 'googlemaps'],
        imageUrl: '/images/dij.png', // You can update this path
        url: 'https://dripinjerseys.com',
        status: 'live'
    },
    {
        title: 'CMC Ghana Website',
        description: 'A multilingual educational website supporting 5 languages. Features real-time location with Google Maps and an online student application system.',
        tech: ['react', 'firebase', 'googlemaps'],
        imageUrl: '/images/cmc.png', // You can update this path
        url: 'https://www.cmcghanaedu.com/', // No public URL provided
        status: 'live'
    },
    {
        title: 'GridGuard - Power Monitoring App',
        description: 'A mobile app connected to an IoT device to monitor electricity availability in real-time. Uses an MQTT broker to update status instantly.',
        tech: ['react', 'expo', 'typescript', 'nodedotjs', 'mqtt','firebase'],
        imageUrl: '/images/gridguard.png', // You can update this path
        url: undefined, // No public URL provided
        status: 'development'
    }
];

// Define the Project interface
interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  url?: string;
  githubUrl?: string;
  status: 'coming-soon' | 'live' | 'development';
}

const ProjectsShowcase = () => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
                translateX: `-=${sectionRef.current!.scrollWidth - window.innerWidth}px`,
                ease: 'none',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: () => `+=${sectionRef.current!.scrollWidth - window.innerWidth}`,
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                },
            }
        );

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <div className="w-full bg-black text-white py-20 md:py-28">
            <div className="text-center mb-16 md:mb-20 px-4">
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                    My Work
                </p>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent [text-shadow:0_0_12px_theme(colors.pink.500/0.6)]">
                    Featured Projects
                </h2>
            </div>
            
            <div ref={triggerRef} className="relative h-auto">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <div
                        ref={sectionRef}
                        className="flex h-full relative"
                        style={{ width: `${(projects.length + 1) * 100}vw` }}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={`${project.title}-${index}`}
                                className="h-screen w-screen flex items-center justify-center px-4 sm:px-8 md:px-16"
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default ProjectsShowcase;