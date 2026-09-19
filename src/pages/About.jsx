import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Briefcase, Code2, Bot, Box, Lightbulb, 
  Brain, MessageSquare, Layers, RefreshCw, Heart, 
  GraduationCap, Rocket, Clock, Laptop, UserCheck, 
  Building2, Quote
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');

        .about-page-container {
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

        /* Common Glass Container for About Page */
        .about-glass-panel {
          background: rgba(255, 255, 255, 0.52);
          backdrop-filter: blur(24px) saturate(125%);
          -webkit-backdrop-filter: blur(24px) saturate(125%);
          border: 1px solid rgba(255, 255, 255, 0.75);
          border-radius: var(--radius-xl);
          padding: 36px 30px;
          box-shadow: var(--shadow), inset 0 1px 0 rgba(255, 255, 255, 0.85);
          margin-bottom: 44px;
          position: relative;
        }

        @media (min-width: 768px) {
          .about-glass-panel {
            padding: 44px 40px;
          }
        }

        /* Panel Header with Title and Subtitle */
        .panel-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 28px;
        }

        .panel-header-title {
          font-size: 1.42rem;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -0.4px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-transform: uppercase;
          margin: 0;
        }

        .panel-header-subtitle {
          font-size: 0.92rem;
          color: var(--text-muted);
          font-weight: 600;
          margin: 0;
        }

        /* ---------------- 1. ABOUT ME TOP SECTION ---------------- */
        .about-top-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .about-top-grid {
            grid-template-columns: 1.05fr 0.95fr;
            gap: clamp(36px, 4.5vw, 54px);
          }
        }

        .about-image-wrapper {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 24px 54px rgba(80, 70, 60, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          aspect-ratio: 16 / 11;
          width: 100%;
        }

        .about-workspace-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-image-wrapper:hover .about-workspace-img {
          transform: scale(1.02);
        }

        .about-top-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }

        .about-top-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .about-pill-tag {
          font-size: 0.8rem;
          font-weight: 850;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--violet);
          background: rgba(var(--violet-rgb), 0.14);
          border: 1px solid rgba(var(--violet-rgb), 0.28);
          padding: 5px 16px;
          border-radius: 100px;
          width: fit-content;
        }

        .handwritten-quote-badge {
          font-family: 'Caveat', 'Segoe Print', cursive, sans-serif;
          font-size: 1.45rem;
          color: var(--violet);
          font-weight: 700;
          transform: rotate(-4deg);
          letter-spacing: 0.2px;
          line-height: 1.1;
          text-align: right;
          opacity: 0.9;
        }

        .about-hero-headline {
          font-size: clamp(2.3rem, 3.8vw, 3.4rem);
          font-weight: 900;
          color: var(--text);
          letter-spacing: -0.8px;
          line-height: 1.16;
          margin: 0;
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .about-hero-headline span.accent-highlight {
          color: var(--violet);
          position: relative;
          display: inline-block;
        }

        .about-hero-headline span.accent-highlight::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--violet), transparent);
          border-radius: 2px;
          opacity: 0.7;
        }

        .about-bio-text {
          font-size: 1.12rem;
          line-height: 1.78;
          color: var(--text-muted);
          margin: 0;
        }

        .about-meta-cards-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 8px;
        }

        @media (min-width: 480px) {
          .about-meta-cards-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .about-meta-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 18px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: var(--shadow-sm);
        }

        .about-meta-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: rgba(var(--violet-rgb), 0.12);
          color: var(--violet);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-meta-label {
          font-size: 0.74rem;
          font-weight: 750;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .about-meta-val {
          font-size: 1.02rem;
          font-weight: 850;
          color: var(--text);
          margin-top: 2px;
        }

        /* ---------------- 2. WHAT I DO SECTION ---------------- */
        .what-i-do-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        @media (min-width: 600px) {
          .what-i-do-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .what-i-do-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .what-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal), background var(--transition-normal);
        }

        .what-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.88);
          border-color: rgba(var(--violet-rgb), 0.45);
          box-shadow: 0 16px 36px rgba(var(--violet-rgb), 0.1);
        }

        .what-card-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(var(--violet-rgb), 0.12);
          color: var(--violet);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .what-card-title {
          font-size: 1.15rem;
          font-weight: 850;
          color: var(--text);
          letter-spacing: -0.2px;
          margin: 0;
        }

        .what-card-desc {
          font-size: 0.94rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        /* ---------------- 3. HOW I THINK & CURRENTLY EXPLORING ---------------- */
        .twin-panels-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: stretch;
        }

        @media (min-width: 900px) {
          .twin-panels-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .twin-glass-panel {
          background: rgba(255, 255, 255, 0.52);
          backdrop-filter: blur(20px) saturate(125%);
          -webkit-backdrop-filter: blur(20px) saturate(125%);
          border: 1px solid rgba(255, 255, 255, 0.75);
          border-radius: 24px;
          padding: 36px 30px;
          box-shadow: var(--shadow), inset 0 1px 0 rgba(255, 255, 255, 0.85);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          box-sizing: border-box;
        }

        .twin-content-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
          align-items: center;
          flex: 1;
        }

        @media (min-width: 580px) {
          .twin-content-layout {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }

        .think-points-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .think-point-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.96rem;
          font-weight: 650;
          color: var(--text);
        }

        .think-point-icon {
          color: var(--violet);
          flex-shrink: 0;
        }

        /* Symmetric Quote Box */
        .quote-callout-card {
          background: linear-gradient(135deg, rgba(var(--violet-rgb), 0.12), rgba(255, 255, 255, 0.75));
          border: 1px solid rgba(var(--violet-rgb), 0.28);
          border-radius: 20px;
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          min-height: 160px;
          box-shadow: var(--shadow-sm);
          position: relative;
        }

        .quote-icon-bubble {
          color: var(--violet);
          opacity: 0.7;
          margin-bottom: 10px;
        }

        .quote-callout-text {
          font-size: 1.35rem;
          font-weight: 850;
          font-style: italic;
          color: var(--text);
          line-height: 1.38;
          letter-spacing: -0.2px;
          margin: 0;
        }

        /* Exploring Bullet List */
        .exploring-bullets-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exploring-bullet-item {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 0.94rem;
          font-weight: 650;
          color: var(--text);
        }

        .exploring-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--violet);
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(var(--violet-rgb), 0.5);
        }

        /* ---------------- 4. WORKING STYLE & AVAILABILITY ---------------- */
        .workstyle-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        @media (min-width: 850px) {
          .workstyle-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .workstyle-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.85);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .workstyle-card:hover {
          transform: translateY(-3px);
          border-color: rgba(var(--violet-rgb), 0.4);
          box-shadow: var(--shadow);
        }

        .workstyle-top-meta {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .workstyle-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: rgba(var(--violet-rgb), 0.12);
          color: var(--violet);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .workstyle-title {
          font-size: 1.15rem;
          font-weight: 850;
          color: var(--text);
          letter-spacing: -0.2px;
          margin: 0;
        }

        .workstyle-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .workstyle-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--text-muted);
        }

        .workstyle-bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--violet);
          flex-shrink: 0;
          margin-top: 7px;
        }
      `}</style>

      <div className="about-page-container">

        {/* ---------------- 1. ABOUT ME TOP SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-glass-panel"
        >
          <div className="about-top-grid">
            
            {/* Left Column: Developer Workspace Visual */}
            <div className="about-image-wrapper">
              <img 
                src="/images/about/developer_workspace.jpg" 
                alt="Avaneesh Kumar Developer Workspace" 
                className="about-workspace-img"
              />
            </div>

            {/* Right Column: Bio & Core Info */}
            <div className="about-top-content">
              
              <div className="about-top-header-row">
                <span className="about-pill-tag">About Me</span>
                <span className="handwritten-quote-badge">
                  Same City<br />Bigger Dreams
                </span>
              </div>

              <h1 className="about-hero-headline">
                A Developer who builds for a{" "}
                <span className="accent-highlight">better tomorrow.</span>
              </h1>

              <p className="about-bio-text">
                I'm Avaneesh Kumar, a Full Stack Developer with a strong interest in AI/GenAI and currently focused on learning and building with Agentic AI. I enjoy turning ideas into real-world products, solving problems, and continuously improving my skills.
              </p>

              <div className="about-meta-cards-row">
                <div className="about-meta-card">
                  <div className="about-meta-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="about-meta-label">Based in</div>
                    <div className="about-meta-val">{siteConfig.location}</div>
                  </div>
                </div>

                <div className="about-meta-card">
                  <div className="about-meta-icon-box">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <div className="about-meta-label">Open to</div>
                    <div className="about-meta-val">Opportunities</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* ---------------- 2. WHAT I DO ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-glass-panel"
        >
          <div className="panel-header-row">
            <h2 className="panel-header-title">
              <Layers size={20} style={{ color: "var(--violet)" }} />
              What I Do
            </h2>
            <p className="panel-header-subtitle">
              Building practical solutions with modern web and AI technologies.
            </p>
          </div>

          <div className="what-i-do-grid">
            
            {/* Card 1 */}
            <div className="what-card">
              <div className="what-card-icon-box">
                <Code2 size={20} />
              </div>
              <h3 className="what-card-title">Full Stack Development</h3>
              <p className="what-card-desc">
                Build modern, scalable and user-focused web applications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="what-card">
              <div className="what-card-icon-box">
                <Bot size={20} />
              </div>
              <h3 className="what-card-title">AI / GenAI Integration</h3>
              <p className="what-card-desc">
                Work with LLMs, RAG and AI APIs to create intelligent features.
              </p>
            </div>

            {/* Card 3 */}
            <div className="what-card">
              <div className="what-card-icon-box">
                <Box size={20} />
              </div>
              <h3 className="what-card-title">Product Development</h3>
              <p className="what-card-desc">
                Turn ideas into real-world products with clean architecture.
              </p>
            </div>

            {/* Card 4 */}
            <div className="what-card">
              <div className="what-card-icon-box">
                <Lightbulb size={20} />
              </div>
              <h3 className="what-card-title">Problem Solving</h3>
              <p className="what-card-desc">
                Love solving real problems with practical and efficient solutions.
              </p>
            </div>

          </div>
        </motion.div>

        {/* ---------------- 3. HOW I THINK + CURRENTLY EXPLORING ---------------- */}
        <div className="twin-panels-grid" style={{ marginBottom: "36px" }}>
          
          {/* Panel 1: HOW I THINK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="twin-glass-panel"
          >
            <div>
              <div className="panel-header-row" style={{ marginBottom: "20px" }}>
                <h2 className="panel-header-title" style={{ fontSize: "1.15rem" }}>
                  <Brain size={18} style={{ color: "var(--violet)" }} />
                  How I Think
                </h2>
                <p className="panel-header-subtitle">
                  Keep it simple, build it real.
                </p>
              </div>

              <div className="twin-content-layout">
                
                {/* Left Points */}
                <ul className="think-points-list">
                  <li className="think-point-item">
                    <MessageSquare size={16} className="think-point-icon" />
                    <span>Understand the problem first</span>
                  </li>
                  <li className="think-point-item">
                    <Layers size={16} className="think-point-icon" />
                    <span>Break it into simple steps</span>
                  </li>
                  <li className="think-point-item">
                    <RefreshCw size={16} className="think-point-icon" />
                    <span>Build, test and iterate</span>
                  </li>
                  <li className="think-point-item">
                    <Heart size={16} className="think-point-icon" />
                    <span>Focus on real-world impact</span>
                  </li>
                  <li className="think-point-item">
                    <GraduationCap size={16} className="think-point-icon" />
                    <span>Keep learning and improving</span>
                  </li>
                </ul>

                {/* Right Symmetrical Quote Card */}
                <div className="quote-callout-card">
                  <Quote size={24} className="quote-icon-bubble" />
                  <p className="quote-callout-text">
                    Better Systems<br />Brighter People.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Panel 2: CURRENTLY EXPLORING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="twin-glass-panel"
          >
            <div>
              <div className="panel-header-row" style={{ marginBottom: "20px" }}>
                <h2 className="panel-header-title" style={{ fontSize: "1.15rem" }}>
                  <Rocket size={18} style={{ color: "var(--violet)" }} />
                  Currently Exploring
                </h2>
                <p className="panel-header-subtitle">
                  Learning today. Building tomorrow.
                </p>
              </div>

              <div className="twin-content-layout">
                
                {/* Left Bullets */}
                <ul className="exploring-bullets-list">
                  <li className="exploring-bullet-item">
                    <span className="exploring-dot" />
                    <span>Agentic AI and AI Agents</span>
                  </li>
                  <li className="exploring-bullet-item">
                    <span className="exploring-dot" />
                    <span>Multi-Agent Systems</span>
                  </li>
                  <li className="exploring-bullet-item">
                    <span className="exploring-dot" />
                    <span>RAG &amp; Vector Databases</span>
                  </li>
                  <li className="exploring-bullet-item">
                    <span className="exploring-dot" />
                    <span>Local LLMs (Ollama)</span>
                  </li>
                  <li className="exploring-bullet-item">
                    <span className="exploring-dot" />
                    <span>AI Workflow Automation</span>
                  </li>
                  <li className="exploring-bullet-item">
                    <span className="exploring-dot" />
                    <span>Smart Integrations</span>
                  </li>
                  <li className="exploring-bullet-item">
                    <span className="exploring-dot" />
                    <span>Emerging AI Tools &amp; Frameworks</span>
                  </li>
                </ul>

                {/* Right Symmetrical Quote Card */}
                <div className="quote-callout-card">
                  <Quote size={24} className="quote-icon-bubble" />
                  <p className="quote-callout-text">
                    Ideas<br />to<br />Impact.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* ---------------- 4. WORKING STYLE / AVAILABILITY ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-glass-panel"
        >
          <div className="panel-header-row">
            <h2 className="panel-header-title">
              <Clock size={20} style={{ color: "var(--violet)" }} />
              Working Style &amp; Availability
            </h2>
            <p className="panel-header-subtitle">
              Different commitments. Same passion.
            </p>
          </div>

          <div className="workstyle-grid">
            
            {/* 1. Personal Projects */}
            <div className="workstyle-card">
              <div className="workstyle-top-meta">
                <div className="workstyle-icon-box">
                  <Laptop size={20} />
                </div>
                <h3 className="workstyle-title">Personal Projects</h3>
              </div>
              <ul className="workstyle-bullets">
                <li className="workstyle-bullet-item">
                  <span className="workstyle-bullet-dot" />
                  <span>~ 7–8 hours per day (when actively working)</span>
                </li>
                <li className="workstyle-bullet-item">
                  <span className="workstyle-bullet-dot" />
                  <span>~ 70+ hours per week (dedicated)</span>
                </li>
              </ul>
            </div>

            {/* 2. Freelance / Part-time */}
            <div className="workstyle-card">
              <div className="workstyle-top-meta">
                <div className="workstyle-icon-box">
                  <UserCheck size={20} />
                </div>
                <h3 className="workstyle-title">Freelance / Part-time</h3>
              </div>
              <ul className="workstyle-bullets">
                <li className="workstyle-bullet-item">
                  <span className="workstyle-bullet-dot" />
                  <span>2–4 hours per day (flexible)</span>
                </li>
                <li className="workstyle-bullet-item">
                  <span className="workstyle-bullet-dot" />
                  <span>~ 20–25 hours per week</span>
                </li>
              </ul>
            </div>

            {/* 3. Company / Full-time */}
            <div className="workstyle-card">
              <div className="workstyle-top-meta">
                <div className="workstyle-icon-box">
                  <Building2 size={20} />
                </div>
                <h3 className="workstyle-title">Company / Full-time</h3>
              </div>
              <ul className="workstyle-bullets">
                <li className="workstyle-bullet-item">
                  <span className="workstyle-bullet-dot" />
                  <span>Available as per company schedule</span>
                </li>
                <li className="workstyle-bullet-item">
                  <span className="workstyle-bullet-dot" />
                  <span>Fully dedicated and professional commitment</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </>
  );
}
