import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Star } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Smart Airport Ride Pooling",
            description: "Scalable backend featuring optimized route matching, Redis concurrency control, and dynamic pricing.",
            tags: ["TypeScript", "PostgreSQL", "Redis", "Node.js"],
            metrics: { stars: "12", forks: "4", impact: "High" },
            category: "Backend / Systems",
            github: "https://github.com/Sanket-Pandit-Patil/",
            demo: "#"
        },
        {
            title: "SQL Practice Studio",
            description: "Browser-based platform for practicing SQL with real-time execution and LLM-powered hints.",
            tags: ["React", "Express", "SQLite", "LLM"],
            metrics: { stars: "24", forks: "8", impact: "Product" },
            category: "Full Stack / AI",
            github: "https://github.com/Sanket-Pandit-Patil/",
            demo: "#"
        },
        {
            title: "StudyNotion",
            description: "Full-stack ed-tech platform featuring secure authentication, course management, and scalable APIs.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            metrics: { stars: "45", forks: "12", impact: "Architecture" },
            category: "Full Stack",
            github: "https://github.com/Sanket-Pandit-Patil/",
            demo: "#"
        },
        {
            title: "YouTube Summarization",
            description: "AI-driven tool using LLMs to summarize YouTube video content efficiently using technical insights.",
            tags: ["Python", "FastAPI", "OpenAI", "LangChain"],
            metrics: { stars: "18", forks: "5", impact: "AI/ML" },
            category: "Artificial Intelligence",
            github: "https://github.com/Sanket-Pandit-Patil/",
            demo: "#"
        },
        {
            title: "SpeakwithZubi",
            description: "AI companion for children allowing interaction with uploaded images via voice commands.",
            tags: ["React", "AI/ML", "Web Speech API"],
            metrics: { stars: "15", forks: "3", impact: "UX/AI" },
            category: "Frontend / AI",
            github: "https://github.com/Sanket-Pandit-Patil/",
            demo: "#"
        },
        {
            title: "Field Force Tracker",
            description: "Full-stack application for tracking field forces with JWT auth and real-time status updates.",
            tags: ["React", "Node.js", "Express", "SQLite"],
            metrics: { stars: "10", forks: "2", impact: "Efficiency" },
            category: "Enterprise Solution",
            github: "https://github.com/Sanket-Pandit-Patil/",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-mono text-brand-emerald uppercase tracking-widest mb-4">Portfolio</h2>
                        <h3 className="text-4xl md:text-5xl font-bold">Featured Engineering Works</h3>
                    </div>
                    <a
                        href="https://github.com/Sanket-Pandit-Patil/"
                        target="_blank"
                        className="flex items-center gap-2 text-gray-400 hover:text-brand-emerald transition-colors font-mono group"
                    >
                        Explore GitHub Repositories <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass rounded-3xl overflow-hidden flex flex-col h-full group hover:border-brand-emerald/30 transition-all duration-500"
                        >
                            <div className="relative h-56 bg-brand-gray/50 flex items-center justify-center border-b border-white/5 overflow-hidden">
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="px-3 py-1 bg-brand-dark/80 backdrop-blur rounded-full text-[10px] font-bold text-brand-emerald uppercase border border-brand-emerald/20">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-brand-emerald/[0.02] group-hover:bg-brand-emerald/[0.05] transition-colors" />
                                <Code size={64} className="text-brand-emerald/20 group-hover:text-brand-emerald/40 group-hover:scale-110 transition-all duration-700" />

                                {/* Live Stats overlay */}
                                <div className="absolute bottom-4 left-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                        <Star size={12} className="text-brand-emerald" /> {project.metrics.stars}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                        <ExternalLink size={12} className="text-brand-emerald" /> {project.metrics.forks}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex gap-2 flex-wrap mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white/5 text-gray-400 border border-white/10 font-bold rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-2xl font-bold mb-3 group-hover:text-brand-emerald transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-gray-400 mb-8 flex-1 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.demo} className="text-gray-400 hover:text-brand-emerald transition-colors" aria-label="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                    <span className="text-[10px] font-mono text-brand-emerald/60 uppercase tracking-widest font-bold">
                                        Impact: {project.metrics.impact}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
