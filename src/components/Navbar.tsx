import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const topVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 6 }
  };
  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };
  const bottomVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -6 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-gray-800/50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-8 h-16">
        <Link href="/" className="text-2xl font-bold text-gray-100 hover:text-blue-400 transition-colors duration-300">
          E.N.
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium relative group"
            >
              {item.name}
              <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="z-50 p-2 rounded-md text-gray-300 hover:text-blue-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div className="w-6 flex flex-col gap-y-1.5">
              <motion.span
                variants={topVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="block h-0.5 w-full bg-current"
              ></motion.span>
              <motion.span
                variants={middleVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="block h-0.5 w-full bg-current"
              ></motion.span>
              <motion.span
                variants={bottomVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="block h-0.5 w-full bg-current"
              ></motion.span>
            </motion.div>
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md pb-4 border-b border-gray-800/50`}
      >
        <div className="flex flex-col items-center gap-4 pt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-200 hover:text-blue-400 transition-colors duration-300 py-2 text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 