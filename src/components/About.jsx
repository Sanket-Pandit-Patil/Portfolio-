import { motion } from 'framer-motion';
import { Award, Code2, Rocket, Users } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Code2 className="text-brand-emerald" />,
            title: "Problem Solver",
            text: "Strong knowledge of Data Structures and Algorithms with a focus on efficient solutions."
        },
        {
            icon: <Rocket className="text-brand-emerald" />,
            title: "Tech Enthusiast",
            text: "Experience building full-stack web applications and data-driven projects."
        },
        {
            icon: <Users className="text-brand-emerald" />,
            title: "Leader",
            text: "Served as Athletics Head and Vice President of Sports Club for 2 years."
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    <div>
                        <h2 className="text-sm font-mono text-brand-emerald uppercase tracking-widest mb-4">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8">
                            Final-year CS Engineering Student at Heart.
                        </h3>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I'm a passionate developer focused on building scalable backend systems,
                                intelligent APIs, and robust full-stack applications. My journey in
                                Computer Science has been driven by curiosity and a desire to create
                                impactful technology.
                            </p>
                            <p>
                                Beyond coding, I've honed my leadership skills through my roles in
                                college sports organizations, where I learned the value of teamwork,
                                discipline, and effective communication.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl flex gap-6 hover:border-brand-emerald/30 transition-colors group"
                            >
                                <div className="bg-brand-emerald/10 p-4 rounded-xl h-fit group-hover:bg-brand-emerald/20 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
