"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { FiX, FiMail, FiCalendar } from "react-icons/fi"; // Icons for buttons

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const userEmail = "emmanuelnyatepe35@gmail.com";
  const mailtoLink = `mailto:${userEmail}?subject=Connecting%20with%20Emmanuel%20Nyatepe`;

  // Basic form handler placeholder
  const handleSendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real app, you'd handle form submission here (e.g., API call)
    alert("Message sending not implemented yet!");
    onClose(); // Close popup after attempt
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose} // Close on overlay click
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-gray-900/80 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-lg border border-gray-700/50 overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors z-10"
              aria-label="Close contact form"
            >
              <FiX size={20} />
            </button>

            <div className="p-6 md:p-8">
              {/* Top Row: Socials & Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-5">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><FaLinkedinIn size={20} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={20} /></a>
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href={mailtoLink}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/70 hover:bg-gray-600/80 border border-gray-600 rounded-lg text-sm text-gray-200 transition-colors"
                  >
                    <FiMail size={16} />
                    {userEmail}
                  </a>
              
                </div>
              </div>

              {/* Separator Text */}
              <p className="text-center text-gray-500 text-xs mb-6">Or send a message</p>

              {/* Contact Form */}
              <form onSubmit={handleSendMessage} className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  required
                  className="w-full px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500 text-sm"
                />
                <textarea 
                  placeholder="Your message" 
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500 text-sm resize-none"
                />
                <button 
                  type="submit"
                  className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup; 