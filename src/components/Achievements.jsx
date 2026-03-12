import { motion } from 'framer-motion';
import { Trophy, Star, CheckCircle } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            icon: <Trophy className="text-brand-emerald" />,
            title: "Sports Excellence",
            description: "Silver Medal in Powerlifting, Gold Medals in 4x100m & 4x400m Relays at Inter IIIT Sports Meets (6th & 7th)."
        },
        {
            icon: <CheckCircle className="text-brand-emerald" />,
            title: "Leadership",
            description: "Vice-President of Zenith Sports Club and Athletics Head at IIIT Trichy for 2 years, leading major initiatives."
        },
        {
            icon: <Star className="text-brand-emerald" />,
            title: "Problem Solving",
            description: "Solved 550+ problems on LeetCode & GFG. 3-Star on CodeChef (Highest Rating: 1626)."
        }
    ];

    return (
        <section id="achievements" className="py-24 bg-brand-gray/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-mono text-brand-emerald uppercase tracking-widest mb-4">Milestones</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Achievements</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl hover:bg-brand-emerald/[0.03] transition-colors border border-white/5"
                        >
                            <div className="w-16 h-16 bg-brand-emerald/10 rounded-2xl flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
