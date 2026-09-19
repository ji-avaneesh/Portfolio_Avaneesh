import React from "react";
import { 
  Building2, GraduationCap, BookOpen, Award, 
  Calculator, Laptop, Code2, Brain, TrendingUp, 
  ChevronRight, Sparkles 
} from "lucide-react";

export default function Education() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .education-page-container {
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
        .edu-hero-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 50px;
        }

        .edu-hero-left {
          flex: 1;
          max-width: 680px;
        }

        .edu-arch-tag {
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

        .edu-main-title {
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.8px;
          color: #0f172a;
          margin-bottom: 14px;
          font-family: 'Outfit', sans-serif;
        }

        .edu-main-title .accent-word {
          color: #0284c7;
          position: relative;
        }

        .edu-hero-sub {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #64748b;
          margin: 0;
        }

        /* ── Top Right Desk Visual Card ── */
        .edu-desk-card {
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

        .edu-desk-card::before {
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

        .edu-desk-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .edu-script-phrase {
          font-family: 'Caveat', cursive;
          font-size: 1.4rem;
          color: #e2e8f0;
          font-weight: 700;
          transform: rotate(-3deg);
          letter-spacing: 0.5px;
          margin-left: auto;
        }

        .edu-desk-content-row {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        /* Stack of 4 Books */
        .edu-books-stack {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 120px;
        }

        .edu-book-spine {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          border-left: 3px solid;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .edu-book-1 {
          background: #1e293b;
          border-left-color: #38bdf8;
          color: #93c5fd;
        }

        .edu-book-2 {
          background: #1e293b;
          border-left-color: #a855f7;
          color: #c084fc;
        }

        .edu-book-3 {
          background: #1e293b;
          border-left-color: #38bdf8;
          color: #93c5fd;
        }

        .edu-book-4 {
          background: #1e293b;
          border-left-color: #34d399;
          color: #6ee7b7;
        }

        /* Laptop Mockup */
        .edu-laptop-mockup {
          flex: 1;
          background: #030712;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 10px;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8), 0 0 15px rgba(56, 189, 248, 0.12);
        }

        .edu-laptop-dots {
          display: flex;
          gap: 4px;
          margin-bottom: 6px;
        }

        .edu-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .edu-terminal-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          line-height: 1.35;
          color: #94a3b8;
        }

        .edu-terminal-text span.active-term {
          color: #38bdf8;
          font-weight: 600;
        }

        /* Mug Footer */
        .edu-desk-mug-footer {
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.74rem;
          color: #94a3b8;
        }

        .edu-desk-mug-text {
          font-size: 0.72rem;
          color: #cbd5e1;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        /* ── Continuous Horizontal Timeline Line ── */
        .edu-timeline-track {
          position: relative;
          margin-bottom: 50px;
        }

        .edu-timeline-bar {
          position: absolute;
          top: -24px;
          left: 6%;
          right: 6%;
          height: 2px;
          background: linear-gradient(90deg, #0284c7 0%, #a855f7 33%, #10b981 66%, #f59e0b 100%);
          opacity: 0.35;
          z-index: 1;
        }

        /* ── 4 Milestones Cards Grid ── */
        .edu-milestones-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
          z-index: 2;
        }

        .edu-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 20px;
          padding: 26px 22px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }

        .edu-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
        }

        /* Node dot over card */
        .edu-card-node-dot {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ffffff;
          border: 3.5px solid;
          box-shadow: 0 0 12px;
          z-index: 3;
        }

        .edu-card-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
          border: 1px solid;
        }

        .edu-card-year {
          font-size: 0.88rem;
          font-weight: 800;
          margin-bottom: 4px;
          letter-spacing: 0.3px;
        }

        .edu-card-degree {
          font-size: 1.18rem;
          font-weight: 850;
          color: #0f172a;
          margin-bottom: 6px;
          line-height: 1.25;
          font-family: 'Outfit', sans-serif;
        }

        .edu-card-field {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .edu-card-institution {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.45;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .edu-card-result-pill {
          display: inline-block;
          align-self: flex-start;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          margin-bottom: 10px;
          border: 1px solid;
        }

        .edu-card-milestone-tag {
          display: inline-block;
          align-self: flex-start;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          background: rgba(245, 158, 11, 0.12);
          color: #d97706;
          border: 1px solid rgba(245, 158, 11, 0.3);
          margin-bottom: 10px;
        }

        .edu-card-context {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.45;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px dashed rgba(226, 232, 240, 0.9);
        }

        /* ── Academic Journey Pathway Section ── */
        .edu-path-section {
          margin-top: 60px;
          margin-bottom: 45px;
        }

        .edu-path-header-group {
          margin-bottom: 22px;
        }

        .edu-path-tag {
          font-size: 0.74rem;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .edu-path-main-title {
          font-size: 1.6rem;
          font-weight: 850;
          color: #0f172a;
          margin: 0;
          font-family: 'Outfit', sans-serif;
        }

        .edu-pathway-strip {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 20px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
          box-sizing: border-box;
          gap: 16px;
        }

        .edu-path-node {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
        }

        .edu-path-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
        }

        .edu-path-title {
          font-size: 0.96rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2px 0;
          font-family: 'Outfit', sans-serif;
        }

        .edu-path-sub {
          font-size: 0.78rem;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }

        .edu-path-arrow {
          color: #94a3b8;
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* ── Transition Summary Card ── */
        .edu-summary-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 20px;
          padding: 30px 34px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          box-sizing: border-box;
        }

        .edu-summary-left {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          flex: 1;
        }

        .edu-summary-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0284c7;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .edu-summary-title {
          font-size: 1.15rem;
          font-weight: 850;
          color: #0284c7;
          margin: 0 0 8px 0;
          font-family: 'Outfit', sans-serif;
        }

        .edu-summary-para {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #475569;
          margin: 0;
        }

        .edu-summary-callout {
          flex-shrink: 0;
          max-width: 260px;
          text-align: right;
          padding-left: 24px;
          border-left: 1px solid rgba(226, 232, 240, 0.8);
        }

        .edu-callout-quote {
          font-family: 'Caveat', cursive;
          font-size: 1.55rem;
          font-weight: 700;
          color: #0284c7;
          line-height: 1.25;
          margin: 0;
        }

        .edu-callout-underline {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #0284c7, #38bdf8);
          border-radius: 2px;
          margin-left: auto;
          margin-top: 6px;
        }

        /* ══════════════════════════════════════════════════════
           MOBILE-FRIENDLY FIRST RESPONSIVE DESIGN
        ══════════════════════════════════════════════════════ */

        @media (max-width: 1040px) {
          .edu-milestones-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .edu-timeline-bar {
            display: none;
          }

          .edu-card-node-dot {
            display: none;
          }

          .edu-pathway-strip {
            flex-wrap: wrap;
            gap: 20px;
          }

          .edu-path-arrow {
            display: none;
          }

          .edu-path-node {
            flex: 1 1 40%;
          }
        }

        @media (max-width: 900px) {
          .edu-hero-header {
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
          }

          .edu-desk-card {
            width: 100%;
          }

          .edu-main-title {
            font-size: 2.2rem;
          }

          .edu-summary-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px 20px;
          }

          .edu-summary-callout {
            border-left: none;
            border-top: 1px dashed rgba(226, 232, 240, 0.9);
            padding-left: 0;
            padding-top: 16px;
            width: 100%;
            max-width: 100%;
            text-align: left;
          }

          .edu-callout-underline {
            margin-left: 0;
          }
        }

        @media (max-width: 640px) {
          .education-page-container {
            padding-top: 105px;
            padding-bottom: 60px;
            padding-left: 14px;
            padding-right: 14px;
          }

          .edu-main-title {
            font-size: 1.85rem;
          }

          .edu-hero-sub {
            font-size: 0.92rem;
          }

          .edu-milestones-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .edu-card {
            padding: 22px 18px;
          }

          .edu-pathway-strip {
            flex-direction: column;
            align-items: stretch;
            padding: 18px 16px;
          }

          .edu-path-node {
            flex: 1 1 100%;
          }

          .edu-summary-left {
            flex-direction: column;
            gap: 14px;
          }

          .edu-summary-para {
            font-size: 0.9rem;
          }

          .edu-callout-quote {
            font-size: 1.35rem;
          }
        }
      `}</style>

      <div className="education-page-container">

        {/* ── TOP HERO HEADER ── */}
        <div className="edu-hero-header">
          <div className="edu-hero-left">
            <span className="edu-arch-tag">
              <Sparkles size={13} style={{ color: "#0284c7" }} /> EDUCATION
            </span>
            <h1 className="edu-main-title">
              The journey behind<br />
              the <span className="accent-word">developer.</span>
            </h1>
            <p className="edu-hero-sub">
              Every line of code today is built on years of learning, curiosity, and a strong foundation in mathematics.
            </p>
          </div>

          {/* ── TOP RIGHT DESK VISUAL CARD ── */}
          <div className="edu-desk-card">
            <div className="edu-desk-top-bar">
              <span className="edu-script-phrase">Same Learner Bigger Dreams</span>
            </div>

            <div className="edu-desk-content-row">
              {/* Stack of 4 Books */}
              <div className="edu-books-stack">
                <div className="edu-book-spine edu-book-1">Mathematics</div>
                <div className="edu-book-spine edu-book-2">Problem Solving</div>
                <div className="edu-book-spine edu-book-3">Computer Science</div>
                <div className="edu-book-spine edu-book-4">A Better Tomorrow</div>
              </div>

              {/* Laptop Screen */}
              <div className="edu-laptop-mockup">
                <div className="edu-laptop-dots">
                  <span className="edu-dot" style={{ background: "#ef4444" }} />
                  <span className="edu-dot" style={{ background: "#f59e0b" }} />
                  <span className="edu-dot" style={{ background: "#10b981" }} />
                </div>
                <div className="edu-terminal-text">
                  <div>Learn</div>
                  <div>Build</div>
                  <div>Grow</div>
                  <div className="active-term">Repeat _</div>
                </div>
              </div>
            </div>

            <div className="edu-desk-mug-footer">
              <span className="edu-desk-mug-text">☕ Discipline Today Better Tomorrow</span>
              <span style={{ fontSize: "0.68rem", color: "#64748b" }}>Academic Path</span>
            </div>
          </div>
        </div>

        {/* ── TIMELINE TRACK & 4 MILESTONES ── */}
        <div className="edu-timeline-track">
          <div className="edu-timeline-bar" />

          <div className="edu-milestones-grid">

            {/* ── CARD 1: 2014 — High School ── */}
            <div className="edu-card">
              <div 
                className="edu-card-node-dot" 
                style={{ borderColor: "#0284c7", boxShadow: "0 0 10px rgba(2, 132, 199, 0.6)" }} 
              />
              <div 
                className="edu-card-icon-box"
                style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)", borderColor: "rgba(2, 132, 199, 0.35)", color: "#0284c7" }}
              >
                <Building2 size={22} />
              </div>
              <div className="edu-card-year" style={{ color: "#0284c7" }}>2014</div>
              <div className="edu-card-degree">High School / 10th</div>
              <div className="edu-card-institution">Shanti Niketan H.S. School</div>
              <span 
                className="edu-card-result-pill"
                style={{ color: "#0284c7", background: "rgba(2, 132, 199, 0.08)", borderColor: "rgba(2, 132, 199, 0.3)" }}
              >
                Result: 80%
              </span>
              <div className="edu-card-context">
                Academic Foundation
              </div>
            </div>

            {/* ── CARD 2: 2016 — Intermediate ── */}
            <div className="edu-card">
              <div 
                className="edu-card-node-dot" 
                style={{ borderColor: "#a855f7", boxShadow: "0 0 10px rgba(168, 85, 247, 0.6)" }} 
              />
              <div 
                className="edu-card-icon-box"
                style={{ background: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)", borderColor: "rgba(168, 85, 247, 0.35)", color: "#7e22ce" }}
              >
                <GraduationCap size={22} />
              </div>
              <div className="edu-card-year" style={{ color: "#7e22ce" }}>2016</div>
              <div className="edu-card-degree">Intermediate / 12th</div>
              <div className="edu-card-institution">SMY Inter College</div>
              <span 
                className="edu-card-result-pill"
                style={{ color: "#7e22ce", background: "rgba(168, 85, 247, 0.08)", borderColor: "rgba(168, 85, 247, 0.3)" }}
              >
                Result: 90%
              </span>
              <div className="edu-card-context">
                Mathematics-focused higher secondary education
              </div>
            </div>

            {/* ── CARD 3: 2016 – 2019 — B.Sc. Mathematics ── */}
            <div className="edu-card">
              <div 
                className="edu-card-node-dot" 
                style={{ borderColor: "#10b981", boxShadow: "0 0 10px rgba(16, 185, 129, 0.6)" }} 
              />
              <div 
                className="edu-card-icon-box"
                style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)", borderColor: "rgba(16, 185, 129, 0.35)", color: "#059669" }}
              >
                <BookOpen size={22} />
              </div>
              <div className="edu-card-year" style={{ color: "#059669" }}>2016 – 2019</div>
              <div className="edu-card-degree">Graduation</div>
              <div className="edu-card-field" style={{ color: "#059669" }}>B.Sc. Mathematics</div>
              <div className="edu-card-institution">Allahabad State University</div>
              <span 
                className="edu-card-result-pill"
                style={{ color: "#059669", background: "rgba(16, 185, 129, 0.08)", borderColor: "rgba(16, 185, 129, 0.3)" }}
              >
                Result: 1st Division
              </span>
              <div className="edu-card-context">
                Undergraduate mathematical foundation
              </div>
            </div>

            {/* ── CARD 4: 2023 – 2025 — MCA HBTU Kanpur ── */}
            <div className="edu-card">
              <div 
                className="edu-card-node-dot" 
                style={{ borderColor: "#f59e0b", boxShadow: "0 0 10px rgba(245, 158, 11, 0.6)" }} 
              />
              <div 
                className="edu-card-icon-box"
                style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)", borderColor: "rgba(245, 158, 11, 0.35)", color: "#d97706" }}
              >
                <Award size={22} />
              </div>
              <div className="edu-card-year" style={{ color: "#d97706" }}>2023 – 2025</div>
              <div className="edu-card-degree">MCA</div>
              <div className="edu-card-institution">Harcourt Butler Technical University (HBTU) Kanpur</div>
              <span 
                className="edu-card-result-pill"
                style={{ color: "#d97706", background: "rgba(245, 158, 11, 0.08)", borderColor: "rgba(245, 158, 11, 0.3)" }}
              >
                Result: 7.5 CGPA
              </span>
              <span className="edu-card-milestone-tag">
                Latest Academic Milestone
              </span>
              <div className="edu-card-context">
                Advanced computational structures and software development studies
              </div>
            </div>

          </div>
        </div>

        {/* ── PATH: ACADEMIC JOURNEY STEPPER ── */}
        <div className="edu-path-section">
          <div className="edu-path-header-group">
            <div className="edu-path-tag">Path</div>
            <h2 className="edu-path-main-title">Academic Journey</h2>
          </div>

          <div className="edu-pathway-strip">
            {/* Step 1 */}
            <div className="edu-path-node">
              <div 
                className="edu-path-icon-box"
                style={{ background: "rgba(2, 132, 199, 0.1)", borderColor: "rgba(2, 132, 199, 0.3)", color: "#0284c7" }}
              >
                <Calculator size={20} />
              </div>
              <div>
                <div className="edu-path-title">Mathematics</div>
                <div className="edu-path-sub">Analytical Thinking</div>
              </div>
            </div>

            <ChevronRight size={18} className="edu-path-arrow" />

            {/* Step 2 */}
            <div className="edu-path-node">
              <div 
                className="edu-path-icon-box"
                style={{ background: "rgba(168, 85, 247, 0.1)", borderColor: "rgba(168, 85, 247, 0.3)", color: "#7e22ce" }}
              >
                <Laptop size={20} />
              </div>
              <div>
                <div className="edu-path-title">Computer Applications</div>
                <div className="edu-path-sub">Computational Methods</div>
              </div>
            </div>

            <ChevronRight size={18} className="edu-path-arrow" />

            {/* Step 3 */}
            <div className="edu-path-node">
              <div 
                className="edu-path-icon-box"
                style={{ background: "rgba(6, 182, 212, 0.1)", borderColor: "rgba(6, 182, 212, 0.3)", color: "#0891b2" }}
              >
                <Code2 size={20} />
              </div>
              <div>
                <div className="edu-path-title">Software Development</div>
                <div className="edu-path-sub">Building Real Solutions</div>
              </div>
            </div>

            <ChevronRight size={18} className="edu-path-arrow" />

            {/* Step 4 */}
            <div className="edu-path-node">
              <div 
                className="edu-path-icon-box"
                style={{ background: "rgba(245, 158, 11, 0.1)", borderColor: "rgba(245, 158, 11, 0.3)", color: "#d97706" }}
              >
                <Brain size={20} />
              </div>
              <div>
                <div className="edu-path-title">AI / Product Engineering</div>
                <div className="edu-path-sub">Creating What's Next</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TRANSITION SUMMARY CARD ── */}
        <div className="edu-summary-card">
          <div className="edu-summary-left">
            <div className="edu-summary-icon-box">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="edu-summary-title">Transition Summary</h3>
              <p className="edu-summary-para">
                My academic journey began with a strong concentration in mathematics during my B.Sc. studies (First Division), which transitioned naturally into computational methods, software engineering paradigms, and full-stack software development during my Master of Computer Applications (MCA) at Harcourt Butler Technical University, Kanpur (CGPA: 7.5).
              </p>
            </div>
          </div>

          <div className="edu-summary-callout">
            <p className="edu-callout-quote">
              “Same Foundation. Bigger Possibilities.”
            </p>
            <div className="edu-callout-underline" />
          </div>
        </div>

      </div>
    </>
  );
}
