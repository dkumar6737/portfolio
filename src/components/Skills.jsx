import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../utils/data';

const Skills = () => {
    return (
        <section id="skills" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>TOOLS & TECHNOLOGIES</p>
                <h2 style={{ fontSize: '2.5rem' }}>My Tech Stack</h2>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '2rem',
                width: '100%'
            }}>
                {SKILLS_DATA.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, borderColor: skill.color }}
                        style={{
                            backgroundColor: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            border: '1px solid rgba(255,255,255,0.05)',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            cursor: 'default'
                        }}
                    >
                        <div style={{ fontSize: '3rem', color: skill.color }}>
                            <skill.icon />
                        </div>
                        <p style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
