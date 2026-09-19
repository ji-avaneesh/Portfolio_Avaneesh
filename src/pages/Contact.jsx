import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Github, Copy, Check, 
  ExternalLink, Map, Send, Briefcase, Laptop, 
  Users, MessageSquare, ChevronRight, Sparkles, Heart 
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copiedField, setCopiedField] = useState(null);
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleInquirySelect = (topic) => {
    setFormData((prev) => ({
      ...prev,
      message: `Hi Avaneesh, I would like to connect regarding ${topic}. `
    }));
    const textarea = document.getElementById("contact-message-input");
    if (textarea) {
      textarea.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setStatus("sending");
      setTimeout(() => {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
          `Hello Avaneesh,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
        );
        window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setFormData({ name: "", email: "", message: "" });
        }, 3500);
      }, 700);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .contact-page-container {
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
        .contact-hero-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 50px;
        }

        .contact-hero-left {
          flex: 1;
          max-width: 680px;
        }

        .contact-arch-tag {
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

        .contact-main-title {
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.8px;
          color: #0f172a;
          margin-bottom: 14px;
          font-family: 'Outfit', sans-serif;
        }

        .contact-main-title .accent-word {
          color: #0284c7;
          position: relative;
        }

        .cursor-blink {
          display: inline-block;
          font-weight: 400;
          color: #38bdf8;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .contact-hero-sub {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #64748b;
          margin: 0;
        }

        /* ── Top Right Desk Visual Card ── */
        .contact-desk-card {
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

        .contact-desk-card::before {
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

        .contact-desk-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .contact-noida-pill {
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

        .contact-neon-heart {
          color: #f43f5e;
          animation: pulseHeart 1.8s infinite;
        }

        @keyframes pulseHeart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }

        .contact-script-phrase {
          font-family: 'Caveat', cursive;
          font-size: 1.35rem;
          color: #e2e8f0;
          font-weight: 700;
          transform: rotate(-3deg);
          letter-spacing: 0.5px;
        }

        .contact-desk-content-row {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        /* Stack of 4 Books */
        .contact-books-stack {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 120px;
        }

        .contact-book-spine {
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

        .contact-book-1 {
          background: #1e293b;
          border-left-color: #38bdf8;
          color: #93c5fd;
        }

        .contact-book-2 {
          background: #1e293b;
          border-left-color: #a855f7;
          color: #c084fc;
        }

        .contact-book-3 {
          background: #1e293b;
          border-left-color: #38bdf8;
          color: #93c5fd;
        }

        .contact-book-4 {
          background: #1e293b;
          border-left-color: #34d399;
          color: #6ee7b7;
        }

        /* Laptop Mockup */
        .contact-laptop-mockup {
          flex: 1;
          background: #030712;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 10px;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8), 0 0 15px rgba(56, 189, 248, 0.12);
        }

        .contact-laptop-dots {
          display: flex;
          gap: 4px;
          margin-bottom: 6px;
        }

        .contact-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .contact-terminal-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          line-height: 1.35;
          color: #94a3b8;
        }

        .contact-terminal-text span.active-term {
          color: #38bdf8;
          font-weight: 600;
        }

        /* Mug Footer */
        .contact-desk-mug-footer {
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.74rem;
          color: #94a3b8;
        }

        .contact-desk-mug-text {
          font-size: 0.72rem;
          color: #cbd5e1;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        /* ── Main Upper Contact Grid ── */
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1.05fr 1.35fr;
          gap: 32px;
          margin-bottom: 65px;
          align-items: stretch;
        }

        /* Left Column: Contact Cards & Location */
        .contact-left-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: space-between;
        }

        .contact-items-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-item-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 16px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          box-sizing: border-box;
        }

        .contact-item-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.07);
          border-color: rgba(56, 189, 248, 0.4);
        }

        .contact-item-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-item-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          border: 1px solid;
        }

        .contact-item-label {
          font-size: 0.82rem;
          color: #64748b;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .contact-item-val {
          font-size: 0.98rem;
          font-weight: 750;
          color: #0f172a;
          word-break: break-all;
          font-family: 'Outfit', sans-serif;
        }

        .contact-action-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(241, 245, 249, 0.8);
          border: 1px solid rgba(226, 232, 240, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          position: relative;
        }

        .contact-action-btn:hover {
          background: #0284c7;
          border-color: #0284c7;
          color: #ffffff;
        }

        .copied-tooltip {
          position: absolute;
          top: -28px;
          right: 0;
          background: #0f172a;
          color: #ffffff;
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 700;
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        /* Location Highlight Card with Constellation & Quote */
        .contact-loc-quote-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 16px;
          padding: 20px 22px;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.03);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 4px;
        }

        .contact-map-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 12px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #0284c7;
        }

        .contact-quote-bubble {
          text-align: right;
          flex: 1;
        }

        .contact-quote-text {
          font-family: 'Caveat', cursive;
          font-size: 1.45rem;
          font-weight: 700;
          color: #0284c7;
          line-height: 1.25;
          margin: 0;
        }

        .contact-quote-sub {
          font-size: 0.78rem;
          color: #64748b;
          margin-top: 4px;
          font-weight: 600;
        }

        /* ── Right Column: Send a Message Form ── */
        .contact-form-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 20px;
          padding: 32px 34px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .contact-form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .contact-form-title {
          font-size: 1.35rem;
          font-weight: 850;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          font-family: 'Outfit', sans-serif;
        }

        .contact-reply-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: #059669;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 4px 10px;
          border-radius: 100px;
        }

        .reply-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseHeart 1.8s infinite;
        }

        .contact-form-fields {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact-field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-field-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #334155;
        }

        .contact-input-box {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          font-size: 0.92rem;
          color: #0f172a;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }

        .contact-input-box:focus {
          outline: none;
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.12);
        }

        .contact-textarea-wrapper {
          position: relative;
        }

        .contact-textarea {
          width: 100%;
          min-height: 120px;
          padding: 12px 14px 28px 14px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          font-size: 0.92rem;
          color: #0f172a;
          font-family: inherit;
          resize: vertical;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .contact-textarea:focus {
          outline: none;
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.12);
        }

        .contact-char-counter {
          position: absolute;
          bottom: 10px;
          right: 14px;
          font-size: 0.72rem;
          color: #94a3b8;
          font-weight: 600;
          pointer-events: none;
        }

        .contact-submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0284c7 0%, #7e22ce 100%);
          border: none;
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 800;
          letter-spacing: 0.4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          margin-top: 6px;
        }

        .contact-submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.35);
        }

        .contact-submit-btn:active {
          transform: translateY(1px);
        }

        .form-feedback-alert {
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          text-align: center;
          margin-top: 10px;
        }

        .form-feedback-success {
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .form-feedback-error {
          background: rgba(239, 68, 68, 0.12);
          color: #dc2626;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        /* ── Bottom Inquiry Types Section ── */
        .contact-inquiry-section {
          margin-top: 20px;
        }

        .inquiry-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 24px;
        }

        .inquiry-tag {
          font-size: 0.74rem;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .inquiry-main-title {
          font-size: 1.85rem;
          font-weight: 850;
          color: #0f172a;
          margin: 0;
          font-family: 'Outfit', sans-serif;
        }

        .inquiry-main-title .accent-word {
          color: #0284c7;
        }

        .inquiry-script-note {
          font-family: 'Caveat', cursive;
          font-size: 1.35rem;
          font-weight: 700;
          color: #64748b;
          transform: rotate(-2deg);
        }

        .inquiry-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .inquiry-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 18px;
          padding: 24px 20px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.03);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          box-sizing: border-box;
        }

        .inquiry-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.07);
          border-color: rgba(56, 189, 248, 0.4);
        }

        .inquiry-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .inquiry-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
        }

        .inquiry-arrow {
          color: #94a3b8;
          transition: transform 0.2s ease;
        }

        .inquiry-card:hover .inquiry-arrow {
          transform: translateX(3px);
          color: #0284c7;
        }

        .inquiry-title {
          font-size: 1.08rem;
          font-weight: 850;
          color: #0f172a;
          margin: 0 0 8px 0;
          font-family: 'Outfit', sans-serif;
        }

        .inquiry-desc {
          font-size: 0.86rem;
          color: #475569;
          line-height: 1.5;
          margin: 0 0 16px 0;
          flex: 1;
        }

        .inquiry-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .inquiry-tag-pill {
          padding: 3px 9px;
          border-radius: 6px;
          background: rgba(241, 245, 249, 0.8);
          border: 1px solid rgba(226, 232, 240, 0.9);
          font-size: 0.74rem;
          font-weight: 600;
          color: #475569;
        }

        /* ══════════════════════════════════════════════════════
           MOBILE-FRIENDLY FIRST RESPONSIVE DESIGN
        ══════════════════════════════════════════════════════ */

        @media (max-width: 1040px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .inquiry-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }

        @media (max-width: 900px) {
          .contact-hero-header {
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
          }

          .contact-desk-card {
            width: 100%;
          }

          .contact-main-title {
            font-size: 2.2rem;
          }

          .inquiry-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }

        @media (max-width: 640px) {
          .contact-page-container {
            padding-top: 105px;
            padding-bottom: 60px;
            padding-left: 14px;
            padding-right: 14px;
          }

          .contact-main-title {
            font-size: 1.85rem;
          }

          .contact-hero-sub {
            font-size: 0.92rem;
          }

          .contact-form-card {
            padding: 22px 18px;
          }

          .contact-input-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .inquiry-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .contact-loc-quote-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }

          .contact-quote-bubble {
            text-align: left;
          }

          .contact-item-val {
            font-size: 0.88rem;
          }
        }
      `}</style>

      <div className="contact-page-container">

        {/* ── TOP HERO HEADER ── */}
        <div className="contact-hero-header">
          <div className="contact-hero-left">
            <span className="contact-arch-tag">
              <Sparkles size={13} style={{ color: "#0284c7" }} /> LET'S CONNECT
            </span>
            <h1 className="contact-main-title">
              Have an idea, opportunity<br />
              or <span className="accent-word">project?</span><span className="cursor-blink">|</span>
            </h1>
            <p className="contact-hero-sub">
              Have an opportunity, product idea, freelance requirement or simply want to discuss technology? I'd be happy to connect.
            </p>
          </div>

          {/* ── TOP RIGHT DESK VISUAL CARD ── */}
          <div className="contact-desk-card">
            <div className="contact-desk-top-bar">
              <span className="contact-noida-pill">
                NOIDA <Heart size={10} className="contact-neon-heart" fill="#f43f5e" />
              </span>
              <span className="contact-script-phrase">Build Network Create Opportunities</span>
            </div>

            <div className="contact-desk-content-row">
              {/* Stack of 4 Books */}
              <div className="contact-books-stack">
                <div className="contact-book-spine contact-book-1">Ideas</div>
                <div className="contact-book-spine contact-book-2">Code</div>
                <div className="contact-book-spine contact-book-3">Collaboration</div>
                <div className="contact-book-spine contact-book-4">Impact</div>
              </div>

              {/* Laptop Screen */}
              <div className="contact-laptop-mockup">
                <div className="contact-laptop-dots">
                  <span className="contact-dot" style={{ background: "#ef4444" }} />
                  <span className="contact-dot" style={{ background: "#f59e0b" }} />
                  <span className="contact-dot" style={{ background: "#10b981" }} />
                </div>
                <div className="contact-terminal-text">
                  <div>Good</div>
                  <div>Ideas</div>
                  <div>Great</div>
                  <div className="active-term">People _</div>
                </div>
              </div>
            </div>

            <div className="contact-desk-mug-footer">
              <span className="contact-desk-mug-text">☕ Same Process Bigger Goals</span>
              <span style={{ fontSize: "0.68rem", color: "#64748b" }}>Noida Desk • 2026</span>
            </div>
          </div>
        </div>

        {/* ── MAIN UPPER GRID: CONTACT METHODS VS SEND A MESSAGE ── */}
        <div className="contact-main-grid">

          {/* ── LEFT COLUMN: CONTACT DETAILS & LOCATION ── */}
          <div className="contact-left-col">
            <div className="contact-items-stack">

              {/* 1. Email Me */}
              <div className="contact-item-card">
                <div className="contact-item-left">
                  <div 
                    className="contact-item-icon-box"
                    style={{ background: "rgba(2, 132, 199, 0.1)", borderColor: "rgba(2, 132, 199, 0.3)", color: "#0284c7" }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="contact-item-label">Email Me</div>
                    <div className="contact-item-val">{siteConfig.email}</div>
                  </div>
                </div>
                <button 
                  className="contact-action-btn"
                  onClick={() => handleCopy(siteConfig.email, "email")}
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedField === "email" ? <Check size={16} style={{ color: "#10b981" }} /> : <Copy size={16} />}
                  {copiedField === "email" && <span className="copied-tooltip">Copied!</span>}
                </button>
              </div>

              {/* 2. Call Me */}
              <div className="contact-item-card">
                <div className="contact-item-left">
                  <div 
                    className="contact-item-icon-box"
                    style={{ background: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.3)", color: "#059669" }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="contact-item-label">Call Me</div>
                    <div className="contact-item-val">{siteConfig.phone}</div>
                  </div>
                </div>
                <button 
                  className="contact-action-btn"
                  onClick={() => handleCopy(siteConfig.phone, "phone")}
                  title="Copy Phone"
                  aria-label="Copy Phone"
                >
                  {copiedField === "phone" ? <Check size={16} style={{ color: "#10b981" }} /> : <Copy size={16} />}
                  {copiedField === "phone" && <span className="copied-tooltip">Copied!</span>}
                </button>
              </div>

              {/* 3. Location */}
              <div className="contact-item-card">
                <div className="contact-item-left">
                  <div 
                    className="contact-item-icon-box"
                    style={{ background: "rgba(168, 85, 247, 0.1)", borderColor: "rgba(168, 85, 247, 0.3)", color: "#7e22ce" }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-val">{siteConfig.location}</div>
                  </div>
                </div>
                <button 
                  className="contact-action-btn"
                  onClick={() => window.open("https://maps.google.com/?q=Noida,Uttar+Pradesh", "_blank")}
                  title="View on Maps"
                  aria-label="View on Maps"
                >
                  <Map size={16} />
                </button>
              </div>

              {/* 4. GitHub */}
              <div className="contact-item-card">
                <div className="contact-item-left">
                  <div 
                    className="contact-item-icon-box"
                    style={{ background: "rgba(15, 23, 42, 0.1)", borderColor: "rgba(15, 23, 42, 0.3)", color: "#0f172a" }}
                  >
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="contact-item-label">GitHub</div>
                    <div className="contact-item-val">{siteConfig.socials.github}</div>
                  </div>
                </div>
                <button 
                  className="contact-action-btn"
                  onClick={() => window.open(siteConfig.socials.github, "_blank")}
                  title="Open GitHub"
                  aria-label="Open GitHub"
                >
                  <ExternalLink size={16} />
                </button>
              </div>

            </div>

            {/* Location & Inspiration Callout */}
            <div className="contact-loc-quote-card">
              <div className="contact-map-badge">
                <MapPin size={18} />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0f172a" }}>Noida</div>
                  <div style={{ fontSize: "0.74rem", color: "#64748b" }}>Uttar Pradesh</div>
                </div>
              </div>

              <div className="contact-quote-bubble">
                <p className="contact-quote-text">
                  “Great conversations lead to greater opportunities.”
                </p>
                <div className="contact-quote-sub">Let's build something amazing.</div>
              </div>
            </div>

          </div>


          {/* ── RIGHT COLUMN: SEND A MESSAGE FORM ── */}
          <div className="contact-form-card">
            <div className="contact-form-header">
              <h2 className="contact-form-title">
                <Send size={18} style={{ color: "#0284c7" }} /> Send a Message
              </h2>
              <span className="contact-reply-status">
                <span className="reply-dot" /> I usually reply within 24 hours
              </span>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-fields">
              <div className="contact-input-row">
                <div className="contact-field-group">
                  <label className="contact-field-label" htmlFor="contact-name">Your Name</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    className="contact-input-box"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="contact-field-group">
                  <label className="contact-field-label" htmlFor="contact-email">Your Email</label>
                  <input 
                    id="contact-email"
                    type="email" 
                    className="contact-input-box"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="contact-field-group">
                <label className="contact-field-label" htmlFor="contact-message-input">Your Message</label>
                <div className="contact-textarea-wrapper">
                  <textarea 
                    id="contact-message-input"
                    className="contact-textarea"
                    placeholder="Tell me about your project, opportunity or just say hello..."
                    maxLength={500}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                  <div className="contact-char-counter">
                    {formData.message.length}/500
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="contact-submit-btn"
                disabled={status === "sending"}
              >
                <Send size={16} /> {status === "sending" ? "Opening Email Client..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="form-feedback-alert form-feedback-success">
                  ✓ Prepared email draft! Opening your default email client...
                </div>
              )}

              {status === "error" && (
                <div className="form-feedback-alert form-feedback-error">
                  Please fill in all fields before sending.
                </div>
              )}
            </form>
          </div>

        </div>


        {/* ── BOTTOM SECTION: INQUIRY TYPES ── */}
        <div className="contact-inquiry-section">
          <div className="inquiry-header-row">
            <div>
              <div className="inquiry-tag">INQUIRY TYPES</div>
              <h2 className="inquiry-main-title">
                What You Can <span className="accent-word">Contact Me About</span>
              </h2>
            </div>
            <div className="inquiry-script-note">
              Different Ideas Same Goal A Better Tomorrow
            </div>
          </div>

          <div className="inquiry-cards-grid">

            {/* 1. Job Opportunities */}
            <div 
              className="inquiry-card" 
              onClick={() => handleInquirySelect("Job Opportunities")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleInquirySelect("Job Opportunities")}
            >
              <div className="inquiry-card-header">
                <div 
                  className="inquiry-icon-box"
                  style={{ background: "rgba(2, 132, 199, 0.1)", borderColor: "rgba(2, 132, 199, 0.3)", color: "#0284c7" }}
                >
                  <Briefcase size={20} />
                </div>
                <ChevronRight size={16} className="inquiry-arrow" />
              </div>
              <h3 className="inquiry-title">Job Opportunities</h3>
              <p className="inquiry-desc">
                Full-time roles, developer positions, or contract internships.
              </p>
              <div className="inquiry-tags-row">
                <span className="inquiry-tag-pill">Full-time</span>
                <span className="inquiry-tag-pill">Internship</span>
                <span className="inquiry-tag-pill">Contract</span>
              </div>
            </div>

            {/* 2. Freelance Projects */}
            <div 
              className="inquiry-card" 
              onClick={() => handleInquirySelect("Freelance Projects")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleInquirySelect("Freelance Projects")}
            >
              <div className="inquiry-card-header">
                <div 
                  className="inquiry-icon-box"
                  style={{ background: "rgba(6, 182, 212, 0.1)", borderColor: "rgba(6, 182, 212, 0.3)", color: "#0891b2" }}
                >
                  <Laptop size={20} />
                </div>
                <ChevronRight size={16} className="inquiry-arrow" />
              </div>
              <h3 className="inquiry-title">Freelance Projects</h3>
              <p className="inquiry-desc">
                Building responsive full-stack websites or SaaS prototypes.
              </p>
              <div className="inquiry-tags-row">
                <span className="inquiry-tag-pill">Web Development</span>
                <span className="inquiry-tag-pill">SaaS</span>
                <span className="inquiry-tag-pill">MERN</span>
              </div>
            </div>

            {/* 3. Product Collaboration */}
            <div 
              className="inquiry-card" 
              onClick={() => handleInquirySelect("Product Collaboration")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleInquirySelect("Product Collaboration")}
            >
              <div className="inquiry-card-header">
                <div 
                  className="inquiry-icon-box"
                  style={{ background: "rgba(56, 189, 248, 0.1)", borderColor: "rgba(56, 189, 248, 0.3)", color: "#0284c7" }}
                >
                  <Users size={20} />
                </div>
                <ChevronRight size={16} className="inquiry-arrow" />
              </div>
              <h3 className="inquiry-title">Product Collaboration</h3>
              <p className="inquiry-desc">
                Brainstorming AI capabilities, Local LLMs, and RAG architectures.
              </p>
              <div className="inquiry-tags-row">
                <span className="inquiry-tag-pill">AI / GenAI</span>
                <span className="inquiry-tag-pill">RAG</span>
                <span className="inquiry-tag-pill">Product</span>
              </div>
            </div>

            {/* 4. Technical Discussions */}
            <div 
              className="inquiry-card" 
              onClick={() => handleInquirySelect("Technical Discussions")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleInquirySelect("Technical Discussions")}
            >
              <div className="inquiry-card-header">
                <div 
                  className="inquiry-icon-box"
                  style={{ background: "rgba(168, 85, 247, 0.1)", borderColor: "rgba(168, 85, 247, 0.3)", color: "#7e22ce" }}
                >
                  <MessageSquare size={20} />
                </div>
                <ChevronRight size={16} className="inquiry-arrow" />
              </div>
              <h3 className="inquiry-title">Technical Discussions</h3>
              <p className="inquiry-desc">
                Open-source work, API integration, or pair programming.
              </p>
              <div className="inquiry-tags-row">
                <span className="inquiry-tag-pill">Open Source</span>
                <span className="inquiry-tag-pill">APIs</span>
                <span className="inquiry-tag-pill">Tech Talk</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
