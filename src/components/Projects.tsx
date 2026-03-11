import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Wrench, BarChart3, Shield, Database, Code2 } from 'lucide-react';

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
        title: 'HBS Bazaar',
        category: 'E-Commerce Platform',
        tech: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
        problem: 'Small-scale vendors lacked a centralized platform for inventory management and sales analytics, leading to stock discrepancies.',
        solution: 'Built a scalable e-commerce solution with modular components, asynchronous data fetching, and an integrated analytics dashboard.',
        impact: 'Improved inventory accuracy, enhanced user engagement through optimized UI, and enabled data-driven sales strategies.',
        icon: <Database className="text-holographic-purple" />,
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Smart Trolley (IoT)',
        category: 'Hardware-Software Integration',
        tech: ['Python', 'Embedded Systems', 'Daraja API', 'RFID'],
        problem: 'Long supermarket queues created friction in the customer experience, leading to cart abandonment and inefficient checkout processes.',
        solution: 'Developed an IoT-enabled self-checkout system with mobile scanning and automated M-Pesa payment integration using the Daraja API.',
        impact: 'Significantly reduced checkout times, minimized human error in billing, and improved overall retail efficiency.',
        icon: <Brain className="text-holographic-pink" />,
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80'
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
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-purple">Case Studies</h2>
                    <div className="h-1 w-20 bg-holographic-purple rounded-full" />
                    <p className="mt-6 text-gray-400 max-w-2xl italic">
                        "We don't just write code; we solve business problems with engineering precision."
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
                                <div className="absolute inset-0 bg-gradient-to-t from-holographic-dark to-transparent" />
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
                                    <motion.a whileHover={{ y: -2 }} href={project.github || '#'} target={project.github ? "_blank" : undefined} rel={project.github ? "noopener noreferrer" : undefined} className="p-2 glass-card hover:bg-white/10 transition-colors"><Github size={18} /></motion.a>
                                    <motion.a whileHover={{ y: -2 }} href={project.live || '#'} target={project.live ? "_blank" : undefined} rel={project.live ? "noopener noreferrer" : undefined} className="p-2 glass-card hover:bg-white/10 transition-colors"><ExternalLink size={18} /></motion.a>
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
