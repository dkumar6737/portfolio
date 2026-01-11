import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiPostgresql, SiTypescript, SiShopify, SiPhp, SiMysql } from 'react-icons/si';

export const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

export const HERO_DATA = {
    name: "Dipak Kumar",
    role: "Creative Full Stack Developer",
    tagline: "Building digital experiences that matter.",
    description: "I specialize in crafting high-performance, interactive, and visually stunning web applications using modern technologies.",
};

export const SKILLS_DATA = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MySQL", icon: SiMysql, color: "#336791" },
    { name: "PHP", icon: SiPhp, color: "#777CBB" },
    { name: "Shopify", icon: SiShopify, color: "#95BF47" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

export const PROJECTS_DATA = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization.",
        tags: ["React", "Recharts", "Tailwind"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        id: 2,
        title: "Social Media App",
        description: "A responsive social platform allowing users to connect, share, and interact in real-time.",
        tags: ["React", "Firebase", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        id: 3,
        title: "Portfolio v1",
        description: "My previous portfolio showcasing early works and progression as a developer.",
        tags: ["HTML", "SCSS", "JS"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
        link: "#"
    }
];

export const CONTACT_DATA = {
    email: "kumardipak6737@gmail.com",
    phone: "+91 6201453140",
    address: "Amarnath residency 2, bonand dindoli kharwasa road surat",
    social: {
        github: "https://github.com/dkumar6737",
        linkedin: "https://linkedin.com/in/dipak-kumar-6737",
    }
};
