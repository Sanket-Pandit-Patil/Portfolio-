import { motion } from 'framer-motion';
import { Brain, Trophy, CheckCircle2, Award } from 'lucide-react';

const ProblemSolving = () => {
    const achievements = [
        {
            platform: "LeetCode",
            stat: "550+ Solved",
            detail: "Advanced Proficiency in DSA",
            icon: <CheckCircle2 size={24} className="text-[#FFA116]" />
        },
        {
            platform: "CodeChef",
            stat: "3 Star Rated",
            detail: "Peak Rating: 1626",
            icon: <Trophy size={24} className="text-[#37474F]" />
        },
        {
            platform: "Problem Solving",
            stat: "Expert",
            detail: "Strong Foundation in Logic",
            icon: <Brain size={24} className="text-brand-emerald" />
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-sm font-mono text-brand-emerald uppercase tracking-widest mb-4 italic underline underline-offset-8">Cognitive Edge</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8">Mastering Logic & <br /> Algorithms</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            I possess a strong theoretical and practical understanding of <span className="text-white font-bold">Data Structures and Algorithms</span>.
                            My analytical approach allows me to break down complex problems into efficient, scalable solutions.
                            Consistent practice on competitive platforms has honed my debugging and optimization skills.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <span className="px-5 py-2 glass rounded-full text-xs font-mono text-gray-400 border-white/5">Dynamic Programming</span>
                            <span className="px-5 py-2 glass rounded-full text-xs font-mono text-gray-400 border-white/5">Graphs & Trees</span>
                            <span className="px-5 py-2 glass rounded-full text-xs font-mono text-gray-400 border-white/5">System Optimization</span>
                        </div>
                    </motion.div>

                    <div className="flex-1 grid grid-cols-1 gap-6">
                        {achievements.map((item, idx) => (
                            <motion.div
                                key={item.platform}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 rounded-3xl group hover:border-brand-emerald/30 transition-all duration-500"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-brand-emerald/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-brand-emerald uppercase tracking-widest mb-1">{item.platform}</div>
                                        <div className="text-2xl font-black text-white mb-1">{item.stat}</div>
                                        <div className="text-gray-500 text-sm font-medium">{item.detail}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
