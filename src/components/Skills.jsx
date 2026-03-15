import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", icon: "🐍" },
                { name: "C++", icon: "🚀" },
                { name: "C", icon: "💻" },
                { name: "GoLang", icon: "🐹" },
                { name: "JavaScript", icon: "💛" },
                { name: "TypeScript", icon: "💙" }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React.js", icon: "⚛️" },
                { name: "HTML5", icon: "🌐" },
                { name: "CSS3", icon: "🎨" },
                { name: "Tailwind CSS", icon: "🌊" },
                { name: "Framer Motion", icon: "🎬" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: "🟢" },
                { name: "Express.js", icon: "🚄" },
                { name: "Django", icon: "🎸" },
                { name: "FastAPI", icon: "⚡" },
                { name: "REST APIs", icon: "🥪" }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MongoDB", icon: "🍃" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "MySQL", icon: "🐬" },
                { name: "Redis", icon: "🔴" },
                { name: "SQLite", icon: "📁" }
            ]
        },
        {
            title: "Tools & Technologies",
            skills: [
                { name: "Docker", icon: "🐋" },
                { name: "Git", icon: "🔧" },
                { name: "GitHub", icon: "🐙" },
                { name: "AWS Basics", icon: "☁️" },
                { name: "Postman", icon: "🚀" }
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
        <section id="skills" className="py-24 bg-brand-gray/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-mono text-brand-emerald uppercase tracking-widest mb-4">Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">Technical Stack</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl hover:border-brand-emerald/30 transition-all duration-300 group"
                        >
                            <h4 className="text-brand-emerald font-mono mb-8 pb-3 border-b border-white/5 uppercase tracking-widest text-xs font-black">
                                {category.title}
                            </h4>
                            <div className="grid grid-cols-3 gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center gap-2 group/skill"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl group-hover/skill:border-brand-emerald/50 transition-all group-hover/skill:scale-110">
                                            <span className="text-2xl">{skill.icon}</span>
                                        </div>
                                        <span className="text-[9px] uppercase tracking-tighter font-black text-gray-500 group-hover/skill:text-white text-center">
                                            {skill.name}
                                        </span>
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
