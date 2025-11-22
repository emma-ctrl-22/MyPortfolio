
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { FiX, FiMail /*, FiCalendar*/ } from "react-icons/fi"; // Icons for buttons
import { saveMessageToFirestore } from "@/lib/utils";
import { toast } from "react-hot-toast";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const userEmail = "emmanuelnyatepe35@gmail.com";
  const mailtoLink = `mailto:${userEmail}?subject=Connecting%20with%20Emmanuel%20Nyatepe`;

  const [loading, setLoading] = React.useState(false);

  // Form handler to save to Firestore
  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
    if (!email || !message) return;
    setLoading(true);
    try {
      const result = await saveMessageToFirestore({ email, message });
      if (result.success) {
        toast.success("Message sent!");
        onClose();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
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
                  <a href="www.linkedin.com/in/emmanuel-nyatepe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><FaLinkedinIn size={20} /></a>
                  <a href="https://github.com/emma-ctrl-22" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href={mailtoLink}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/70 hover:bg-gray-600/80 border border-gray-600 rounded-lg text-sm text-gray-200 transition-colors"
                  >
                    <FiMail size={16} />
                    {userEmail}
                  </a>
                  {/* Comment out Book a Call button */}
                  {/* 
                  <a 
                    href="#" // Replace with your Calendly or booking link
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/70 hover:bg-gray-600/80 border border-gray-600 rounded-lg text-sm text-gray-200 transition-colors"
                  >
                     <FiCalendar size={16} />
                    Book a Call
                  </a> 
                  */}
                </div>
              </div>

              {/* Separator Text */}
              <p className="text-center text-gray-500 text-xs mb-6">Or send a message</p>

              {/* Contact Form */}
              <form onSubmit={handleSendMessage} className="space-y-4">
                <input 
                  name="email"
                  type="email" 
                  placeholder="Your email" 
                  required
                  className="w-full px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500 text-sm"
                  disabled={loading}
                />
                <textarea 
                  name="message"
                  placeholder="Your message" 
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500 text-sm resize-none"
                  disabled={loading}
                />
                <button 
                  type="submit"
                  className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white text-sm"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
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