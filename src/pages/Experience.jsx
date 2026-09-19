import React from "react";
import { 
  Calendar, MapPin, Users, Lock, Laptop, 
  Shield, Utensils, Check, Sparkles, Lightbulb,
  Cpu, Heart
} from "lucide-react";
export default function Experience() {

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .experience-page-container {
          padding-top: 130px;
          padding-bottom: 90px;
          position: relative;
          z-index: 2;
          max-width: 1220px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
          box-sizing: border-box;
        }

        /* ── Top Hero Header ── */
        .exp-hero-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 50px;
        }

        .exp-hero-left {
          flex: 1;
          max-width: 680px;
        }

        .exp-arch-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.28);
          color: #0284c7;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .exp-main-title {
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.8px;
          color: #0f172a;
          margin-bottom: 14px;
          font-family: 'Outfit', sans-serif;
        }

        .exp-main-title .accent-word {
          color: #0284c7;
          position: relative;
        }

        .exp-hero-sub {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #64748b;
          margin: 0;
        }

        /* ── Top Right Desk Visual Card ── */
        .exp-desk-card {
          flex-shrink: 0;
          width: 380px;
          background: linear-gradient(135deg, #0b1120 0%, #0f172a 50%, #1e1b4b 100%);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          padding: 22px 24px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          color: #f8fafc;
        }

        .exp-desk-card::before {
          content: "";
          position: absolute;
          top: -40px;
          right: -40px;
          width: 140px;
          height: 140px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .exp-desk-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .noida-neon-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 8px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #38bdf8;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1px;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
        }

        .noida-neon-heart {
          color: #f43f5e;
          animation: pulseHeart 1.8s infinite;
        }

        @keyframes pulseHeart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }

        .exp-script-phrase {
          font-family: 'Caveat', cursive;
          font-size: 1.4rem;
          color: #e2e8f0;
          font-weight: 700;
          transform: rotate(-3deg);
          letter-spacing: 0.5px;
        }

        .exp-desk-content-row {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        /* Stack of 3 Books */
        .exp-books-stack {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 110px;
        }

        .exp-book-spine {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          border-left: 3px solid;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .exp-book-1 {
          background: #1e293b;
          border-left-color: #38bdf8;
          color: #93c5fd;
        }

        .exp-book-2 {
          background: #1e293b;
          border-left-color: #a855f7;
          color: #c084fc;
        }

        .exp-book-3 {
          background: #1e293b;
          border-left-color: #34d399;
          color: #6ee7b7;
        }

        /* Laptop Mockup */
        .exp-laptop-mockup {
          flex: 1;
          background: #030712;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 10px;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8), 0 0 15px rgba(56, 189, 248, 0.12);
        }

        .exp-laptop-dots {
          display: flex;
          gap: 4px;
          margin-bottom: 6px;
        }

        .exp-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .exp-terminal-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          line-height: 1.35;
          color: #94a3b8;
        }

        .exp-terminal-text span.active-term {
          color: #38bdf8;
          font-weight: 600;
        }

        /* Mug Footer */
        .exp-desk-mug-footer {
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.74rem;
          color: #94a3b8;
        }

        .exp-desk-mug-text {
          font-size: 0.72rem;
          color: #cbd5e1;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        /* ── Main Timeline Layout ── */
        .exp-timeline-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        /* Left Continuous Line */
        .exp-timeline-wrapper::before {
          content: "";
          position: absolute;
          left: 172px;
          top: 36px;
          bottom: 36px;
          width: 2px;
          background: linear-gradient(180deg, #38bdf8 0%, #34d399 50%, #a855f7 100%);
          opacity: 0.45;
          z-index: 1;
        }

        .exp-item-row {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        /* ── Left Timeline Column (Date & Tag) ── */
        .exp-timeline-side {
          width: 172px;
          flex-shrink: 0;
          position: relative;
          padding-right: 32px;
          text-align: right;
          padding-top: 24px;
          box-sizing: border-box;
        }

        .exp-timeline-side .exp-time-dot {
          position: absolute;
          right: -8px;
          top: 28px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffffff;
          border: 3.5px solid;
          box-shadow: 0 0 12px;
          z-index: 3;
        }

        .exp-time-date {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 6px;
          font-family: 'Outfit', sans-serif;
        }

        .exp-time-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        /* ── Large Glass Card ── */
        .exp-glass-card {
          flex: 1;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 24px;
          padding: 34px 38px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .exp-glass-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        /* Subtle Corner Glow */
        .exp-card-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 320px;
          height: 180px;
          border-radius: 0 24px 0 100%;
          opacity: 0.07;
          pointer-events: none;
        }

        /* Card Header */
        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          margin-bottom: 20px;
        }

        .exp-card-title-group {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          flex: 1;
        }

        .exp-company-icon-squircle {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
          border: 1px solid;
        }

        .exp-role-title {
          font-size: 1.45rem;
          font-weight: 850;
          color: #0f172a;
          margin: 0 0 4px 0;
          line-height: 1.25;
          letter-spacing: -0.4px;
          font-family: 'Outfit', sans-serif;
        }

        .exp-company-sub {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .exp-company-name {
          font-size: 1.02rem;
          font-weight: 700;
          color: #334155;
        }

        .exp-inline-badge {
          padding: 2px 10px;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        /* Meta Pills Row */
        .exp-meta-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .exp-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 11px;
          border-radius: 8px;
          background: rgba(241, 245, 249, 0.75);
          border: 1px solid rgba(226, 232, 240, 0.9);
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
        }

        .exp-meta-pill svg {
          color: #64748b;
        }

        /* Right Visual Banner */
        .exp-visual-banner {
          flex-shrink: 0;
          width: 320px;
          border-radius: 14px;
          padding: 14px 18px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.16);
          box-sizing: border-box;
          color: #ffffff;
        }

        .exp-banner-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .exp-banner-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .exp-banner-text-title {
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          line-height: 1.25;
          text-transform: uppercase;
        }

        .exp-banner-text-sub {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.2;
          margin-top: 2px;
        }

        .exp-banner-vertical-label {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 0.58rem;
          letter-spacing: 1px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          border-left: 1px solid rgba(255, 255, 255, 0.15);
          padding-left: 8px;
          margin-left: 10px;
        }

        /* Description Line */
        .exp-summary-text {
          font-size: 0.98rem;
          line-height: 1.6;
          color: #475569;
          margin: 0 0 24px 0;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }

        /* ── 2-Column Detail Grid ── */
        .exp-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-bottom: 24px;
        }

        .exp-detail-col h4 {
          font-size: 0.86rem;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 14px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .exp-scope-box {
          background: rgba(248, 250, 252, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-left: 3px solid #0284c7;
          border-radius: 8px;
          padding: 9px 12px;
          font-size: 0.85rem;
          line-height: 1.5;
          color: #334155;
          margin-bottom: 12px;
        }

        .exp-bullets-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .exp-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          line-height: 1.55;
          color: #475569;
        }

        .exp-check-icon {
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── Bottom Tech Chips ── */
        .exp-tech-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 18px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          align-items: center;
        }

        .exp-tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 11px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
        }

        .exp-tech-chip:hover {
          border-color: rgba(56, 189, 248, 0.4);
          transform: translateY(-1px);
        }

        /* Bottom Quote Banner in Freelance Card */
        .exp-freelance-quote {
          margin-top: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          background: rgba(168, 85, 247, 0.05);
          border: 1px dashed rgba(168, 85, 247, 0.3);
          font-style: italic;
          font-size: 0.85rem;
          color: #7e22ce;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ══════════════════════════════════════════════════════
           MOBILE-FRIENDLY FIRST RESPONSIVE DESIGN
        ══════════════════════════════════════════════════════ */

        @media (max-width: 1040px) {
          .exp-card-header {
            flex-direction: column;
            align-items: stretch;
          }

          .exp-visual-banner {
            width: 100%;
            height: auto;
          }
        }

        @media (max-width: 900px) {
          .exp-hero-header {
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
          }

          .exp-desk-card {
            width: 100%;
          }

          /* Collapse left timeline into cards for optimal mobile reading */
          .exp-timeline-wrapper::before {
            left: 14px;
          }

          .exp-item-row {
            flex-direction: column;
            gap: 0;
            padding-left: 32px;
            position: relative;
          }

          .exp-timeline-side {
            width: 100%;
            text-align: left;
            padding: 0 0 12px 0;
          }

          .exp-timeline-side .exp-time-dot {
            left: -26px;
            top: 4px;
            right: auto;
          }

          .exp-glass-card {
            padding: 24px 20px;
            border-radius: 18px;
            width: 100%;
          }

          .exp-details-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .exp-main-title {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 640px) {
          .experience-page-container {
            padding-top: 105px;
            padding-bottom: 60px;
            padding-left: 14px;
            padding-right: 14px;
          }

          .exp-main-title {
            font-size: 1.85rem;
          }

          .exp-hero-sub {
            font-size: 0.92rem;
          }

          .exp-role-title {
            font-size: 1.25rem;
          }

          .exp-glass-card {
            padding: 20px 16px;
          }

          .exp-meta-pill {
            font-size: 0.74rem;
            padding: 4px 8px;
          }

          .exp-summary-text {
            font-size: 0.9rem;
          }

          .exp-bullet-item {
            font-size: 0.84rem;
          }

          .exp-tech-chip {
            font-size: 0.75rem;
            padding: 3px 8px;
          }

          .exp-banner-vertical-label {
            display: none;
          }
        }
      `}</style>

      <div className="experience-page-container">
        
        {/* ── TOP HERO HEADER ── */}
        <div className="exp-hero-header">
          <div className="exp-hero-left">
            <span className="exp-arch-tag">
              <Sparkles size={13} style={{ color: "#0284c7" }} /> EXPERIENCE
            </span>
            <h1 className="exp-main-title">
              Where I've been<br />
              building and <span className="accent-word">learning.</span>
            </h1>
            <p className="exp-hero-sub">
              Real-world experience, practical problem solving, and continuous learning through meaningful projects and collaborations.
            </p>
          </div>

          {/* ── TOP RIGHT DESK VISUAL CARD ── */}
          <div className="exp-desk-card">
            <div className="exp-desk-top-bar">
              <span className="noida-neon-pill">
                NOIDA <Heart size={10} className="noida-neon-heart" fill="#f43f5e" />
              </span>
              <span className="exp-script-phrase">Same Process Bigger Goals</span>
            </div>

            <div className="exp-desk-content-row">
              {/* Stack of 3 Books */}
              <div className="exp-books-stack">
                <div className="exp-book-spine exp-book-1">Better Code</div>
                <div className="exp-book-spine exp-book-2">Better Systems</div>
                <div className="exp-book-spine exp-book-3">Better Tomorrow</div>
              </div>

              {/* Laptop Screen */}
              <div className="exp-laptop-mockup">
                <div className="exp-laptop-dots">
                  <span className="exp-dot" style={{ background: "#ef4444" }} />
                  <span className="exp-dot" style={{ background: "#f59e0b" }} />
                  <span className="exp-dot" style={{ background: "#10b981" }} />
                </div>
                <div className="exp-terminal-text">
                  <div>Build</div>
                  <div>Solve</div>
                  <div>Learn</div>
                  <div className="active-term">Repeat _</div>
                </div>
              </div>
            </div>

            <div className="exp-desk-mug-footer">
              <span className="exp-desk-mug-text">☕ Good Ideas Build Careers</span>
              <span style={{ fontSize: "0.68rem", color: "#64748b" }}>Noida Desk • 2026</span>
            </div>
          </div>
        </div>

        {/* ── TIMELINE CONTAINER ── */}
        <div className="exp-timeline-wrapper">

          {/* ════════════════════════════════════════════════════════════
              CARD 1: VPN DIGITAL SERVICES PVT. LTD. (Aug 2025 – Mid Jan 2026)
          ════════════════════════════════════════════════════════════ */}
          <div className="exp-item-row">
            {/* Left Timeline Side */}
            <div className="exp-timeline-side">
              <div 
                className="exp-time-dot" 
                style={{ borderColor: "#38bdf8", boxShadow: "0 0 10px rgba(56, 189, 248, 0.6)" }} 
              />
              <div className="exp-time-date">Aug 2025<br />– Mid Jan 2026</div>
              <span 
                className="exp-time-badge" 
                style={{ color: "#0284c7", background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.3)" }}
              >
                Internship
              </span>
            </div>

            {/* Right Large Glass Card */}
            <div className="exp-glass-card">
              <div 
                className="exp-card-glow" 
                style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }} 
              />

              <div className="exp-card-header">
                <div className="exp-card-title-group">
                  {/* Shield Squircle Icon */}
                  <div 
                    className="exp-company-icon-squircle" 
                    style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", borderColor: "rgba(56, 189, 248, 0.4)" }}
                  >
                    <Shield size={26} style={{ color: "#38bdf8" }} />
                  </div>

                  <div>
                    <h3 className="exp-role-title">Full Stack Developer Intern</h3>
                    <div className="exp-company-sub">
                      <span className="exp-company-name">VPN Digital Services Pvt. Ltd.</span>
                      <span 
                        className="exp-inline-badge"
                        style={{ background: "rgba(56, 189, 248, 0.12)", color: "#0284c7", border: "1px solid rgba(56, 189, 248, 0.3)" }}
                      >
                        Internship
                      </span>
                    </div>

                    {/* Meta Pills */}
                    <div className="exp-meta-pills">
                      <span className="exp-meta-pill">
                        <Calendar size={13} /> Aug 2025 – Mid Jan 2026
                      </span>
                      <span className="exp-meta-pill">
                        <Laptop size={13} /> Cyber Kavach Web
                      </span>
                      <span className="exp-meta-pill">
                        <Lock size={13} /> VPN / Cybersecurity Platform
                      </span>
                      <span className="exp-meta-pill">
                        <Users size={13} /> Team of 4
                      </span>
                      <span className="exp-meta-pill">
                        <MapPin size={13} /> Noida, Uttar Pradesh
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Visual Cyber Banner */}
                <div 
                  className="exp-visual-banner" 
                  style={{ background: "linear-gradient(135deg, #091e3a 0%, #0c2d54 100%)", border: "1px solid rgba(56, 189, 248, 0.3)" }}
                >
                  <div className="exp-banner-left">
                    <div className="exp-banner-icon">
                      <Shield size={18} style={{ color: "#38bdf8" }} />
                    </div>
                    <div>
                      <div className="exp-banner-text-title">CYBER KAVACH</div>
                      <div className="exp-banner-text-sub">Safer Networks Stronger Tomorrows</div>
                    </div>
                  </div>
                  <div className="exp-banner-vertical-label">
                    SECURE DEVELOP DEPLOY PROTECT —
                  </div>
                </div>
              </div>

              {/* One line summary */}
              <p className="exp-summary-text">
                Worked on building responsive web interfaces, RESTful API integrations, and database workflows in a cybersecurity and VPN platform.
              </p>

              {/* 2-Column Detail Grid */}
              <div className="exp-details-grid">
                {/* Left Column: Responsibilities */}
                <div className="exp-detail-col">
                  <h4>
                    <Shield size={15} style={{ color: "#0284c7" }} /> Key Responsibilities
                  </h4>
                  <ul className="exp-bullets-list">
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#0284c7" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Developed responsive web interfaces using React.js, JavaScript, HTML5, and CSS3.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#0284c7" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Built and integrated RESTful APIs using Node.js and Express.js.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#0284c7" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Implemented MongoDB-based CRUD operations and data schemas.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#0284c7" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Integrated security checks, data validation, and error-handling workflows.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#0284c7" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Collaborated in a team of 4 using Git and GitHub.</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column: Learned & Scope */}
                <div className="exp-detail-col">
                  <h4>
                    <Lightbulb size={15} style={{ color: "#0284c7" }} /> What I Worked On &amp; Learned
                  </h4>
                  <div className="exp-scope-box">
                    <strong>Project scope:</strong> Engineered responsive client dashboards, API validation pipelines, and secure state handling.
                  </div>
                  <ul className="exp-bullets-list">
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#0284c7" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Writing production-ready full-stack components with robust error boundaries.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#0284c7" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Collaborative Agile team workflows, PR reviews, and Git branch management.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#0284c7" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Optimizing REST API responses and database queries for low latency.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Stack Chips */}
              <div className="exp-tech-strip">
                <span className="exp-tech-chip">⚛️ React.js</span>
                <span className="exp-tech-chip">🟨 JavaScript</span>
                <span className="exp-tech-chip">🟩 Node.js</span>
                <span className="exp-tech-chip">⚡ Express.js</span>
                <span className="exp-tech-chip">🍃 MongoDB</span>
                <span className="exp-tech-chip">🌐 REST APIs</span>
                <span className="exp-tech-chip">🔀 Git</span>
                <span className="exp-tech-chip">🐙 GitHub</span>
              </div>
            </div>
          </div>


          {/* ════════════════════════════════════════════════════════════
              CARD 2: CLOUD KITCHEN SERVICE (Jan 2026 – July 2026)
          ════════════════════════════════════════════════════════════ */}
          <div className="exp-item-row">
            {/* Left Timeline Side */}
            <div className="exp-timeline-side">
              <div 
                className="exp-time-dot" 
                style={{ borderColor: "#34d399", boxShadow: "0 0 10px rgba(52, 211, 153, 0.6)" }} 
              />
              <div className="exp-time-date">Jan 2026<br />– July 2026</div>
              <span 
                className="exp-time-badge" 
                style={{ color: "#059669", background: "rgba(52, 211, 153, 0.1)", border: "1px solid rgba(52, 211, 153, 0.3)" }}
              >
                Internship
              </span>
            </div>

            {/* Right Large Glass Card */}
            <div className="exp-glass-card">
              <div 
                className="exp-card-glow" 
                style={{ background: "radial-gradient(circle, #34d399 0%, transparent 70%)" }} 
              />

              <div className="exp-card-header">
                <div className="exp-card-title-group">
                  {/* Chef Squircle Icon */}
                  <div 
                    className="exp-company-icon-squircle" 
                    style={{ background: "linear-gradient(135deg, #451a03 0%, #78350f 100%)", borderColor: "rgba(245, 158, 11, 0.4)" }}
                  >
                    <Utensils size={24} style={{ color: "#fbbf24" }} />
                  </div>

                  <div>
                    <h3 className="exp-role-title">Software Engineer Intern</h3>
                    <div className="exp-company-sub">
                      <span className="exp-company-name">Cloud Kitchen Service</span>
                      <span 
                        className="exp-inline-badge"
                        style={{ background: "rgba(168, 85, 247, 0.12)", color: "#7e22ce", border: "1px solid rgba(168, 85, 247, 0.3)" }}
                      >
                        Internship
                      </span>
                    </div>

                    {/* Meta Pills */}
                    <div className="exp-meta-pills">
                      <span className="exp-meta-pill">
                        <Calendar size={13} /> Jan 2026 – July 2026
                      </span>
                      <span className="exp-meta-pill">
                        <Utensils size={13} /> Order Processing + Inventory Tracking
                      </span>
                      <span className="exp-meta-pill">
                        <MapPin size={13} /> Noida, Uttar Pradesh
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Visual Kitchen Banner */}
                <div 
                  className="exp-visual-banner" 
                  style={{ background: "linear-gradient(135deg, #1c1917 0%, #292524 100%)", border: "1px solid rgba(245, 158, 11, 0.3)" }}
                >
                  <div className="exp-banner-left">
                    <div className="exp-banner-icon" style={{ borderColor: "rgba(245, 158, 11, 0.3)" }}>
                      <Utensils size={18} style={{ color: "#fbbf24" }} />
                    </div>
                    <div>
                      <div className="exp-banner-text-title" style={{ color: "#fef3c7" }}>From Orders to Smiles</div>
                      <div className="exp-banner-text-sub">Faster Kitchens, Happier Customers</div>
                    </div>
                  </div>
                  <div className="exp-banner-vertical-label">
                    GOOD FOOD BETTER SYSTEMS —
                  </div>
                </div>
              </div>

              {/* One line summary */}
              <p className="exp-summary-text">
                Hands-on experience building delivery backend channels, order processing pipelines, and inventory tracking modules.
              </p>

              {/* 2-Column Detail Grid */}
              <div className="exp-details-grid">
                {/* Left Column: Responsibilities */}
                <div className="exp-detail-col">
                  <h4>
                    <Cpu size={15} style={{ color: "#059669" }} /> Key Responsibilities
                  </h4>
                  <ul className="exp-bullets-list">
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(52, 211, 153, 0.15)", color: "#059669" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Developed real-time ordering pipelines and status tracker using WebSockets.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(52, 211, 153, 0.15)", color: "#059669" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Created a clean kitchen dispatch UI for active order logs.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(52, 211, 153, 0.15)", color: "#059669" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Configured Redis caching layers to reduce database read latencies.</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column: Learned & Scope */}
                <div className="exp-detail-col">
                  <h4>
                    <Lightbulb size={15} style={{ color: "#059669" }} /> What I Worked On &amp; Learned
                  </h4>
                  <div className="exp-scope-box" style={{ borderLeftColor: "#059669" }}>
                    <strong>Project scope:</strong> Engineered automatic inventory sync and real-time status propagation for kitchen dispatches.
                  </div>
                  <ul className="exp-bullets-list">
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(52, 211, 153, 0.15)", color: "#059669" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Scaling WebSocket connections for real-time status propagation under load.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(52, 211, 153, 0.15)", color: "#059669" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Building reliable inventory synchronization systems for high-volume environments.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Stack Chips */}
              <div className="exp-tech-strip">
                <span className="exp-tech-chip">🟨 JavaScript</span>
                <span className="exp-tech-chip">⚛️ React</span>
                <span className="exp-tech-chip">🟩 Node.js</span>
                <span className="exp-tech-chip">🔌 WebSockets</span>
                <span className="exp-tech-chip">🔴 Redis</span>
              </div>
            </div>
          </div>


          {/* ════════════════════════════════════════════════════════════
              CARD 3: FREELANCE DEVELOPER (Mid July 2026 – Present)
          ════════════════════════════════════════════════════════════ */}
          <div className="exp-item-row">
            {/* Left Timeline Side */}
            <div className="exp-timeline-side">
              <div 
                className="exp-time-dot" 
                style={{ borderColor: "#a855f7", boxShadow: "0 0 10px rgba(168, 85, 247, 0.6)" }} 
              />
              <div className="exp-time-date">Mid July 2026<br />– Present</div>
              <span 
                className="exp-time-badge" 
                style={{ color: "#7e22ce", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)" }}
              >
                Freelance
              </span>
            </div>

            {/* Right Large Glass Card */}
            <div className="exp-glass-card">
              <div 
                className="exp-card-glow" 
                style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} 
              />

              <div className="exp-card-header">
                <div className="exp-card-title-group">
                  {/* Monogram 'b' Squircle Icon */}
                  <div 
                    className="exp-company-icon-squircle" 
                    style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #3b0764 100%)", borderColor: "rgba(168, 85, 247, 0.4)" }}
                  >
                    <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#c084fc", fontFamily: "serif" }}>b</span>
                  </div>

                  <div>
                    <h3 className="exp-role-title">Freelance Developer</h3>
                    <div className="exp-company-sub">
                      <span className="exp-company-name">Independent / Client Projects</span>
                      <span 
                        className="exp-inline-badge"
                        style={{ background: "rgba(168, 85, 247, 0.12)", color: "#7e22ce", border: "1px solid rgba(168, 85, 247, 0.3)" }}
                      >
                        Freelance
                      </span>
                    </div>

                    {/* Meta Pills */}
                    <div className="exp-meta-pills">
                      <span className="exp-meta-pill">
                        <Calendar size={13} /> Mid July 2026 – Present
                      </span>
                      <span className="exp-meta-pill">
                        <Laptop size={13} /> Web &amp; AI Solutions
                      </span>
                      <span className="exp-meta-pill">
                        <Users size={13} /> Multiple Clients
                      </span>
                      <span className="exp-meta-pill">
                        <MapPin size={13} /> Remote / Noida, UP
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Visual Workstation Banner */}
                <div 
                  className="exp-visual-banner" 
                  style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)", border: "1px solid rgba(168, 85, 247, 0.3)" }}
                >
                  <div className="exp-banner-left">
                    <div className="exp-banner-icon" style={{ borderColor: "rgba(168, 85, 247, 0.3)" }}>
                      <Laptop size={18} style={{ color: "#c084fc" }} />
                    </div>
                    <div>
                      <div className="exp-banner-text-title" style={{ color: "#f3e8ff" }}>Ideas to Impact</div>
                      <div className="exp-banner-text-sub">Full Stack &amp; AI Solutions</div>
                    </div>
                  </div>
                  <div className="exp-banner-vertical-label">
                    BUILD AUTOMATE SOLVE GROW —
                  </div>
                </div>
              </div>

              {/* One line summary */}
              <p className="exp-summary-text">
                Working as a freelance developer, building custom web applications, automation tools, and AI-powered solutions for individual clients and small businesses.
              </p>

              {/* 2-Column Detail Grid */}
              <div className="exp-details-grid">
                {/* Left Column: Focus Areas */}
                <div className="exp-detail-col">
                  <h4>
                    <Laptop size={15} style={{ color: "#7e22ce" }} /> Key Focus Areas
                  </h4>
                  <ul className="exp-bullets-list">
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(168, 85, 247, 0.15)", color: "#7e22ce" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Developing full-stack web applications and landing pages.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(168, 85, 247, 0.15)", color: "#7e22ce" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Building AI/automation tools and chatbots for business use.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(168, 85, 247, 0.15)", color: "#7e22ce" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Client requirement analysis, deployment, and ongoing support.</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column: What I Do */}
                <div className="exp-detail-col">
                  <h4>
                    <Lightbulb size={15} style={{ color: "#7e22ce" }} /> What I Do
                  </h4>
                  <div className="exp-scope-box" style={{ borderLeftColor: "#7e22ce" }}>
                    <strong>Project scope:</strong> End-to-end full stack execution, practical AI integrations, and rapid prototype turnarounds.
                  </div>
                  <ul className="exp-bullets-list">
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(168, 85, 247, 0.15)", color: "#7e22ce" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Delivering practical, scalable, and user-friendly solutions.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(168, 85, 247, 0.15)", color: "#7e22ce" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Working with modern web stacks and AI/LLM integrations.</span>
                    </li>
                    <li className="exp-bullet-item">
                      <div className="exp-check-icon" style={{ background: "rgba(168, 85, 247, 0.15)", color: "#7e22ce" }}>
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>End-to-end development – from idea to deployment.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Freelance Quote */}
              <div className="exp-freelance-quote">
                <Sparkles size={14} style={{ color: "#9333ea" }} />
                <span>“Turning ideas into real-world solutions.”</span>
              </div>

              {/* Bottom Tech Stack Chips */}
              <div className="exp-tech-strip">
                <span className="exp-tech-chip">⚛️ React</span>
                <span className="exp-tech-chip">▲ Next.js</span>
                <span className="exp-tech-chip">🟩 Node.js</span>
                <span className="exp-tech-chip">🐍 Python</span>
                <span className="exp-tech-chip">🤖 OpenAI</span>
                <span className="exp-tech-chip">🐳 Docker</span>
                <span className="exp-tech-chip">▲ Vercel</span>
                <span className="exp-tech-chip">🔥 Firebase</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
