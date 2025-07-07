import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowUpRight, FiGithub, FiLock } from 'react-icons/fi';

// Define an interface for the project prop
interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  url?: string; // Optional URL
  githubUrl?: string; // Optional GitHub URL
  status: 'coming-soon' | 'live' | 'development';
}

const StatusBadge = ({ status }: { status: Project['status'] }) => {
    const statusMap = {
        'coming-soon': { text: 'Coming Soon', bg: 'bg-yellow-400', text_color: 'text-yellow-200', border: 'border-yellow-300/30' },
        'live': { text: 'Live', bg: 'bg-green-400', text_color: 'text-green-200', border: 'border-green-300/30' },
        'development': { text: 'In Development', bg: 'bg-blue-400', text_color: 'text-blue-200', border: 'border-blue-300/30' },
    };
    const { text, bg, text_color, border } = statusMap[status];

    return (
        <div className={`absolute top-4 left-4 z-20 px-3 py-1 text-sm font-medium rounded-full border ${bg} ${text_color} ${border}`}>
            {text}
        </div>
    );
};


const ProjectCard = ({ project }: { project: Project }) => {

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mx-auto items-center"
        >
            {/* Image Section */}
            <motion.a
                href={project.url || project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-80 rounded-2xl overflow-hidden group border-2 border-slate-800 hover:border-violet-500/50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <StatusBadge status={project.status} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                />

                <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xl font-bold text-white flex items-center gap-2">
                        {project.status === 'live' ? 'View Live Site' : 'View Progress'} <FiArrowUpRight />
                    </p>
                </div>
            </motion.a>

            {/* Content Section */}
            <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
                    {project.title}
                </h2>
                
                <p className="text-base lg:text-lg text-slate-400">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 pt-2">
                    {project.tech.map((slug: string) => (
                        <div key={slug} className="bg-slate-800/50 p-2 rounded-md border border-slate-700">
                            <Image
                                src={`https://cdn.simpleicons.org/${slug}/white`}
                                alt={`${slug} logo`}
                                width={24}
                                height={24}
                                className="hover:scale-110 transition-transform"
                                unoptimized={true}
                            />
                        </div>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                    {project.url && project.status === 'live' && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors duration-300">
                            Live Site <FiArrowUpRight />
                        </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' ? (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300">
                            <FiGithub /> Source Code
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-2 text-slate-500">
                            <FiLock /> Source Private
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;