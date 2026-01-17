import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { IconMap } from '../utils/icons';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const response = await axios.get(`${API_URL}/api/skills`);
                setSkills(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching skills:", err);
                setError("Failed to load skills. Please make sure the backend is running.");
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    const renderIcon = (skill) => {
        // 1. Try to find the icon in our Smart IconMap
        const IconComponent = IconMap[skill.icon] || IconMap[skill.name];

        if (IconComponent) {
            return <IconComponent style={{ fontSize: '2.5rem', color: skill.color, marginBottom: '1rem' }} />;
        }

        // 2. If it's a URL, show as image
        if (skill.icon.startsWith('http')) {
            return <img src={skill.icon} alt={skill.name} style={{ width: '2.5rem', height: '2.5rem', marginBottom: '1rem', objectFit: 'contain' }} />;
        }

        // 3. Last fallback: First letter
        return <div style={{ fontSize: '2.5rem', color: skill.color, marginBottom: '1rem', fontWeight: 800 }}>{skill.name.charAt(0)}</div>;
    };

    if (loading) return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem' }}>
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: 40, height: 40, border: '3px solid var(--color-primary)', borderTopColor: 'transparent', borderRadius: '50%' }} />
        </div>
    );

    if (error) return (
        <div style={{ textAlign: 'center', color: '#ff4d4d', padding: '5rem' }}>{error}</div>
    );

    return (
        <section id="skills" style={{ padding: '5rem 2rem', position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Expertise</p>
                <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>My Technical Skills</h2>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1.5rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill._id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{
                            y: -10,
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            boxShadow: `0 10px 30px -10px ${skill.color}44`,
                            borderColor: skill.color
                        }}
                        onClick={() => setSelectedSkill(skill)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '2rem',
                            borderRadius: '20px',
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                    >
                        {renderIcon(skill)}
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.1rem' }}>{skill.name}</span>
                        <div style={{
                            width: '40px',
                            height: '2px',
                            background: skill.color,
                            marginTop: '0.8rem',
                            borderRadius: '2px'
                        }} />
                    </motion.div>
                ))}
            </div>

            {/* Skill Details Modal */}
            <AnimatePresence>
                {selectedSkill && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSkill(null)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0,0,0,0.85)',
                                backdropFilter: 'blur(8px)',
                                zIndex: 1000
                            }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1001,
                                padding: '20px',
                                pointerEvents: 'none'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    background: 'var(--bg-card)',
                                    padding: '3rem',
                                    borderRadius: '30px',
                                    border: `1px solid ${selectedSkill.color}44`,
                                    textAlign: 'center',
                                    boxShadow: `0 25px 50px -12px ${selectedSkill.color}44`,
                                    position: 'relative',
                                    pointerEvents: 'auto'
                                }}
                            >
                                <button
                                    onClick={() => setSelectedSkill(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '1.5rem',
                                        right: '1.5rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: 'none',
                                        color: 'var(--text-secondary)',
                                        width: '35px',
                                        height: '35px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        fontSize: '1.2rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    &times;
                                </button>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    {renderIcon(selectedSkill)}
                                </div>

                                <h3 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>{selectedSkill.name}</h3>
                                <p style={{
                                    color: selectedSkill.color,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    marginBottom: '1.5rem',
                                    letterSpacing: '1px'
                                }}>
                                    {selectedSkill.category}
                                </p>

                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                                    {selectedSkill.description}
                                </p>

                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Proficiency</span>
                                        <span style={{ color: selectedSkill.color, fontWeight: 700 }}>{selectedSkill.proficiency}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${selectedSkill.proficiency}%` }}
                                            transition={{ duration: 1.2, ease: "circOut" }}
                                            style={{ height: '100%', background: selectedSkill.color, boxShadow: `0 0 15px ${selectedSkill.color}66` }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;
