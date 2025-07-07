import { slugs } from '@/utils/stack-icons'; // Import slugs for TechStack
import { motion } from 'framer-motion'; // Import motion for animations
import Image from 'next/image'; // Import Image for TechStack

const formatSlug = (slug: string): string => {
    let name = slug.replace(/dot/g, '.');
    name = name.replace('cplusplus', 'C++');
    name = name.replace(/([A-Z])/g, ' $1').trim();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    if (name === 'Nodedotjs') name = 'Node.js';
    if (name === 'Nextdotjs') name = 'Next.js';
    if (name === 'Typescript') name = 'TypeScript';
    if (name === 'Javascript') name = 'JavaScript';
    if (name === 'Mongodb') name = 'MongoDB';
    if (name === 'Postgresql') name = 'PostgreSQL';
    if (name === 'Mysql') name = 'MySQL';
    if (name === 'Html5') name = 'HTML5';
    if (name === 'Css3') name = 'CSS3';
    if (name === 'Tailwindcss') name = 'Tailwind CSS';
    if (name === 'Reactquery') name = 'React Query';
    if (name === 'Expo') name = 'Expo';
    if (name === 'Streamlit') name = 'Streamlit';
    if (name === 'Firebase') name = 'Firebase';
    if (name === 'Googlemaps') name = 'Google Maps';
    if (name === 'Reactrouter') name = 'React Router';
    if (name === 'Vite') name = 'Vite';
    return name;
  };
  
  const TechStack = () => {
    // Filter out slugs you might not want to display if needed
    const displayedSlugs = slugs.filter(slug => ![
      'microsoftazure', 'sqlite', 'gsap', 'threedotjs', 'nestjs', 'graphql','microsoftsqlserver','amazonaws'
    ].includes(slug));
  
    return (
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 px-4">
        {displayedSlugs.map((slug, index) => (
          <motion.div
            key={slug}
            className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 cursor-default shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{
              scale: 1.08,
              rotate: [0, 5, -5, 5, 0], // Wiggle rotation
              boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.4)", // Subtle purple glow
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <Image
              src={`https://cdn.simpleicons.org/${slug}`}
              alt={formatSlug(slug)}
              width={20}
              height={20}
              className="flex-shrink-0"
              unoptimized
            />
            <motion.span
              className="text-sm text-gray-300 whitespace-nowrap"
              whileHover={{ color: '#ffffff' }}
              transition={{ duration: 0.1 }}
            >
              {formatSlug(slug)}
            </motion.span>
          </motion.div>
        ))}
      </div>
    );
  };
  // End TechStack Component Definition
  export default TechStack;