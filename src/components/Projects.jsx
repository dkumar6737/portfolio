import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const response = await axios.get(`${API_URL}/api/projects`);
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 2rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>MY WORK</p>
                <h2 style={{ fontSize: '2.5rem' }}>Featured Projects</h2>
            </motion.div>

            {loading ? (
                <p style={{ color: 'var(--text-secondary)' }}>Loading projects...</p>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    width: '100%',
                    maxWidth: '1200px'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id || index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid rgba(255,255,255,0.05)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ width: '100%', height: '220px', overflow: 'hidden', backgroundColor: '#1a1a1a' }}>
                                <img
                                    src={project.image && project.image !== "" ? project.image :
                                        project.title.toLowerCase().includes('cab') ? 'https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1000&auto=format&fit=cover' :
                                            project.title.toLowerCase().includes('portfolio') ? 'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1000&auto=format&fit=cover' :
                                                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=cover'
                                    }
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=cover';
                                    }}
                                />
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#fff' }}>
                                    {project.title}
                                </h3>

                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.6',
                                    flex: 1
                                }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.75rem',
                                            padding: '4px 12px',
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            borderRadius: '50px',
                                            color: 'var(--color-primary)',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.githubLink} target="_blank" rel="noreferrer" style={{
                                        flex: 1, textAlign: 'center', padding: '12px', borderRadius: '10px',
                                        backgroundColor: 'transparent', border: '1px solid var(--color-primary)',
                                        color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500
                                    }}>GitHub</a>

                                    <a href={project.link} target="_blank" rel="noreferrer" style={{
                                        flex: 1, textAlign: 'center', padding: '12px', borderRadius: '10px',
                                        backgroundColor: 'var(--color-primary)', color: '#000', fontWeight: 'bold',
                                        textDecoration: 'none', fontSize: '0.9rem'
                                    }}>Live Demo</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;
