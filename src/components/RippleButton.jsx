import React from "react";
import { motion } from "framer-motion";
import useRipple from "../hooks/useRipple";
import useReducedMotion from "../hooks/useReducedMotion";

export default function RippleButton({
  children,
  className = "",
  variant = "primary", // primary, secondary
  onClick,
  ...props
}) {
  const prefersReduced = useReducedMotion();
  const { ref, style, bind, rippleActive, setRippleActive } = useRipple();

  const handlePress = (e) => {
    if (prefersReduced) {
      if (onClick) onClick(e);
      return;
    }
    
    setRippleActive(false);
    setTimeout(() => {
      setRippleActive(true);
    }, 10);
    if (onClick) onClick(e);
  };

  const motionProps = prefersReduced
    ? {}
    : {
        whileTap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 400, damping: 15 }
      };

  return (
    <>
      <style>{`
        .ripple-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 26px;
          border-radius: 100px; /* Rounded pill shape */
          font-size: 0.92rem;
          font-weight: 750;
          cursor: pointer;
          border: none;
          color: var(--text);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          overflow: hidden;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast), background var(--transition-fast);
        }

        /* Premium glossy glass reflections */
        .ripple-btn::before {
          content: "";
          position: absolute;
          top: 1px;
          left: 6px;
          right: 6px;
          height: 40%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
          border-radius: 100px 100px 0 0;
          pointer-events: none;
          z-index: 1;
        }

        .ripple-btn-primary {
          background: linear-gradient(135deg, rgba(var(--violet-rgb), 0.22), rgba(var(--pink-rgb), 0.22));
          border: 1px solid rgba(var(--violet-rgb), 0.5);
          color: #4c1d95;
          box-shadow: 
            0 4px 14px rgba(var(--violet-rgb), 0.12),
            0 0 20px rgba(var(--violet-rgb), 0.10), 
            0 0 45px rgba(var(--violet-rgb), 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .ripple-btn-primary:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, rgba(var(--violet-rgb), 0.32), rgba(var(--pink-rgb), 0.32));
          border-color: rgba(var(--violet-rgb), 0.7);
          box-shadow: 
            0 6px 20px rgba(var(--violet-rgb), 0.2),
            0 0 25px rgba(var(--violet-rgb), 0.18), 
            0 0 50px rgba(var(--violet-rgb), 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .ripple-btn-secondary {
          background: rgba(255, 255, 255, 0.45);
          border: 1px solid var(--border);
          color: var(--text);
          box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .ripple-btn-secondary:hover {
          transform: translateY(-1.5px);
          background: rgba(255, 255, 255, 0.75);
          border-color: rgba(var(--violet-rgb), 0.35);
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.04), 
            inset 0 1px 0 rgba(255, 255, 255, 0.75);
        }

        /* Pointer Ripple Circle */
        .btn-ripple-circle {
          position: absolute;
          top: var(--ripple-y);
          left: var(--ripple-x);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(var(--violet-rgb), 0.35);
          transform: translate(-50%, -50%) scale(0);
          pointer-events: none;
          opacity: 0;
          z-index: 0;
        }

        .btn-ripple-active {
          animation: btn-ripple-anim 0.55s cubic-bezier(0.1, 0.8, 0.3, 1);
        }

        @keyframes btn-ripple-anim {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(15);
            opacity: 0;
          }
        }
      `}</style>

      <motion.button
        ref={ref}
        style={prefersReduced ? {} : style}
        {...(prefersReduced ? {} : bind)}
        onClick={handlePress}
        className={`ripple-btn ripple-btn-${variant} ${className}`}
        {...motionProps}
        {...props}
      >
        <span style={{ position: "relative", zIndex: 2, display: "inline-flex", alignItems: "center", gap: "8px" }}>
          {children}
        </span>
        {!prefersReduced && (
          <div className={`btn-ripple-circle ${rippleActive ? "btn-ripple-active" : ""}`} />
        )}
      </motion.button>
    </>
  );
}
