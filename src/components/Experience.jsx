import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    const timeline = [
        {
            type: 'education',
            title: "Bachelor of Technology in CS Engineering",
            organization: "IIIT Tiruchirappalli",
            location: "Tiruchirappalli, Tamil Nadu",
            date: "2022 — 2026",
            description: "Focusing on Software Engineering, Data Structures, Algorithms, and Machine Learning. Consistently maintaining a strong academic record.",
            icon: <GraduationCap size={20} className="text-brand-emerald" />
        },
        {
            type: 'leadership',
            title: "Vice-President & Athletics Head",
            organization: "Zenith Club (Sports Club)",
            location: "IIIT Trichy",
            date: "2023 — 2025",
            description: "Led the sports department for 2 years. Organized inter-college meets and managed various sports teams, fostering leadership and discipline.",
            icon: <Briefcase size={20} className="text-brand-emerald" />
        },
        {
            type: 'achievement',
            title: "Competitive Programmer",
            organization: "LeetCode & CodeChef",
            location: "Remote",
            date: "2022 — Present",
            description: "Solved 550+ problems on LeetCode. Achieved a 3-star rating on CodeChef with a peak rating of 1626.",
            icon: <Calendar size={20} className="text-brand-emerald" />
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-mono text-brand-emerald uppercase tracking-widest mb-4">Journey</h2>
                        <h3 className="text-4xl md:text-5xl font-bold">Experience & Education</h3>
                    </div>
                </div>

                <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12 pb-12">
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-16 group"
                        >
                            {/* Dot on line */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-emerald group-hover:bg-brand-emerald transition-colors duration-300 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

                            <div className="glass p-8 rounded-3xl group-hover:border-brand-emerald/30 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)]">
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <div className="p-3 bg-brand-emerald/10 rounded-xl">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 uppercase tracking-wider">
                                        {item.date}
                                    </span>
                                </div>

                                <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-emerald transition-colors">{item.title}</h4>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 font-medium">
                                    <div className="flex items-center gap-1.5"><Briefcase size={14} /> {item.organization}</div>
                                    <div className="flex items-center gap-1.5"><MapPin size={14} /> {item.location}</div>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-lg max-w-4xl">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[150px] -z-10" />
        </section>
    );
};

export default Experience;
