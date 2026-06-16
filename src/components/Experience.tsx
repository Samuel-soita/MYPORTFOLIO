import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        title: 'Software Engineer (Full Stack)',
        company: 'RemoteXcelsz, UK',
        period: 'Nov 2024 – Present',
        location: 'Remote',
        description: [
            'Build and maintain backend services with Node.js and Express for production web applications.',
            'Develop and optimize RESTful APIs consumed by frontend teams and third-party integrations.',
            'Collaborate across frontend and backend to deliver end-to-end features in Agile sprints.',
            'Participate in code reviews, debugging, and performance tuning across the full stack.'
        ],
        tags: ['Node.js', 'Express', 'REST APIs', 'Full Stack']
    },
    {
        title: 'Frontend Software Engineer',
        company: 'ElCode, UK',
        period: 'Nov 2024 – Present',
        location: 'Remote (Part-Time)',
        description: [
            'Build responsive frontend applications with React and modern JavaScript.',
            'Integrate UI components with secure backend APIs for reliable data flow.',
            'Partner with backend engineers to improve API contracts and application performance.',
            'Test and debug frontend features to maintain production quality.'
        ],
        tags: ['React', 'TypeScript', 'Frontend', 'API Integration']
    },
    {
        title: 'Software Engineer (Full Stack) · Freelance',
        company: 'Nairobi, Kenya',
        period: 'Jan 2024 – Present',
        location: 'Remote',
        description: [
            'Deliver full-stack web applications with React frontends and Node.js/Express backends.',
            'Design PostgreSQL and MongoDB schemas with optimized queries for scalable data access.',
            'Implement authentication, authorization, and role-based access control in production apps.',
            'Containerized MCP server deployments with Docker for reproducible AI tool integrations.',
            'Ship end-to-end solutions from UI design through API development and database integration.'
        ],
        tags: ['React', 'Node.js', 'PostgreSQL', 'Docker']
    },
    {
        title: 'IT Intern',
        company: 'County Government of Bungoma',
        period: 'Jun 2022 – Sep 2022',
        location: 'Bungoma, Kenya',
        description: [
            'Orchestrated the successful installation of WiFi networks, significantly improving communication efficiency within government offices.',
            'Managed a team to update Windows operating systems from 7 to 10, ensuring compliance with modern software standards.',
            'Collaborated with IT technicians to diagnose and resolve complex network issues promptly, reducing downtime.',
            'Identified and implemented preventive measures to mitigate potential network vulnerabilities, enhancing system security.'
        ],
        tags: ['Network Optimization', 'OS Migration', 'System Security', 'Troubleshooting']
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
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-cyan">Software Engineering Experience</h2>
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
