import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
    {
        institution: 'Moringa School',
        degree: 'Software Engineering Full stack development',
        period: 'May 2025 – Nov 2025',
        focus: 'Comprehensive Software Engineering, Full Stack Web Development (HTML/CSS, JavaScript, Python/Flask, React), System Design, and Database Management.'
    },
    {
        institution: 'University of Nairobi',
        degree: 'BSc. Microprocessor & Instrumentation Technology',
        period: 'Sept 2019 – Jun 2023',
        focus: 'Modern Physics (Nuclear/Atomic), Materials Science, Electricity & Magnetism, Statistical Physics, Antenna Theory, Physical Optics, Signal Recovery & Processing, Control Systems, Mathematical Physics, Microwaves, Database Systems, Distributed Systems, Operating Systems, Data Structures & Algorithms, Mobile communication, Computer security, and Embedded Systems.'
    }
];

const certifications = [
    'Google Cybersecurity Certificate | April 2024',
    'Introduction to Cybersecurity | CISCO | April 2024',
    'African Management Institute (AMI) Program',
    'Software Development Certificate (Moringa School)'
];

export const Education = () => {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-cyan">Academic Foundation</h2>
                    <div className="h-1 w-20 bg-holographic-cyan rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        {education.map((edu) => (
                            <motion.div
                                key={edu.institution}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 border-l-4 border-holographic-cyan"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-holographic-cyan/10 flex items-center justify-center text-holographic-cyan">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                                        <p className="text-sm text-holographic-cyan italic">{edu.degree}</p>
                                    </div>
                                    <span className="ml-auto text-xs text-gray-500 font-mono">{edu.period}</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                    <span className="text-holographic-cyan font-bold mr-2 uppercase text-[10px] tracking-widest">Focus:</span>
                                    {edu.focus}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="holographic-card p-8 bg-gradient-to-b from-holographic-purple/10 to-transparent"
                    >
                        <div className="flex items-center space-x-3 mb-8">
                            <Award className="text-holographic-purple" />
                            <h3 className="text-xl font-bold text-white">Certifications</h3>
                        </div>
                        <ul className="space-y-4">
                            {certifications.map(cert => (
                                <li key={cert} className="flex items-center text-sm text-gray-400 group">
                                    <div className="w-2 h-2 rounded-full bg-holographic-purple mr-3 group-hover:scale-150 transition-transform" />
                                    <span className="group-hover:text-holographic-purple transition-colors">{cert}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 p-6 glass-card bg-holographic-purple/5 border-holographic-purple/20">
                            <div className="flex items-center space-x-3 mb-4">
                                <BookOpen size={18} className="text-holographic-purple" />
                                <span className="text-xs font-bold uppercase tracking-widest text-holographic-purple">Interests</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['AI & Automation', 'Cybersecurity', 'Piano', 'Embedded Systems'].map(interest => (
                                    <span key={interest} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
