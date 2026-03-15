import { motion } from 'framer-motion';
import { BookOpen, Layers, Cloud, BrainCircuit } from 'lucide-react';

const Learning = () => {
    const topics = [
        { name: "System Design", icon: <Layers size={20} />, status: "Exploring Patterns" },
        { name: "Microservices", icon: <Cloud size={20} />, status: "Architecting Scale" },
        { name: "Cloud Infrastructure", icon: <Layers size={20} />, status: "GCP & AWS" },
        { name: "Advanced ML", icon: <BrainCircuit size={20} />, status: "Deep Learning" }
    ];

    return (
        <section className="py-24 bg-brand-gray/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="p-3 bg-brand-emerald/10 rounded-2xl mb-6">
                        <BookOpen className="text-brand-emerald" />
                    </div>
                    <h2 className="text-sm font-mono text-brand-emerald uppercase tracking-widest mb-4">Continuous Growth</h2>
                    <h3 className="text-4xl font-bold">Currently Expanding</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topics.map((topic, idx) => (
                        <motion.div
                            key={topic.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl border-white/5 hover:border-brand-emerald/20 transition-all text-center group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-emerald/10 transition-colors">
                                <div className="text-brand-emerald opacity-60 group-hover:opacity-100 transition-opacity">
                                    {topic.icon}
                                </div>
                            </div>
                            <h4 className="text-xl font-bold mb-2">{topic.name}</h4>
                            <p className="text-brand-emerald/60 text-xs font-mono uppercase tracking-[0.2em]">{topic.status}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Learning;
