import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, User, Folder, Code2, Briefcase, 
  GraduationCap, Award, Mail, Download, Menu, X 
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: <Home size={14} /> },
    { path: "/about", label: "About", icon: <User size={14} /> },
    { path: "/projects", label: "Projects", icon: <Folder size={14} /> },
    { path: "/skills", label: "Skills", icon: <Code2 size={14} /> },
    { path: "/experience", label: "Experience", icon: <Briefcase size={14} /> },
    { path: "/education", label: "Education", icon: <GraduationCap size={14} /> },
    { path: "/certifications", label: "Certifications", icon: <Award size={14} /> },
    { path: "/contact", label: "Contact", icon: <Mail size={14} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 32px);
          max-width: 1240px;
          height: 64px;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 100px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, top 0.25s ease;
        }

        .navbar-scrolled {
          top: 10px;
          background: rgba(255, 255, 255, 0.88);
          border-color: rgba(99, 102, 241, 0.2);
          box-shadow: 0 14px 40px rgba(15, 23, 42, 0.09);
        }

        .navbar-container {
          height: 100%;
          width: 100%;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        /* ── Logo Area ── */
        .navbar-logo-area {
          display: flex;
          align-items: center;
        }

        .logo {
          font-weight: 900;
          font-size: 1.45rem;
          letter-spacing: -0.5px;
          cursor: pointer;
          color: #0f172a;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          display: inline-flex;
          align-items: baseline;
        }

        .logo-dot {
          color: #7c3aed;
          font-size: 1.6rem;
          line-height: 1;
        }

        .logo-divider {
          height: 22px;
          width: 1px;
          background: rgba(226, 232, 240, 0.9);
          margin-left: 18px;
          margin-right: 8px;
        }

        /* ── Center Nav Links ── */
        .nav-links-desktop {
          display: none;
          gap: 6px;
          align-items: center;
        }

        @media (min-width: 1080px) {
          .nav-links-desktop {
            display: flex;
          }
        }

        .nav-link {
          color: #64748b;
          text-decoration: none;
          font-size: 0.86rem;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          padding: 7px 12px;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease, background 0.2s ease;
          font-family: 'Outfit', sans-serif;
        }

        .nav-link:hover {
          color: #0f172a;
          background: rgba(0, 0, 0, 0.03);
        }

        .nav-link-active {
          color: #4f46e5 !important;
          background: rgba(99, 102, 241, 0.08) !important;
          font-weight: 750;
        }

        .nav-link-icon {
          display: flex;
          align-items: center;
          opacity: 0.85;
        }

        .nav-link-active .nav-link-icon {
          color: #4f46e5;
          opacity: 1;
        }

        .active-dot {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #6366f1;
          box-shadow: 0 0 8px #6366f1;
        }

        /* ── Download CV Action Button ── */
        .navbar-actions {
          display: none;
          align-items: center;
        }

        @media (min-width: 1080px) {
          .navbar-actions {
            display: flex;
          }
        }

        .download-cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 100px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: #ffffff;
          font-size: 0.84rem;
          font-weight: 750;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.2px;
        }

        .download-cv-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(99, 102, 241, 0.45);
        }

        .download-cv-btn:active {
          transform: translateY(1px);
        }

        /* ── Hamburger ── */
        .hamburger {
          background: none;
          border: none;
          color: #0f172a;
          cursor: pointer;
          display: block;
          padding: 6px;
        }

        @media (min-width: 1080px) {
          .hamburger {
            display: none;
          }
        }

        .mobile-menu {
          position: fixed;
          top: 86px;
          left: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 999;
        }

        .mobile-nav-link {
          color: #475569;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 650;
          cursor: pointer;
          padding: 10px 14px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: #4f46e5;
          background: rgba(99, 102, 241, 0.08);
        }
      `}</style>

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo-area">
            <Link to="/" className="logo">
              AK<span className="logo-dot">.</span>
            </Link>
            <div className="logo-divider" />
          </div>

          <nav className="nav-links-desktop">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                <span className="nav-link-icon">{link.icon}</span>
                <span>{link.label}</span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeDot"
                    className="active-dot"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <button 
              className="download-cv-btn"
              onClick={() => window.open(siteConfig.resume, "_blank")}
            >
              <Download size={14} />
              <span>Download CV</span>
            </button>
          </div>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mobile-menu"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
                >
                  <span style={{ opacity: 0.85 }}>{link.icon}</span>
                  <span>{link.label}</span>
                </NavLink>
              ))}
              <button
                className="download-cv-btn"
                style={{ width: "100%", justifyContent: "center", marginTop: "10px", padding: "12px" }}
                onClick={() => window.open(siteConfig.resume, "_blank")}
              >
                <Download size={15} />
                <span>Download CV</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
