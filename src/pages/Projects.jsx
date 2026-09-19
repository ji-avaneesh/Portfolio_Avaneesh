import React, { useState } from "react";
import { Github, Terminal, Cpu, FileText, Bot } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects({ initialFilter = "all" }) {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState(initialFilter); // all, main, current, side, vision

  const mainCount = projects.main?.length || 4;
  const currentCount = projects.current?.length || 3;
  const sideCount = projects.side?.length || 10;
  const totalCount = mainCount + currentCount + sideCount + 1;

  return (
    <>
      <style>{`
        .projects-page-container {
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

        /* ---------------- HEADER & STATS ROW ---------------- */
        .projects-hero-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          align-items: center;
          margin-bottom: 36px;
        }

        @media (min-width: 992px) {
          .projects-hero-header {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 40px;
          }
        }

        .project-arch-tag {
          font-size: 0.78rem;
          font-weight: 850;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--violet);
          margin-bottom: 12px;
          display: block;
        }

        .projects-main-title {
          font-size: clamp(2.6rem, 4.2vw, 3.4rem);
          font-weight: 900;
          color: var(--text);
          letter-spacing: -1px;
          line-height: 1.18;
          margin: 0 0 16px 0;
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .projects-main-title span.accent-word {
          background: linear-gradient(135deg, var(--violet) 30%, #60a5fa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .projects-hero-sub {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-muted);
          max-width: 640px;
          margin: 0 0 28px 0;
        }

        /* Stats Strip */
        .proj-stats-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .proj-stat-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }

        .proj-stat-num {
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -0.3px;
        }

        .proj-stat-label {
          font-size: 0.78rem;
          font-weight: 750;
          color: var(--text-muted);
          text-transform: capitalize;
        }

        /* Top Right Decorative Desk Visual Card */
        .proj-desk-visual-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.65), rgba(240, 238, 248, 0.45));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: var(--radius-xl);
          padding: 24px 28px;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          min-height: 180px;
        }

        .proj-desk-glow {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(var(--violet-rgb), 0.25), transparent 70%);
          filter: blur(20px);
        }

        .desk-quote-phrase {
          font-size: 1.35rem;
          font-weight: 850;
          letter-spacing: -0.3px;
          color: var(--text);
          line-height: 1.25;
        }

        .desk-quote-sub {
          font-family: monospace;
          font-size: 0.88rem;
          color: var(--violet);
          font-weight: 700;
          margin-top: 4px;
        }

        .desk-steps-strip {
          display: flex;
          gap: 16px;
          margin-top: 18px;
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--text-muted);
        }

        .desk-step-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .desk-step-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--violet);
        }

        /* ---------------- FILTER TABS ---------------- */
        .projects-filter-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          padding: 6px;
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.75);
          border-radius: 100px;
          width: fit-content;
        }

        .filter-pill-btn {
          padding: 8px 18px;
          font-size: 0.82rem;
          font-weight: 800;
          border-radius: 100px;
          border: 1px solid transparent;
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .filter-pill-btn:hover {
          color: var(--text);
          background: rgba(255, 255, 255, 0.6);
        }

        .filter-pill-btn.active {
          background: #171717;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        /* ---------------- CATEGORY HEADERS ---------------- */
        .cat-section-wrapper {
          margin-bottom: 54px;
        }

        .cat-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 22px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cat-title-group h2 {
          font-size: 1.35rem;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -0.3px;
          margin: 0 0 4px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cat-title-group p {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 0;
        }

        .cat-view-all-link {
          font-size: 0.82rem;
          font-weight: 800;
          color: var(--violet);
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 0;
          transition: gap 0.2s ease;
        }

        .cat-view-all-link:hover {
          gap: 7px;
          text-decoration: underline;
        }

        /* ---------------- CATEGORY 1: MAIN PROJECTS (4 CARDS) ---------------- */
        .main-projects-grid-4 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 680px) {
          .main-projects-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1100px) {
          .main-projects-grid-4 {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .project-card-outer {
          background: rgba(255, 255, 255, 0.62);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: var(--radius-lg);
          padding: 18px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 14px;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .project-card-outer:hover {
          transform: translateY(-4px);
          border-color: rgba(var(--violet-rgb), 0.4);
          box-shadow: 0 16px 36px rgba(var(--violet-rgb), 0.1);
        }

        /* Browser Window Mockup Frame */
        .browser-mockup-frame {
          border-radius: 12px;
          overflow: hidden;
          background: #0f141f;
          border: 1px solid rgba(255, 255, 255, 0.1);
          aspect-ratio: 16 / 10;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .browser-window-bar {
          height: 22px;
          background: #19202f;
          display: flex;
          align-items: center;
          padding: 0 8px;
          gap: 5px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .window-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .browser-url-pill {
          margin-left: 8px;
          height: 12px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          flex: 1;
          max-width: 140px;
        }

        .browser-mockup-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 10px;
          color: #e2e8f0;
          font-family: -apple-system, sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Project Metadata Row */
        .proj-meta-tags-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .proj-num-pill {
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(var(--violet-rgb), 0.12);
          color: var(--violet);
          border: 1px solid rgba(var(--violet-rgb), 0.25);
        }

        .proj-category-pill {
          font-size: 0.68rem;
          font-weight: 750;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .proj-card-title {
          font-size: 1.12rem;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -0.3px;
          margin: 0;
        }

        .proj-card-desc {
          font-size: 0.84rem;
          line-height: 1.55;
          color: var(--text-muted);
          margin: 0;
        }

        .proj-tech-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .proj-tech-tag {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.04);
          color: var(--text-muted);
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .proj-github-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 750;
          color: var(--text);
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: all 0.2s ease;
          width: fit-content;
        }

        .proj-github-action-btn:hover {
          background: #171717;
          color: #ffffff;
          border-color: #171717;
        }

        /* ---------------- CATEGORY 2: CURRENT / BUILDING (3 CARDS) ---------------- */
        .current-projects-grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .current-projects-grid-3 {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .active-dev-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        /* ---------------- CATEGORY 3: SIDE PROJECTS (10 COMPACT CARDS) ---------------- */
        .side-projects-grid-10 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        @media (min-width: 480px) {
          .side-projects-grid-10 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 800px) {
          .side-projects-grid-10 {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .side-compact-card {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--radius-md);
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;
          text-decoration: none;
          color: inherit;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
        }

        .side-compact-card:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(var(--violet-rgb), 0.4);
          box-shadow: 0 10px 24px rgba(var(--violet-rgb), 0.08);
        }

        .side-card-screen-header {
          height: 52px;
          border-radius: 8px;
          background: #0f141f;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          color: #94a3b8;
          overflow: hidden;
          position: relative;
        }

        .side-screen-mini-dots {
          position: absolute;
          top: 4px;
          left: 6px;
          display: flex;
          gap: 3px;
        }

        .side-dot-micro {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }

        .side-card-title {
          font-size: 0.88rem;
          font-weight: 850;
          color: var(--text);
          letter-spacing: -0.2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .side-card-badge {
          font-size: 0.68rem;
          font-weight: 750;
          color: var(--violet);
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .side-card-techs {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }

        .side-tech-micro {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.04);
          color: var(--text-muted);
        }

        /* ---------------- CATEGORY 4: VISION PROJECT (ORTHIA) ---------------- */
        .vision-showcase-panel {
          background: rgba(255, 255, 255, 0.58);
          backdrop-filter: blur(20px) saturate(125%);
          -webkit-backdrop-filter: blur(20px) saturate(125%);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: var(--radius-xl);
          padding: 32px 28px;
          box-shadow: var(--shadow);
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .vision-showcase-panel {
            grid-template-columns: 0.85fr 1.15fr 1fr;
            gap: 36px;
          }
        }

        .vision-avatar-container {
          border-radius: 20px;
          overflow: hidden;
          background: #090d16;
          border: 1px solid rgba(var(--violet-rgb), 0.3);
          box-shadow: 0 16px 36px rgba(var(--violet-rgb), 0.15);
          aspect-ratio: 16 / 11;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 20px;
          text-align: center;
        }

        .vision-avatar-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(var(--violet-rgb), 0.35), transparent 70%);
          filter: blur(25px);
        }

        .orthia-logo-title {
          font-size: 1.6rem;
          font-weight: 900;
          letter-spacing: 2px;
          color: #ffffff;
          margin-top: 10px;
        }

        .orthia-logo-sub {
          font-size: 0.72rem;
          color: #94a3b8;
          letter-spacing: 0.6px;
          margin-top: 2px;
        }

        .vision-main-meta {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .vision-tag-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .vision-pill-long {
          font-size: 0.7rem;
          font-weight: 850;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 100px;
          background: rgba(var(--violet-rgb), 0.15);
          color: var(--violet);
          border: 1px solid rgba(var(--violet-rgb), 0.3);
        }

        .vision-pill-sub {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .vision-proj-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -0.4px;
          margin: 0;
        }

        .vision-proj-tagline {
          font-size: 0.92rem;
          font-weight: 750;
          color: var(--violet);
          margin: 0;
        }

        .vision-proj-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        .vision-pillars-box {
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: rgba(255, 255, 255, 0.45);
          padding: 20px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .vision-box-title {
          font-size: 0.78rem;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: var(--text);
          margin: 0;
        }

        .vision-pillars-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .vision-pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--text);
          font-weight: 650;
          line-height: 1.4;
        }

        .vision-arch-note {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-top: 6px;
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
          padding-top: 10px;
        }
      `}</style>

      <div className="projects-page-container">

        {/* ---------------- 1. TOP HEADER & STATS ---------------- */}
        <div className="projects-hero-header">
          <div>
            <span className="project-arch-tag">PROJECT ARCHITECTURE</span>
            <h1 className="projects-main-title">
              Things I've built, building,<br />
              and <span className="accent-word">exploring.</span>
            </h1>
            <p className="projects-hero-sub">
              Real projects. Real learning. Real impact. From full-stack web apps to AI systems and developer tools — here's a collection of things I've built, am currently working on, and plan to explore next.
            </p>

            <div className="proj-stats-row">
              <div className="proj-stat-chip">
                <span className="proj-stat-num">{totalCount}</span>
                <span className="proj-stat-label">🗂 Total</span>
              </div>
              <div className="proj-stat-chip">
                <span className="proj-stat-num">{mainCount}</span>
                <span className="proj-stat-label">⭐ Main</span>
              </div>
              <div className="proj-stat-chip">
                <span className="proj-stat-num">{currentCount}</span>
                <span className="proj-stat-label">🚀 Building</span>
              </div>
              <div className="proj-stat-chip">
                <span className="proj-stat-num">{sideCount}</span>
                <span className="proj-stat-label">📦 Side</span>
              </div>
              <div className="proj-stat-chip">
                <span className="proj-stat-num">1</span>
                <span className="proj-stat-label">🧠 Vision</span>
              </div>
            </div>
          </div>

          {/* Top Right Decorative Desk Visual Card */}
          <div className="proj-desk-visual-card">
            <div className="proj-desk-glow" />
            <div>
              <div className="desk-quote-phrase">Good Projects<br />Better Developers</div>
              <div className="desk-quote-sub">Ideas to Products_</div>
            </div>

            <div className="desk-steps-strip">
              <span className="desk-step-item"><span className="desk-step-dot" /> Build</span>
              <span className="desk-step-item"><span className="desk-step-dot" /> Deploy</span>
              <span className="desk-step-item"><span className="desk-step-dot" /> Iterate</span>
              <span className="desk-step-item"><span className="desk-step-dot" /> Scale</span>
            </div>
          </div>
        </div>

        {/* ---------------- 2. FILTER TABS ---------------- */}
        <div className="projects-filter-bar" role="tablist">
          <button 
            className={`filter-pill-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects ({totalCount})
          </button>
          <button 
            className={`filter-pill-btn ${filter === "main" ? "active" : ""}`}
            onClick={() => setFilter("main")}
          >
            ⭐ Main Projects ({mainCount})
          </button>
          <button 
            className={`filter-pill-btn ${filter === "current" ? "active" : ""}`}
            onClick={() => setFilter("current")}
          >
            🚀 Current / Building ({currentCount})
          </button>
          <button 
            className={`filter-pill-btn ${filter === "side" ? "active" : ""}`}
            onClick={() => setFilter("side")}
          >
            📦 Side Projects ({sideCount})
          </button>
          <button 
            className={`filter-pill-btn ${filter === "vision" ? "active" : ""}`}
            onClick={() => setFilter("vision")}
          >
            🧠 Vision: ORTHIA (1)
          </button>
        </div>

        {/* ---------------- 3. CATEGORY 1: MAIN PROJECTS (4 CARDS) ---------------- */}
        {(filter === "all" || filter === "main") && (
          <div className="cat-section-wrapper">
            <div className="cat-header-row">
              <div className="cat-title-group">
                <h2>⭐ Main Projects ({mainCount})</h2>
                <p>Core applications demonstrating full-stack architecture, clean schema designs, and production engineering.</p>
              </div>
              {filter === "all" && (
                <button className="cat-view-all-link" onClick={() => setFilter("main")}>
                  View all &rarr;
                </button>
              )}
            </div>

            <div className="main-projects-grid-4">
              
              {/* Main Card 1: ANR Book Store */}
              <div className="project-card-outer">
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="browser-mockup-frame">
                    <div className="browser-window-bar">
                      <span className="window-dot dot-red" />
                      <span className="window-dot dot-yellow" />
                      <span className="window-dot dot-green" />
                      <div className="browser-url-pill" />
                    </div>
                    <div className="browser-mockup-body" style={{ background: "#0b0f19" }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#38bdf8", marginBottom: "4px" }}>
                        Discover Your Next Great Read
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px", marginTop: "auto" }}>
                        <div style={{ height: "45px", borderRadius: "4px", background: "linear-gradient(180deg, #1e293b, #0f172a)", border: "1px solid #334155" }} />
                        <div style={{ height: "45px", borderRadius: "4px", background: "linear-gradient(180deg, #1e293b, #0f172a)", border: "1px solid #334155" }} />
                        <div style={{ height: "45px", borderRadius: "4px", background: "linear-gradient(180deg, #1e293b, #0f172a)", border: "1px solid #334155" }} />
                        <div style={{ height: "45px", borderRadius: "4px", background: "linear-gradient(180deg, #1e293b, #0f172a)", border: "1px solid #334155" }} />
                      </div>
                    </div>
                  </div>

                  <div className="proj-meta-tags-row">
                    <span className="proj-num-pill">Main Project #01</span>
                    <span className="proj-category-pill">Full Stack / E-Commerce</span>
                  </div>

                  <h3 className="proj-card-title">ANR Book Store</h3>
                  <p className="proj-card-desc">
                    Full-stack bookstore platform featuring searchable catalog filtering, persistent shopping carts, user authentication, and secure checkout workflows.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="proj-tech-chips-row">
                    <span className="proj-tech-tag">React</span>
                    <span className="proj-tech-tag">Node.js</span>
                    <span className="proj-tech-tag">MongoDB</span>
                    <span className="proj-tech-tag">Express</span>
                  </div>

                  <a 
                    href="https://github.com/anrpvtltd/ANR-Book-Store" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="proj-github-action-btn"
                  >
                    <Github size={13} /> View on GitHub &rarr;
                  </a>
                </div>
              </div>

              {/* Main Card 2: CleanX */}
              <div className="project-card-outer">
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="browser-mockup-frame">
                    <div className="browser-window-bar">
                      <span className="window-dot dot-red" />
                      <span className="window-dot dot-yellow" />
                      <span className="window-dot dot-green" />
                      <div className="browser-url-pill" />
                    </div>
                    <div className="browser-mockup-body" style={{ background: "#0b0f19", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "3px solid #10b981", borderTopColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800, color: "#10b981" }}>
                          0.6
                        </div>
                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#ffffff" }}>CleanX</div>
                          <div style={{ fontSize: "0.62rem", color: "#94a3b8" }}>Redundant build cache purged</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="proj-meta-tags-row">
                    <span className="proj-num-pill">Main Project #02</span>
                    <span className="proj-category-pill">System Tool / Utility</span>
                  </div>

                  <h3 className="proj-card-title">CleanX</h3>
                  <p className="proj-card-desc">
                    High-performance developer cleaner utility designed to search duplicate files, analyze disk usage, and purge redundant build caches safely.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="proj-tech-chips-row">
                    <span className="proj-tech-tag">C++</span>
                    <span className="proj-tech-tag">Node.js</span>
                    <span className="proj-tech-tag">Electron</span>
                    <span className="proj-tech-tag">File System</span>
                  </div>

                  <a 
                    href="https://github.com/anrpvtltd/CleanX" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="proj-github-action-btn"
                  >
                    <Github size={13} /> View on GitHub &rarr;
                  </a>
                </div>
              </div>

              {/* Main Card 3: ANR Pvt Ltd */}
              <div className="project-card-outer">
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="browser-mockup-frame">
                    <div className="browser-window-bar">
                      <span className="window-dot dot-red" />
                      <span className="window-dot dot-yellow" />
                      <span className="window-dot dot-green" />
                      <div className="browser-url-pill" />
                    </div>
                    <div className="browser-mockup-body" style={{ background: "linear-gradient(135deg, #1e3a8a, #0f172a)", justifyContent: "center", padding: "12px" }}>
                      <div style={{ fontSize: "0.72rem", fontWeight: 900, color: "#ffffff", lineHeight: 1.3 }}>
                        Innovative Digital Solutions for a Better Tomorrow
                      </div>
                      <div style={{ fontSize: "0.62rem", color: "#93c5fd", marginTop: "4px" }}>
                        ANR Pvt Ltd Enterprise Hub
                      </div>
                    </div>
                  </div>

                  <div className="proj-meta-tags-row">
                    <span className="proj-num-pill">Main Project #03</span>
                    <span className="proj-category-pill">Enterprise Web Platform</span>
                  </div>

                  <h3 className="proj-card-title">ANR Pvt Ltd</h3>
                  <p className="proj-card-desc">
                    Scalable enterprise web system showcasing modular product lineups, interactive showcase panels, and containerized deployment setups.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="proj-tech-chips-row">
                    <span className="proj-tech-tag">React</span>
                    <span className="proj-tech-tag">Express</span>
                    <span className="proj-tech-tag">Docker</span>
                    <span className="proj-tech-tag">CSS3</span>
                    <span className="proj-tech-tag">Vite</span>
                  </div>

                  <a 
                    href="https://github.com/anrpvtltd/ANR-Pvt-Ltd" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="proj-github-action-btn"
                  >
                    <Github size={13} /> View on GitHub &rarr;
                  </a>
                </div>
              </div>

              {/* Main Card 4: ANR Software Solution */}
              <div className="project-card-outer">
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="browser-mockup-frame">
                    <div className="browser-window-bar">
                      <span className="window-dot dot-red" />
                      <span className="window-dot dot-yellow" />
                      <span className="window-dot dot-green" />
                      <div className="browser-url-pill" />
                    </div>
                    <div className="browser-mockup-body" style={{ background: "#0b0f19", padding: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                        <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#38bdf8" }}>Cockpit Hub</span>
                        <span style={{ fontSize: "0.58rem", color: "#10b981", background: "rgba(16, 185, 129, 0.2)", padding: "2px 4px", borderRadius: "3px" }}>99.9% Uptime</span>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                        <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "4px", borderRadius: "3px", fontSize: "0.58rem", color: "#94a3b8" }}>Active: 24</div>
                        <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "4px", borderRadius: "3px", fontSize: "0.58rem", color: "#94a3b8" }}>Health: OK</div>
                      </div>
                    </div>
                  </div>

                  <div className="proj-meta-tags-row">
                    <span className="proj-num-pill">Main Project #04</span>
                    <span className="proj-category-pill">Operations &amp; Services Hub</span>
                  </div>

                  <h3 className="proj-card-title">ANR Software Solution</h3>
                  <p className="proj-card-desc">
                    Central software management cockpit handling customer ticketing, microservices health logs, and account lifecycle monitoring.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="proj-tech-chips-row">
                    <span className="proj-tech-tag">React</span>
                    <span className="proj-tech-tag">Node.js</span>
                    <span className="proj-tech-tag">Express</span>
                    <span className="proj-tech-tag">MongoDB</span>
                    <span className="proj-tech-tag">WebSockets</span>
                  </div>

                  <a 
                    href="https://github.com/anrpvtltd/ANR-Software-Solution" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="proj-github-action-btn"
                  >
                    <Github size={13} /> View on GitHub &rarr;
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ---------------- 4. CATEGORY 2: CURRENT / BUILDING (3 CARDS) ---------------- */}
        {(filter === "all" || filter === "current") && (
          <div className="cat-section-wrapper">
            <div className="cat-header-row">
              <div className="cat-title-group">
                <h2>🚀 Current / Building Projects ({currentCount})</h2>
                <p>Active projects currently being engineered, researched, and prototyped.</p>
              </div>
              {filter === "all" && (
                <button className="cat-view-all-link" onClick={() => setFilter("current")}>
                  View all &rarr;
                </button>
              )}
            </div>

            <div className="current-projects-grid-3">
              
              {/* Current Card 1: ANR ChatPDF AI Assistant */}
              <div className="project-card-outer">
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="browser-mockup-frame">
                    <div className="browser-window-bar">
                      <span className="window-dot dot-red" />
                      <span className="window-dot dot-yellow" />
                      <span className="window-dot dot-green" />
                      <div className="browser-url-pill" />
                    </div>
                    <div className="browser-mockup-body" style={{ background: "#0c1322", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                      <div style={{ width: "70%", height: "45px", border: "1px dashed rgba(56, 189, 248, 0.4)", borderRadius: "6px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                        <FileText size={14} style={{ color: "#38bdf8" }} />
                        <span style={{ fontSize: "0.6rem", color: "#94a3b8" }}>Upload PDF Document</span>
                      </div>
                    </div>
                  </div>

                  <div className="proj-meta-tags-row">
                    <span className="active-dev-tag">★ Active Development</span>
                    <span className="proj-category-pill">AI / Document Assistant</span>
                  </div>

                  <h3 className="proj-card-title">ANR ChatPDF AI Assistant</h3>
                  <p className="proj-card-desc">
                    Intelligent document conversation assistant enabling semantic PDF search, context extraction, and multi-turn conversational Q&amp;A.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="proj-tech-chips-row">
                    <span className="proj-tech-tag">Next.js</span>
                    <span className="proj-tech-tag">React</span>
                    <span className="proj-tech-tag">Gemini API</span>
                    <span className="proj-tech-tag">Pinecone</span>
                    <span className="proj-tech-tag">LangChain</span>
                  </div>

                  <a 
                    href="https://github.com/ji-avaneesh/pdf-ai-assistant" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="proj-github-action-btn"
                  >
                    <Github size={13} /> GitHub Repository &rarr;
                  </a>
                </div>
              </div>

              {/* Current Card 2: AI Document Q&A System */}
              <div className="project-card-outer">
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="browser-mockup-frame">
                    <div className="browser-window-bar">
                      <span className="window-dot dot-red" />
                      <span className="window-dot dot-yellow" />
                      <span className="window-dot dot-green" />
                      <div className="browser-url-pill" />
                    </div>
                    <div className="browser-mockup-body" style={{ background: "#0c1322", padding: "10px" }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#a78bfa", marginBottom: "4px" }}>
                        FAISS Vector Search Match
                      </div>
                      <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "5px", borderRadius: "4px", fontSize: "0.58rem", color: "#cbd5e1" }}>
                        Q: How does semantic retrieval score segments?<br />
                        A: Cosine similarity across normalized embeddings...
                      </div>
                    </div>
                  </div>

                  <div className="proj-meta-tags-row">
                    <span className="active-dev-tag">★ Active Development</span>
                    <span className="proj-category-pill">RAG / Generative AI</span>
                  </div>

                  <h3 className="proj-card-title">AI Document Q&amp;A System</h3>
                  <p className="proj-card-desc">
                    RAG-driven documents manager enabling PDF upload, vector embeddings via FAISS, semantic segment retrieval, and LLM-powered Q&amp;A.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="proj-tech-chips-row">
                    <span className="proj-tech-tag">React</span>
                    <span className="proj-tech-tag">Vite</span>
                    <span className="proj-tech-tag">Node.js</span>
                    <span className="proj-tech-tag">Express</span>
                    <span className="proj-tech-tag">OpenAI</span>
                    <span className="proj-tech-tag">FAISS</span>
                  </div>

                  <a 
                    href="https://github.com/ji-avaneesh/AI-Document-Q-A-System" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="proj-github-action-btn"
                  >
                    <Github size={13} /> GitHub Repository &rarr;
                  </a>
                </div>
              </div>

              {/* Current Card 3: Aura AI */}
              <div className="project-card-outer">
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="browser-mockup-frame">
                    <div className="browser-window-bar">
                      <span className="window-dot dot-red" />
                      <span className="window-dot dot-yellow" />
                      <span className="window-dot dot-green" />
                      <div className="browser-url-pill" />
                    </div>
                    <div className="browser-mockup-body" style={{ background: "#080c14", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "radial-gradient(circle, rgba(167, 139, 250, 0.4), transparent 70%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#a78bfa" }}>
                          <Cpu size={18} />
                        </div>
                        <span style={{ fontSize: "0.75rem", fontWeight: 900, color: "#ffffff", letterSpacing: "1px" }}>AURA OS</span>
                        <span style={{ fontSize: "0.58rem", color: "#38bdf8" }}>Cognitive Mesh Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="proj-meta-tags-row">
                    <span className="active-dev-tag">★ Active Development</span>
                    <span className="proj-category-pill">Personal AI OS / Agentic AI</span>
                  </div>

                  <h3 className="proj-card-title">Aura AI</h3>
                  <p className="proj-card-desc">
                    Personal AI Life Engine designed as a local-first contextual operating layer coordinating tasks, episodic memory logs, and agentic workflows.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="proj-tech-chips-row">
                    <span className="proj-tech-tag">Node.js</span>
                    <span className="proj-tech-tag">PostgreSQL</span>
                    <span className="proj-tech-tag">Redis</span>
                    <span className="proj-tech-tag">Qdrant</span>
                    <span className="proj-tech-tag">Ollama</span>
                    <span className="proj-tech-tag">Gemini API</span>
                  </div>

                  <a 
                    href="https://github.com/anrpvtltd/Aura-Ai" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="proj-github-action-btn"
                  >
                    <Github size={13} /> GitHub Repository &rarr;
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ---------------- 5. CATEGORY 3: SIDE & PREVIOUS PROJECTS (10 CARDS) ---------------- */}
        {(filter === "all" || filter === "side") && (
          <div className="cat-section-wrapper">
            <div className="cat-header-row">
              <div className="cat-title-group">
                <h2>📦 Side &amp; Previous Projects ({sideCount})</h2>
                <p>Completed internship systems, college software, foundational algorithm libraries, and learning experiments.</p>
              </div>
              {filter === "all" && (
                <button className="cat-view-all-link" onClick={() => setFilter("side")}>
                  View all &rarr;
                </button>
              )}
            </div>

            <div className="side-projects-grid-10">
              {projects.side?.map((proj) => (
                <a 
                  key={proj.id}
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="side-compact-card"
                >
                  <div className="side-card-screen-header">
                    <div className="side-screen-mini-dots">
                      <span className="side-dot-micro" />
                      <span className="side-dot-micro" />
                      <span className="side-dot-micro" />
                    </div>
                    <Terminal size={14} style={{ color: "var(--violet)" }} />
                    <span style={{ fontSize: "0.55rem", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                      {proj.id.replace(/-/g, " ")}
                    </span>
                  </div>

                  <div>
                    <span className="side-card-badge">{proj.badge || proj.category}</span>
                    <h4 className="side-card-title">{proj.title}</h4>
                  </div>

                  <div className="side-card-techs">
                    {proj.tech.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="side-tech-micro">{t}</span>
                    ))}
                    {proj.tech.length > 2 && (
                      <span className="side-tech-micro">+{proj.tech.length - 2}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- 6. CATEGORY 4: VISION PROJECT (1) ---------------- */}
        {(filter === "all" || filter === "vision") && (
          <div className="cat-section-wrapper" style={{ marginBottom: "20px" }}>
            <div className="cat-header-row">
              <div className="cat-title-group">
                <h2>🧠 Vision Project (1)</h2>
                <p>A long-term exploratory research direction into autonomous agentic intelligence and cognitive systems.</p>
              </div>
            </div>

            <div className="vision-showcase-panel">
              
              {/* Left Column: AI Consciousness Artwork */}
              <div className="vision-avatar-container">
                <div className="vision-avatar-glow" />
                <Bot size={48} style={{ color: "#a78bfa", position: "relative", zIndex: 1 }} />
                <div className="orthia-logo-title" style={{ position: "relative", zIndex: 1 }}>ORTHIA</div>
                <div className="orthia-logo-sub" style={{ position: "relative", zIndex: 1 }}>A more intelligent tomorrow</div>
              </div>

              {/* Center Column: Vision Details */}
              <div className="vision-main-meta">
                <div className="vision-tag-row">
                  <span className="vision-pill-long">Long-Term Vision</span>
                  <span className="vision-pill-sub">RESEARCH &amp; PRODUCT ARCHITECTURE</span>
                </div>

                <h3 className="vision-proj-title">{projects.vision.title}</h3>
                <h4 className="vision-proj-tagline">{projects.vision.tagline}</h4>

                <p className="vision-proj-desc">
                  {projects.vision.purpose}
                </p>
              </div>

              {/* Right Column: Key Exploratory Pillars & Architecture */}
              <div className="vision-pillars-box">
                <h5 className="vision-box-title">Key Exploratory Pillars</h5>
                <ul className="vision-pillars-list">
                  {projects.vision.majorFeatures?.map((feature, idx) => (
                    <li key={idx} className="vision-pillar-item">
                      <span style={{ color: "var(--violet)" }}>🔺</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="vision-arch-note">
                  <strong>Planned Technical Architecture:</strong><br />
                  {projects.vision.futureArchitecture}
                  <div style={{ marginTop: "6px", fontStyle: "italic", fontSize: "0.72rem", color: "var(--violet)" }}>
                    ✦ {projects.vision.note}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </>
  );
}
