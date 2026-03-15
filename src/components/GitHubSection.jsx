import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Layout } from 'lucide-react';

const GitHubSection = () => {
    return (
        <section className="py-24 bg-brand-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-sm font-mono text-brand-emerald uppercase tracking-widest mb-4 italic">Open Source</h2>
                <h3 className="text-4xl font-bold mb-12">GitHub Contributions</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl flex flex-col items-center justify-center border-white/5"
                    >
                        <Github className="text-brand-emerald mb-4" size={40} />
                        <h4 className="text-2xl font-bold mb-2">Sanket-Pandit-Patil</h4>
                        <p className="text-gray-400 mb-6">Software Development Engineer</p>
                        <a
                            href="https://github.com/Sanket-Pandit-Patil"
                            target="_blank"
                            className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-brand-emerald hover:text-brand-dark transition-all"
                        >
                            View Profile
                        </a>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Repos", value: "35+", icon: <Layout size={18} /> },
                            { label: "Stars", value: "116", icon: <Star size={18} /> },
                            { label: "Forks", value: "24", icon: <GitBranch size={18} /> },
                            { label: "Commits", value: "450+", icon: <Github size={18} /> }
                        ].map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-6 rounded-3xl flex flex-col items-center justify-center border-white/5"
                            >
                                <div className="text-brand-emerald mb-2">{stat.icon}</div>
                                <div className="text-2xl font-black mb-1">{stat.value}</div>
                                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                            </motion.div>
                        ))}

                        {/* Contribution Image (Placeholder/Mockup for now as dynamic is harder without backend) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="col-span-2 md:col-span-4 glass p-6 rounded-3xl border-white/5 mt-4"
                        >
                            <h5 className="text-left text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Contribution Graph</h5>
                            <img
                                src="https://ghchart.rshah.org/10b981/Sanket-Pandit-Patil"
                                alt="Sanket's GitHub Contributions"
                                className="w-full opacity-80 hover:opacity-100 transition-opacity rounded-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubSection;
