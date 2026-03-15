import { motion } from 'framer-motion';
import { ArrowRight, Github, FileText, Send } from 'lucide-react';

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background decoration */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-emerald/10 rounded-full blur-[128px] -z-10"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.span
                        variants={item}
                        className="inline-block px-4 py-1.5 rounded-full glass text-brand-emerald text-sm font-bold mb-8 border border-brand-emerald/20"
                    >
                        Available for Full-time Roles
                    </motion.span>

                    <motion.h1
                        variants={item}
                        className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight"
                    >
                        Sanket Patil — <span className="text-gradient">Software Development Engineer</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
                    >
                        Full Stack Developer | Frontend | Backend | Data Analyst | Machine Learning Enthusiast.
                        Passionate about <span className="text-white font-bold">building scalable applications</span> and
                        <span className="text-white font-bold"> data-driven solutions</span>.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a href="#projects" className="px-6 py-3 bg-brand-emerald text-brand-dark font-black rounded-xl flex items-center gap-2 hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-emerald/20">
                            View Projects
                        </a>
                        <a href="https://github.com/Sanket-Pandit-Patil/" target="_blank" className="px-6 py-3 glass text-white font-black rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all transform hover:scale-105">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/sanket-patil" target="_blank" className="px-6 py-3 glass text-white font-black rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all transform hover:scale-105">
                            LinkedIn
                        </a>
                        <a href="https://drive.google.com/file/d/1R6m3s4lY0C6b3BmLshGDpcH2Jgs3jww3/view?usp=sharing" target="_blank" className="px-6 py-3 glass text-white font-black rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all transform hover:scale-105">
                            Resume
                        </a>
                        <a href="#contact" className="px-6 py-3 glass text-white font-black rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all transform hover:scale-105">
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle Roles Scroller */}
            <div className="absolute bottom-12 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
                <div className="inline-block text-[15rem] font-black text-white animate-scroll-left uppercase italic">
                    Systems • Software • Data • ML • Systems • Software • Data • ML •
                </div>
            </div>
        </section>
    );
};

export default Hero;
