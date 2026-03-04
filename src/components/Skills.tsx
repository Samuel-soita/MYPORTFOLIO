import { motion } from 'framer-motion';
import {
    Code2, Database, Shield, Layout,
    Server, Globe, Lock,
    Workflow, Cloud,
    FileCode, Layers,
    Box, Zap, Infinity
} from 'lucide-react';

const techGroups = [
    {
        title: 'Frontend Architecture',
        icon: <Layout className="text-holographic-purple" />,
        skills: [
            { name: 'HTML5 / CSS3', icon: <FileCode size={14} /> },
            { name: 'JavaScript (ES6+)', icon: <Code2 size={14} /> },
            { name: 'React.js', icon: <Box size={14} /> },
            { name: 'TypeScript', icon: <Code2 size={14} /> },
            { name: 'Tailwind CSS', icon: <Layers size={14} /> }
        ],
        gradient: 'from-holographic-purple/20 to-holographic-pink/5'
    },
    {
        title: 'Backend & Logic',
        icon: <Server className="text-holographic-cyan" />,
        skills: [
            { name: 'Flask (Python)', icon: <FileCode size={14} /> },
            { name: 'Node.js', icon: <Server size={14} /> },
            { name: 'Express.js', icon: <Workflow size={14} /> },
            { name: 'REST / GraphQL', icon: <Zap size={14} /> },
            { name: 'Authentication', icon: <Lock size={14} /> }
        ],
        gradient: 'from-holographic-cyan/20 to-holographic-blue/5'
    },
    {
        title: 'Persistence Layer',
        icon: <Database className="text-holographic-blue" />,
        skills: [
            { name: 'Prisma ORM', icon: <Database size={14} /> },
            { name: 'PostgreSQL', icon: <Database size={14} /> },
            { name: 'MySQL', icon: <Database size={14} /> },
            { name: 'NoSQL Concepts', icon: <Layers size={14} /> },
            { name: 'Optimization', icon: <Zap size={14} /> }
        ],
        gradient: 'from-holographic-blue/20 to-holographic-cyan/5'
    },
    {
        title: 'DevOps & Intelligence',
        icon: <Infinity className="text-white" />,
        skills: [
            { name: 'AWS (EC2/S3)', icon: <Cloud size={14} /> },
            { name: 'Vercel / Render / Railway', icon: <Globe size={14} /> },
            { name: 'Docker', icon: <Box size={14} /> },
            { name: 'CI / CD', icon: <Workflow size={14} /> },
            { name: 'Security Audit', icon: <Shield size={14} /> }
        ],
        gradient: 'from-white/10 to-transparent'
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 neon-text-purple tracking-tight"
                    >
                        Engineering Ecosystem
                    </motion.h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-holographic-cyan via-holographic-purple to-holographic-pink rounded-full mb-8 shadow-[0_0_15px_rgba(157,0,255,0.4)]" />
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                        Strategic selection of modern technologies prioritized for <span className="text-holographic-cyan font-bold">performance</span>,
                        <span className="text-holographic-purple font-bold"> scalability</span>, and
                        <span className="text-holographic-pink font-bold"> reliability</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techGroups.map((group, idx) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, type: 'spring', stiffness: 100 }}
                            className={`holographic-card p-8 bg-gradient-to-br ${group.gradient} group/card border-white/5 hover:border-white/20`}
                        >
                            <div className="w-14 h-14 glass-card flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover/card:scale-110 transition-transform duration-500">
                                {group.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-8 text-white tracking-widest uppercase text-left border-b border-white/5 pb-4">
                                {group.title}
                            </h3>
                            <div className="flex flex-col space-y-6">
                                {group.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center text-sm font-medium text-gray-400 group cursor-default"
                                    >
                                        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mr-4 group-hover:border-holographic-cyan/50 group-hover:bg-holographic-cyan/5 transition-all duration-300 shadow-inner">
                                            <span className="text-gray-500 group-hover:text-holographic-cyan transition-colors">
                                                {skill.icon}
                                            </span>
                                        </div>
                                        <span className="group-hover:text-white transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
