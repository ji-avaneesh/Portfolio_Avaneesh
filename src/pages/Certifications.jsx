import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, Award, Briefcase, Star, Search, 
  SlidersHorizontal, Eye, X, CheckCircle2, 
  Rocket, ArrowRight, FileText, ChevronRight, Sparkles,
  Download, ImageIcon
} from "lucide-react";

// ── SVG Brand & University Logos ──
function HBTULogo() {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#7f1d1d" />
      <path d="M24 8L36 13V24C36 31.5 30.5 38.2 24 40C17.5 38.2 12 31.5 12 24V13L24 8Z" fill="#991b1b" stroke="#fde047" strokeWidth="1.5" />
      <path d="M24 16V32M18 24H30" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3" fill="#fde047" />
      <text x="24" y="37" textAnchor="middle" fill="#fef08a" fontSize="5" fontWeight="bold" fontFamily="sans-serif">HBTU</text>
    </svg>
  );
}

function AllahabadUniLogo() {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" fill="#1e3a8a" stroke="#ca8a04" strokeWidth="2" />
      <circle cx="24" cy="24" r="18" fill="#172554" stroke="#ca8a04" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M24 13L28 21H36L30 26L32 34L24 29L16 34L18 26L12 21H20L24 13Z" fill="#fbbf24" opacity="0.9" />
      <text x="24" y="41" textAnchor="middle" fill="#fde047" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">PRSU</text>
    </svg>
  );
}

function UdemyLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" rx="8" fill="#fdf4ff" stroke="#f0abfc" strokeWidth="1" />
      <path d="M10 11V18C10 21.866 13.134 25 17 25C20.866 25 24 21.866 24 18V11" stroke="#a435f0" strokeWidth="3" strokeLinecap="round" />
      <path d="M17 7L13 11H21L17 7Z" fill="#a435f0" />
    </svg>
  );
}

function CourseraLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <circle cx="17" cy="17" r="11" fill="#0056d2" />
      <path d="M20 13C18 11 14 12 13 15C12 18 13 21 16 22C18 22.5 20 21.5 21 20" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function GreatLearningLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <path d="M17 8C12 8 8 12 8 17C8 22 12 26 17 26C21.5 26 25 22.5 25 18H17V21.5H21.5C20.5 23.5 19 24 17 24C13.2 24 10.5 20.8 10.5 17C10.5 13.2 13.2 10 17 10C19 10 20.8 10.8 22 12L24 10C22.2 8.5 19.8 8 17 8Z" fill="#0284c7" />
    </svg>
  );
}

function VPNShieldLogo() {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <path d="M24 9L36 14V23C36 30.5 30.5 37.2 24 39C17.5 37.2 12 30.5 12 23V14L24 9Z" fill="#2563eb" />
      <path d="M24 9V39C30.5 37.2 36 30.5 36 23V14L24 9Z" fill="#ef4444" />
      <path d="M20 23L23 26L28 20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloudKitchenLogo() {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#fffbeb" stroke="#fde68a" strokeWidth="1" />
      <circle cx="24" cy="24" r="14" fill="#d97706" />
      <path d="M16 22C16 18 19 16 24 16C29 16 32 18 32 22H16Z" fill="#fbbf24" />
      <rect x="15" y="24" width="18" height="2" rx="1" fill="#ef4444" />
      <rect x="15" y="27" width="18" height="2" rx="1" fill="#10b981" />
      <path d="M16 30H32C32 32 29 34 24 34C19 34 16 32 16 30Z" fill="#fbbf24" />
    </svg>
  );
}

function TrophyLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#fffbeb" stroke="#fef08a" strokeWidth="1" />
      <path d="M12 11H24V18C24 21.3 21.3 24 18 24C14.7 24 12 21.3 12 18V11Z" fill="#f59e0b" />
      <path d="M12 13H8C8 16 10 18 12 18V13ZM24 13H28C28 16 26 18 24 18V13Z" fill="#d97706" />
      <path d="M15 24H21V27H15V24ZM13 27H23V29H13V27Z" fill="#b45309" />
    </svg>
  );
}

function MedalLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
      <path d="M14 8L18 17L12 20L10 9L14 8ZM22 8L18 17L24 20L26 9L22 8Z" fill="#ef4444" />
      <circle cx="18" cy="22" r="7" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
      <text x="18" y="25" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">1</text>
    </svg>
  );
}

function CiscoLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" rx="8" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1" />
      <g fill="#0284c7">
        <rect x="9" y="16" width="2" height="6" rx="1" />
        <rect x="13" y="13" width="2" height="9" rx="1" />
        <rect x="17" y="11" width="2" height="11" rx="1" />
        <rect x="21" y="13" width="2" height="9" rx="1" />
        <rect x="25" y="16" width="2" height="6" rx="1" />
      </g>
      <text x="17" y="27" textAnchor="middle" fill="#0284c7" fontSize="5" fontWeight="bold" fontFamily="sans-serif">CISCO</text>
    </svg>
  );
}

function DeepLearningLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" rx="8" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1" />
      <circle cx="17" cy="17" r="10" stroke="#e11d48" strokeWidth="2.5" fill="none" />
      <circle cx="17" cy="17" r="6" stroke="#fb7185" strokeWidth="2" fill="none" />
      <circle cx="17" cy="17" r="2.5" fill="#e11d48" />
    </svg>
  );
}

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);
  const [expandedSkills, setExpandedSkills] = useState(false);
  const [expandedAchievements, setExpandedAchievements] = useState(false);
  const [imgLoadError, setImgLoadError] = useState(false);

  // ── Degrees (2) ──
  const degrees = [
    {
      id: "mca",
      category: "degrees",
      title: "MCA (Master of Computer Applications)",
      issuer: "Harcourt Butler Technical University (HBTU)",
      period: "2023 – 2025",
      score: "CGPA: 7.5",
      image: "mca_degree.png",
      logo: <HBTULogo />,
      color: "#991b1b"
    },
    {
      id: "bsc",
      category: "degrees",
      title: "B.Sc. Mathematics",
      issuer: "Allahabad State University",
      period: "2016 – 2019",
      score: "1st Division",
      image: "bsc_mathematics.png",
      logo: <AllahabadUniLogo />,
      color: "#1e3a8a"
    }
  ];

  // ── Skill Certifications (12+) ──
  const initialSkills = [
    {
      id: "react-udemy",
      category: "skills",
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "Mar 2024",
      image: "react_complete_guide.png",
      logo: <UdemyLogo />,
      color: "#a435f0"
    },
    {
      id: "js-coursera",
      category: "skills",
      title: "JavaScript – Advanced Concepts",
      issuer: "Coursera",
      date: "Jan 2024",
      image: "javascript_advanced.png",
      logo: <CourseraLogo />,
      color: "#0056d2"
    },
    {
      id: "python-coursera",
      category: "skills",
      title: "Python for Everybody",
      issuer: "Coursera",
      date: "Dec 2023",
      image: "python_for_everybody.png",
      logo: <CourseraLogo />,
      color: "#0056d2"
    },
    {
      id: "sql-greatlearning",
      category: "skills",
      title: "SQL for Data Science",
      issuer: "Great Learning",
      date: "Nov 2023",
      image: "sql_data_science.png",
      logo: <GreatLearningLogo />,
      color: "#0284c7"
    }
  ];

  const additionalSkills = [
    {
      id: "node-cert",
      category: "skills",
      title: "Node.js & Express Backend Development",
      issuer: "Udemy",
      date: "Feb 2024",
      image: "nodejs_rest_apis.png",
      logo: <UdemyLogo />,
      color: "#16a34a"
    },
    {
      id: "dsa-scaler",
      category: "skills",
      title: "Data Structures & Algorithms in C++",
      issuer: "Scaler Academy",
      date: "Oct 2023",
      image: "dsa_scaler.png",
      logo: <CourseraLogo />,
      color: "#7c3aed"
    },
    {
      id: "git-cert",
      category: "skills",
      title: "Version Control with Git and GitHub",
      issuer: "Coursera",
      date: "Sep 2023",
      image: "git_github_cert.png",
      logo: <CourseraLogo />,
      color: "#ea580c"
    },
    {
      id: "mongo-cert",
      category: "skills",
      title: "MongoDB Certified Associate Developer",
      issuer: "MongoDB University",
      date: "Aug 2023",
      image: "mongodb_cert.png",
      logo: <GreatLearningLogo />,
      color: "#059669"
    },
    {
      id: "docker-cert",
      category: "skills",
      title: "Docker Essentials & Containers",
      issuer: "Coursera",
      date: "Jul 2023",
      image: "docker_essentials.png",
      logo: <CourseraLogo />,
      color: "#0284c7"
    },
    {
      id: "nextjs-cert",
      category: "skills",
      title: "Next.js & Server Components",
      issuer: "Udemy",
      date: "Jun 2023",
      image: "nextjs_mastery.png",
      logo: <UdemyLogo />,
      color: "#0f172a"
    },
    {
      id: "ts-cert",
      category: "skills",
      title: "TypeScript Complete Developer Course",
      issuer: "Udemy",
      date: "May 2023",
      image: "typescript_cert.png",
      logo: <UdemyLogo />,
      color: "#2563eb"
    },
    {
      id: "css-cert",
      category: "skills",
      title: "Responsive Web Design & Modern CSS",
      issuer: "freeCodeCamp",
      date: "Apr 2023",
      image: "fcc_responsive_web.png",
      logo: <CourseraLogo />,
      color: "#0891b2"
    }
  ];

  const allSkills = [...initialSkills, ...additionalSkills];
  const displayedSkills = expandedSkills ? allSkills : initialSkills;

  // ── Experience Letters (2) ──
  const experienceLetters = [
    {
      id: "vpn-exp",
      category: "experience",
      title: "Full Stack Developer Intern",
      issuer: "VPN Digital Services Pvt. Ltd.",
      period: "Aug 2025 – Mid Jan 2026",
      image: "vpn_experience_letter.png",
      logo: <VPNShieldLogo />,
      color: "#2563eb"
    },
    {
      id: "kitchen-exp",
      category: "experience",
      title: "Software Engineer Intern",
      issuer: "Cloud Kitchen Service",
      period: "Jan 2026 – July 2026",
      image: "cloud_kitchen_experience_letter.png",
      logo: <CloudKitchenLogo />,
      color: "#d97706"
    }
  ];

  // ── Achievements & Recognition (3+) ──
  const initialAchievements = [
    {
      id: "sih-hackathon",
      category: "achievements",
      title: "Smart India Hackathon (Participant)",
      subtitle: "Internal Hackathon",
      year: "2024",
      image: "sih_hackathon_2024.png",
      logo: <TrophyLogo />,
      color: "#f59e0b"
    },
    {
      id: "academic-excellence",
      category: "achievements",
      title: "Academic Excellence",
      subtitle: "1st Division in B.Sc. Mathematics",
      year: "2019",
      image: "academic_excellence_2019.png",
      logo: <MedalLogo />,
      color: "#ef4444"
    }
  ];

  const additionalAchievements = [
    {
      id: "code-fest",
      category: "achievements",
      title: "Inter-College Code Sprint Finalist",
      subtitle: "HBTU Technical Fest",
      year: "2024",
      image: "code_sprint_finalist.png",
      logo: <TrophyLogo />,
      color: "#8b5cf6"
    }
  ];

  const allAchievements = [...initialAchievements, ...additionalAchievements];
  const displayedAchievements = expandedAchievements ? allAchievements : initialAchievements;

  // ── Other Certifications (2) ──
  const otherCertifications = [
    {
      id: "cisco-cyber",
      category: "others",
      title: "Cybersecurity Fundamentals",
      issuer: "Cisco Networking Academy",
      image: "cisco_cybersecurity.png",
      logo: <CiscoLogo />,
      color: "#0284c7"
    },
    {
      id: "ai-everyone",
      category: "others",
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      image: "ai_for_everyone.png",
      logo: <DeepLearningLogo />,
      color: "#e11d48"
    }
  ];

  // Handle opening lightbox
  const openModal = (item) => {
    setImgLoadError(false);
    setSelectedCert(item);
  };

  // Search filter logic
  const matchesSearch = (item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      (item.title && item.title.toLowerCase().includes(query)) ||
      (item.issuer && item.issuer.toLowerCase().includes(query)) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(query)) ||
      (item.period && item.period.toLowerCase().includes(query)) ||
      (item.date && item.date.toLowerCase().includes(query))
    );
  };

  // Filter sections visibility
  const showDegrees = (activeFilter === "all" || activeFilter === "degrees") && degrees.some(matchesSearch);
  const showSkills = (activeFilter === "all" || activeFilter === "skills") && allSkills.some(matchesSearch);
  const showExperience = (activeFilter === "all" || activeFilter === "experience") && experienceLetters.some(matchesSearch);
  const showAchievements = (activeFilter === "all" || activeFilter === "achievements") && allAchievements.some(matchesSearch);
  const showOthers = (activeFilter === "all" || activeFilter === "others") && otherCertifications.some(matchesSearch);
  const showMoreAhead = activeFilter === "all" && !searchQuery.trim();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');

        .cert-page {
          padding-top: 110px;
          padding-bottom: 70px;
          max-width: 1220px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
          box-sizing: border-box;
          font-family: 'Outfit', sans-serif;
          color: #0f172a;
        }

        /* ── Top Hero Header ── */
        .cert-hero-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .cert-hero-left {
          flex: 1.15;
          min-width: 320px;
        }

        .cert-pill-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 1.4px;
          color: #64748b;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .cert-hero-title {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: -0.8px;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .cert-hero-title .highlight-word {
          color: #6366f1;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cert-hero-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
          max-width: 520px;
        }

        /* ── Center Quote Box ── */
        .cert-quote-box {
          flex: 0.95;
          min-width: 260px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 20px 22px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.03);
          box-sizing: border-box;
          position: relative;
        }

        .cert-quote-mark {
          font-size: 2.8rem;
          line-height: 0.8;
          color: #93c5fd;
          font-family: serif;
          margin-bottom: 6px;
        }

        .cert-quote-text {
          font-size: 0.88rem;
          line-height: 1.5;
          color: #334155;
          font-style: italic;
          margin: 0 0 10px 0;
        }

        .cert-quote-author {
          font-size: 0.78rem;
          font-weight: 700;
          color: #64748b;
        }

        /* ── Right 4 Counter Cards ── */
        .cert-counters-row {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .cert-counter-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 16px 14px;
          min-width: 82px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cert-counter-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
        }

        .counter-icon-bubble {
          width: 32px;
          height: 32px;
          border-radius: 50%;
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
          font-size: 0.7rem;
          font-weight: 700;
          color: #475569;
          margin-top: 2px;
          line-height: 1.2;
        }

        .counter-sublabel {
          font-size: 0.65rem;
          color: #94a3b8;
          line-height: 1.1;
        }

        /* ── Toolbar: Filter Tabs & Search Bar ── */
        .cert-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .cert-filters-list {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-pill-btn {
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          background: rgba(255, 255, 255, 0.85);
          color: #475569;
          border-color: rgba(226, 232, 240, 0.9);
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);
        }

        .filter-pill-btn:hover {
          background: #ffffff;
          color: #0f172a;
          border-color: #cbd5e1;
        }

        .filter-pill-btn.active {
          background: #6366f1;
          color: #ffffff;
          border-color: #6366f1;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
        }

        .cert-search-wrap {
          position: relative;
          min-width: 250px;
          display: flex;
          align-items: center;
        }

        .cert-search-input {
          width: 100%;
          padding: 8px 36px 8px 34px;
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
          left: 12px;
          color: #94a3b8;
          pointer-events: none;
        }

        .search-icon-right {
          position: absolute;
          right: 12px;
          color: #64748b;
          cursor: pointer;
        }

        /* ── 6 Main Section Cards (3-Column Grid) ── */
        .cert-main-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .cert-category-card {
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 22px 20px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.035);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cert-category-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
        }

        .category-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }

        .category-header-left {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .category-icon-squircle {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .category-title-text {
          font-size: 1.05rem;
          font-weight: 850;
          color: #0f172a;
          line-height: 1.2;
          margin: 0 0 3px 0;
        }

        .category-sub-text {
          font-size: 0.76rem;
          color: #64748b;
          line-height: 1.35;
          margin: 0;
        }

        .category-badge-pill {
          padding: 3px 9px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.3px;
          flex-shrink: 0;
        }

        /* ── Item Rows inside Card ── */
        .items-vertical-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .cert-item-row {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 14px;
          padding: 11px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .cert-item-row:hover {
          background: #ffffff;
          border-color: #6366f1;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.1);
          transform: translateX(2px);
        }

        .cert-item-left {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
          flex: 1;
        }

        .cert-item-logo {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-item-details {
          min-width: 0;
          flex: 1;
        }

        .cert-item-title {
          font-size: 0.86rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          margin: 0 0 2px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cert-item-issuer {
          font-size: 0.74rem;
          color: #64748b;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cert-item-meta {
          font-size: 0.7rem;
          color: #94a3b8;
          font-weight: 600;
          margin-top: 2px;
        }

        .cert-item-right-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(203, 213, 225, 0.8);
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .cert-item-row:hover .cert-item-right-btn {
          border-color: #6366f1;
          color: #6366f1;
          background: rgba(99, 102, 241, 0.08);
        }

        /* ── Expandable Action Bottom Buttons ── */
        .category-bottom-action-btn {
          width: 100%;
          margin-top: 14px;
          padding: 10px 14px;
          border-radius: 12px;
          border: none;
          font-size: 0.82rem;
          font-weight: 750;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .category-bottom-action-btn:hover {
          transform: translateY(-1px);
          opacity: 0.92;
        }

        /* ── Card 6: More Learning Ahead ── */
        .more-learning-card {
          background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #fdf2f8 100%);
          border: 1px solid rgba(199, 210, 254, 0.7);
          border-radius: 20px;
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.06);
        }

        .more-learning-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .rocket-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4f46e5;
        }

        .keep-learning-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 100px;
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.4px;
        }

        .more-learning-title {
          font-size: 1.25rem;
          font-weight: 850;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .more-learning-desc {
          font-size: 0.85rem;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 20px 0;
        }

        .more-learning-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 100px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 750;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
          width: fit-content;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .more-learning-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.45);
        }

        .handwritten-script-doodle {
          position: absolute;
          bottom: 18px;
          right: 22px;
          font-family: 'Caveat', cursive;
          font-size: 1.45rem;
          color: #4f46e5;
          font-weight: 700;
          line-height: 1.1;
          transform: rotate(-5deg);
          text-align: right;
          pointer-events: none;
        }

        .handwritten-script-doodle span {
          display: block;
        }

        /* ── Certificate Photo Lightbox / Modal ── */
        .cert-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
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
          border-radius: 24px;
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          position: relative;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 20px 24px;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .modal-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .modal-close-btn {
          width: 36px;
          height: 36px;
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
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cert-image-frame {
          width: 100%;
          min-height: 340px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .cert-real-img {
          width: 100%;
          height: auto;
          max-height: 520px;
          object-fit: contain;
          display: block;
        }

        /* Fallback Certificate Document Card */
        .cert-fallback-card {
          width: 100%;
          padding: 36px 30px;
          background: linear-gradient(135deg, #fffbeb 0%, #ffffff 50%, #fef3c7 100%);
          border: 2px solid #fbbf24;
          border-radius: 14px;
          text-align: center;
          position: relative;
          box-sizing: border-box;
          box-shadow: 0 10px 25px rgba(245, 158, 11, 0.08);
        }

        .cert-fallback-inner-border {
          border: 1px dashed #d97706;
          border-radius: 10px;
          padding: 24px 20px;
        }

        .cert-fallback-header-tag {
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 2px;
          color: #b45309;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .cert-fallback-title {
          font-size: 1.45rem;
          font-weight: 900;
          color: #1e293b;
          margin: 0 0 6px 0;
          font-family: 'Outfit', sans-serif;
        }

        .cert-fallback-name {
          font-family: 'Caveat', cursive;
          font-size: 2rem;
          color: #4f46e5;
          font-weight: 700;
          margin: 8px 0;
        }

        .cert-fallback-issuer {
          font-size: 0.95rem;
          font-weight: 700;
          color: #475569;
          margin-bottom: 14px;
        }

        .cert-fallback-instructions {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 8px;
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.25);
          color: #0284c7;
          font-size: 0.75rem;
          font-weight: 650;
          margin-top: 14px;
        }

        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f8fafc;
          border-radius: 0 0 24px 24px;
          font-size: 0.8rem;
          color: #64748b;
          flex-wrap: wrap;
          gap: 10px;
        }

        .modal-verified-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #059669;
          font-weight: 750;
        }

        /* ══════════════════════════════════════════════════════
           MOBILE-FRIENDLY FIRST RESPONSIVE BREAKPOINTS
        ══════════════════════════════════════════════════════ */
        @media (max-width: 1040px) {
          .cert-main-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cert-hero-wrapper {
            gap: 20px;
          }
          .cert-quote-box {
            flex: 1 1 100%;
          }
        }

        @media (max-width: 768px) {
          .cert-main-grid {
            grid-template-columns: 1fr;
          }
          .cert-hero-title {
            font-size: 2rem;
          }
          .cert-counters-row {
            width: 100%;
            justify-content: space-between;
          }
          .cert-counter-card {
            flex: 1;
            min-width: 0;
            padding: 12px 6px;
          }
          .cert-toolbar {
            flex-direction: column;
            align-items: stretch;
          }
          .cert-search-wrap {
            width: 100%;
          }
        }

        @media (max-width: 500px) {
          .cert-page {
            padding-top: 96px;
            padding-left: 14px;
            padding-right: 14px;
          }
          .counter-num {
            font-size: 1.1rem;
          }
          .counter-label {
            font-size: 0.65rem;
          }
          .cert-filters-list {
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 6px;
          }
        }
      `}</style>

      <div className="cert-page">

        {/* ── TOP HERO HEADER ── */}
        <div className="cert-hero-wrapper">
          {/* Left Title & Tag */}
          <div className="cert-hero-left">
            <span className="cert-pill-badge">CERTIFICATIONS</span>
            <h1 className="cert-hero-title">
              Proof of learning, building<br />
              and <span className="highlight-word">growing.</span>
            </h1>
            <p className="cert-hero-desc">
              A collection of my academic credentials, professional certifications, experience letters, and achievements that validate my skills and journey.
            </p>
          </div>

          {/* Center Quote Box */}
          <div className="cert-quote-box">
            <div className="cert-quote-mark">“</div>
            <p className="cert-quote-text">
              Continuous learning is the compass that keeps me evolving.
            </p>
            <div className="cert-quote-author">— Avaneesh Kumar</div>
          </div>

          {/* Right 4 Counter Cards */}
          <div className="cert-counters-row">
            {/* Stat 1: Degrees */}
            <div className="cert-counter-card">
              <div className="counter-icon-bubble" style={{ background: "rgba(37, 99, 235, 0.08)", color: "#2563eb" }}>
                <GraduationCap size={15} />
              </div>
              <div className="counter-num">2</div>
              <div className="counter-label">Degrees</div>
              <div className="counter-sublabel">(Selected)</div>
            </div>

            {/* Stat 2: Skill Certifications */}
            <div className="cert-counter-card">
              <div className="counter-icon-bubble" style={{ background: "rgba(2, 132, 199, 0.08)", color: "#0284c7" }}>
                <FileText size={15} />
              </div>
              <div className="counter-num">12+</div>
              <div className="counter-label">Skill</div>
              <div className="counter-sublabel">Certifications</div>
            </div>

            {/* Stat 3: Experience Letters */}
            <div className="cert-counter-card">
              <div className="counter-icon-bubble" style={{ background: "rgba(124, 58, 237, 0.08)", color: "#7c3aed" }}>
                <Briefcase size={15} />
              </div>
              <div className="counter-num">2</div>
              <div className="counter-label">Experience</div>
              <div className="counter-sublabel">Letters</div>
            </div>

            {/* Stat 4: Achievements & Others */}
            <div className="cert-counter-card">
              <div className="counter-icon-bubble" style={{ background: "rgba(225, 29, 72, 0.08)", color: "#e11d48" }}>
                <Star size={15} />
              </div>
              <div className="counter-num">3+</div>
              <div className="counter-label">Achievements</div>
              <div className="counter-sublabel">&amp; Others</div>
            </div>
          </div>
        </div>

        {/* ── TOOLBAR: FILTER PILLS & SEARCH BAR ── */}
        <div className="cert-toolbar">
          <div className="cert-filters-list">
            <button 
              className={`filter-pill-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button 
              className={`filter-pill-btn ${activeFilter === "degrees" ? "active" : ""}`}
              onClick={() => setActiveFilter("degrees")}
            >
              Degrees (2)
            </button>
            <button 
              className={`filter-pill-btn ${activeFilter === "skills" ? "active" : ""}`}
              onClick={() => setActiveFilter("skills")}
            >
              Skill Certifications (12+)
            </button>
            <button 
              className={`filter-pill-btn ${activeFilter === "experience" ? "active" : ""}`}
              onClick={() => setActiveFilter("experience")}
            >
              Experience Letters (2)
            </button>
            <button 
              className={`filter-pill-btn ${activeFilter === "achievements" ? "active" : ""}`}
              onClick={() => setActiveFilter("achievements")}
            >
              Achievements (3+)
            </button>
            <button 
              className={`filter-pill-btn ${activeFilter === "others" ? "active" : ""}`}
              onClick={() => setActiveFilter("others")}
            >
              Others (2)
            </button>
          </div>

          <div className="cert-search-wrap">
            <Search size={14} className="search-icon-left" />
            <input 
              type="text" 
              className="cert-search-input" 
              placeholder="Search certifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery ? (
              <X size={14} className="search-icon-right" onClick={() => setSearchQuery("")} />
            ) : (
              <SlidersHorizontal size={14} className="search-icon-right" />
            )}
          </div>
        </div>

        {/* ── 6 MAIN SECTION CARDS GRID ── */}
        <div className="cert-main-grid">

          {/* ── CARD 1: ACADEMIC DEGREES ── */}
          {showDegrees && (
            <div className="cert-category-card">
              <div className="category-header-row">
                <div className="category-header-left">
                  <div className="category-icon-squircle" style={{ background: "rgba(37, 99, 235, 0.08)", color: "#2563eb" }}>
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h2 className="category-title-text">Academic Degrees</h2>
                    <p className="category-sub-text">Formal education credentials from recognized institutions.</p>
                  </div>
                </div>
                <span className="category-badge-pill" style={{ background: "rgba(37, 99, 235, 0.08)", color: "#2563eb" }}>
                  2
                </span>
              </div>

              <div className="items-vertical-list">
                {degrees.filter(matchesSearch).map((deg) => (
                  <div key={deg.id} className="cert-item-row" onClick={() => openModal(deg)}>
                    <div className="cert-item-left">
                      <div className="cert-item-logo">{deg.logo}</div>
                      <div className="cert-item-details">
                        <div className="cert-item-title">{deg.title}</div>
                        <div className="cert-item-issuer">{deg.issuer}</div>
                        <div className="cert-item-meta">{deg.period} | {deg.score}</div>
                      </div>
                    </div>
                    <button className="cert-item-right-btn" title="View Certificate Photo">
                      <Eye size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── CARD 2: SKILL-BASED CERTIFICATIONS ── */}
          {showSkills && (
            <div className="cert-category-card">
              <div className="category-header-row">
                <div className="category-header-left">
                  <div className="category-icon-squircle" style={{ background: "rgba(16, 185, 129, 0.08)", color: "#059669" }}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <h2 className="category-title-text">Skill-Based Certifications</h2>
                    <p className="category-sub-text">Technical and domain-specific certifications from platforms and organizations.</p>
                  </div>
                </div>
                <span className="category-badge-pill" style={{ background: "rgba(16, 185, 129, 0.08)", color: "#059669" }}>
                  12+
                </span>
              </div>

              <div className="items-vertical-list">
                {displayedSkills.filter(matchesSearch).map((skill) => (
                  <div key={skill.id} className="cert-item-row" onClick={() => openModal(skill)}>
                    <div className="cert-item-left">
                      <div className="cert-item-logo">{skill.logo}</div>
                      <div className="cert-item-details">
                        <div className="cert-item-title">{skill.title}</div>
                        <div className="cert-item-issuer">{skill.issuer}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: 600 }}>{skill.date}</span>
                      <button className="cert-item-right-btn" title="View Certificate Photo">
                        <Eye size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="category-bottom-action-btn"
                style={{ background: "#ecfdf5", color: "#059669" }}
                onClick={() => setExpandedSkills(!expandedSkills)}
              >
                <span>{expandedSkills ? "Show Less" : "View All Skill Certifications (12+)"}</span>
                <ChevronRight size={14} style={{ transform: expandedSkills ? "rotate(-90deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
              </button>
            </div>
          )}

          {/* ── CARD 3: EXPERIENCE LETTERS ── */}
          {showExperience && (
            <div className="cert-category-card">
              <div className="category-header-row">
                <div className="category-header-left">
                  <div className="category-icon-squircle" style={{ background: "rgba(245, 158, 11, 0.08)", color: "#d97706" }}>
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h2 className="category-title-text">Experience Letters</h2>
                    <p className="category-sub-text">Official experience and internship completion letters.</p>
                  </div>
                </div>
                <span className="category-badge-pill" style={{ background: "rgba(245, 158, 11, 0.08)", color: "#d97706" }}>
                  2
                </span>
              </div>

              <div className="items-vertical-list">
                {experienceLetters.filter(matchesSearch).map((exp) => (
                  <div key={exp.id} className="cert-item-row" onClick={() => openModal(exp)}>
                    <div className="cert-item-left">
                      <div className="cert-item-logo">{exp.logo}</div>
                      <div className="cert-item-details">
                        <div className="cert-item-title">{exp.title}</div>
                        <div className="cert-item-issuer">{exp.issuer}</div>
                        <div className="cert-item-meta">{exp.period}</div>
                      </div>
                    </div>
                    <button className="cert-item-right-btn" title="View Experience Letter Photo">
                      <Eye size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── CARD 4: ACHIEVEMENTS & RECOGNITION ── */}
          {showAchievements && (
            <div className="cert-category-card">
              <div className="category-header-row">
                <div className="category-header-left">
                  <div className="category-icon-squircle" style={{ background: "rgba(225, 29, 72, 0.08)", color: "#e11d48" }}>
                    <Star size={20} />
                  </div>
                  <div>
                    <h2 className="category-title-text">Achievements &amp; Recognition</h2>
                    <p className="category-sub-text">Hackathons, contests, and notable achievements.</p>
                  </div>
                </div>
                <span className="category-badge-pill" style={{ background: "rgba(225, 29, 72, 0.08)", color: "#e11d48" }}>
                  3+
                </span>
              </div>

              <div className="items-vertical-list">
                {displayedAchievements.filter(matchesSearch).map((ach) => (
                  <div key={ach.id} className="cert-item-row" onClick={() => openModal(ach)}>
                    <div className="cert-item-left">
                      <div className="cert-item-logo">{ach.logo}</div>
                      <div className="cert-item-details">
                        <div className="cert-item-title">{ach.title}</div>
                        <div className="cert-item-issuer">{ach.subtitle}</div>
                        <div className="cert-item-meta">{ach.year}</div>
                      </div>
                    </div>
                    <button className="cert-item-right-btn" title="View Achievement Photo">
                      <Eye size={14} />
                    </button>
                  </div>
                ))}
              </div>

              <button 
                className="category-bottom-action-btn"
                style={{ background: "#fff1f2", color: "#e11d48" }}
                onClick={() => setExpandedAchievements(!expandedAchievements)}
              >
                <span>{expandedAchievements ? "Show Less" : "View All Achievements (3+)"}</span>
                <ChevronRight size={14} style={{ transform: expandedAchievements ? "rotate(-90deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
              </button>
            </div>
          )}

          {/* ── CARD 5: OTHER CERTIFICATIONS ── */}
          {showOthers && (
            <div className="cert-category-card">
              <div className="category-header-row">
                <div className="category-header-left">
                  <div className="category-icon-squircle" style={{ background: "rgba(147, 51, 234, 0.08)", color: "#7c3aed" }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <h2 className="category-title-text">Other Certifications</h2>
                    <p className="category-sub-text">Additional certifications, training, and special programs.</p>
                  </div>
                </div>
                <span className="category-badge-pill" style={{ background: "rgba(147, 51, 234, 0.08)", color: "#7c3aed" }}>
                  2
                </span>
              </div>

              <div className="items-vertical-list">
                {otherCertifications.filter(matchesSearch).map((other) => (
                  <div key={other.id} className="cert-item-row" onClick={() => openModal(other)}>
                    <div className="cert-item-left">
                      <div className="cert-item-logo">{other.logo}</div>
                      <div className="cert-item-details">
                        <div className="cert-item-title">{other.title}</div>
                        <div className="cert-item-issuer">{other.issuer}</div>
                      </div>
                    </div>
                    <button className="cert-item-right-btn" title="View Certificate Photo">
                      <Eye size={13} />
                    </button>
                  </div>
                ))}
              </div>

              <button 
                className="category-bottom-action-btn"
                style={{ background: "#f5f3ff", color: "#7c3aed" }}
                onClick={() => setActiveFilter("others")}
              >
                <span>View All Certificates (2)</span>
                <ChevronRight size={14} />
              </button>
            </div>
          )}

          {/* ── CARD 6: MORE LEARNING AHEAD ── */}
          {showMoreAhead && (
            <div className="more-learning-card">
              <div>
                <div className="more-learning-top">
                  <div className="rocket-icon-wrap">
                    <Rocket size={22} />
                  </div>
                  <span className="keep-learning-badge">
                    <Sparkles size={11} fill="#4f46e5" /> Keep Learning
                  </span>
                </div>

                <h3 className="more-learning-title">More Learning Ahead</h3>
                <p className="more-learning-desc">
                  I keep exploring new technologies and earning certifications to stay updated in this fast-changing tech world.
                </p>
              </div>

              <div>
                <Link to="/contact" className="more-learning-btn">
                  <span>Let's Connect</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Handwritten script doodle accent */}
              <div className="handwritten-script-doodle">
                <span>Same</span>
                <span>Learner</span>
                <span>Bigger</span>
                <span>Goals ⤴</span>
              </div>
            </div>
          )}

        </div>

        {/* ── CERTIFICATE PHOTO LIGHTBOX / MODAL ── */}
        {selectedCert && (
          <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
            <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
              
              {/* Header */}
              <div className="modal-header">
                <div className="modal-header-left">
                  <div style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {selectedCert.logo}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 850, color: "#0f172a" }}>
                      {selectedCert.title}
                    </h3>
                    <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
                      {selectedCert.issuer || selectedCert.subtitle} {selectedCert.period || selectedCert.date || selectedCert.year ? `• ${selectedCert.period || selectedCert.date || selectedCert.year}` : ""}
                    </div>
                  </div>
                </div>

                <button className="modal-close-btn" onClick={() => setSelectedCert(null)} aria-label="Close modal">
                  <X size={18} />
                </button>
              </div>

              {/* Body: Certificate Photo Viewer with Fallback */}
              <div className="modal-body">
                <div className="cert-image-frame">
                  {!imgLoadError ? (
                    <img 
                      src={`/images/certificates/${selectedCert.image}`}
                      alt={selectedCert.title}
                      className="cert-real-img"
                      onError={() => setImgLoadError(true)}
                    />
                  ) : (
                    /* Fallback Certificate Canvas Card when photo file isn't placed yet */
                    <div className="cert-fallback-card">
                      <div className="cert-fallback-inner-border">
                        <div className="cert-fallback-header-tag">Official Credential Verification</div>
                        <h4 className="cert-fallback-title">{selectedCert.title}</h4>
                        <div style={{ fontSize: "0.82rem", color: "#64748b" }}>Awarded To</div>
                        <div className="cert-fallback-name">Avaneesh Kumar</div>
                        <div className="cert-fallback-issuer">
                          {selectedCert.issuer || selectedCert.subtitle}
                        </div>
                        {selectedCert.score && (
                          <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#059669", marginBottom: "8px" }}>
                            Academic Performance: {selectedCert.score}
                          </div>
                        )}
                        <div style={{ fontSize: "0.76rem", color: "#94a3b8" }}>
                          Completion / Verified Record: {selectedCert.period || selectedCert.date || selectedCert.year}
                        </div>

                        <div className="cert-fallback-instructions">
                          <ImageIcon size={13} />
                          <span>Photo destination: <code>/public/images/certificates/{selectedCert.image}</code></span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <span className="modal-verified-tag">
                  <CheckCircle2 size={16} /> Official Record &amp; Verified Completion
                </span>

                <div style={{ display: "flex", gap: "10px" }}>
                  {!imgLoadError && (
                    <a
                      href={`/images/certificates/${selectedCert.image}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        padding: "7px 14px",
                        borderRadius: "8px",
                        background: "#ffffff",
                        border: "1px solid #cbd5e1",
                        color: "#0f172a",
                        textDecoration: "none",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px"
                      }}
                    >
                      <Download size={13} /> Open Image
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    style={{
                      padding: "7px 16px",
                      borderRadius: "8px",
                      background: "#6366f1",
                      border: "none",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      cursor: "pointer"
                    }}
                  >
                    Close Preview
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </>
  );
}
