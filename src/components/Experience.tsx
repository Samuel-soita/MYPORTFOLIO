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
        title: 'Venture Capital Job Simulation',
        company: 'H2 Ventures · Forage',
        period: 'September 2026',
        location: 'Remote',
        description: [
            'Completed H2 Ventures\' Venture Capital job simulation focused on evaluating startups and investment opportunities.',
            'Applied comparable analysis, opportunity assessment, and success factors analysis to assess early-stage companies.',
            'Practiced startup financial modeling and venture capital financial modelling to support investment decisions.',
            'Strengthened skills in growth marketing, investment management, and startup evaluation.'
        ],
        tags: ['Venture Capital', 'Startup Evaluation', 'Financial Modeling', 'Comparable Analysis', 'Opportunity Assessment']
    },
    {
        title: 'Front-End Software Engineering Job Simulation',
        company: 'Skyscanner · Forage',
        period: 'September 2026',
        location: 'Remote',
        description: [
            'Completed a job simulation building a web application using React as a front-end engineer at Skyscanner.',
            'Developed a page for picking a travel date using Skyscanner\'s open-source Backpack React library.',
            'Customised the application and ran automated tests to ensure it rendered properly.'
        ],
        tags: ['React', 'JavaScript', 'Backpack', 'Front-End', 'Automated Testing']
    },
    {
        title: 'Software Development Job Simulation',
        company: 'Datacom · Forage',
        period: 'September 2026',
        location: 'Remote',
        description: [
            'Completed a simulation focused on how the software development team at Datacom approaches their work.',
            'Reviewed a web application and planned for future improvements.',
            'Identified the root cause of bugs and implemented a fix to improve the application.'
        ],
        tags: ['Software Development', 'Root Cause Analysis', 'Critical Thinking', 'Software Evaluation']
    },
    {
        title: 'Software Engineering Job Simulation',
        company: 'Skyscanner · Forage',
        period: 'September 2026',
        location: 'Remote',
        description: [
            'Completed a job simulation involving building a basic web app for Skyscanner\'s engineering team.',
            'Created a Dropwizard microservice to assist users in finding car rentals and hotels.',
            'Developed an Android application to display a user\'s flight itinerary using Backpack.'
        ],
        tags: ['Java', 'Dropwizard', 'Microservices', 'Android', 'Kotlin', 'Backpack', 'React']
    },
    {
        title: 'Technology Software Development Job Simulation',
        company: 'Citi · Forage',
        period: 'September 2026',
        location: 'Remote',
        description: [
            'Completed a job simulation involving hypothetical tasks to improve Citi\'s loan management system and stock market risk reporting.',
            'Created a state diagram of the loan management process using the Unified Modeling Language (UML).',
            'Researched potential machine learning systems to assess credit risk and provided recommendations for next steps.',
            'Used Java to build an internal tool visualizing stock market risk in real time.'
        ],
        tags: ['Java', 'UML', 'System Design', 'Machine Learning', 'Data Visualization', 'Risk Assessment']
    },
    {
        title: 'Cybersecurity Job Simulation',
        company: 'Mastercard · Forage',
        period: 'September 2026',
        location: 'Remote',
        description: [
            'Completed a job simulation serving as an analyst on Mastercard\'s Security Awareness Team.',
            'Helped identify and report security threats such as phishing.',
            'Analyzed which areas of the business needed more robust security training and implemented training courses and procedures for those teams.'
        ],
        tags: ['Cybersecurity', 'Security Awareness', 'Phishing', 'Data Analysis', 'Security Training']
    },
    {
        title: 'Cyber Security Operations Job Simulation',
        company: 'Datacom · Forage',
        period: 'August 2026',
        location: 'Remote',
        description: [
            'Completed a simulation focused on how Datacom\'s cybersecurity team helps protect its clients.',
            'Investigated a cyberattack and produced a comprehensive report documenting findings and outlining key recommendations to improve a client\'s cybersecurity posture.',
            'Conducted a comprehensive risk assessment to identify vulnerabilities and prioritize remediation strategies.',
            'Applied analytical skills, OSINT research, and security analysis to deliver actionable risk management recommendations.'
        ],
        tags: ['Risk Assessment', 'Security Analysis', 'OSINT', 'Incident Response', 'Risk Management']
    },
    {
        title: 'Advanced Software Engineering Job Simulation',
        company: 'Walmart USA · Forage',
        period: 'August 2026',
        location: 'Remote',
        description: [
            'Completed the Advanced Software Engineering Job Simulation solving difficult technical projects for a variety of teams at Walmart.',
            'Developed a novel version of a heap data structure in Java for Walmart\'s shipping department, showcasing strong problem-solving and algorithmic skills.',
            'Designed a UML class diagram for a data processor, considering different operating modes and database connections.',
            'Created an entity relationship diagram to design a new database accounting for all requirements provided by Walmart\'s pet department.'
        ],
        tags: ['Java', 'Data Structures', 'UML', 'Database Design', 'SQL', 'Software Architecture']
    },
    {
        title: 'Software Engineering Job Simulation',
        company: 'Commonwealth Bank · Forage',
        period: 'August 2026',
        location: 'Remote',
        description: [
            'Completed a job simulation focused on backend and frontend development for Commonwealth Bank\'s Software Engineering team.',
            'Extended the backend using C# to enable icons, gaining proficiency in .NET, MongoDB, Postman, and Git.',
            'Modified an existing React/Redux frontend to enable icons, expanding expertise in React, Redux, TypeScript, NPM, and Git.',
            'Strengthened coding skills with C#, xUnit, and .NET unit testing, ensuring comprehensive code coverage and support for icons.',
            'Improved Git and GitHub skills, emphasizing effective communication through the submission of changes for team review.'
        ],
        tags: ['C#', '.NET', 'MongoDB', 'React', 'Redux', 'TypeScript', 'xUnit', 'Postman']
    },
    {
        title: 'Software Engineering Job Simulation',
        company: 'Hewlett Packard Enterprise (HPE) · Forage',
        period: 'August 2026',
        location: 'Remote',
        description: [
            'Wrote a proposal for a RESTful web service to manage a list of employees.',
            'Built a web server application in Java Spring Boot that can accept and respond to HTTP requests as well as support uploading JSON data.',
            'Developed and ran a set of unit tests to assess my Java Spring Boot application\'s performance.'
        ],
        tags: ['Java', 'Spring Boot', 'REST API', 'API Development', 'JSON', 'HTTP', 'Unit Testing', 'Test Frameworks', 'HPE GreenLake']
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
