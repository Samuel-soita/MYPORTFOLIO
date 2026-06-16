import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
    Mail, MessageSquare, Share2, Star, Linkedin, Github, Coffee,
    Briefcase, FileText, Phone
} from 'lucide-react';

const EMAIL = 'samuelsoita79@gmail.com';
const PHONE = '+254 768640343';
const PHONE_TEL = 'tel:+254768640343';

interface ConnectLink {
    label: string;
    desc: string;
    href: string;
    icon: ReactNode;
    external?: boolean;
}

interface ConnectGroup {
    title: string;
    subtitle: string;
    items: ConnectLink[];
    columns?: 2 | 3;
}

const connectGroups: ConnectGroup[] = [
    {
        title: 'Work With Me',
        subtitle: 'Hiring, quotes, and project inquiries',
        columns: 3,
        items: [
            {
                label: 'Hire Me',
                icon: <Briefcase size={20} />,
                href: `mailto:${EMAIL}?subject=Hire%20Me%20-%20Full%20Stack%20Software%20Engineer`,
                desc: 'Full stack software engineer roles'
            },
            {
                label: 'Buy Me Coffee',
                icon: <Coffee size={20} />,
                href: 'https://buymeacoffee.com/samuelsoita',
                desc: 'Support my work',
                external: true
            },
            {
                label: 'Get a Quote',
                icon: <FileText size={20} />,
                href: `mailto:${EMAIL}?subject=Project%20Quote%20Request`,
                desc: 'Frontend, backend, or full stack builds'
            }
        ]
    },
    {
        title: 'How to Reach Me',
        subtitle: 'Email, phone, or direct message',
        columns: 3,
        items: [
            {
                label: 'Email',
                icon: <Mail size={20} />,
                href: `mailto:${EMAIL}`,
                desc: EMAIL
            },
            {
                label: 'Phone',
                icon: <Phone size={20} />,
                href: PHONE_TEL,
                desc: PHONE
            },
            {
                label: 'Message Me',
                icon: <MessageSquare size={20} />,
                href: `mailto:${EMAIL}?subject=Hello%20Samuel`,
                desc: 'Quick note or question'
            }
        ]
    },
    {
        title: 'Stay Connected',
        subtitle: 'Follow my work or share feedback',
        columns: 2,
        items: [
            {
                label: 'LinkedIn & GitHub',
                icon: <Share2 size={20} />,
                href: 'https://linkedin.com/in/samuel-soita',
                desc: 'Professional updates & repos',
                external: true
            },
            {
                label: 'Give Feedback',
                icon: <Star size={20} />,
                href: `mailto:${EMAIL}?subject=Portfolio%20Feedback`,
                desc: 'Help me improve'
            }
        ]
    }
];

const ConnectCard = ({ item, delay }: { item: ConnectLink; delay: number }) => (
    <motion.a
        href={item.href}
        target={item.external || item.href.startsWith('http') ? '_blank' : undefined}
        rel={item.external || item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="holographic-card p-6 flex flex-col items-center text-center group hover:bg-holographic-cyan/5 border-white/5 h-full"
    >
        <div className="w-14 h-14 glass-card flex items-center justify-center mb-5 text-holographic-cyan group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,243,255,0.15)] group-hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]">
            {item.icon}
        </div>
        <h3 className="text-xs font-bold text-white mb-2 tracking-[0.15em] uppercase border-b border-white/5 pb-2 w-full group-hover:border-holographic-cyan/30 transition-colors">
            {item.label}
        </h3>
        <p className="text-[10px] text-gray-500 font-bold leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity uppercase tracking-widest break-all">
            {item.desc}
        </p>
    </motion.a>
);

export const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-black/20">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-cyan underline underline-offset-8 decoration-holographic-cyan/20">
                        Ways to Connect
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-holographic-cyan to-transparent rounded-full mx-auto" />
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-medium">
                        Open to junior and mid-level full stack software engineer opportunities.
                        Choose how you&apos;d like to reach out.
                    </p>
                </motion.div>

                <div className="space-y-14">
                    {connectGroups.map((group, groupIdx) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIdx * 0.08 }}
                        >
                            <div className="mb-6 text-center">
                                <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-holographic-cyan mb-1">
                                    {group.title}
                                </h3>
                                <p className="text-xs text-gray-500">{group.subtitle}</p>
                            </div>

                            <div
                                className={
                                    group.columns === 3
                                        ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-5'
                                        : 'grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto'
                                }
                            >
                                {group.items.map((item, idx) => (
                                    <ConnectCard
                                        key={item.label}
                                        item={item}
                                        delay={groupIdx * 0.08 + idx * 0.06}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="holographic-card p-10 md:p-16 border-holographic-cyan/20 bg-gradient-to-b from-holographic-cyan/5 to-transparent text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-6 neon-text-cyan tracking-tighter leading-tight">
                            Open to full stack software engineer roles
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium">
                            Junior to mid-level · Frontend & backend · Full-time or contract
                        </p>
                        <p className="text-sm text-gray-500 mb-10 uppercase tracking-[0.35em] font-black">
                            Nairobi, Kenya · Remote Worldwide
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href={`mailto:${EMAIL}`}
                                className="holographic-button px-10 py-4 text-lg font-black shadow-[0_0_30px_rgba(0,243,255,0.3)]"
                            >
                                Get In Touch
                            </motion.a>
                            <div className="flex space-x-4">
                                <a
                                    href="https://linkedin.com/in/samuel-soita"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full glass-card hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={22} />
                                </a>
                                <a
                                    href="https://github.com/Samuel-soita"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full glass-card hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                                    aria-label="GitHub"
                                >
                                    <Github size={22} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
