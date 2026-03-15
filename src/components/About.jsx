import { motion } from 'framer-motion';
import { Award, Code2, Rocket, Users } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Code2 className="text-brand-emerald" />,
            title: "Development",
            text: "Passionate about backend systems, scalable microservices, and high-performance full-stack architectures."
        },
        {
            icon: <Rocket className="text-brand-emerald" />,
            title: "Data & ML",
            text: "Leveraging data analysis and machine learning to drive intelligent, data-driven solutions."
        },
        {
            icon: <Users className="text-brand-emerald" />,
            title: "Leadership",
            text: "Athletics Head and VP of Sports Club. Managed teams and organized major events for 2+ years."
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
                                I am a <span className="text-white font-medium">final-year Computer Science Engineering student</span> at IIIT UNA with a deep fascination for architecting scalable binary solutions.
                            </p>
                            <p>
                                My journey is driven by a commitment to <span className="text-white font-medium">building robust backend systems</span> and high-impact digital experiences. I thrive on solving complex logic and optimizing performance across the entire technology stack.
                            </p>
                            <p>
                                Beyond my technical focus, I lead as the <span className="text-white font-medium">Athletics Head and Vice President of our Sports Club</span>, where I manage institutional events and foster teamwork in competitive environments.
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
