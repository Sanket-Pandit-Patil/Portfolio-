import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-mono text-brand-emerald uppercase tracking-widest mb-4">Get in Touch</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's build something amazing together.</h3>
                        <p className="text-gray-400 text-lg mb-10 max-w-lg">
                            Currently looking for new opportunities and collaborations.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex gap-6">
                            {[
                                { icon: <Mail />, href: "mailto:patilsanket.work@gmail.com", label: "Email" },
                                { icon: <Github />, href: "https://github.com/Sanket-Pandit-Patil/", label: "GitHub" },
                                { icon: <Linkedin />, href: "https://linkedin.com/in/sanket-patil-", label: "LinkedIn" }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gray-400 hover:text-brand-emerald hover:border-brand-emerald/50 transition-all hover:-translate-y-1"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-3xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-mono text-gray-500 mb-2 uppercase">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald/50 transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-mono text-gray-500 mb-2 uppercase">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald/50 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-gray-500 mb-2 uppercase">Message</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald/50 transition-colors resize-none" placeholder="Let's talk about..."></textarea>
                            </div>
                            <button disabled className="w-full py-4 bg-brand-emerald text-brand-dark font-bold rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                                Send Message <ExternalLink size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-mono">
                        © 2026 Sanket Patil. Built with React & Tailwind.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500 font-mono">
                        <a href="https://leetcode.com/u/Sanket_01/" target="_blank" className="hover:text-brand-emerald transition-colors">LeetCode</a>
                        <a href="https://github.com/Sanket-Pandit-Patil/" target="_blank" className="hover:text-brand-emerald transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
