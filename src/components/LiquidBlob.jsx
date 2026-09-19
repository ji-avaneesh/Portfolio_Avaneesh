import React from "react";
import useReducedMotion from "../hooks/useReducedMotion";

export default function LiquidBlob() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className="liquid-container">
        {/* Static soft ambient gradients for reduced motion users */}
        <div style={{
          position: "absolute",
          top: "15%",
          left: "15%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(167, 139, 250, 0.08)",
          filter: "blur(60px)"
        }} />
        <div style={{
          position: "absolute",
          bottom: "15%",
          right: "15%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "rgba(243, 166, 200, 0.08)",
          filter: "blur(60px)"
        }} />
      </div>
    );
  }

  return (
    <>
      <div className="liquid-container">
        {/* Maximum 3 major liquid blobs to maintain premium look */}
        <div className="liquid-blob blob-violet" style={{ top: "12%", left: "10%", width: "450px", height: "450px" }} />
        <div className="liquid-blob blob-pink" style={{ top: "42%", right: "8%", width: "480px", height: "480px" }} />
        <div className="liquid-blob blob-peach" style={{ bottom: "10%", left: "12%", width: "400px", height: "400px" }} />
      </div>

      <svg className="liquid-svg-filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="liquid-goo">
            {/* Smooth blur and subtle fractal turbulence for liquid displacement */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" result="displ" />
            
            {/* Alpha matrix adjustment to merge blobs */}
            <feColorMatrix
              in="displ"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -9"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  );
}
