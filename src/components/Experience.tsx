import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        title: 'Agile Software Engineer & Fullstack Developer',
        company: 'RemoteXcelsz, UK',
        period: 'Nov 2024 – Present',
        location: 'Remote',
        description: [
            'Designed and maintained backend services using Node.js and Express to support scalable web applications.',
            'Built and optimized RESTful APIs to ensure high performance and reliability.',
            'Collaborated with frontend teams to ensure seamless API integration.',
            'Participated in code reviews, debugging sessions, and performance optimization within an Agile team.'
        ],
        tags: ['Node.js', 'Express', 'API Optimization', 'Agile']
    },
    {
        title: 'Frontend Developer (API-Integrated)',
        company: 'ElCode, UK',
        period: 'Nov 2024 – Present',
        location: 'Remote (Part-Time)',
        description: [
            'Integrated frontend applications with secure backend APIs.',
            'Collaborated with backend engineers to optimize API usage and performance.',
            'Improved application reliability through structured debugging and testing.'
        ],
        tags: ['React', 'API Integration', 'Debugging']
    },
    {
        title: 'Fullstack Developer (Freelance)',
        company: 'Nairobi, Kenya',
        period: 'Jan 2024 – Present',
        location: 'Remote',
        description: [
            'Developed backend systems using Node.js, Express, and PostgreSQL for production applications.',
            'Designed database schemas and optimized queries for performance and scalability.',
            'Implemented authentication, authorization, and role-based access control.',
            'Managed Git workflows and collaborated asynchronously with distributed teams.'
        ],
        tags: ['PostgreSQL', 'JWT', 'System Design']
    },
    {
        title: 'IT Intern',
        company: 'County Government of Bungoma',
        period: 'Jun 2022 – Sep 2022',
        location: 'Bungoma, Kenya',
        description: [
            'Assisted in maintaining IT systems, diagnosing software/network issues, and managing databases.',
            'Supported data automation initiatives, digital record management, and user training.',
            'Documented workflows and improved efficiency of internal ICT operations.'
        ],
        tags: ['System Admin', 'Networking', 'Troubleshooting']
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-cyan">Professional Journey</h2>
                    <div className="h-1 w-20 bg-holographic-cyan rounded-full" />
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.title + exp.company}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="holographic-card p-8 relative"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                                    <div className="flex items-center text-holographic-cyan space-x-4 text-sm font-medium">
                                        <span className="flex items-center"><Briefcase size={14} className="mr-1" /> {exp.company}</span>
                                        <span className="flex items-center"><Calendar size={14} className="mr-1" /> {exp.period}</span>
                                        <span className="flex items-center"><MapPin size={14} className="mr-1" /> {exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start">
                                        <span className="text-holographic-cyan mr-2">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-holographic-cyan/10 border border-holographic-cyan/20 text-[10px] uppercase tracking-widest text-holographic-cyan font-bold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
