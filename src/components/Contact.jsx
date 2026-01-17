import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_DATA } from '../utils/data';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (status.error) setStatus({ ...status, error: null });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ ...status, error: "Please fill in all fields." });
            return;
        }

        setStatus({ loading: true, success: false, error: null });

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await axios.post(`${API_URL}/api/contact`, formData);

            if (response.status === 200) {
                setStatus({
                    loading: false,
                    success: true,
                    error: null
                });
                setFormData({ name: '', email: '', message: '' });

                // Hide success message after 5 seconds
                setTimeout(() => {
                    setStatus(prev => ({ ...prev, success: false }));
                }, 5000);
            }
        } catch (error) {
            console.error("Contact Error:", error);
            setStatus({
                loading: false,
                success: false,
                error: error.response?.data?.message || "Failed to send message. Please try again later."
            });
        }
    };

    return (
        <section id="contact" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>GET IN TOUCH</p>
                <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>Let's Build Something Together</h2>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'start'
            }}>
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontWeight: 700 }}>Contact Information</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { icon: <FaEnvelope />, label: 'Email', value: CONTACT_DATA.email, color: '#EA4335' },
                            { icon: <FaPhone />, label: 'Phone', value: CONTACT_DATA.phone, color: '#34A853' },
                            { icon: <FaMapMarkerAlt />, label: 'Location', value: CONTACT_DATA.address || '', color: '#4285F4' }
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{
                                    width: '60px', height: '60px',
                                    borderRadius: '18px',
                                    background: 'var(--bg-card)',
                                    color: item.color,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.4rem',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{item.label}</p>
                                    <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.value}</p>
                                </div>
                            </div>
                        ))}
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
                        padding: '3rem',
                        borderRadius: '30px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}
                >
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }} onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                style={{
                                    padding: '15px 20px',
                                    borderRadius: '15px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.02)',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    transition: 'border-color 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                required
                                style={{
                                    padding: '15px 20px',
                                    borderRadius: '15px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.02)',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    transition: 'border-color 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>Your Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows="5"
                                required
                                style={{
                                    padding: '15px 20px',
                                    borderRadius: '15px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.02)',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    fontFamily: 'inherit',
                                    resize: 'none',
                                    transition: 'border-color 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            ></textarea>
                        </div>

                        <AnimatePresence>
                            {status.success && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#4caf50', fontSize: '0.95rem', fontWeight: 500 }}
                                >
                                    <FaCheckCircle /> Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                            {status.error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#f44336', fontSize: '0.95rem', fontWeight: 500 }}
                                >
                                    <FaExclamationCircle /> {status.error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            type="submit"
                            disabled={status.loading}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '15px',
                                border: 'none',
                                background: status.loading ? 'rgba(100, 108, 255, 0.5)' : 'var(--color-primary)',
                                color: 'white',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                cursor: status.loading ? 'not-allowed' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.8rem',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 20px rgba(100, 108, 255, 0.2)'
                            }}
                            onMouseEnter={(e) => !status.loading && (e.target.style.transform = 'translateY(-2px)')}
                            onMouseLeave={(e) => !status.loading && (e.target.style.transform = 'translateY(0)')}
                        >
                            {status.loading ? 'Sending...' : (
                                <>
                                    Send Message <FaPaperPlane style={{ fontSize: '0.9rem' }} />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
