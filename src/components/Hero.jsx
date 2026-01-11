import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../utils/data';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '80px' // Offset for navbar
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(100, 108, 255, 0.2) 0%, rgba(0,0,0,0) 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(179, 100, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ zIndex: 1, maxWidth: '800px' }}
            >
                <motion.p variants={itemVariants} style={{
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                }}>
                    Hi, I am {HERO_DATA.name}
                </motion.p>

                <motion.h1 variants={itemVariants} style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    marginBottom: '1rem',
                    lineHeight: 1.1
                }}>
                    <span className="gradient-text">{HERO_DATA.role}</span>
                </motion.h1>

                <motion.h2 variants={itemVariants} style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem'
                }}>
                    {HERO_DATA.tagline}
                </motion.h2>

                <motion.p variants={itemVariants} style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    marginBottom: '2.5rem',
                    maxWidth: '600px'
                }}>
                    {HERO_DATA.description}
                </motion.p>

                <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        View Work <FaArrowRight />
                    </a>
                    <a href="#" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Download CV <FaDownload />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
