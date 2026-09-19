import React from "react";
import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";

export default function GlassCard({
  variant = "medium",
  children,
  className = "",
  animateProps = {},
  ...props
}) {
  const prefersReduced = useReducedMotion();
  
  const getGlassClass = () => {
    switch (variant) {
      case "light":
        return "glass-light";
      case "strong":
        return "glass-strong";
      case "interactive":
        return "glass-interactive";
      case "medium":
      default:
        return "glass-medium";
    }
  };

  const isInteractive = variant === "interactive" && !prefersReduced;

  if (isInteractive || (Object.keys(animateProps).length > 0 && !prefersReduced)) {
    return (
      <motion.div
        className={`glass-card ${getGlassClass()} ${className}`}
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        {...animateProps}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`glass-card ${getGlassClass()} ${className}`} {...props}>
      {children}
    </div>
  );
}
