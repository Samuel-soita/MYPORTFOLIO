import { motion } from 'framer-motion';
import { Mail, MessageSquare, Share2, Star, Linkedin, Github, Coffee } from 'lucide-react';

const connectOptions = [
    { label: 'Buy me coffee', icon: <Coffee size={20} />, href: 'https://buymeacoffee.com/samuelsoita', desc: 'Fuel my innovation' },
    { label: 'Talk to Me', icon: <MessageSquare size={20} />, href: 'mailto:samuelsoita79@gmail.com', desc: 'Direct technical consultation' },
    { label: 'Follow on Socials', icon: <Share2 size={20} />, href: 'https://linkedin.com/in/samuel-soita', desc: 'Industry insights & updates' },
    { label: 'Give Feedback', icon: <Star size={20} />, href: '#', desc: 'Help me improve my systems' },
    { label: 'Connect via Email/Phone', icon: <Mail size={20} />, href: 'mailto:samuelsoita79@gmail.com', desc: 'samuelsoita79@gmail.com | 0768640343' }
];

export const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-cyan underline underline-offset-8 decoration-holographic-cyan/20">Ways to Connect</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-holographic-cyan to-transparent rounded-full mx-auto lg:mx-0" />
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto lg:mx-0 font-medium">
                        Let's bridge the gap between architectural vision and executable reality.
                        Choose your preferred protocol to initiate a handshake.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {connectOptions.map((option, idx) => (
                        <motion.a
                            key={option.label}
                            href={option.href}
                            target={option.href.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="holographic-card p-6 flex flex-col items-center text-center group hover:bg-holographic-cyan/5 border-white/5"
                        >
                            <div className="w-14 h-14 glass-card flex items-center justify-center mb-6 text-holographic-cyan group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,243,255,0.15)] group-hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                                {option.icon}
                            </div>
                            <h3 className="text-xs font-bold text-white mb-2 tracking-[0.15em] uppercase border-b border-white/5 pb-2 group-hover:border-holographic-cyan/30 transition-colors">{option.label}</h3>
                            <p className="text-[10px] text-gray-500 font-bold leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{option.desc}</p>
                        </motion.a>
                    ))}
                </div>

                {/* Reused Professional CTA */}
                <div className="mt-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto holographic-card p-12 md:p-20 border-holographic-cyan/20 bg-gradient-to-b from-holographic-cyan/5 to-transparent text-center"
                    >
                        <h2 className="text-4xl md:text-7xl font-black mb-8 neon-text-cyan tracking-tighter leading-none px-4">
                            Let’s build scalable <br className="hidden md:block" /> systems together.
                        </h2>
                        <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
                            Available for full-time & contract opportunities. <br />
                            <span className="text-sm text-gray-500 mt-6 block uppercase tracking-[0.4em] font-black">Nairobi, Kenya | Remote Worldwide</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="mailto:samuelsoita79@gmail.com"
                                className="holographic-button px-12 py-5 text-xl font-black shadow-[0_0_30px_rgba(0,243,255,0.3)]"
                            >
                                Initiate Connection
                            </motion.a>
                            <div className="flex space-x-6">
                                <a href="https://linkedin.com/in/samuel-soita" target="_blank" className="p-5 rounded-full glass-card hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"><Linkedin size={24} /></a>
                                <a href="https://github.com/Samuel-soita" target="_blank" className="p-5 rounded-full glass-card hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"><Github size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
