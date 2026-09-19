import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Award, Briefcase, 
  CheckCircle2, ChevronRight, Sparkles, 
  Code2, Server, Cpu, X, Mail
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import RippleButton from "../components/RippleButton";

// Infinite Typewriter Animation Phrases
const TYPEWRITER_PHRASES = [
  "Agentic AI",
  "GenAI",
  "Full Stack Developer",
  "Backend Systems",
  "Data",
  "Other Exploration"
];

export default function Home() {
  const navigate = useNavigate();

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Certificate Modal State
  const [certModal, setCertModal] = useState(null);

  useEffect(() => {
    const fullPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let timer;

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < fullPhrase.length) {
        timer = setTimeout(() => {
          setCurrentText(fullPhrase.slice(0, currentText.length + 1));
        }, 85);
      } else {
        // Complete phrase -> Hold for ~1 second
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullPhrase.slice(0, currentText.length - 1));
        }, 45);
      } else {
        // Switch to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  // Core Technologies from portfolioData
  const coreTechnologies = [
    "React",
    "Node.js",
    "JavaScript",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Express.js",
    "Git",
    "Docker",
    "RAG",
    "LangChain",
    "Ollama",
    "Next.js",
    "C++",
    "Redis",
    "Socket.IO",
    "REST APIs",
    "Tailwind CSS"
  ];

  const handleCertificateClick = (companyName, certUrl) => {
    if (certUrl) {
      window.open(certUrl, "_blank");
    } else {
      setCertModal({
        company: companyName,
        message: `Official certificate for ${companyName} will be uploaded soon. Verification is available directly upon request.`
      });
    }
  };

  return (
    <>
      <style>{`
        .landing-page-container {
          padding-top: 130px;
          padding-bottom: 90px;
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
          box-sizing: border-box;
        }

        /* ---------------- HERO SECTION ---------------- */
        .landing-hero {
          min-height: 78vh;
          display: flex;
          align-items: center;
          margin-bottom: 60px;
        }

        .landing-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
          width: 100%;
        }

        @media (min-width: 992px) {
          .landing-hero-grid {
            grid-template-columns: 1.2fr 0.8fr;
            gap: clamp(40px, 4.5vw, 68px);
          }
        }

        .landing-hero-content {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .hero-avail-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          background: rgba(168, 216, 192, 0.22);
          border: 1px solid rgba(168, 216, 192, 0.5);
          color: #047857;
          font-size: 0.82rem;
          font-weight: 750;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          width: fit-content;
        }

        .hero-avail-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulse-dot 1.6s infinite alternate;
        }

        @keyframes pulse-dot {
          0% { transform: scale(0.9); opacity: 0.6; }
          100% { transform: scale(1.3); opacity: 1; }
        }

        .hero-name-title {
          font-size: clamp(3.2rem, 5.2vw, 4.8rem);
          font-weight: 900;
          color: var(--text);
          letter-spacing: -1.6px;
          line-height: 1.06;
          margin: 0;
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Typewriter Animation Line */
        .typewriter-container {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 48px;
        }

        .typewriter-label {
          font-size: clamp(1.45rem, 2.4vw, 2.2rem);
          font-weight: 850;
          letter-spacing: -0.4px;
          background: linear-gradient(135deg, #0f172a 10%, var(--violet) 60%, var(--pink) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .typewriter-cursor {
          display: inline-block;
          width: 3.5px;
          height: 1.85rem;
          background-color: var(--violet);
          border-radius: 2px;
          animation: blink-cursor 0.9s step-end infinite;
        }

        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Hero Bio Text */
        .hero-bio-paragraph {
          font-size: 1.14rem;
          line-height: 1.78;
          color: var(--text-muted);
          max-width: 660px;
          margin: 0;
        }

        .hero-actions-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 8px;
        }

        /* Profile Photo Container */
        .hero-photo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-photo-card {
          position: relative;
          padding: 20px;
          border-radius: 40px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 28px 70px rgba(80, 70, 60, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 390px;
          width: 100%;
        }

        .hero-photo-orb-glow {
          position: absolute;
          inset: -25px;
          background: radial-gradient(circle, rgba(var(--violet-rgb), 0.28) 0%, rgba(var(--pink-rgb), 0.18) 50%, transparent 75%);
          filter: blur(45px);
          z-index: -1;
          border-radius: 50%;
        }

        .hero-photo-frame {
          width: clamp(270px, 24vw, 340px);
          height: clamp(270px, 24vw, 340px);
          border-radius: 32px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(var(--violet-rgb), 0.12), rgba(var(--pink-rgb), 0.12));
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .hero-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-photo-fallback {
          font-size: 3.5rem;
          font-weight: 900;
          color: var(--violet);
          opacity: 0.85;
          letter-spacing: -1px;
        }

        .hero-photo-meta {
          margin-top: 16px;
          text-align: center;
        }

        .hero-photo-name {
          font-weight: 850;
          font-size: 1.1rem;
          color: var(--text);
          letter-spacing: -0.2px;
        }

        .hero-photo-location {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 3px;
          font-weight: 500;
        }

        .hero-photo-floating-badge {
          position: absolute;
          padding: 8px 14px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          font-weight: 750;
          color: var(--text);
          white-space: nowrap;
          z-index: 2;
        }

        .badge-top-left {
          top: 10px;
          left: -20px;
        }

        .badge-bottom-right {
          bottom: 18px;
          right: -16px;
        }

        @media (max-width: 600px) {
          .badge-top-left, .badge-bottom-right {
            display: none;
          }
        }

        /* ---------------- COMMON GLASS CONTAINER BASE ---------------- */
        .section-glass-container {
          background: rgba(255, 255, 255, 0.48);
          backdrop-filter: blur(24px) saturate(125%);
          -webkit-backdrop-filter: blur(24px) saturate(125%);
          border: 1px solid rgba(255, 255, 255, 0.75);
          border-radius: var(--radius-xl);
          padding: 36px 30px;
          box-shadow: var(--shadow), inset 0 1px 0 rgba(255, 255, 255, 0.85);
          margin-bottom: 56px;
          position: relative;
        }

        @media (min-width: 768px) {
          .section-glass-container {
            padding: 44px 40px;
          }
        }

        .section-main-heading {
          font-size: 1.45rem;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -0.4px;
          text-transform: uppercase;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-main-heading span.section-heading-pill {
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.6px;
          padding: 4px 12px;
          border-radius: 20px;
          background: rgba(var(--violet-rgb), 0.12);
          color: var(--violet);
          border: 1px solid rgba(var(--violet-rgb), 0.25);
        }

        /* ---------------- 3. QUICK PROFILE SECTION ---------------- */
        .quick-profile-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .quick-profile-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .quick-profile-card {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: var(--radius-lg);
          padding: 24px 20px;
          box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.8);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal), background var(--transition-normal);
          text-decoration: none;
          color: inherit;
        }

        .quick-profile-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(var(--violet-rgb), 0.45);
          box-shadow: 0 16px 36px rgba(var(--violet-rgb), 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.95);
        }

        .qp-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .qp-card-tag {
          font-size: 0.75rem;
          font-weight: 850;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--violet);
          background: rgba(var(--violet-rgb), 0.1);
          padding: 4px 10px;
          border-radius: 100px;
        }

        .qp-card-arrow {
          color: var(--text-muted);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .quick-profile-card:hover .qp-card-arrow {
          transform: translateX(4px);
          color: var(--violet);
        }

        .qp-card-title {
          font-size: 1.22rem;
          font-weight: 850;
          color: var(--text);
          margin-bottom: 8px;
          letter-spacing: -0.2px;
        }

        .qp-card-desc {
          font-size: 0.94rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        /* ---------------- 4. PROFESSIONAL HIGHLIGHT ---------------- */
        .prof-highlight-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 26px;
        }

        @media (min-width: 900px) {
          .prof-highlight-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .prof-card {
          background: rgba(255, 255, 255, 0.58);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.75);
          border-radius: 20px;
          padding: 30px 28px;
          box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.85);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 18px;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .prof-card:hover {
          transform: translateY(-3px);
          border-color: rgba(var(--violet-rgb), 0.35);
          box-shadow: var(--shadow);
        }

        .prof-company-name {
          font-size: 1.28rem;
          font-weight: 850;
          color: var(--text);
          letter-spacing: -0.3px;
          margin-bottom: 4px;
        }

        .prof-role-badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 750;
          color: var(--violet);
          background: rgba(var(--violet-rgb), 0.12);
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 12px;
        }

        .prof-card-desc {
          font-size: 0.95rem;
          line-height: 1.62;
          color: var(--text-muted);
          margin-bottom: 14px;
        }

        .prof-work-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 16px 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .prof-work-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .prof-work-bullet-icon {
          color: var(--violet);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .prof-btn-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
        }

        /* ---------------- 5. AVAILABLE FOR + CURRENTLY EXPLORING ---------------- */
        .avail-explore-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .avail-explore-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }

        .avail-explore-column {
          display: flex;
          flex-direction: column;
        }

        .avail-explore-heading {
          font-size: 1.1rem;
          font-weight: 850;
          color: var(--text);
          letter-spacing: -0.2px;
          text-transform: uppercase;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dot-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .dot-bullet-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .dot-bullet-circle {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--violet);
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(var(--violet-rgb), 0.5);
        }

        .dot-bullet-circle.pink {
          background: var(--pink);
          box-shadow: 0 0 6px rgba(var(--pink-rgb), 0.5);
        }

        /* ---------------- 6. EXPERTISE & INTERACTIVE WEDGES ---------------- */
        .expertise-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          position: relative;
        }

        @media (min-width: 900px) {
          .expertise-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .expertise-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.75);
          border-radius: 20px;
          padding: 30px 26px;
          box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.85);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal), background var(--transition-normal);
        }

        .expertise-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(var(--violet-rgb), 0.45);
          box-shadow: 0 18px 40px rgba(var(--violet-rgb), 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.95);
        }

        .expertise-card-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(var(--violet-rgb), 0.12);
          color: var(--violet);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .expertise-area-title {
          font-size: 1.2rem;
          font-weight: 850;
          color: var(--text);
          letter-spacing: -0.3px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .expertise-area-desc {
          font-size: 0.92rem;
          line-height: 1.62;
          color: var(--text-muted);
          margin-bottom: 18px;
        }

        .expertise-skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .exp-tag-mini {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.04);
          color: var(--text-muted);
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        /* Sleek Wedge Visual Elements with Pop/Reveal on Hover */
        .wedge-element {
          position: absolute;
          top: -8px;
          right: 20px;
          padding: 3px 12px;
          font-size: 0.65rem;
          font-weight: 850;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(var(--violet-rgb), 0.3);
          color: var(--violet);
          clip-path: polygon(0% 0%, 100% 0%, 88% 100%, 0% 100%);
          box-shadow: 0 4px 12px rgba(80, 70, 60, 0.06);
          opacity: 0.7;
          transform: translateY(0) scale(0.95);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          pointer-events: none;
        }

        .expertise-card:hover .wedge-element {
          opacity: 1;
          transform: translateY(-5px) scale(1.05);
          background: rgba(255, 255, 255, 0.95);
          border-color: var(--violet);
          box-shadow: 0 8px 20px rgba(var(--violet-rgb), 0.25);
        }

        /* ---------------- 7. CORE TECHNOLOGY ---------------- */
        .core-tech-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
        }

        @media (min-width: 850px) {
          .core-tech-layout {
            grid-template-columns: 0.85fr 1.15fr;
            gap: 40px;
          }
        }

        .core-tech-info h3 {
          font-size: 1.35rem;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -0.3px;
          margin-bottom: 8px;
        }

        .core-tech-info p {
          font-size: 0.96rem;
          line-height: 1.65;
          color: var(--text-muted);
          margin: 0;
        }

        .core-tech-badges-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-pill-badge {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 100px;
          font-size: 0.88rem;
          font-weight: 750;
          color: var(--text);
          box-shadow: 0 2px 8px rgba(80, 70, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
        }

        .tech-pill-badge:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(var(--violet-rgb), 0.4);
          box-shadow: 0 6px 16px rgba(var(--violet-rgb), 0.12);
          color: var(--violet);
        }

        /* Certificate Modal Backdrop */
        .cert-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .cert-modal-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: var(--radius-lg);
          padding: 30px;
          max-width: 440px;
          width: 100%;
          box-shadow: var(--shadow-lg);
          position: relative;
        }

        .cert-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--text-muted);
          padding: 4px;
        }
      `}</style>

      <div className="landing-page-container">

        {/* ---------------- 2. HERO SECTION ---------------- */}
        <section className="landing-hero" id="hero">
          <div className="landing-hero-grid">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="landing-hero-content"
            >
              <div className="hero-avail-badge">
                <span className="hero-avail-dot" />
                Available for Opportunities
              </div>

              <h1 className="hero-name-title">
                {siteConfig.name}
              </h1>

              {/* Infinite Typewriter Sequence */}
              <div className="typewriter-container" aria-live="polite">
                <span className="typewriter-label">{currentText}</span>
                <span className="typewriter-cursor" aria-hidden="true" />
              </div>

              {/* Honest Professional Introduction / Bio */}
              <p className="hero-bio-paragraph">
                I am a Full Stack Developer actively learning, exploring, and building with Agentic AI. While keeping a strong foundation in modern full-stack web architecture, backend systems, and Generative AI pipelines, I focus on turning experimental concepts into reliable, production-ready software.
              </p>

              {/* Action Buttons */}
              <div className="hero-actions-row">
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  <RippleButton variant="primary">
                    View Projects <ArrowRight size={15} />
                  </RippleButton>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <RippleButton variant="secondary">
                    Contact Me <Mail size={15} />
                  </RippleButton>
                </Link>
              </div>
            </motion.div>

            {/* Right Profile Photo Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hero-photo-wrapper"
            >
              <div className="hero-photo-card">
                <div className="hero-photo-orb-glow" />

                {/* Floating Top-Left Pill */}
                <div className="hero-photo-floating-badge badge-top-left">
                  <Sparkles size={13} style={{ color: "var(--violet)" }} />
                  <span>Full Stack &amp; AI</span>
                </div>

                {/* Floating Bottom-Right Pill */}
                <div className="hero-photo-floating-badge badge-bottom-right">
                  <span className="hero-avail-dot" />
                  <span>Noida, UP • Available</span>
                </div>

                <div className="hero-photo-frame">
                  <img 
                    src="/images/profile/profile_avatar.png" 
                    alt={siteConfig.name}
                    className="hero-photo-img"
                    onError={(e) => {
                      e.target.style.display = "none";
                      const fallback = e.target.parentElement?.querySelector(".hero-photo-fallback");
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="hero-photo-fallback" style={{ position: "absolute", inset: 0, display: "none", alignItems: "center", justifyContent: "center" }}>
                    {siteConfig.shortName}
                  </div>
                </div>
                <div className="hero-photo-meta">
                  <div className="hero-photo-name">{siteConfig.name}</div>
                  <div className="hero-photo-location">{siteConfig.location}</div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ---------------- 3. QUICK PROFILE SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-glass-container"
        >
          <div className="quick-profile-grid">
            
            {/* Card 1: CORE FOCUS */}
            <div 
              className="quick-profile-card"
              onClick={() => navigate("/skills")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate("/skills")}
            >
              <div>
                <div className="qp-card-header">
                  <span className="qp-card-tag">CORE FOCUS</span>
                  <ChevronRight size={16} className="qp-card-arrow" />
                </div>
                <div className="qp-card-title">Full Stack &amp; Agentic AI</div>
                <p className="qp-card-desc">
                  Modern web applications, scalable API pipelines, and hands-on explorations in autonomous AI agents and RAG.
                </p>
              </div>
            </div>

            {/* Card 2: EXPERIENCE */}
            <div 
              className="quick-profile-card"
              onClick={() => navigate("/experience")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate("/experience")}
            >
              <div>
                <div className="qp-card-header">
                  <span className="qp-card-tag">EXPERIENCE</span>
                  <ChevronRight size={16} className="qp-card-arrow" />
                </div>
                <div className="qp-card-title">Production Systems</div>
                <p className="qp-card-desc">
                  Industry experience developing cybersecurity web platforms and high-concurrency order dispatch pipelines.
                </p>
              </div>
            </div>

            {/* Card 3: EDUCATION */}
            <div 
              className="quick-profile-card"
              onClick={() => navigate("/education")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate("/education")}
            >
              <div>
                <div className="qp-card-header">
                  <span className="qp-card-tag">EDUCATION</span>
                  <ChevronRight size={16} className="qp-card-arrow" />
                </div>
                <div className="qp-card-title">MCA &amp; Mathematics</div>
                <p className="qp-card-desc">
                  Master of Computer Applications from HBTU Kanpur (CGPA: 7.5) with a strong B.Sc. Mathematics foundation.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ---------------- 4. PROFESSIONAL HIGHLIGHT ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-glass-container"
        >
          <div className="section-main-heading">
            PROFESSIONAL HIGHLIGHT
            <span className="section-heading-pill">Active Work</span>
          </div>

          <div className="prof-highlight-grid">
            
            {/* CARD 1: VPN Digital Services Pvt. Ltd. */}
            <div className="prof-card">
              <div>
                <h3 className="prof-company-name">VPN Digital Services Pvt. Ltd.</h3>
                <span className="prof-role-badge">Full Stack Developer Intern</span>
                
                <p className="prof-card-desc">
                  Contributed to the Cyber Kavach cybersecurity and VPN management platform within an Agile team of 4.
                </p>

                <ul className="prof-work-bullets">
                  <li className="prof-work-bullet-item">
                    <CheckCircle2 size={14} className="prof-work-bullet-icon" />
                    <span>Developed responsive user dashboards using React.js and modern CSS3.</span>
                  </li>
                  <li className="prof-work-bullet-item">
                    <CheckCircle2 size={14} className="prof-work-bullet-icon" />
                    <span>Built and tested RESTful API endpoints and MongoDB data workflows.</span>
                  </li>
                  <li className="prof-work-bullet-item">
                    <CheckCircle2 size={14} className="prof-work-bullet-icon" />
                    <span>Handled client-server security checks, input validation, and Git collaboration.</span>
                  </li>
                </ul>
              </div>

              <div className="prof-btn-row">
                <RippleButton 
                  variant="primary" 
                  style={{ padding: "7px 16px", fontSize: "0.82rem" }}
                  onClick={() => navigate("/experience")}
                >
                  View Detail <ArrowRight size={13} />
                </RippleButton>

                <RippleButton 
                  variant="secondary" 
                  style={{ padding: "7px 16px", fontSize: "0.82rem" }}
                  onClick={() => handleCertificateClick("VPN Digital Services Pvt. Ltd.", siteConfig.certificates?.vpn)}
                >
                  <Award size={13} /> Certificate
                </RippleButton>
              </div>
            </div>

            {/* CARD 2: Cloud Kitchen Service */}
            <div className="prof-card">
              <div>
                <h3 className="prof-company-name">Cloud Kitchen Service</h3>
                <span className="prof-role-badge">Software Engineer Intern</span>
                
                <p className="prof-card-desc">
                  Engineered backend modules for high-frequency order processing, inventory synchronization, and dispatch logs.
                </p>

                <ul className="prof-work-bullets">
                  <li className="prof-work-bullet-item">
                    <CheckCircle2 size={14} className="prof-work-bullet-icon" />
                    <span>Engineered real-time order status tracking with WebSocket feeds.</span>
                  </li>
                  <li className="prof-work-bullet-item">
                    <CheckCircle2 size={14} className="prof-work-bullet-icon" />
                    <span>Implemented a clean kitchen dispatch UI showing active preparation queues.</span>
                  </li>
                  <li className="prof-work-bullet-item">
                    <CheckCircle2 size={14} className="prof-work-bullet-icon" />
                    <span>Configured Redis cache layers to ensure fast inventory reads under load.</span>
                  </li>
                </ul>
              </div>

              <div className="prof-btn-row">
                <RippleButton 
                  variant="primary" 
                  style={{ padding: "7px 16px", fontSize: "0.82rem" }}
                  onClick={() => navigate("/experience")}
                >
                  View Detail <ArrowRight size={13} />
                </RippleButton>

                <RippleButton 
                  variant="secondary" 
                  style={{ padding: "7px 16px", fontSize: "0.82rem" }}
                  onClick={() => handleCertificateClick("Cloud Kitchen Service", siteConfig.certificates?.cloudKitchen)}
                >
                  <Award size={13} /> Certificate
                </RippleButton>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ---------------- 5. AVAILABLE FOR + CURRENTLY EXPLORING ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-glass-container"
        >
          <div className="avail-explore-grid">
            
            {/* Left: AVAILABLE FOR */}
            <div className="avail-explore-column">
              <div className="avail-explore-heading">
                <Briefcase size={16} style={{ color: "var(--violet)" }} />
                AVAILABLE FOR
              </div>
              <ul className="dot-bullet-list">
                <li className="dot-bullet-item">
                  <span className="dot-bullet-circle" />
                  Full Stack Development
                </li>
                <li className="dot-bullet-item">
                  <span className="dot-bullet-circle" />
                  Software Development
                </li>
                <li className="dot-bullet-item">
                  <span className="dot-bullet-circle" />
                  AI / GenAI
                </li>
                <li className="dot-bullet-item">
                  <span className="dot-bullet-circle" />
                  Product / Freelance Work
                </li>
              </ul>
            </div>

            {/* Right: CURRENTLY EXPLORING */}
            <div className="avail-explore-column">
              <div className="avail-explore-heading">
                <Sparkles size={16} style={{ color: "var(--pink)" }} />
                CURRENTLY EXPLORING
              </div>
              <ul className="dot-bullet-list">
                <li className="dot-bullet-item">
                  <span className="dot-bullet-circle pink" />
                  Agentic AI
                </li>
                <li className="dot-bullet-item">
                  <span className="dot-bullet-circle pink" />
                  AI Agents
                </li>
                <li className="dot-bullet-item">
                  <span className="dot-bullet-circle pink" />
                  GenAI
                </li>
                <li className="dot-bullet-item">
                  <span className="dot-bullet-circle pink" />
                  RAG / LLM Systems
                </li>
                <li className="dot-bullet-item">
                  <span className="dot-bullet-circle pink" />
                  Local LLMs
                </li>
                <li className="dot-bullet-item">
                  <span className="dot-bullet-circle pink" />
                  AI Systems
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* ---------------- 6. EXPERTISE WITH INTERACTIVE WEDGES ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-glass-container"
        >
          <div className="section-main-heading">
            EXPERTISE
            <span className="section-heading-pill">Domains</span>
          </div>

          <div className="expertise-cards-grid">
            
            {/* 1. FRONTEND */}
            <div className="expertise-card">
              <div className="wedge-element">UI ARCH</div>
              <div>
                <div className="expertise-card-icon-box">
                  <Code2 size={20} />
                </div>
                <h3 className="expertise-area-title">FRONTEND</h3>
                <p className="expertise-area-desc">
                  Building responsive client interfaces, interactive SPAs, and design systems with React, Next.js, and clean CSS.
                </p>
              </div>
              <div className="expertise-skills-tags">
                <span className="exp-tag-mini">React.js</span>
                <span className="exp-tag-mini">Next.js</span>
                <span className="exp-tag-mini">HTML5/CSS3</span>
                <span className="exp-tag-mini">JavaScript</span>
                <span className="exp-tag-mini">Responsive</span>
              </div>
            </div>

            {/* 2. BACKEND */}
            <div className="expertise-card">
              <div className="wedge-element">SYSTEMS</div>
              <div>
                <div className="expertise-card-icon-box">
                  <Server size={20} />
                </div>
                <h3 className="expertise-area-title">BACKEND</h3>
                <p className="expertise-area-desc">
                  Architecting secure Node.js microservices, RESTful API endpoints, WebSockets, and relational/document databases.
                </p>
              </div>
              <div className="expertise-skills-tags">
                <span className="exp-tag-mini">Node.js</span>
                <span className="exp-tag-mini">Express.js</span>
                <span className="exp-tag-mini">MongoDB</span>
                <span className="exp-tag-mini">PostgreSQL</span>
                <span className="exp-tag-mini">REST APIs</span>
              </div>
            </div>

            {/* 3. AI & SMART INTEGRATION */}
            <div className="expertise-card">
              <div className="wedge-element">AGENTIC</div>
              <div>
                <div className="expertise-card-icon-box">
                  <Cpu size={20} />
                </div>
                <h3 className="expertise-area-title">AI &amp; SMART INTEGRATION</h3>
                <p className="expertise-area-desc">
                  Structuring agentic workflows, contextual RAG models, local LLM integrations (Ollama), and vector database queries.
                </p>
              </div>
              <div className="expertise-skills-tags">
                <span className="exp-tag-mini">Agentic AI</span>
                <span className="exp-tag-mini">GenAI</span>
                <span className="exp-tag-mini">RAG</span>
                <span className="exp-tag-mini">Ollama</span>
                <span className="exp-tag-mini">LangChain</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ---------------- 7. CORE TECHNOLOGY ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-glass-container"
        >
          <div className="core-tech-layout">
            <div className="core-tech-info">
              <div className="section-main-heading" style={{ marginBottom: "10px" }}>
                CORE TECHNOLOGY
              </div>
              <p>
                Production technologies and engineering frameworks used across full-stack applications, scalable backend services, and active AI systems.
              </p>
            </div>

            <div className="core-tech-badges-flex">
              {coreTechnologies.map((tech, idx) => (
                <span key={idx} className="tech-pill-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Certificate Notice Modal */}
      <AnimatePresence>
        {certModal && (
          <div 
            className="cert-modal-backdrop" 
            onClick={() => setCertModal(null)}
          >
            <motion.div 
              className="cert-modal-card" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button 
                className="cert-modal-close" 
                onClick={() => setCertModal(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(var(--violet-rgb), 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--violet)" }}>
                  <Award size={20} />
                </div>
                <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 800, color: "var(--text)" }}>
                  Experience Certificate
                </h4>
              </div>

              <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 20px 0" }}>
                {certModal.message}
              </p>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <a 
                  href={`mailto:${siteConfig.email}?subject=Certificate%20Inquiry%20-%20${certModal.company}`}
                  style={{ textDecoration: "none" }}
                >
                  <RippleButton variant="primary" style={{ padding: "8px 18px", fontSize: "0.84rem" }}>
                    Request via Email
                  </RippleButton>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
