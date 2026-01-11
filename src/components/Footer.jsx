import React from 'react';
import { CONTACT_DATA } from '../utils/data';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '3rem 2rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <a href={CONTACT_DATA.social.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                    <FaGithub />
                </a>
                <a href={CONTACT_DATA.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                    <FaLinkedin />
                </a>
                <a href={CONTACT_DATA.social.twitter} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                    <FaTwitter />
                </a>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                &copy; {new Date().getFullYear()} Alex Dev. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
