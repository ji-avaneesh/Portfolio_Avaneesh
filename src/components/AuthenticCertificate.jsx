import React, { useState } from "react";
import { CheckCircle2, Download, Copy } from "lucide-react";

// ── SVG Brand Logos for Certificates ──
function CertUdemyLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
        <path d="M10 11V18C10 21.866 13.134 25 17 25C20.866 25 24 21.866 24 18V11" stroke="#a435f0" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M17 7L12 11H22L17 7Z" fill="#a435f0" />
      </svg>
      <div>
        <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "#00204a", letterSpacing: "-0.5px", lineHeight: 1 }}>
          ûdemy
        </div>
        <div style={{ fontSize: "0.55rem", fontWeight: 800, color: "#64748b", letterSpacing: "1px", textTransform: "uppercase", marginTop: "2px" }}>
          Skills for a brighter tomorrow
        </div>
      </div>
    </div>
  );
}

function CertCourseraLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="26" height="26" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="13" fill="#0056d2" />
        <path d="M21 12C18 10 13 11 12 15C11 19 13 22 17 23C20 23.5 22 22 23 20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
      <div>
        <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0056d2", letterSpacing: "-0.5px", lineHeight: 1 }}>
          coursera
        </div>
        <div style={{ fontSize: "0.52rem", fontWeight: 800, color: "#64748b", letterSpacing: "1px", textTransform: "uppercase", marginTop: "2px" }}>
          Online learning anytime, anywhere
        </div>
      </div>
    </div>
  );
}

function CertDeepLearningLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="26" height="26" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="14" fill="#0f172a" />
        <circle cx="17" cy="17" r="10" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="17" cy="17" r="5" fill="#f43f5e" />
      </svg>
      <div>
        <div style={{ fontSize: "1.08rem", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.3px", lineHeight: 1 }}>
          DeepLearning.AI
        </div>
        <div style={{ fontSize: "0.52rem", fontWeight: 800, color: "#e11d48", letterSpacing: "1px", textTransform: "uppercase", marginTop: "2px" }}>
          Accelerating AI Education
        </div>
      </div>
    </div>
  );
}

function CertGoogleCloudLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
      </svg>
      <div>
        <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#1e293b", lineHeight: 1 }}>
          Google Cloud
        </div>
        <div style={{ fontSize: "0.52rem", fontWeight: 800, color: "#4285F4", letterSpacing: "1px", textTransform: "uppercase", marginTop: "2px" }}>
          Training &amp; Certification
        </div>
      </div>
    </div>
  );
}

function CertCiscoLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="26" height="20" viewBox="0 0 50 30" fill="#0284c7">
        <rect x="2" y="10" width="4" height="15" rx="2"/>
        <rect x="10" y="4" width="4" height="21" rx="2"/>
        <rect x="18" y="12" width="4" height="13" rx="2"/>
        <rect x="26" y="12" width="4" height="13" rx="2"/>
        <rect x="34" y="4" width="4" height="21" rx="2"/>
        <rect x="42" y="10" width="4" height="15" rx="2"/>
      </svg>
      <div>
        <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0284c7", lineHeight: 1 }}>
          CISCO
        </div>
        <div style={{ fontSize: "0.52rem", fontWeight: 800, color: "#64748b", letterSpacing: "1px", textTransform: "uppercase", marginTop: "2px" }}>
          Networking Academy
        </div>
      </div>
    </div>
  );
}

// ── Realistic Signature SVGs ──
function RealisticSignature({ name = "Greg Brown" }) {
  if (name.includes("Andrew Ng")) {
    return (
      <svg width="120" height="42" viewBox="0 0 160 50" fill="none">
        <path d="M15 38C25 15 32 8 38 16C42 22 45 35 48 38M35 28C50 22 65 24 75 35M85 10C80 25 78 40 88 38C95 36 102 20 110 32C115 38 122 36 130 30" stroke="#00204a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M125 18C132 20 142 28 148 40" stroke="#00204a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="120" height="42" viewBox="0 0 160 50" fill="none">
      <path d="M12 36C22 18 30 12 38 18C44 23 42 38 35 40C28 42 24 32 30 24C36 16 52 26 62 34M70 20C75 28 85 36 96 32M102 18C108 24 116 38 124 35C132 32 138 22 145 28" stroke="#00204a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 44L148 44" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

// ── Realistic Metallic 3D Embossed Gold Seal ──
function GoldEmbossedSeal({ emblem = "U" }) {
  return (
    <div style={{ position: "relative", width: "72px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="72" height="72" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="goldGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </radialGradient>
          <filter id="sealShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 16-point scalloped star border */}
        <path
          d="M 50,2 L 57,12 L 69,7 L 72,19 L 85,18 L 84,31 L 97,35 L 91,47 L 100,55 L 91,63 L 97,75 L 84,79 L 85,92 L 72,91 L 69,103 L 57,98 L 50,108 L 43,98 L 31,103 L 28,91 L 15,92 L 16,79 L 3,75 L 9,63 L 0,55 L 9,47 L 3,35 L 16,31 L 15,18 L 28,19 L 31,7 L 43,12 Z"
          fill="url(#goldGrad)"
          filter="url(#sealShadow)"
        />

        {/* Outer and inner concentric rings */}
        <circle cx="50" cy="55" r="38" fill="none" stroke="#fef08a" strokeWidth="1.5" opacity="0.9" />
        <circle cx="50" cy="55" r="34" fill="none" stroke="#78350f" strokeWidth="1.2" opacity="0.6" />
        <circle cx="50" cy="55" r="28" fill="#d97706" opacity="0.35" />

        {/* Laurel leaves left and right */}
        <path d="M 26,55 Q 26,40 36,33 Q 32,45 34,55" fill="#fef08a" opacity="0.85" />
        <path d="M 74,55 Q 74,40 64,33 Q 68,45 66,55" fill="#fef08a" opacity="0.85" />

        {/* Center Monogram / Emblem */}
        <circle cx="50" cy="55" r="18" fill="none" stroke="#fef08a" strokeWidth="1" />
        {emblem === "U" ? (
          <>
            <path d="M43 47V58C43 61.5 46 64 50 64C54 64 57 61.5 57 58V47" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M50 42L44 47H56L50 42Z" fill="#ffffff" />
          </>
        ) : (
          <text x="50" y="61" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            {emblem}
          </text>
        )}
      </svg>
    </div>
  );
}

// ── SVG QR Code Simulation ──
function SimulatedQRCode() {
  return (
    <svg width="40" height="40" viewBox="0 0 33 33" fill="#00204a">
      {/* Corner position markers */}
      <rect x="1" y="1" width="9" height="9" fill="#00204a" />
      <rect x="2.5" y="2.5" width="6" height="6" fill="#ffffff" />
      <rect x="4" y="4" width="3" height="3" fill="#00204a" />

      <rect x="23" y="1" width="9" height="9" fill="#00204a" />
      <rect x="24.5" y="2.5" width="6" height="6" fill="#ffffff" />
      <rect x="26" y="4" width="3" height="3" fill="#00204a" />

      <rect x="1" y="23" width="9" height="9" fill="#00204a" />
      <rect x="2.5" y="24.5" width="6" height="6" fill="#ffffff" />
      <rect x="4" y="26" width="3" height="3" fill="#00204a" />

      {/* Internal pseudo-data dots */}
      <rect x="12" y="2" width="2" height="2" />
      <rect x="16" y="2" width="2" height="2" />
      <rect x="19" y="4" width="2" height="2" />
      <rect x="12" y="6" width="2" height="2" />
      <rect x="15" y="8" width="3" height="2" />

      <rect x="2" y="12" width="2" height="2" />
      <rect x="6" y="14" width="2" height="2" />
      <rect x="12" y="12" width="3" height="3" />
      <rect x="17" y="13" width="2" height="2" />
      <rect x="21" y="12" width="3" height="2" />
      <rect x="26" y="14" width="2" height="2" />
      <rect x="29" y="12" width="2" height="3" />

      <rect x="12" y="17" width="2" height="2" />
      <rect x="16" y="18" width="3" height="2" />
      <rect x="21" y="17" width="2" height="3" />
      <rect x="25" y="18" width="3" height="2" />

      <rect x="12" y="22" width="2" height="2" />
      <rect x="16" y="24" width="2" height="2" />
      <rect x="12" y="27" width="3" height="2" />
      <rect x="17" y="29" width="3" height="2" />
      <rect x="22" y="23" width="2" height="2" />
      <rect x="26" y="24" width="3" height="2" />
      <rect x="23" y="28" width="2" height="3" />
      <rect x="27" y="28" width="3" height="3" />
    </svg>
  );
}

// ── Technology Badge SVG Icon ──
function TechBadgeIcon({ topic = "React" }) {
  if (topic.toLowerCase().includes("node")) {
    return (
      <svg width="44" height="44" viewBox="0 0 60 60" fill="none">
        <polygon points="30,4 54,18 54,46 30,58 6,46 6,18" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2.5" />
        <path d="M30 18L44 26V42L30 50L16 42V26L30 18Z" fill="#16a34a" />
        <text x="30" y="37" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">JS</text>
      </svg>
    );
  }
  if (topic.toLowerCase().includes("deep") || topic.toLowerCase().includes("ai") || topic.toLowerCase().includes("brain")) {
    return (
      <svg width="44" height="44" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="26" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2.5" />
        <path d="M30 14C22 14 18 20 18 26C18 33 22 37 25 40L30 46L35 40C38 37 42 33 42 26C42 20 38 14 30 14Z" fill="#7c3aed" opacity="0.9" />
        <circle cx="26" cy="24" r="3" fill="#ffffff" />
        <circle cx="34" cy="24" r="3" fill="#ffffff" />
        <circle cx="30" cy="33" r="3" fill="#ffffff" />
        <line x1="26" y1="24" x2="30" y2="33" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="34" y1="24" x2="30" y2="33" stroke="#ffffff" strokeWidth="1.5" />
      </svg>
    );
  }
  if (topic.toLowerCase().includes("sql") || topic.toLowerCase().includes("data") || topic.toLowerCase().includes("mongo")) {
    return (
      <svg width="44" height="44" viewBox="0 0 60 60" fill="none">
        <rect x="6" y="6" width="48" height="48" rx="12" fill="#eff6ff" stroke="#2563eb" strokeWidth="2.5" />
        <ellipse cx="30" cy="20" rx="14" ry="5" fill="#3b82f6" />
        <path d="M16 20V32C16 35 22 37 30 37C38 37 44 35 44 32V20" fill="none" stroke="#2563eb" strokeWidth="2.5" />
        <path d="M16 32V42C16 45 22 47 30 47C38 47 44 45 44 42V32" fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
      </svg>
    );
  }
  if (topic.toLowerCase().includes("docker") || topic.toLowerCase().includes("cloud")) {
    return (
      <svg width="44" height="44" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="26" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2.5" />
        <rect x="18" y="24" width="6" height="5" fill="#0284c7" rx="1"/>
        <rect x="26" y="24" width="6" height="5" fill="#0284c7" rx="1"/>
        <rect x="34" y="24" width="6" height="5" fill="#0284c7" rx="1"/>
        <rect x="26" y="17" width="6" height="5" fill="#0284c7" rx="1"/>
        <path d="M12 32C12 39 18 45 30 45C42 45 48 39 48 32H12Z" fill="#0369a1" />
      </svg>
    );
  }
  // Default: React atom
  return (
    <svg width="44" height="44" viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="26" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2.5" />
      <ellipse cx="30" cy="30" rx="18" ry="7" fill="none" stroke="#0284c7" strokeWidth="2" transform="rotate(30 30 30)" />
      <ellipse cx="30" cy="30" rx="18" ry="7" fill="none" stroke="#0284c7" strokeWidth="2" transform="rotate(90 30 30)" />
      <ellipse cx="30" cy="30" rx="18" ry="7" fill="none" stroke="#0284c7" strokeWidth="2" transform="rotate(150 30 30)" />
      <circle cx="30" cy="30" r="4.5" fill="#0284c7" />
    </svg>
  );
}

// ── Master Authentic Certificate Component ──
export default function AuthenticCertificate({ cert, onDownload, onClose }) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState(cert?.image ? "image" : "vector");

  if (!cert) return null;

  const copyId = () => {
    navigator.clipboard.writeText(cert.id || "CERT-AK");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const issuer = cert.issuer || "Udemy";
  const title = cert.title || "React – The Complete Guide";
  const date = cert.year || cert.date || "Mar 2024";
  const certId = cert.id || "REACT-UDE";
  const description = cert.description || "A comprehensive course covering fundamentals, architecture, hands-on project implementations, state management, and building production-ready applications.";
  const signatoryName = cert.signatoryName || (issuer.toLowerCase().includes("udemy") ? "Greg Brown" : issuer.toLowerCase().includes("deeplearning") ? "Andrew Ng" : "Jeff Maggioncalda");
  const signatoryTitle = cert.signatoryTitle || (issuer.toLowerCase().includes("udemy") ? "Chief Executive Officer, Udemy" : issuer.toLowerCase().includes("deeplearning") ? "Founder, DeepLearning.AI" : "Chief Executive Officer, Coursera");
  const topicTag = cert.topicBadge || `${title.split("–")[0].trim().toUpperCase()} SOLUTIONS`;
  const verifyUrl = cert.verifyUrl || (issuer.toLowerCase().includes("udemy") ? "udemy.com/certificate" : issuer.toLowerCase().includes("deeplearning") ? "deeplearning.ai/verify" : "coursera.org/verify");
  const motto = cert.motto || "Keep Building";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", width: "100%", alignItems: "center" }}>
      
      {/* ── Top Control Bar ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "10px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "4px 10px", borderRadius: "100px", background: "rgba(16, 185, 129, 0.1)", color: "#059669", fontSize: "0.75rem", fontWeight: 800 }}>
            <CheckCircle2 size={13} /> Official Verified Record
          </span>
          <span style={{ fontSize: "0.74rem", color: "#64748b", fontWeight: 600 }}>
            ID: <code style={{ color: "#4f46e5", fontWeight: 800 }}>{certId}</code>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {cert.image && (
            <div style={{ display: "flex", background: "#f1f5f9", borderRadius: "8px", padding: "2px" }}>
              <button 
                onClick={() => setViewMode("image")}
                style={{
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "0.72rem",
                  fontWeight: 750,
                  cursor: "pointer",
                  background: viewMode === "image" ? "#ffffff" : "transparent",
                  color: viewMode === "image" ? "#0f172a" : "#64748b",
                  boxShadow: viewMode === "image" ? "0 2px 5px rgba(0,0,0,0.08)" : "none"
                }}
              >
                Photo
              </button>
              <button 
                onClick={() => setViewMode("vector")}
                style={{
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "0.72rem",
                  fontWeight: 750,
                  cursor: "pointer",
                  background: viewMode === "vector" ? "#ffffff" : "transparent",
                  color: viewMode === "vector" ? "#0f172a" : "#64748b",
                  boxShadow: viewMode === "vector" ? "0 2px 5px rgba(0,0,0,0.08)" : "none"
                }}
              >
                Digital View
              </button>
            </div>
          )}

          <button
            onClick={copyId}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "5px 10px",
              borderRadius: "8px",
              background: "#ffffff",
              border: "1px solid #cbd5e1",
              fontSize: "0.72rem",
              fontWeight: 750,
              color: "#334155",
              cursor: "pointer"
            }}
          >
            <Copy size={12} />
            <span>{copied ? "Copied!" : "Copy ID"}</span>
          </button>

          <a
            href={cert.image || "#"}
            download={`${certId}_Certificate.jpg`}
            onClick={(e) => {
              if (onDownload) {
                e.preventDefault();
                onDownload(cert);
              }
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "5px 12px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              color: "#ffffff",
              border: "none",
              fontSize: "0.72rem",
              fontWeight: 750,
              cursor: "pointer",
              textDecoration: "none"
            }}
          >
            <Download size={12} />
            <span>Download</span>
          </a>

          {onClose && (
            <button
              onClick={onClose}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "5px 10px",
                borderRadius: "8px",
                background: "#f1f5f9",
                border: "1px solid #cbd5e1",
                fontSize: "0.72rem",
                fontWeight: 750,
                color: "#64748b",
                cursor: "pointer"
              }}
              title="Close Certificate"
            >
              Close
            </button>
          )}
        </div>
      </div>

      {/* ── Photo Mode (If pre-rendered image exists) ── */}
      {viewMode === "image" && cert.image ? (
        <div 
          style={{
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 14px 40px rgba(15, 23, 42, 0.12)",
            border: "1px solid #cbd5e1",
            background: "#ffffff",
            position: "relative"
          }}
        >
          <img 
            src={cert.image} 
            alt={title} 
            style={{ width: "100%", height: "auto", display: "block" }} 
          />
        </div>
      ) : (
        /* ── Vector Photorealistic Certificate Canvas ── */
        <div 
          className="authentic-cert-frame"
          style={{
            width: "100%",
            maxWidth: "760px",
            aspectRatio: "4 / 3",
            background: "#ffffff",
            position: "relative",
            overflow: "hidden",
            borderRadius: "12px",
            border: "2px solid #00204a",
            boxShadow: "0 18px 50px rgba(15, 23, 42, 0.14)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "clamp(18px, 3.5vw, 32px)",
            boxSizing: "border-box",
            fontFamily: "'Outfit', sans-serif"
          }}
        >
          {/* ── Decorative Corner Ribbons ── */}
          {/* Top-Left Geometric Accents */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "140px", height: "140px", pointerEvents: "none" }}>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
              <polygon points="0,0 140,0 0,140" fill="#00204a" opacity="0.95" />
              <polygon points="0,0 90,0 0,90" fill="#0284c7" />
              <polygon points="0,0 45,0 0,45" fill="#38bdf8" />
              <path d="M 0,20 Q 20,20 20,0" stroke="#ffffff" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Top-Right Geometric Accents with Coding Tag */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "140px", height: "140px", pointerEvents: "none" }}>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
              <polygon points="140,0 0,0 140,140" fill="#00204a" opacity="0.95" />
              <polygon points="140,0 50,0 140,90" fill="#0284c7" />
              <text x="105" y="45" fill="#ffffff" fontSize="20" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
            </svg>
          </div>

          {/* Bottom-Left Geometric Stripes */}
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "140px", height: "140px", pointerEvents: "none" }}>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
              <polygon points="0,140 140,140 0,0" fill="#00204a" opacity="0.95" />
              <polygon points="0,140 90,140 0,50" fill="#0284c7" />
              <polygon points="0,140 45,140 0,95" fill="#38bdf8" />
            </svg>
          </div>

          {/* Bottom-Right Corner Accent */}
          <div style={{ position: "absolute", bottom: 0, right: 0, width: "140px", height: "140px", pointerEvents: "none" }}>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
              <polygon points="140,140 0,140 140,0" fill="#00204a" opacity="0.95" />
              <polygon points="140,140 50,140 140,50" fill="#0284c7" />
            </svg>
          </div>

          {/* Left Vertical Running Slogan */}
          <div 
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              fontSize: "0.58rem",
              fontWeight: 800,
              letterSpacing: "3px",
              color: "#94a3b8",
              textTransform: "uppercase",
              lineHeight: 1.4
            }}
          >
            <div>L E A R N</div>
            <div>P R A C T I C E</div>
            <div>B U I L D</div>
            <div>G R O W</div>
            <div style={{ width: "24px", height: "2px", background: "#0284c7", marginTop: "4px" }} />
          </div>

          {/* ── 1. Top Header Row: Platform Logo (Left) & Topic Badge (Right) ── */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%", position: "relative", zIndex: 2 }}>
            <div style={{ marginLeft: "20px" }}>
              {issuer.toLowerCase().includes("udemy") && <CertUdemyLogo />}
              {issuer.toLowerCase().includes("coursera") && <CertCourseraLogo />}
              {issuer.toLowerCase().includes("deeplearning") && <CertDeepLearningLogo />}
              {issuer.toLowerCase().includes("google") && <CertGoogleCloudLogo />}
              {issuer.toLowerCase().includes("cisco") && <CertCiscoLogo />}
              {!issuer.toLowerCase().includes("udemy") && 
               !issuer.toLowerCase().includes("coursera") && 
               !issuer.toLowerCase().includes("deeplearning") && 
               !issuer.toLowerCase().includes("google") && 
               !issuer.toLowerCase().includes("cisco") && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#00204a", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>
                    {issuer.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#00204a", lineHeight: 1 }}>{issuer}</div>
                    <div style={{ fontSize: "0.52rem", fontWeight: 800, color: "#64748b", letterSpacing: "1px", textTransform: "uppercase" }}>Global Learning Community</div>
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px" }}>
              <TechBadgeIcon topic={title} />
              <div style={{ fontSize: "0.56rem", fontWeight: 850, letterSpacing: "1px", color: "#0284c7", marginTop: "3px", textTransform: "uppercase" }}>
                {topicTag}
              </div>
            </div>
          </div>

          {/* ── 2. Center Core Credentials ── */}
          <div style={{ textAlign: "center", position: "relative", zIndex: 2, margin: "auto 0" }}>
            <h2 
              style={{
                fontFamily: "serif",
                fontSize: "clamp(1.7rem, 3.8vw, 2.4rem)",
                fontWeight: 800,
                color: "#00204a",
                letterSpacing: "4px",
                margin: "0 0 2px 0",
                textTransform: "uppercase"
              }}
            >
              Certificate
            </h2>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "2px 0 6px" }}>
              <span style={{ width: "40px", height: "1px", background: "#cbd5e1" }} />
              <span style={{ fontSize: "0.76rem", fontWeight: 850, letterSpacing: "3px", color: "#334155", textTransform: "uppercase" }}>
                OF COMPLETION
              </span>
              <span style={{ width: "40px", height: "1px", background: "#cbd5e1" }} />
            </div>

            <div style={{ fontSize: "0.64rem", fontWeight: 800, letterSpacing: "2.5px", color: "#64748b", textTransform: "uppercase", margin: "6px 0 2px" }}>
              THIS IS TO CERTIFY THAT
            </div>

            {/* Recipient Full Name */}
            <div 
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "clamp(2.4rem, 4.8vw, 3.2rem)",
                fontWeight: 700,
                color: "#00204a",
                lineHeight: 1.1,
                margin: "2px 0"
              }}
            >
              Avaneesh Kumar
            </div>

            <div style={{ width: "180px", height: "1px", background: "#cbd5e1", margin: "2px auto 6px" }} />

            <div style={{ fontSize: "0.64rem", fontWeight: 800, letterSpacing: "2px", color: "#64748b", textTransform: "uppercase" }}>
              HAS SUCCESSFULLY COMPLETED
            </div>

            {/* Course Title */}
            <div 
              style={{
                fontSize: "clamp(1.1rem, 2.4vw, 1.45rem)",
                fontWeight: 900,
                color: "#00204a",
                letterSpacing: "-0.3px",
                margin: "4px 0 2px"
              }}
            >
              {title}
            </div>

            {/* Course Description */}
            <p 
              style={{
                fontSize: "clamp(0.66rem, 1.3vw, 0.76rem)",
                lineHeight: 1.45,
                color: "#475569",
                maxWidth: "520px",
                margin: "0 auto",
                fontWeight: 500
              }}
            >
              {description}
            </p>
          </div>

          {/* ── 3. Bottom Row: Signatures (Left), Gold Seal (Center), QR & ID (Right) ── */}
          <div 
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: "100%",
              position: "relative",
              zIndex: 2,
              paddingLeft: "24px",
              paddingRight: "24px"
            }}
          >
            {/* Left Signature */}
            <div style={{ textAlign: "left" }}>
              <RealisticSignature name={signatoryName} />
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#00204a", lineHeight: 1.2 }}>
                {signatoryName}
              </div>
              <div style={{ fontSize: "0.6rem", color: "#64748b", fontWeight: 600 }}>
                {signatoryTitle}
              </div>
            </div>

            {/* Center Embossed Metallic Seal */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <GoldEmbossedSeal emblem={issuer.charAt(0)} />
            </div>

            {/* Right: Date, ID, QR & Hand-Script Motto */}
            <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div 
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.45rem",
                  color: "#0284c7",
                  fontWeight: 700,
                  transform: "rotate(-4deg)",
                  marginBottom: "4px"
                }}
              >
                {motto}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.58rem", color: "#64748b", fontWeight: 700 }}>
                    Completion Date: <strong style={{ color: "#00204a" }}>{date}</strong>
                  </div>
                  <div style={{ fontSize: "0.58rem", color: "#64748b", fontWeight: 700, marginTop: "1px" }}>
                    Certificate ID: <strong style={{ color: "#00204a" }}>{certId}</strong>
                  </div>
                  <div style={{ fontSize: "0.52rem", color: "#94a3b8", marginTop: "2px" }}>
                    Verify at: {verifyUrl}
                  </div>
                </div>

                <SimulatedQRCode />
              </div>
            </div>
          </div>

          {/* Sub-Footer Brand Line */}
          <div style={{ textAlign: "center", fontSize: "0.54rem", fontWeight: 750, letterSpacing: "1px", color: "#64748b", position: "relative", zIndex: 2, marginTop: "4px" }}>
            {issuer.toUpperCase()} &nbsp;|&nbsp; GLOBAL LEARNING &amp; VERIFICATION NETWORK
          </div>

        </div>
      )}

    </div>
  );
}
