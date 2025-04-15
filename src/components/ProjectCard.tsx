import { motion } from 'framer-motion';
import Image from 'next/image';

// Define an interface for the project prop
interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string; // Optional URL
  githubUrl?: string; // Optional GitHub URL
  status: 'coming-soon' | 'live' | 'development';
  // Add other fields if necessary
}

const ProjectCard = ({ project }: { project: Project }) => {

    return (
        <motion.div
            className="h-screen flex items-center justify-center px-8"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
                {/* Image Section */}
                <motion.div
                    className="relative h-96 rounded-2xl overflow-hidden border-2 border-violet-100"
                    whileHover={{ scale: 0.98 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent z-10" />

                    {/* Status Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-violet-900/80 flex items-center justify-center z-20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                    >
                        <p className="text-2xl font-bold text-white">
                            {project.status === 'coming-soon' ? 'Coming Soon' :
                                project.status === 'live' ? 'See Website' : 'In Development'}
                        </p>
                    </motion.div>

                    <Image
                        src="/project-placeholder.jpg"
                        alt={project.title}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                    />

                </motion.div>

                {/* Content Section */}
                <div className="flex flex-col justify-center space-y-6">
                    <motion.div
                        className="flex items-center gap-3 group cursor-pointer"
                        whileHover={{ x: 5 }}
                    >
                        <h2 className="text-4xl font-bold text-violet-900">
                            {project.title}
                        </h2>
                        {project.githubUrl && (
                            <Image
                                src="https://cdn.simpleicons.org/github/8B5CF6"
                                alt="GitHub"
                                width={28}
                                height={28}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        )}
                    </motion.div>

                    <p className="text-lg text-gray-600">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((slug: string) => (
                            <Image
                                key={slug}
                                src={`https://cdn.simpleicons.org/${slug}/8B5CF6`}
                                alt={`${slug} logo`}
                                width={32}
                                height={32}
                                className="hover:scale-110 transition-transform"
                                unoptimized={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;