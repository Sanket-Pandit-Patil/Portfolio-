import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-500 rounded-3xl ${scrolled ? 'glass px-6 py-3' : 'px-0'}`}>
                    <div className="flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-black font-mono tracking-tighter"
                        >
                            <span className="text-brand-emerald">SANKET</span>
                            <span className="text-white/20">.</span>
                            <span className="text-white uppercase text-xs tracking-widest ml-2 opacity-50 font-bold">Patil</span>
                        </motion.div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-12">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-brand-emerald transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-6 ml-6 border-l border-white/10 pl-10">
                                <a href="https://github.com/Sanket-Pandit-Patil/" target="_blank" className="text-gray-500 hover:text-white transition-all transform hover:scale-110">
                                    <Github size={18} />
                                </a>
                                <a href="mailto:patilsanket.work@gmail.com" className="text-gray-500 hover:text-white transition-all transform hover:scale-110">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass mt-4 mx-4 rounded-3xl p-8 flex flex-col space-y-6 border-brand-emerald/10 shadow-2xl"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-black text-gray-500 hover:text-brand-emerald transition-colors uppercase tracking-tight"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
