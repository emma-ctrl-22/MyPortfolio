"use client";

import { motion } from "framer-motion";
import { SpinningText } from "./magicui/spinning-text"; // Keep this
import { FiArrowRight } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa"; // Placeholder icon for logo

// Rename the component
interface CallToActionSectionProps {
    onGetInTouchClick: () => void; // Prop to open the contact popup
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ onGetInTouchClick }) => {

    // Placeholder for winged logo - replace with actual Image/SVG if available
    const LogoWithWings = () => (
        <div className="relative flex items-center justify-center mb-8 opacity-80">
            {/* Inner Circle Logo */}
            <div className="relative z-10 flex items-center justify-center size-16 bg-blue-900/50 border-2 border-blue-500/70 rounded-full shadow-lg backdrop-blur-sm">
                <span className="text-2xl font-bold text-white opacity-90">EN</span>
                {/* <FaRegPaperPlane className="text-white opacity-80" size={24} /> */}
            </div>
        </div>
    );

    return (
        <section
            className="relative w-full min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat py-16 md:py-24 px-4 pb-0"
            style={{ backgroundImage: "url('/images/background.jpg')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">

                <LogoWithWings />

                {/* Headings */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-200 tracking-wide uppercase">
                        From Concept to <span className="font-bold text-white">Creation</span>
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-200 tracking-wide uppercase mt-1">
                        Let&apos;s Make It <span className="font-bold text-white">Happen!</span>
                    </h3>
                    {/* Position Spinning Text near the heading */}
                    <div className="mt-14 mb-8">
                        <SpinningText>Open to Work • Open to Learn</SpinningText>
                    </div>

                </div>

                {/* Button */}
                <button
                    onClick={onGetInTouchClick} // Use the passed prop
                    className="group relative inline-flex items-center justify-center px-6 py-3 bg-gray-700/60 border border-gray-600 rounded-full text-base font-medium text-gray-200 hover:bg-gray-600/80 transition-colors duration-300 overflow-hidden mt-6"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Get In Touch
                        <span className="bg-gray-200 text-gray-900 rounded-full p-1 group-hover:translate-x-1 transition-transform duration-300">
                            <FiArrowRight className="w-4 h-4" />
                        </span>
                    </span>
                    <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-md"></span>
                </button>

                {/* Subtexts */}
                <p className="text-gray-300 font-medium mt-6">
                    I&apos;m available for full-time roles & freelance projects.
                </p>
                <p className="text-gray-400 text-sm max-w-xl">
                    I thrive on crafting dynamic web applications, and delivering seamless user experiences.
                </p>

            </div>
        </section>
    );
};

export default CallToActionSection; 