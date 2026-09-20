import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, Award, Briefcase, Star, Search, 
  SlidersHorizontal, Eye, X, CheckCircle2, 
  ArrowRight, FileText, ChevronRight,
  Layout, Server, Database, Brain, Cpu, Cloud, Code, Terminal, Shield, Target, TrendingUp,
  Rocket
} from "lucide-react";
import AuthenticCertificate from "../components/AuthenticCertificate";
import { allSkillCertificates } from "../data/certificatesData";

// ── SVG Brand & University Logos ──
function HBTULogo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#7f1d1d" />
      <path d="M24 8L36 13V24C36 31.5 30.5 38.2 24 40C17.5 38.2 12 31.5 12 24V13L24 8Z" fill="#991b1b" stroke="#fde047" strokeWidth="1.5" />
      <path d="M24 16V32M18 24H30" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3" fill="#fde047" />
      <text x="24" y="37" textAnchor="middle" fill="#fef08a" fontSize="5" fontWeight="bold" fontFamily="sans-serif">HBTU</text>
    </svg>
  );
}

function AllahabadUniLogo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" fill="#1e3a8a" stroke="#ca8a04" strokeWidth="2" />
      <circle cx="24" cy="24" r="18" fill="#172554" stroke="#ca8a04" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M24 13L28 21H36L30 26L32 34L24 29L16 34L18 26L12 21H20L24 13Z" fill="#fbbf24" opacity="0.9" />
      <text x="24" y="41" textAnchor="middle" fill="#fde047" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">PRSU</text>
    </svg>
  );
}

function SchoolCrestLogo({ text = "SN", size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#fff7ed" stroke="#fdba74" strokeWidth="1.2" />
      <path d="M24 10L35 15V24C35 30.5 30 36 24 38C18 36 13 30.5 13 24V15L24 10Z" fill="#ea580c" />
      <circle cx="24" cy="24" r="5" fill="#fef08a" />
      <text x="24" y="36" textAnchor="middle" fill="#ffffff" fontSize="4" fontWeight="bold" fontFamily="sans-serif">{text}</text>
    </svg>
  );
}

function InterCollegeLogo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="14" fill="#dc2626" />
      <path d="M24 14L27 21H34L29 25L31 32L24 28L17 32L19 25L14 21H21L24 14Z" fill="#fef08a" />
      <text x="24" y="41" textAnchor="middle" fill="#991b1b" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">SMY</text>
    </svg>
  );
}

function UdemyLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 11V18C10 21.866 13.134 25 17 25C20.866 25 24 21.866 24 18V11" stroke="#a435f0" strokeWidth="3" strokeLinecap="round" />
      <path d="M17 7L13 11H21L17 7Z" fill="#a435f0" />
    </svg>
  );
}

function CourseraLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="17" r="11" fill="#0056d2" />
      <path d="M20 13C18 11 14 12 13 15C12 18 13 21 16 22C18 22.5 20 21.5 21 20" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );
}

function OpenAILogo() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" color="#10a37f">
      <path d="M22.28 9.37a5.55 5.55 0 0 0-.47-4.55 5.68 5.68 0 0 0-5.69-2.73 5.55 5.55 0 0 0-4.14-1.84 5.67 5.67 0 0 0-5.38 3.86 5.57 5.57 0 0 0-3.66 2.65 5.68 5.68 0 0 0 .73 6.22 5.55 5.55 0 0 0 .47 4.55 5.68 5.68 0 0 0 5.69 2.73 5.54 5.54 0 0 0 4.14 1.84 5.67 5.67 0 0 0 5.38-3.86 5.57 5.57 0 0 0 3.66-2.65 5.68 5.68 0 0 0-.73-6.22zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg>
  );
}

function GithubLogo() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" color="#1e293b">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function DockerLogo() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#0284c7">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185"/>
      <path d="M23.79 11.758a5.55 5.55 0 00-2.316-1.077c-.126-.035-.252-.063-.38-.084-.332-.572-.81-1.025-1.397-1.319-.133-.067-.272-.122-.416-.164-.236-.07-.482-.109-.738-.114h-1.42a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185h.85c.19 0 .37.042.536.118a.95.95 0 01.42.42c.076.166.118.347.118.536 0 .524-.424.95-.949.95H.812a.812.812 0 00-.812.812c0 1.637.378 3.238 1.1 4.678.892 1.776 2.26 3.228 3.968 4.2 1.706.972 3.633 1.488 5.586 1.496 7.42 0 13.118-5.32 13.136-12.726"/>
    </svg>
  );
}

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);
  const [categoryModal, setCategoryModal] = useState(null);

  // ── 1. Academic Degrees (5 Credentials) ──
  const academicDegrees = [
    {
      id: "10th",
      year: "2014",
      title: "High School (10th)",
      institution: "Shanti Niketan H.S. School",
      result: "80%",
      logo: <SchoolCrestLogo text="SN" />,
      color: "#ea580c",
      isAcademic: true
    },
    {
      id: "12th",
      year: "2016",
      title: "Intermediate (12th)",
      institution: "SMY Inter College",
      result: "90%",
      logo: <InterCollegeLogo />,
      color: "#dc2626",
      isAcademic: true
    },
    {
      id: "bsc",
      year: "2016–19",
      title: "B.Sc. Mathematics",
      institution: "Allahabad State University",
      result: "1st Division",
      logo: <AllahabadUniLogo />,
      color: "#1e3a8a",
      isAcademic: true
    },
    {
      id: "mca",
      year: "2023–25",
      title: "MCA",
      institution: "Harcourt Butler Technical University (HBTU)",
      result: "7.5 CGPA",
      logo: <HBTULogo />,
      color: "#991b1b",
      isAcademic: true
    },
    {
      id: "academic-specialization",
      year: "2024–25",
      title: "Advanced CS Specialization",
      institution: "HBTU Technical Department",
      result: "Academic Excellence",
      logo: <HBTULogo />,
      color: "#7c3aed",
      isAcademic: true
    }
  ];

  // ── 2. Skill-Based Categories (9 Cards in 3x3 Grid) ──
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      count: 4,
      skills: "HTML, CSS, JavaScript, React, Next.js, Tailwind",
      color: "#3b82f6",
      icon: <Layout size={15} />,
      iconsList: ["udemy", "google", "coursera"],
      certs: allSkillCertificates.filter(c => c.category === "frontend")
    },
    {
      id: "backend",
      title: "Backend Development",
      count: 4,
      skills: "Node.js, Express.js, REST APIs, NestJS",
      color: "#10b981",
      icon: <Server size={15} />,
      iconsList: ["node", "express", "nest"],
      certs: allSkillCertificates.filter(c => c.category === "backend")
    },
    {
      id: "database",
      title: "Database & Data",
      count: 3,
      skills: "SQL, MySQL, PostgreSQL, MongoDB, Redis",
      color: "#2563eb",
      icon: <Database size={15} />,
      iconsList: ["mongo", "postgres", "redis"],
      certs: allSkillCertificates.filter(c => c.category === "database")
    },
    {
      id: "aiml",
      title: "AI / Machine Learning",
      count: 5,
      skills: "Generative AI, ML, DL, Agentic AI, RAG",
      color: "#8b5cf6",
      icon: <Brain size={15} />,
      iconsList: ["openai", "google", "coursera"],
      certs: allSkillCertificates.filter(c => c.category === "aiml")
    },
    {
      id: "aitools",
      title: "AI Tools & Platforms",
      count: 4,
      skills: "ChatGPT, Gemini, Copilot, Claude, LangChain",
      color: "#6366f1",
      icon: <Cpu size={15} />,
      iconsList: ["openai", "google", "github"],
      certs: allSkillCertificates.filter(c => c.category === "aitools")
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      count: 3,
      skills: "Git, GitHub, Docker, Vercel, Firebase, Nginx",
      color: "#0284c7",
      icon: <Cloud size={15} />,
      iconsList: ["github", "docker", "google"],
      certs: allSkillCertificates.filter(c => c.category === "cloud")
    },
    {
      id: "corecs",
      title: "Core CS Subjects",
      count: 4,
      skills: "Operating System, DBMS, Computer Networks, DSA",
      color: "#06b6d4",
      icon: <Code size={15} />,
      iconsList: ["udemy", "coursera"],
      certs: allSkillCertificates.filter(c => c.category === "corecs")
    },
    {
      id: "software",
      title: "Software & Productivity",
      count: 3,
      skills: "VS Code, Postman, Linux, Git, Jira",
      color: "#0d9488",
      icon: <Terminal size={15} />,
      iconsList: ["github", "google"],
      certs: allSkillCertificates.filter(c => c.category === "software")
    },
    {
      id: "others",
      title: "Others",
      count: 3,
      skills: "Cybersecurity, Testing, Agile, System Design",
      color: "#a855f7",
      icon: <Shield size={15} />,
      iconsList: ["coursera", "udemy"],
      certs: allSkillCertificates.filter(c => c.category === "others")
    }
  ];

  // ── 3. Learning Roadmap (5 Milestones) ──
  const roadmapSteps = [
    {
      id: "step-1",
      stepNum: "01",
      title: "Foundation (2014 – 2019)",
      subtitle: "School → Intermediate → B.Sc. Math",
      dotColor: "#10b981",
      icon: <GraduationCap size={12} />,
      statusText: "Completed",
      statusColor: "#059669",
      statusBg: "rgba(16, 185, 129, 0.12)"
    },
    {
      id: "step-2",
      stepNum: "02",
      title: "Core CS & Dev (2020 – 2023)",
      subtitle: "C, C++, DSA, Web Development",
      dotColor: "#2563eb",
      icon: <Code size={12} />,
      statusText: "Completed",
      statusColor: "#059669",
      statusBg: "rgba(16, 185, 129, 0.12)"
    },
    {
      id: "step-3",
      stepNum: "03",
      title: "MCA & Advanced (2023 – 2025)",
      subtitle: "Advanced CS, AI, Full Stack Dev",
      dotColor: "#7c3aed",
      icon: <Brain size={12} />,
      statusText: "Completed",
      statusColor: "#059669",
      statusBg: "rgba(16, 185, 129, 0.12)"
    },
    {
      id: "step-4",
      stepNum: "04",
      title: "Certifications (2024 – Present)",
      subtitle: "Web, Cloud, AI & DevOps Specialization",
      dotColor: "#f43f5e",
      icon: <Award size={12} />,
      statusText: "In Progress",
      statusColor: "#e11d48",
      statusBg: "rgba(244, 63, 94, 0.12)"
    },
    {
      id: "step-5",
      stepNum: "05",
      title: "Continuous Learning",
      subtitle: "Emerging Tech, Scaled AI Products",
      dotColor: "#f59e0b",
      icon: <Rocket size={12} />,
      statusText: "Ongoing",
      statusColor: "#d97706",
      statusBg: "rgba(245, 158, 11, 0.12)"
    }
  ];

  // Filter items
  const matchesSearch = (text) => {
    if (!searchQuery.trim()) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const filteredDegrees = academicDegrees.filter(
    (d) => matchesSearch(d.title) || matchesSearch(d.institution) || matchesSearch(d.year)
  );

  const filteredCategories = skillCategories.filter(
    (cat) => matchesSearch(cat.title) || matchesSearch(cat.skills) || cat.certs.some(c => matchesSearch(c.title))
  );

  const openModal = (item) => {
    setSelectedCert(item);
  };

  const openCategoryModal = (category) => {
    setCategoryModal(category);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');

        .cert-page {
          padding-top: 130px;
          padding-bottom: 90px;
          max-width: 1240px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
          width: 100%;
          box-sizing: border-box;
          font-family: 'Outfit', sans-serif;
          color: #0f172a;
        }

        /* ── Top Hero Header ── */
        .cert-hero-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-bottom: 34px;
          flex-wrap: wrap;
        }

        .cert-hero-left {
          flex: 1.15;
          min-width: 320px;
        }

        .cert-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.25);
          color: #4f46e5;
          font-size: 0.76rem;
          font-weight: 850;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .cert-hero-title {
          font-size: clamp(2.4rem, 3.8vw, 2.9rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.8px;
          color: #0f172a;
          margin: 0 0 10px 0;
          font-family: 'Outfit', sans-serif;
        }

        .cert-hero-title .highlight-word {
          color: #6366f1;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cert-hero-desc {
          font-size: 1.02rem;
          line-height: 1.65;
          color: #64748b;
          margin: 0;
          max-width: 540px;
        }

        /* ── Center Quote Box ── */
        .cert-quote-box {
          flex: 0.95;
          min-width: 260px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 18px 22px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
          box-sizing: border-box;
          position: relative;
        }

        .cert-quote-mark {
          font-size: 2.8rem;
          line-height: 0.8;
          color: #818cf8;
          font-family: serif;
          margin-bottom: 6px;
        }

        .cert-quote-text {
          font-size: 0.92rem;
          line-height: 1.5;
          color: #1e293b;
          font-style: italic;
          margin: 0 0 8px 0;
        }

        .cert-quote-author {
          font-size: 0.78rem;
          font-weight: 750;
          color: #64748b;
        }

        /* ── Right 4 Counter Cards ── */
        .cert-counters-row {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .cert-counter-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 18px;
          padding: 14px 12px;
          min-width: 86px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cert-counter-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }

        .counter-icon-bubble {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .counter-num {
          font-size: 1.35rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
        }

        .counter-label {
          font-size: 0.72rem;
          font-weight: 750;
          color: #475569;
          margin-top: 3px;
          line-height: 1.25;
        }

        /* ── Single-Row Toolbar (Filters + Search on Same Line) ── */
        .cert-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 26px;
          width: 100%;
        }

        .cert-filters-list {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 0;
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 4px 2px;
        }

        .cert-filters-list::-webkit-scrollbar {
          display: none;
        }

        .filter-pill-btn {
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.80rem;
          font-weight: 750;
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          background: rgba(255, 255, 255, 0.85);
          color: #475569;
          border-color: rgba(226, 232, 240, 0.9);
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);
          flex-shrink: 0;
        }

        .filter-pill-btn:hover {
          background: #ffffff;
          color: #0f172a;
          border-color: #cbd5e1;
          transform: translateY(-1px);
        }

        .filter-pill-btn.active {
          background: #4f46e5;
          color: #ffffff;
          border-color: #4f46e5;
          box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);
        }

        .cert-search-wrap {
          position: relative;
          width: 240px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .cert-search-input {
          width: 100%;
          padding: 8px 34px 8px 32px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          font-size: 0.82rem;
          color: #0f172a;
          outline: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);
        }

        .cert-search-input:focus {
          border-color: #6366f1;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
        }

        .search-icon-left {
          position: absolute;
          left: 11px;
          color: #94a3b8;
          pointer-events: none;
        }

        .search-icon-right {
          position: absolute;
          right: 11px;
          color: #64748b;
          cursor: pointer;
        }

        /* ── 3-COLUMN PRIMARY GRID (Balanced, Spacious & Non-Overflowing) ── */
        .cert-3col-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.28fr) minmax(0, 1fr);
          gap: 20px;
          align-items: stretch;
          width: 100%;
          box-sizing: border-box;
        }

        .cert-column-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 22px;
          padding: 22px 18px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          min-width: 0;
        }

        .cert-column-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.07);
        }

        .column-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 16px;
        }

        .column-header-left {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          min-width: 0;
        }

        .column-icon-bubble {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .column-title-text {
          font-size: 1.12rem;
          font-weight: 850;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .column-sub-text {
          font-size: 0.76rem;
          color: #64748b;
          margin: 3px 0 0 0;
          line-height: 1.35;
        }

        .column-badge-pill {
          padding: 3px 9px;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        /* ── Column 1: Academic Degrees (Balanced, Readable & Left-Aligned) ── */
        .academic-timeline-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 16px;
          width: 100%;
        }

        .academic-row {
          display: flex;
          align-items: center;
          gap: 6px;
          width: 100%;
        }

        .academic-year-col {
          width: 48px;
          text-align: left;
          font-size: 0.74rem;
          font-weight: 800;
          color: #64748b;
          flex-shrink: 0;
          line-height: 1.15;
          letter-spacing: -0.2px;
        }

        .academic-track-col {
          width: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-shrink: 0;
        }

        .academic-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.35);
          z-index: 2;
          flex-shrink: 0;
        }

        .academic-v-line {
          position: absolute;
          width: 2px;
          background: #e2e8f0;
          top: 100%;
          height: 11px;
          z-index: 1;
        }

        .academic-card-col {
          flex: 1;
          min-width: 0;
        }

        .academic-card-inner {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 14px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          transition: all 0.2s ease;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);
        }

        .academic-card-inner:hover {
          background: #ffffff;
          border-color: #cbd5e1;
          transform: translateX(2px);
          box-shadow: 0 6px 14px rgba(15, 23, 42, 0.05);
        }

        .academic-item-left {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .academic-logo-wrap {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .academic-degree-name {
          font-size: 0.84rem;
          font-weight: 850;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .academic-inst-name {
          font-size: 0.72rem;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .academic-result-pill {
          font-size: 0.66rem;
          font-weight: 750;
          color: #475569;
          margin-top: 2px;
        }

        .academic-eye-btn {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .academic-eye-btn:hover {
          background: #3b82f6;
          color: #ffffff;
          border-color: #3b82f6;
        }

        .column-bottom-btn {
          margin-top: auto;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
          box-sizing: border-box;
          width: 100%;
        }

        /* ── Column 2: Skill Categories 3x3 Grid ── */
        .skill-categories-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 16px;
        }

        .skill-category-cell {
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(226, 232, 240, 0.85);
          border-radius: 14px;
          padding: 10px 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 104px;
          box-sizing: border-box;
          min-width: 0;
        }

        .skill-category-cell:hover {
          background: #ffffff;
          border-color: #cbd5e1;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(99, 102, 241, 0.09);
        }

        .cell-top-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 4px;
          margin-bottom: 5px;
        }

        .cell-title-wrap {
          display: flex;
          align-items: center;
          gap: 5px;
          min-width: 0;
        }

        .cell-title {
          font-size: 0.78rem;
          font-weight: 850;
          color: #0f172a;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cell-count-badge {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 5px;
          border-radius: 100px;
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          flex-shrink: 0;
        }

        .cell-subtext {
          font-size: 0.68rem;
          line-height: 1.35;
          color: #64748b;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .cell-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 3px;
        }

        .cell-icons-row {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .cell-arrow-icon {
          color: #94a3b8;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .skill-category-cell:hover .cell-arrow-icon {
          transform: translateX(2px);
          color: #6366f1;
        }

        /* ── Column 3: Learning Roadmap ── */
        .roadmap-timeline-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          position: relative;
          margin-bottom: 16px;
          width: 100%;
        }

        .roadmap-row {
          display: flex;
          align-items: center;
          gap: 6px;
          position: relative;
          width: 100%;
        }

        .roadmap-track-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 14px;
          flex-shrink: 0;
          position: relative;
        }

        .roadmap-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 2px rgba(148, 163, 184, 0.3);
          flex-shrink: 0;
          z-index: 2;
        }

        .roadmap-v-line {
          position: absolute;
          top: 100%;
          width: 2px;
          background: #e2e8f0;
          height: 11px;
          z-index: 1;
        }

        .roadmap-card-inner {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 14px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex: 1;
          min-width: 0;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);
        }

        .roadmap-card-inner:hover {
          background: #ffffff;
          border-color: #cbd5e1;
          transform: translateX(2px);
          box-shadow: 0 6px 14px rgba(15, 23, 42, 0.05);
        }

        .roadmap-item-left {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .roadmap-step-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .roadmap-info-col {
          min-width: 0;
        }

        .roadmap-step-title {
          font-size: 0.84rem;
          font-weight: 850;
          color: #0f172a;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .roadmap-step-sub {
          font-size: 0.70rem;
          color: #64748b;
          margin-top: 2px;
          line-height: 1.25;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .roadmap-status-pill {
          font-size: 0.64rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 100px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .roadmap-bottom-container {
          margin-top: auto;
          display: flex;
          flex-direction: column;
        }

        /* Callout Card at bottom of Col 3 */
        .roadmap-callout-box {
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 14px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .callout-target-bubble {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .callout-title {
          font-size: 0.82rem;
          font-weight: 850;
          color: #0f172a;
        }

        .callout-sub {
          font-size: 0.70rem;
          color: #64748b;
          margin-top: 2px;
          font-style: italic;
        }

        /* ── Bottom Callout Banner ── */
        .cert-bottom-banner {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 22px;
          padding: 22px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 32px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
          flex-wrap: wrap;
        }

        .banner-left-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .banner-shield-bubble {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.08);
          color: #6366f1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .banner-title {
          font-size: 1.05rem;
          font-weight: 850;
          color: #0f172a;
        }

        .banner-sub {
          font-size: 0.84rem;
          color: #64748b;
          margin-top: 3px;
        }

        .banner-btn {
          padding: 10px 22px;
          border-radius: 100px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: #ffffff;
          font-size: 0.86rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
          transition: all 0.2s ease;
        }

        .banner-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.45);
        }

        /* ── Certificate Modal / Lightbox ── */
        .cert-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cert-modal-dialog {
          background: #ffffff;
          border-radius: 20px;
          max-width: 620px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 16px 20px;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .modal-close-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #f1f5f9;
          border: none;
          color: #475569;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .modal-body {
          padding: 20px;
        }

        .cert-fallback-card {
          padding: 26px 20px;
          background: linear-gradient(135deg, #fffbeb 0%, #ffffff 50%, #fef3c7 100%);
          border: 2px solid #fbbf24;
          border-radius: 14px;
          text-align: center;
          box-sizing: border-box;
          box-shadow: 0 10px 25px rgba(245, 158, 11, 0.08);
        }

        .cert-fallback-inner {
          border: 1px dashed #d97706;
          border-radius: 10px;
          padding: 18px 14px;
        }

        /* ── Responsive Breakpoints ── */
        @media (max-width: 1120px) {
          .cert-3col-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .skill-column-wrap {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .cert-page {
            padding-top: 110px;
            padding-bottom: 70px;
            padding-left: 16px;
            padding-right: 16px;
          }
          .cert-hero-wrapper {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .cert-hero-left, .cert-quote-box {
            width: 100%;
            min-width: 0;
          }
          .cert-3col-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .skill-column-wrap {
            grid-column: span 1;
          }
          .skill-categories-grid {
            grid-template-columns: 1fr 1fr;
          }
          .cert-hero-title {
            font-size: 2.1rem;
          }
          .cert-counters-row {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .cert-counter-card {
            min-width: 0;
            padding: 12px 8px;
          }
          .cert-toolbar {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .cert-search-wrap {
            width: 100%;
          }
        }

        @media (max-width: 520px) {
          .skill-categories-grid {
            grid-template-columns: 1fr;
          }
          .counter-num {
            font-size: 1.15rem;
          }
          .counter-label {
            font-size: 0.68rem;
          }
        }
      `}</style>

      <div className="cert-page">

        {/* ── 1. TOP HERO HEADER ── */}
        <div className="cert-hero-wrapper">
          {/* Left Title & Tag */}
          <div className="cert-hero-left">
            <div className="cert-pill-badge">
              <Award size={14} />
              <span>CERTIFICATIONS &amp; CREDENTIALS</span>
            </div>
            <h1 className="cert-hero-title">
              Validate Skills. <span className="highlight-word">Prove Growth.</span>
            </h1>
            <p className="cert-hero-desc">
              A collection of my academic degrees, technical certifications, experience letters and learning milestones that showcase my continuous learning journey.
            </p>
          </div>

          {/* Center Quote Box */}
          <div className="cert-quote-box">
            <div className="cert-quote-mark">“</div>
            <p className="cert-quote-text">
              Learning never stops, and every certificate is a step forward.
            </p>
            <div className="cert-quote-author">— Avaneesh Kumar</div>
          </div>

          {/* Right 4 Counter Cards */}
          <div className="cert-counters-row">
            {/* Stat 1: Academic Credentials */}
            <div className="cert-counter-card">
              <div className="counter-icon-bubble" style={{ background: "rgba(37, 99, 235, 0.08)", color: "#2563eb" }}>
                <GraduationCap size={14} />
              </div>
              <div className="counter-num">5</div>
              <div className="counter-label">Academic Credentials</div>
            </div>

            {/* Stat 2: Skill Certifications */}
            <div className="cert-counter-card">
              <div className="counter-icon-bubble" style={{ background: "rgba(2, 132, 199, 0.08)", color: "#0284c7" }}>
                <FileText size={14} />
              </div>
              <div className="counter-num">25+</div>
              <div className="counter-label">Skill Certifications</div>
            </div>

            {/* Stat 3: Experience Letters */}
            <div className="cert-counter-card">
              <div className="counter-icon-bubble" style={{ background: "rgba(124, 58, 237, 0.08)", color: "#7c3aed" }}>
                <Briefcase size={14} />
              </div>
              <div className="counter-num">2</div>
              <div className="counter-label">Experience Letters</div>
            </div>

            {/* Stat 4: Courses & Achievements */}
            <div className="cert-counter-card">
              <div className="counter-icon-bubble" style={{ background: "rgba(225, 29, 72, 0.08)", color: "#e11d48" }}>
                <Star size={14} />
              </div>
              <div className="counter-num">10+</div>
              <div className="counter-label">Courses &amp; Achievements</div>
            </div>
          </div>
        </div>

        {/* ── 2. SINGLE-ROW TOOLBAR: FILTER PILLS + SEARCH BAR ── */}
        <div className="cert-toolbar">
          <div className="cert-filters-list">
            {[
              { id: "all", label: "All" },
              { id: "academic", label: "Academic (5)" },
              { id: "frontend", label: "Frontend (4)" },
              { id: "backend", label: "Backend (4)" },
              { id: "database", label: "Database (3)" },
              { id: "aiml", label: "AI / ML (5)" },
              { id: "aitools", label: "AI Tools (4)" },
              { id: "corecs", label: "Core CS (4)" },
              { id: "cloud", label: "Cloud & DevOps (3)" },
              { id: "experience", label: "Experience (2)" },
              { id: "others", label: "Others (3)" }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`filter-pill-btn ${activeFilter === tab.id ? "active" : ""}`}
                onClick={() => {
                  setActiveFilter(tab.id);
                  if (tab.id !== "all" && tab.id !== "academic" && tab.id !== "experience") {
                    const foundCat = skillCategories.find(c => c.id === tab.id);
                    if (foundCat) openCategoryModal(foundCat);
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="cert-search-wrap">
            <Search size={13} className="search-icon-left" />
            <input 
              type="text" 
              className="cert-search-input" 
              placeholder="Search certifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery ? (
              <X size={13} className="search-icon-right" onClick={() => setSearchQuery("")} />
            ) : (
              <SlidersHorizontal size={13} className="search-icon-right" />
            )}
          </div>
        </div>

        {/* ── 3. MAIN 3-COLUMN PRIMARY SECTION ── */}
        <div className="cert-3col-grid">

          {/* ════ COLUMN 1: ACADEMIC DEGREES (SHIFTED LEFT, CLEAN) ════ */}
          <div className="cert-column-card">
            <div>
              <div className="column-header-row">
                <div className="column-header-left">
                  <div className="column-icon-bubble" style={{ background: "rgba(37, 99, 235, 0.08)", color: "#2563eb" }}>
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h2 className="column-title-text">Academic Degrees</h2>
                    <p className="column-sub-text">Formal education credentials from recognized institutions.</p>
                  </div>
                </div>
                <span className="column-badge-pill" style={{ background: "rgba(37, 99, 235, 0.08)", color: "#2563eb" }}>
                  5
                </span>
              </div>

              {/* Clean Timeline List inside card container */}
              <div className="academic-timeline-list">
                {filteredDegrees.map((item, idx) => (
                  <div key={item.id} className="academic-row">
                    {/* Left: Year inside card */}
                    <div className="academic-year-col">
                      {item.year}
                    </div>

                    {/* Center: Dot & Line */}
                    <div className="academic-track-col">
                      <div className="academic-dot" style={{ background: item.color }} />
                      {idx < filteredDegrees.length - 1 && <div className="academic-v-line" />}
                    </div>

                    {/* Right: Credential card */}
                    <div className="academic-card-col">
                      <div className="academic-card-inner" onClick={() => openModal(item)}>
                        <div className="academic-item-left">
                          <div className="academic-logo-wrap">{item.logo}</div>
                          <div style={{ minWidth: 0 }}>
                            <div className="academic-degree-name">{item.title}</div>
                            <div className="academic-inst-name">{item.institution}</div>
                            <div className="academic-result-pill">Result: {item.result}</div>
                          </div>
                        </div>
                        <button className="academic-eye-btn" title="View Credential">
                          <Eye size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <Link 
              to="/education" 
              className="column-bottom-btn"
              style={{ background: "#eff6ff", color: "#2563eb" }}
            >
              <span>View Academic Journey</span>
              <ChevronRight size={13} />
            </Link>
          </div>

          {/* ════ COLUMN 2: SKILL-BASED CERTIFICATIONS (3x3 COMPACT) ════ */}
          <div className="cert-column-card skill-column-wrap">
            <div>
              <div className="column-header-row">
                <div className="column-header-left">
                  <div className="column-icon-bubble" style={{ background: "rgba(16, 185, 129, 0.08)", color: "#059669" }}>
                    <Award size={18} />
                  </div>
                  <div>
                    <h2 className="column-title-text">Skill-Based Certifications</h2>
                    <p className="column-sub-text">Technical certifications from platforms and organizations.</p>
                  </div>
                </div>
                <span className="column-badge-pill" style={{ background: "rgba(16, 185, 129, 0.1)", color: "#059669" }}>
                  25+
                </span>
              </div>

              {/* 3x3 Mini Categories Grid */}
              <div className="skill-categories-grid">
                {filteredCategories.map((cat) => (
                  <div 
                    key={cat.id} 
                    className="skill-category-cell"
                    onClick={() => openCategoryModal(cat)}
                  >
                    <div>
                      <div className="cell-top-row">
                        <div className="cell-title-wrap">
                          <span style={{ color: cat.color }}>{cat.icon}</span>
                          <span className="cell-title">{cat.title}</span>
                        </div>
                        <span className="cell-count-badge">{cat.count}</span>
                      </div>
                      <div className="cell-subtext">{cat.skills}</div>
                    </div>

                    <div className="cell-bottom-row">
                      <div className="cell-icons-row">
                        {cat.iconsList.includes("udemy") && <UdemyLogo />}
                        {cat.iconsList.includes("coursera") && <CourseraLogo />}
                        {cat.iconsList.includes("google") && <GoogleLogo />}
                        {cat.iconsList.includes("openai") && <OpenAILogo />}
                        {cat.iconsList.includes("github") && <GithubLogo />}
                        {cat.iconsList.includes("docker") && <DockerLogo />}
                      </div>
                      <ChevronRight size={13} className="cell-arrow-icon" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <button 
              className="column-bottom-btn"
              style={{ background: "#ecfdf5", color: "#059669" }}
              onClick={() => openCategoryModal(skillCategories[0])}
            >
              <span>View All Certifications (25+)</span>
              <ChevronRight size={13} />
            </button>
          </div>

          {/* ════ COLUMN 3: LEARNING ROADMAP (PROPER COMPLETE BOX) ════ */}
          <div className="cert-column-card">
            <div>
              <div className="column-header-row">
                <div className="column-header-left">
                  <div className="column-icon-bubble" style={{ background: "rgba(99, 102, 241, 0.08)", color: "#6366f1" }}>
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h2 className="column-title-text">Learning Roadmap</h2>
                    <p className="column-sub-text">Milestones of continuous technical growth.</p>
                  </div>
                </div>
                <span className="column-badge-pill" style={{ background: "rgba(99, 102, 241, 0.08)", color: "#6366f1" }}>
                  5 Steps
                </span>
              </div>

              {/* Vertical Path with clean card items */}
              <div className="roadmap-timeline-list">
                {roadmapSteps.map((step, idx) => (
                  <div key={step.id} className="roadmap-row">
                    <div className="roadmap-track-col">
                      <div className="roadmap-dot" style={{ background: step.dotColor }} />
                      {idx < roadmapSteps.length - 1 && <div className="roadmap-v-line" />}
                    </div>
                    <div className="roadmap-card-inner">
                      <div className="roadmap-item-left">
                        <div 
                          className="roadmap-step-icon" 
                          style={{ background: `${step.dotColor}14`, color: step.dotColor }}
                        >
                          {step.icon}
                        </div>
                        <div className="roadmap-info-col">
                          <div className="roadmap-step-title">{step.title}</div>
                          <div className="roadmap-step-sub">{step.subtitle}</div>
                        </div>
                      </div>
                      <span 
                        className="roadmap-status-pill" 
                        style={{ background: step.statusBg, color: step.statusColor }}
                      >
                        {step.statusText}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout Quote Box & Action Button */}
            <div className="roadmap-bottom-container">
              <div className="roadmap-callout-box">
                <div className="callout-target-bubble">
                  <Target size={15} />
                </div>
                <div>
                  <div className="callout-title">Same Learner. Bigger Goals.</div>
                  <div className="callout-sub">Every certification is a milestone, not a destination.</div>
                </div>
              </div>
              <Link 
                to="/experience" 
                className="column-bottom-btn"
                style={{ background: "#eff6ff", color: "#2563eb", marginTop: "8px" }}
              >
                <span>View Experience Milestones</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>

        </div>

        {/* ── 4. BOTTOM BANNER ── */}
        <div className="cert-bottom-banner">
          <div className="banner-left-wrap">
            <div className="banner-shield-bubble">
              <Shield size={18} />
            </div>
            <div>
              <div className="banner-title">Let's build something amazing together.</div>
              <div className="banner-sub">Open to job opportunities, freelance projects, or tech discussions.</div>
            </div>
          </div>

          <Link to="/contact" className="banner-btn">
            <span>Get In Touch</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>

      {/* ── 5. SINGLE CERTIFICATE LIGHTBOX MODAL ── */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div 
            className="cert-modal-dialog" 
            style={{ maxWidth: selectedCert.isAcademic ? "640px" : "840px", padding: selectedCert.isAcademic ? "0" : "10px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedCert.isAcademic ? (
              <>
                <div className="modal-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle2 size={20} color="#059669" />
                    <div>
                      <h3 style={{ margin: 0, fontSize: "1.02rem", fontWeight: 800, color: "#0f172a" }}>
                        {selectedCert.title}
                      </h3>
                      <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                        {selectedCert.institution || selectedCert.issuer} {selectedCert.year ? `• ${selectedCert.year}` : ""}
                      </div>
                    </div>
                  </div>
                  <button className="modal-close-btn" onClick={() => setSelectedCert(null)}>
                    <X size={16} />
                  </button>
                </div>

                <div className="modal-body">
                  <div className="cert-fallback-card">
                    <div className="cert-fallback-inner">
                      <div style={{ fontSize: "0.7rem", fontWeight: 850, letterSpacing: "2px", color: "#b45309", textTransform: "uppercase", marginBottom: "6px" }}>
                        Official Academic Credential
                      </div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "#0f172a", marginBottom: "4px" }}>
                        {selectedCert.title}
                      </div>
                      <div style={{ fontFamily: "Caveat, cursive", fontSize: "2rem", color: "#4f46e5", fontWeight: 700, margin: "6px 0" }}>
                        Avaneesh Kumar
                      </div>
                      <div style={{ fontSize: "0.82rem", color: "#475569", fontWeight: 600 }}>
                        Awarded by {selectedCert.institution || selectedCert.issuer}
                      </div>
                      {selectedCert.result && (
                        <div style={{ marginTop: "10px", display: "inline-block", padding: "4px 12px", background: "#fef3c7", borderRadius: "100px", color: "#92400e", fontWeight: 800, fontSize: "0.72rem" }}>
                          Division / Grade: {selectedCert.result}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ padding: "12px 20px", borderTop: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fafc" }}>
                  <span style={{ fontSize: "0.76rem", color: "#059669", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                    <CheckCircle2 size={13} /> Official Academic Record
                  </span>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    style={{ padding: "6px 14px", borderRadius: "8px", background: "#ffffff", border: "1px solid #cbd5e1", fontSize: "0.76rem", fontWeight: 700, cursor: "pointer" }}
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <div style={{ padding: "14px 16px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(99, 102, 241, 0.1)", color: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Award size={16} />
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 850, color: "#0f172a" }}>
                        {selectedCert.title}
                      </h3>
                      <div style={{ fontSize: "0.73rem", color: "#64748b" }}>
                        Issued by {selectedCert.issuer} • {selectedCert.date || selectedCert.year}
                      </div>
                    </div>
                  </div>
                  <button className="modal-close-btn" onClick={() => setSelectedCert(null)}>
                    <X size={16} />
                  </button>
                </div>

                <AuthenticCertificate 
                  cert={selectedCert} 
                  onClose={() => setSelectedCert(null)} 
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── 6. CATEGORY CERTIFICATES DRAWER MODAL ── */}
      {categoryModal && (
        <div className="cert-modal-backdrop" onClick={() => setCategoryModal(null)}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: `${categoryModal.color}15`, color: categoryModal.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {categoryModal.icon}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.02rem", fontWeight: 800, color: "#0f172a" }}>
                    {categoryModal.title}
                  </h3>
                  <div style={{ fontSize: "0.74rem", color: "#64748b" }}>
                    {categoryModal.certs.length} Certifications &amp; Courses Available
                  </div>
                </div>
              </div>
              <button className="modal-close-btn" onClick={() => setCategoryModal(null)}>
                <X size={16} />
              </button>
            </div>

            <div className="modal-body" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {categoryModal.certs.map((cert, idx) => (
                <div 
                  key={idx}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "12px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0f172a" }}>{cert.title}</span>
                      {cert.image && (
                        <span style={{ fontSize: "0.6rem", padding: "1px 6px", borderRadius: "100px", background: "rgba(16, 185, 129, 0.1)", color: "#059669", fontWeight: 800 }}>
                          Photo Verified
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#64748b", marginTop: "2px" }}>
                      {cert.issuer} • {cert.date} • ID: <code style={{ color: "#6366f1" }}>{cert.id}</code>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setCategoryModal(null);
                      setSelectedCert(cert);
                    }}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                      border: "none",
                      fontSize: "0.74rem",
                      fontWeight: 750,
                      color: "#ffffff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      flexShrink: 0,
                      boxShadow: "0 2px 6px rgba(99, 102, 241, 0.25)"
                    }}
                  >
                    <Eye size={12} />
                    <span>View Certificate</span>
                  </button>
                </div>
              ))}
            </div>

            <div style={{ padding: "12px 20px", borderTop: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fafc" }}>
              <span style={{ fontSize: "0.75rem", color: "#64748b" }}>
                Technology focus: <strong>{categoryModal.skills}</strong>
              </span>
              <button 
                onClick={() => setCategoryModal(null)}
                style={{ padding: "6px 14px", borderRadius: "8px", background: "#ffffff", border: "1px solid #cbd5e1", fontSize: "0.76rem", fontWeight: 700, cursor: "pointer" }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
