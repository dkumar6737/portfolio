import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../utils/data';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>PORTFOLIO</p>
                <h2 style={{ fontSize: '2.5rem' }}>Featured Projects</h2>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                width: '100%'
            }}>
                {PROJECTS_DATA.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        style={{
                            backgroundColor: 'var(--bg-card)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                opacity: 0.5
                            }} />
                        </div>

                        <div style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.link} style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><FaGithub /></a>
                                    <a href={project.link} style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><FaExternalLinkAlt /></a>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} style={{
                                        fontSize: '0.85rem',
                                        padding: '6px 14px',
                                        borderRadius: '50px',
                                        backgroundColor: 'rgba(100, 108, 255, 0.1)',
                                        color: 'var(--color-primary)',
                                        fontWeight: 500
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
