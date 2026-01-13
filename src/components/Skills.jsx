import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../utils/data';

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '5rem 2rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>MY SKILLS</p>
                <h2 style={{ fontSize: '2.5rem' }}>Technologies I Use</h2>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                {SKILLS_DATA.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '2rem',
                                borderRadius: '15px',
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <Icon style={{ fontSize: '2.5rem', color: skill.color, marginBottom: '1rem' }} />
                            <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{skill.name}</span>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
