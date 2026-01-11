import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_DATA } from '../utils/data';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" style={{ marginBottom: '4rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>GET IN TOUCH</p>
                <h2 style={{ fontSize: '2.5rem' }}>Contact Me</h2>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem'
            }}>
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Let's work together</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                        I'm currently available for freelance work or full-time opportunities.
                        If you have a project that needs some creative touch, let's chat.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '50px', height: '50px',
                                borderRadius: '50%',
                                background: 'rgba(100, 108, 255, 0.1)',
                                color: 'var(--color-primary)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.2rem'
                            }}>
                                <FaEnvelope />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</p>
                                <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{CONTACT_DATA.email}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '50px', height: '50px',
                                borderRadius: '50%',
                                background: 'rgba(100, 108, 255, 0.1)',
                                color: 'var(--color-primary)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.2rem'
                            }}>
                                <FaPhone />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone</p>
                                <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{CONTACT_DATA.phone}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '50px', height: '50px',
                                borderRadius: '50%',
                                background: 'rgba(100, 108, 255, 0.1)',
                                color: 'var(--color-primary)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.2rem'
                            }}>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Address</p>
                                <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{CONTACT_DATA.address}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                        backgroundColor: 'var(--bg-card)',
                        padding: '2.5rem',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                            <input type="text" placeholder="John Doe" style={{
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(255,255,255,0.03)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                fontFamily: 'inherit'
                            }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                            <input type="email" placeholder="john@example.com" style={{
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(255,255,255,0.03)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                fontFamily: 'inherit'
                            }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                            <textarea placeholder="Your message here..." rows="4" style={{
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(255,255,255,0.03)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                fontFamily: 'inherit',
                                resize: 'none'
                            }}></textarea>
                        </div>
                        <button className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Send Message</button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
