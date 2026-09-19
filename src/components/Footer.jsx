import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUp, Github, Linkedin, Twitter, Youtube, Link2, 
  Mail, Phone, MapPin, Copy, Check, Map, 
  Home, User, Folder, Code2, Briefcase, GraduationCap, 
  Award, Brain, Database, Lightbulb, ShieldCheck, 
  ChevronRight, Sparkles 
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  const [copiedField, setCopiedField] = useState(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const navLinks = [
    { path: "/", label: "Home", icon: <Home size={13} /> },
    { path: "/about", label: "About", icon: <User size={13} /> },
    { path: "/projects", label: "Projects", icon: <Folder size={13} /> },
    { path: "/skills", label: "Skills", icon: <Code2 size={13} /> },
    { path: "/experience", label: "Experience", icon: <Briefcase size={13} /> },
    { path: "/education", label: "Education", icon: <GraduationCap size={13} /> },
    { path: "/certifications", label: "Certifications", icon: <Award size={13} /> },
    { path: "/contact", label: "Contact", icon: <Mail size={13} /> }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .footer-wrapper {
          padding: 60px 24px 36px;
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* Large Pearl Glass Floating Capsule */
        .footer-capsule {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 28px;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          padding: 48px 44px 26px;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 1220px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.8fr 1.15fr 1.25fr;
          gap: 36px;
          margin-bottom: 40px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-col-title {
          font-size: 0.78rem;
          font-weight: 850;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin: 0 0 20px 0;
          font-family: 'Outfit', sans-serif;
        }

        /* ── Col 1: Brand & Socials ── */
        .footer-logo {
          font-weight: 900;
          font-size: 2.2rem;
          letter-spacing: -0.5px;
          color: #0f172a;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          line-height: 1;
          margin-bottom: 8px;
          display: inline-block;
        }

        .footer-logo-dot {
          color: #7c3aed;
        }

        .footer-brand-title {
          font-size: 1.05rem;
          font-weight: 850;
          color: #0f172a;
          line-height: 1.25;
          margin-bottom: 12px;
          font-family: 'Outfit', sans-serif;
        }

        .footer-brand-sub {
          color: #64748b;
          font-weight: 700;
          font-size: 0.9rem;
          display: block;
        }

        .footer-brand-desc {
          font-size: 0.85rem;
          line-height: 1.55;
          color: #64748b;
          margin: 0 0 20px 0;
          max-width: 250px;
        }

        .footer-socials-row {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          color: #475569;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          text-decoration: none;
        }

        .footer-social-btn:hover {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-2px);
        }

        .footer-brand-script {
          font-family: 'Caveat', cursive;
          font-size: 1.45rem;
          color: #4f46e5;
          font-weight: 700;
          transform: rotate(-3deg);
          line-height: 1.2;
          display: inline-block;
          position: relative;
        }

        .footer-brand-script::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 90%;
          height: 2px;
          background: linear-gradient(90deg, #4f46e5, transparent);
          border-radius: 2px;
        }

        /* ── Col 2: Navigation ── */
        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .footer-nav-link {
          color: #475569;
          text-decoration: none;
          font-size: 0.86rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          transition: all 0.2s ease;
        }

        .footer-nav-link:hover {
          color: #4f46e5;
          transform: translateX(3px);
        }

        .footer-nav-icon {
          color: #94a3b8;
          display: flex;
          align-items: center;
        }

        .footer-nav-link:hover .footer-nav-icon {
          color: #4f46e5;
        }

        /* ── Col 3: What I Do ── */
        .footer-service-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }

        .footer-service-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-service-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .footer-service-title {
          font-size: 0.86rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          font-family: 'Outfit', sans-serif;
        }

        .footer-service-desc {
          font-size: 0.74rem;
          color: #64748b;
          line-height: 1.25;
        }

        .footer-ideas-quote {
          font-family: 'Caveat', cursive;
          font-size: 1.35rem;
          color: #0284c7;
          font-weight: 700;
          line-height: 1.25;
          position: relative;
          display: inline-block;
        }

        .footer-ideas-quote::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 80%;
          height: 2px;
          background: linear-gradient(90deg, #0284c7, transparent);
          border-radius: 2px;
        }

        /* ── Col 4: Let's Connect ── */
        .footer-connect-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 14px;
        }

        .footer-connect-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 12px;
          padding: 9px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .footer-connect-left {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .footer-connect-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid;
        }

        .footer-connect-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748b;
          line-height: 1;
        }

        .footer-connect-val {
          font-size: 0.84rem;
          font-weight: 750;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .footer-copy-btn {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(241, 245, 249, 0.8);
          border: 1px solid rgba(226, 232, 240, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          position: relative;
        }

        .footer-copy-btn:hover {
          background: #0284c7;
          border-color: #0284c7;
          color: #ffffff;
        }

        .footer-tooltip {
          position: absolute;
          top: -24px;
          right: 0;
          background: #0f172a;
          color: #ffffff;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.65rem;
          font-weight: 700;
          white-space: nowrap;
          pointer-events: none;
        }

        .footer-avail-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 14px;
          border-radius: 100px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.28);
          color: #059669;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-decoration: none;
          transition: all 0.2s ease;
          margin-bottom: 14px;
        }

        .footer-avail-pill:hover {
          background: rgba(16, 185, 129, 0.14);
          transform: translateY(-1px);
        }

        .footer-avail-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .avail-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseHeart 1.8s infinite;
        }

        @keyframes pulseHeart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }

        /* Noida City Graphic Area in Footer */
        .footer-skyline-graphic {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 6px;
          padding: 10px 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(241, 245, 249, 0.6) 0%, rgba(226, 232, 240, 0.6) 100%);
          border: 1px dashed rgba(203, 213, 225, 0.8);
        }

        .skyline-label {
          font-size: 0.74rem;
          font-weight: 850;
          color: #94a3b8;
          letter-spacing: 1.5px;
        }

        .skyline-script {
          font-family: 'Caveat', cursive;
          font-size: 1.15rem;
          color: #64748b;
          font-weight: 700;
          line-height: 1.1;
          text-align: right;
        }

        /* ── Footer Bottom Row ── */
        .footer-bottom-row {
          padding-top: 22px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #64748b;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-bottom-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-bottom-center {
          color: #475569;
          font-weight: 600;
        }

        .footer-bottom-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .back-to-top-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .back-to-top-btn:hover {
          background: #0f172a;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ══════════════════════════════════════════════════════
           MOBILE-FRIENDLY FIRST RESPONSIVE DESIGN
        ══════════════════════════════════════════════════════ */

        @media (max-width: 1080px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 640px) {
          .footer-wrapper {
            padding: 40px 14px 24px;
          }

          .footer-capsule {
            padding: 30px 20px 20px;
            border-radius: 20px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .footer-bottom-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .footer-bottom-right {
            align-self: flex-end;
          }
        }
      `}</style>

      <footer className="footer-wrapper">
        <div className="footer-capsule">
          <div className="footer-grid">

            {/* ── COL 1: AK. Brand & Socials ── */}
            <div className="footer-col">
              <Link to="/" className="footer-logo">
                AK<span className="footer-logo-dot">.</span>
              </Link>
              <div className="footer-brand-title">
                Full Stack Developer
                <span className="footer-brand-sub">&amp; AI Product Builder</span>
              </div>
              <p className="footer-brand-desc">
                Building useful digital products with clean engineering and curiosity.
              </p>

              <div className="footer-socials-row">
                <a 
                  href={siteConfig.socials.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn" 
                  aria-label="GitHub"
                >
                  <Github size={15} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn" 
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn" 
                  aria-label="Twitter"
                >
                  <Twitter size={15} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn" 
                  aria-label="YouTube"
                >
                  <Youtube size={15} />
                </a>
                <a 
                  href={siteConfig.portfolioUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-social-btn" 
                  aria-label="Portfolio"
                >
                  <Link2 size={15} />
                </a>
              </div>

              <div>
                <span className="footer-brand-script">Good Code Better Tomorrow</span>
              </div>
            </div>

            {/* ── COL 2: Navigation ── */}
            <div className="footer-col">
              <h4 className="footer-col-title">NAVIGATION</h4>
              <ul className="footer-nav-list">
                {navLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="footer-nav-link">
                      <span className="footer-nav-icon">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── COL 3: What I Do ── */}
            <div className="footer-col">
              <h4 className="footer-col-title">WHAT I DO</h4>
              <div className="footer-service-list">
                {/* 1 */}
                <div className="footer-service-item">
                  <div 
                    className="footer-service-icon-box"
                    style={{ background: "rgba(37, 99, 235, 0.08)", borderColor: "rgba(37, 99, 235, 0.3)", color: "#2563eb" }}
                  >
                    <Code2 size={15} />
                  </div>
                  <div>
                    <div className="footer-service-title">Full Stack Development</div>
                    <div className="footer-service-desc">Modern web applications</div>
                  </div>
                </div>

                {/* 2 */}
                <div className="footer-service-item">
                  <div 
                    className="footer-service-icon-box"
                    style={{ background: "rgba(147, 51, 234, 0.08)", borderColor: "rgba(147, 51, 234, 0.3)", color: "#9333ea" }}
                  >
                    <Brain size={15} />
                  </div>
                  <div>
                    <div className="footer-service-title">AI / GenAI Solutions</div>
                    <div className="footer-service-desc">Intelligent products and automation</div>
                  </div>
                </div>

                {/* 3 */}
                <div className="footer-service-item">
                  <div 
                    className="footer-service-icon-box"
                    style={{ background: "rgba(79, 70, 229, 0.08)", borderColor: "rgba(79, 70, 229, 0.3)", color: "#4f46e5" }}
                  >
                    <Database size={15} />
                  </div>
                  <div>
                    <div className="footer-service-title">Backend &amp; Systems</div>
                    <div className="footer-service-desc">Scalable application architecture</div>
                  </div>
                </div>

                {/* 4 */}
                <div className="footer-service-item">
                  <div 
                    className="footer-service-icon-box"
                    style={{ background: "rgba(217, 119, 6, 0.08)", borderColor: "rgba(217, 119, 6, 0.3)", color: "#d97706" }}
                  >
                    <Lightbulb size={15} />
                  </div>
                  <div>
                    <div className="footer-service-title">Product Engineering</div>
                    <div className="footer-service-desc">From idea to working product</div>
                  </div>
                </div>
              </div>

              <div>
                <span className="footer-ideas-quote">“Turning ideas into real-world solutions.”</span>
              </div>
            </div>

            {/* ── COL 4: Let's Connect ── */}
            <div className="footer-col">
              <h4 className="footer-col-title">LET'S CONNECT</h4>
              <div className="footer-connect-list">
                {/* Email */}
                <div className="footer-connect-card">
                  <div className="footer-connect-left">
                    <div 
                      className="footer-connect-icon-box"
                      style={{ background: "rgba(2, 132, 199, 0.08)", borderColor: "rgba(2, 132, 199, 0.3)", color: "#0284c7" }}
                    >
                      <Mail size={15} />
                    </div>
                    <div>
                      <div className="footer-connect-label">Email Me</div>
                      <div className="footer-connect-val">{siteConfig.email}</div>
                    </div>
                  </div>
                  <button 
                    className="footer-copy-btn"
                    onClick={() => handleCopy(siteConfig.email, "email")}
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedField === "email" ? <Check size={13} style={{ color: "#10b981" }} /> : <Copy size={13} />}
                    {copiedField === "email" && <span className="footer-tooltip">Copied!</span>}
                  </button>
                </div>

                {/* Phone */}
                <div className="footer-connect-card">
                  <div className="footer-connect-left">
                    <div 
                      className="footer-connect-icon-box"
                      style={{ background: "rgba(16, 185, 129, 0.08)", borderColor: "rgba(16, 185, 129, 0.3)", color: "#059669" }}
                    >
                      <Phone size={15} />
                    </div>
                    <div>
                      <div className="footer-connect-label">Call Me</div>
                      <div className="footer-connect-val">{siteConfig.phone}</div>
                    </div>
                  </div>
                  <button 
                    className="footer-copy-btn"
                    onClick={() => handleCopy(siteConfig.phone, "phone")}
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedField === "phone" ? <Check size={13} style={{ color: "#10b981" }} /> : <Copy size={13} />}
                    {copiedField === "phone" && <span className="footer-tooltip">Copied!</span>}
                  </button>
                </div>

                {/* Location */}
                <div className="footer-connect-card">
                  <div className="footer-connect-left">
                    <div 
                      className="footer-connect-icon-box"
                      style={{ background: "rgba(168, 85, 247, 0.08)", borderColor: "rgba(168, 85, 247, 0.3)", color: "#7e22ce" }}
                    >
                      <MapPin size={15} />
                    </div>
                    <div>
                      <div className="footer-connect-label">Location</div>
                      <div className="footer-connect-val">{siteConfig.location}</div>
                    </div>
                  </div>
                  <button 
                    className="footer-copy-btn"
                    onClick={() => window.open("https://maps.google.com/?q=Noida,Uttar+Pradesh", "_blank")}
                    title="View Location"
                    aria-label="View Location"
                  >
                    <Map size={13} />
                  </button>
                </div>
              </div>

              {/* Green Availability Pill */}
              <Link to="/contact" className="footer-avail-pill">
                <div className="footer-avail-left">
                  <span className="avail-pulse-dot" />
                  <span>AVAILABLE FOR OPPORTUNITIES</span>
                </div>
                <ChevronRight size={14} />
              </Link>

              {/* Noida Skyline Graphic */}
              <div className="footer-skyline-graphic">
                <span className="skyline-label">NOIDA</span>
                <span className="skyline-script">
                  Build<br />
                  Learn<br />
                  Grow<br />
                  Repeat
                </span>
              </div>
            </div>

          </div>

          {/* ── Footer Bottom Row ── */}
          <div className="footer-bottom-row">
            <div className="footer-bottom-left">
              <ShieldCheck size={15} style={{ color: "#4f46e5" }} />
              <span>Crafting code. Solving problems. Building the future.</span>
            </div>

            <div className="footer-bottom-center">
              © 2026 {siteConfig.name}. All rights reserved.
            </div>

            <div className="footer-bottom-right">
              <Sparkles size={14} style={{ color: "#f59e0b" }} />
              <span>Back to top</span>
              <button 
                className="back-to-top-btn"
                onClick={handleScrollTop}
                aria-label="Scroll to top"
              >
                <ArrowUp size={13} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
