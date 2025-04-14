'use client';

import Link from 'next/link';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiHeart,
  FiCode,
  FiArrowUpCircle,
} from 'react-icons/fi'; // Import icons

const Footer = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: '#', // Replace with your GitHub URL
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      href: '#', // Replace with your LinkedIn URL
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      href: '#', // Replace with your Twitter/X URL
      icon: <FiTwitter className="w-5 h-5" />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-gray-800/50 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-0 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Section: Logo/Name & Scroll to top */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-bold text-gray-100 hover:text-blue-400 transition-colors duration-300 mb-4">
              E.N.
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <FiArrowUpCircle className="w-5 h-5" />
              Back to Top
            </button>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name} className="text-center">
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Built With */}
        <div className="border-t border-gray-800/50 pt-8 text-center text-gray-500 text-xs">
          <p className="mb-2">
            © {new Date().getFullYear()} Emmanuel Nyatepe. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5">
            Built with <FiHeart className="w-3 h-3 text-red-500" /> using
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Next.js</a>,
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Tailwind CSS</a> & deployed on
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Vercel</a>.
            <FiCode className="w-3 h-3" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
