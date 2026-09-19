import React from "react";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import RippleButton from "../components/RippleButton";

export default function NotFound() {
  return (
    <>
      <style>{`
        .notfound-container {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
          gap: 20px;
          position: relative;
          z-index: 2;
        }
        
        .notfound-code {
          font-size: 7rem;
          font-weight: 900;
          color: var(--violet);
          line-height: 1;
          letter-spacing: -2px;
          margin: 0;
        }

        .notfound-container h2 {
          font-size: 1.6rem;
          font-weight: 850;
          color: var(--text);
          max-width: 500px;
          line-height: 1.3;
          margin: 0;
        }

        .notfound-container p {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 420px;
          line-height: 1.6;
          margin: 0 0 10px 0;
        }
      `}</style>
      
      <div className="notfound-container">
        <HelpCircle size={56} style={{ color: "var(--pink)" }} />
        <h1 className="notfound-code">404</h1>
        <h2>Looks like this page escaped the system.</h2>
        <p>
          The resource you are looking for has been moved, renamed, or is temporarily offline.
        </p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <RippleButton variant="primary">Back Home</RippleButton>
        </Link>
      </div>
    </>
  );
}
