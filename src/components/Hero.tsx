import { motion } from 'framer-motion';
import { Shield, Database, Cpu, ArrowRight, ExternalLink } from 'lucide-react';
import soitaPhoto from '../assets/soita.png';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden bg-holographic-dark">
            {/* Dynamic Background Elements */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-holographic-cyan/5 rounded-full blur-[140px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-holographic-purple/5 rounded-full blur-[140px] animate-pulse pointer-events-none" style={{ animationDelay: '3s' }} />

            {/* Subtle Grid Interaction */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-holographic-cyan/20 bg-holographic-cyan/5 mb-8">
                        <Shield size={16} className="text-holographic-cyan" />
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-holographic-cyan">Full Stack Developer | Frontend & Backend Architect</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="block"
                        >
                            Architecting
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-holographic-cyan neon-text-cyan italic block"
                        >
                            Modern
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-gradient-to-r from-holographic-cyan via-holographic-purple to-holographic-pink bg-clip-text text-transparent block"
                        >
                            Digital Success.
                        </motion.span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        Full-Stack Software Engineer dedicated to building hyper-secure,
                        high-concurrency systems. Bridging <span className="text-holographic-cyan">hardware-level instrumentation</span> with
                        <span className="text-holographic-purple"> enterprise cloud scale</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="holographic-button group w-full sm:w-auto flex items-center justify-center"
                        >
                            Analyze My Work
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/resume.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full border border-white/10 transition-all font-bold text-gray-300 w-full sm:w-auto flex items-center justify-center hover:bg-white/5"
                        >
                            Resume
                            <ExternalLink size={14} className="ml-2 opacity-50" />
                        </motion.a>
                    </div>

                    <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 pt-12 border-t border-white/5">
                        {[
                            { label: 'Cloud Systems', val: 'AWS' },
                            { label: 'Backend Architecture', val: 'Node/TS' },
                            { label: 'Hardened Security', icon: <Lock size={12} /> }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-xl font-black text-white flex items-center">{stat.val || stat.icon}</span>
                                <span className="text-[8px] uppercase tracking-widest text-gray-500 mt-1 font-bold">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Advanced Holographic Frame */}
                    <div className="relative w-80 h-96 md:w-[450px] md:h-[550px]">
                        {/* Orbits & Rings */}
                        <div className="absolute inset-0 border-[1px] border-holographic-cyan/10 rounded-[4rem] animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-4 border-[1px] border-holographic-purple/10 rounded-[3.5rem] animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Tech Floaties */}
                        <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-6 -right-6 w-16 h-16 glass-card flex items-center justify-center text-holographic-cyan shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                            <Cpu size={28} />
                        </motion.div>
                        <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 0.5 }} className="absolute bottom-12 -left-10 w-16 h-16 glass-card flex items-center justify-center text-holographic-purple shadow-[0_0_20px_rgba(157,0,255,0.2)]">
                            <Database size={28} />
                        </motion.div>
                        <motion.div animate={{ x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute top-1/2 -right-12 w-14 h-14 glass-card flex items-center justify-center text-holographic-pink">
                            <Shield size={24} />
                        </motion.div>

                        <div className="w-full h-full rounded-[3.5rem] overflow-hidden border border-white/10 relative group bg-black/40 backdrop-blur-sm">
                            <img
                                src={soitaPhoto}
                                alt="Samuel Soita"
                                className="w-full h-full object-cover mix-blend-screen opacity-90 group-hover:scale-110 transition-transform duration-[2s] pointer-events-none"
                            />

                            {/* Data Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-holographic-dark via-transparent to-transparent opacity-80" />
                            <div className="absolute top-12 left-12 opacity-20 font-mono text-[10px] space-y-1 hidden md:block select-none pointer-events-none font-black tracking-tighter">
                                <p className="text-holographic-cyan">SOURCE: LOCALHOST:3000</p>
                                <p className="text-holographic-purple">STATUS: ACTIVE_ENGINEER</p>
                                <p className="text-white">IP: 192.168.1.1</p>
                                <p className="text-holographic-pink">SEC_AUTH: VERIFIED</p>
                            </div>

                            {/* Holographic Scanline */}
                            <div className="absolute inset-0 pointer-events-none opacity-30 shadow-inner bg-[linear-gradient(rgba(0,243,255,0.1)_2px,transparent_2px)] bg-[size:100%_4px] animate-[shimmer_10s_linear_infinite]" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

import { Lock } from 'lucide-react';
