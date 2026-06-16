import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Wrench, BarChart3, Shield, Database, Code2, Film } from 'lucide-react';

interface Project {
    title: string;
    category: string;
    tech: string[];
    problem: string;
    solution: string;
    impact: string;
    icon: ReactNode;
    image: string;
    live?: string;
    github?: string;
}

const projects: Project[] = [
    {
        title: 'PalaceApp',
        category: 'Enterprise Resource Management',
        tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'PWA'],
        problem: 'Legacy HTTP polling bottlenecks and low-connectivity environments hindered complex enterprise resource management, causing data latency and high server loads.',
        solution: 'Architected an offline-first PWA with a custom IndexedDB background sync daemon, real-time WebSocket (Socket.io) event-driven architecture, and multi-tier RBAC.',
        impact: 'Successfully deployed into production and actively managing operations for 100+ enterprise users. Reduced API load by >80% and achieved instant global state sync.',
        icon: <Database className="text-holographic-purple" />,
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        live: 'https://palace-pwsetsxc6-samuels-projects-2d3d52d2.vercel.app/login'
    },
    {
        title: 'Project Tracker',
        category: 'Productivity & Management',
        tech: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript', 'Prisma', 'Redux'],
        problem: 'Manual tracking of tasks and team performance caused coordination delays and a lack of real-time visibility into project progress.',
        solution: 'Engineered a full-stack TypeScript ecosystem featuring role-based access control, real-time CRUD APIs, and automated progress reporting.',
        impact: 'Streamlined team collaboration, reduced reporting overhead, and provided admins with actionable productivity insights.',
        icon: <Code2 className="text-holographic-cyan" />,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        live: 'https://project-company-tracker-frontend.vercel.app/'
    },
    {
        title: 'CineHub',
        category: 'Movie Aggregator Platform',
        tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'TMDB API', 'node-cron'],
        problem: 'Movie discovery data was fragmented across TMDB, OMDb, and streaming providers, with no unified Netflix-style experience or automated catalog updates.',
        solution: 'Built a holographic movie aggregator with trending/popular/upcoming rows, genre browsing, 3D tilt cards, trailer playback, live search with TMDB fallback, localStorage watchlists, and 6-hour cron sync via Node.js, Express, and MongoDB.',
        impact: 'Delivers a single discovery hub with hero banners, movie detail pages, "Where to Watch" links, and hands-free catalog sync — without hosting or streaming content.',
        icon: <Film className="text-holographic-pink" />,
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
        live: 'https://movie-soko.vercel.app/'
    },
    {
        title: 'Event Management System',
        category: 'System Administration',
        tech: ['Flask', 'React.js', 'MySQL', 'JWT Authentication'],
        problem: 'Coordinating multi-user event registrations and managing large datasets manually was prone to security risks and data integrity issues.',
        solution: 'Designed a secure registration platform with JWT-based authentication and a robust MySQL backend for high-concurrency data handling.',
        impact: 'Ensured 100% data integrity, provided real-time event analytics, and hardened the system against unauthorized access.',
        icon: <Shield className="text-holographic-cyan" />,
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80',
        live: 'https://event-management-system-rosy-delta.vercel.app/'
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-black/40">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-purple">Full Stack Projects</h2>
                    <div className="h-1 w-20 bg-holographic-purple rounded-full" />
                    <p className="mt-6 text-gray-400 max-w-2xl italic">
                        Production applications spanning frontend UIs, backend APIs, and database-driven features.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="holographic-card group flex flex-col h-full hover:border-holographic-purple/50 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden border-b border-white/5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-40 group-hover:opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-holographic-dark to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-8 flex items-end space-x-4">
                                    <div className="glass-card p-3 shadow-[0_0_20px_rgba(157,0,255,0.2)]">
                                        {project.icon}
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.25em] text-holographic-cyan font-bold block mb-1">{project.category}</span>
                                        <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                                    </div>
                                </div>
                                <div className="absolute top-6 right-8 flex space-x-3">
                                    {project.github && (
                                        <motion.a whileHover={{ y: -2 }} href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 glass-card hover:bg-white/10 transition-colors"><Github size={18} /></motion.a>
                                    )}
                                    {project.live && (
                                        <motion.a whileHover={{ y: -2 }} href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 glass-card hover:bg-white/10 transition-colors"><ExternalLink size={18} /></motion.a>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 flex-grow space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="mt-1 mr-3 p-1 rounded bg-holographic-cyan/10 text-holographic-cyan"><Brain size={14} /></div>
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-holographic-cyan mb-1">Problem</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">{project.problem}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="mt-1 mr-3 p-1 rounded bg-holographic-purple/10 text-holographic-purple"><Wrench size={14} /></div>
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-holographic-purple mb-1">Solution</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">{project.solution}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="mt-1 mr-3 p-1 rounded bg-holographic-pink/10 text-holographic-pink"><BarChart3 size={14} /></div>
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-holographic-pink mb-1">Impact</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed font-medium">{project.impact}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[9px] px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-500 hover:text-holographic-cyan hover:border-holographic-cyan/30 transition-all cursor-default font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
