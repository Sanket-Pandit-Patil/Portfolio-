import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "C", icon: "💻" },
                { name: "C++", icon: "🚀" },
                { name: "Python", icon: "🐍" },
                { name: "JavaScript", icon: "💛" },
                { name: "GoLang", icon: "🐹" },
                { name: "SQL", icon: "📊" }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React.js", icon: "⚛️" },
                { name: "HTML5", icon: "🌐" },
                { name: "CSS3", icon: "🎨" },
                { name: "Tailwind CSS", icon: "🌊" }
            ]
        },
        {
            title: "Backend & DB",
            skills: [
                { name: "Node.js", icon: "🟢" },
                { name: "Express.js", icon: "🚄" },
                { name: "Django", icon: "🎸" },
                { name: "MongoDB", icon: "🍃" },
                { name: "PostgreSQL", icon: "🐘" }
            ]
        },
        {
            title: "Tools & DevOps",
            skills: [
                { name: "Docker", icon: "🐋" },
                { name: "Redis", icon: "🔴" },
                { name: "Git", icon: "🔧" },
                { name: "AWS Basics", icon: "☁️" }
            ]
        },
        {
            title: "Data & ML",
            skills: [
                { name: "Pandas", icon: "🐼" },
                { name: "NumPy", icon: "🔢" },
                { name: "Scikit-Learn", icon: "🤖" },
                { name: "Data Analysis", icon: "📈" },
                { name: "ML Basics", icon: "🧠" }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-brand-gray/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-mono text-brand-emerald uppercase tracking-widest mb-4">Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Tech Stack</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-2xl hover:bg-brand-emerald/[0.02] transition-colors"
                        >
                            <h4 className="text-brand-emerald font-mono mb-6 pb-2 border-b border-white/5 uppercase tracking-tighter">
                                {category.title}
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center justify-center p-3 bg-white/5 border border-white/5 rounded-xl text-center group hover:border-brand-emerald/50 transition-all"
                                    >
                                        <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</span>
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
