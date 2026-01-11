import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../utils/data';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    const mobileMenuVariants = {
        closed: { x: '100%', transition: { type: 'spring', stiffness: 400, damping: 40 } },
        open: { x: 0, transition: { type: 'spring', stiffness: 400, damping: 40 } }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
            style={{
                backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                <a href="#" className="gradient-text">Dipak.DEV</a>
            </div>

            {/* Desktop Menu */}
            <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                {NAV_LINKS.map((link) => (
                    <li key={link.id} className="hidden-mobile">
                        <a
                            href={`#${link.id}`}
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                position: 'relative'
                            }}
                            className="nav-link"
                            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Toggle */}
            <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: 'pointer', fontSize: '1.5rem', display: 'none' }}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={mobileMenuVariants}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '100%',
                            maxWidth: '300px',
                            height: '100vh',
                            backgroundColor: 'var(--bg-card)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            boxShadow: '-5px 0 15px rgba(0,0,0,0.5)'
                        }}
                    >
                        <div onClick={toggleMenu} style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '1.5rem', cursor: 'pointer' }}>
                            <FaTimes />
                        </div>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                            {NAV_LINKS.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={toggleMenu}
                                        style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </motion.nav>
    );
};

export default Navbar;
