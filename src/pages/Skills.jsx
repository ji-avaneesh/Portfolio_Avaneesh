import React, { useState } from "react";
import { 
  Monitor, Server, Database, Bot, Cloud, 
  Code2, Wrench
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// PIXEL-PERFECT SVG TECH LOGOS
// ─────────────────────────────────────────────────────────────

function Html5Icon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M5 3L7.5 27L16 29.5L24.5 27L27 3H5Z" fill="#E44D26" />
      <path d="M16 27.3L22.8 25.3L24.9 5.2H16V27.3Z" fill="#F16529" />
      <path d="M16 11.8H11.5L11.2 8.7H20.8L20.5 11.8H16ZM16 17.5H11.9L12.3 21.6L16 22.6V19.4L14.4 19L14.2 16.5H16V17.5ZM16 17.5V14.6H20.2L19.8 19L16 20.1V17.5Z" fill="#FFFFFF" />
    </svg>
  );
}

function Css3Icon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M5 3L7.5 27L16 29.5L24.5 27L27 3H5Z" fill="#1572B6" />
      <path d="M16 27.3L22.8 25.3L24.9 5.2H16V27.3Z" fill="#33A9DC" />
      <path d="M16 11.8H11.5L11.2 8.7H20.8L20.5 11.8H16ZM16 22.6L12.3 21.6L12 17.5H14.3L14.5 19.5L16 19.9V22.6ZM20.2 14.6L19.8 19L16 20.1V17.5H18L18.2 14.6H16V11.8H20.5L20.2 14.6Z" fill="#FFFFFF" />
    </svg>
  );
}

function JsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#F7DF1E" />
      <path d="M18.5 14H21V22C21 24.5 19 25 17 25C15 25 13.8 24 13.2 23L14.8 21.2C15.2 21.8 15.8 22.4 16.8 22.4C17.8 22.4 18.5 22 18.5 20.5V14ZM9 14.2H11.5V19.8C11.5 22 12.8 22.6 14 22C14.5 21.8 14.8 21.4 15 21L16.5 22.4C15.8 23.5 14.8 24.6 13 24.8C10.5 25 9 23.5 9 20.2V14.2Z" fill="#000000" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="2.8" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.6" fill="none" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.6" fill="none" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.6" fill="none" transform="rotate(120 16 16)" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="#000000" />
      <path d="M12 10V22M12 10L21.5 22M20 10V16.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ViteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M26 6L16.5 28L6 6L21 9L26 6Z" fill="url(#viteGrad)" />
      <path d="M17.5 7L11 17H16L14.5 25L22 13H17L17.5 7Z" fill="#FFD21E" />
      <defs>
        <linearGradient id="viteGrad" x1="6" y1="6" x2="26" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M9 13.5C10.5 10.5 13 9.5 16.5 10.5C21.5 12 22.5 16.5 20 19C18.5 20.5 16.5 20.5 15.5 22C14 24 15 25.5 18 25.5C20.5 25.5 22 24.5 23 23" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M6 20.5C7.5 17.5 10 16.5 13.5 17.5C18.5 19 19.5 23.5 17 26" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ResponsiveIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="6" width="18" height="13" rx="2" stroke="#6366F1" strokeWidth="1.8" />
      <path d="M9 22H17" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="18" y="13" width="9" height="13" rx="1.5" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.8" />
      <circle cx="22.5" cy="23.5" r="0.8" fill="#6366F1" />
    </svg>
  );
}

function WebApiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" stroke="#0284C7" strokeWidth="1.8" />
      <ellipse cx="16" cy="16" rx="5" ry="11" stroke="#0284C7" strokeWidth="1.5" />
      <path d="M5 16H27M6.5 10.5H25.5M6.5 21.5H25.5" stroke="#0284C7" strokeWidth="1.5" />
    </svg>
  );
}

function SocketIoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" fill="#010101" />
      <path d="M17 7L9 18H16L14 25L23 14H16L17 7Z" fill="#FFFFFF" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L27 10.5V23.5L16 30L5 23.5V10.5L16 4Z" fill="#339933" />
      <path d="M16 11V23M11 14L16 11L21 14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ExpressIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#1E293B" />
      <text x="16" y="21" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">ex</text>
    </svg>
  );
}

function RestApiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="3" y="6" width="26" height="20" rx="5" fill="#0284C7" />
      <text x="16" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">API</text>
    </svg>
  );
}

function AuthIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="7" y="13" width="18" height="14" rx="3" fill="#059669" />
      <path d="M11 13V9C11 6.2 13.2 4 16 4C18.8 4 21 6.2 21 9V13" stroke="#059669" strokeWidth="2.5" fill="none" />
      <circle cx="16" cy="19" r="2" fill="#FFFFFF" />
      <path d="M16 21V23.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function JwtIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" stroke="#D63AFF" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="16" cy="16" r="6" fill="#D63AFF" />
      <text x="16" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">JWT</text>
    </svg>
  );
}

function NestJsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="#EA284E" />
      <path d="M10 22C11 17 14 11 20 8C19 12 19.5 15 22 17C19 18 16 19 14 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M16 3C16 3 9 10 9 18C9 23.5 13 27.5 16 29C19 27.5 23 23.5 23 18C23 10 16 3 16 3Z" fill="#47A248" />
      <path d="M16 3V29C16 29 15.5 24 15.5 18C15.5 12 16 3 16 3Z" fill="#3FA037" />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#336791" />
      <circle cx="16" cy="16" r="9" fill="#FFFFFF" opacity="0.9" />
      <path d="M13 14C13 12 15 11 17 11C19 11 20 12 20 14V19C20 20 19 21 17 21" stroke="#336791" strokeWidth="2" />
    </svg>
  );
}

function MySqlIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#00758F" />
      <text x="16" y="21" textAnchor="middle" fill="#F29111" fontSize="9" fontWeight="900">SQL</text>
    </svg>
  );
}

function RedisIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#DC382D" />
      <path d="M9 13L16 10L23 13L16 16L9 13Z" fill="#FFFFFF" />
      <path d="M9 17L16 20L23 17L16 14L9 17Z" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}

function AgenticAiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="7" y="10" width="18" height="15" rx="4" fill="#7C3AED" />
      <circle cx="12" cy="16" r="2" fill="#FFFFFF" />
      <circle cx="20" cy="16" r="2" fill="#FFFFFF" />
      <path d="M13 21H19" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 6V10" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="5" r="1.5" fill="#7C3AED" />
    </svg>
  );
}

function OpenAiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#10A37F" />
      <circle cx="16" cy="16" r="7" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 2" fill="none" />
      <circle cx="16" cy="16" r="2" fill="#FFFFFF" />
    </svg>
  );
}

function LlmApisIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#6366F1" />
      <path d="M16 7L18.5 13.5L25 16L18.5 18.5L16 25L13.5 18.5L7 16L13.5 13.5L16 7Z" fill="#FFFFFF" />
    </svg>
  );
}

function RagIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="6" width="14" height="18" rx="2" fill="#0284C7" />
      <path d="M10 11H16M10 15H14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="21" cy="21" r="5" fill="#0EA5E9" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M24.5 24.5L27 27" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function OllamaIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#1E293B" />
      <circle cx="12" cy="14" r="1.5" fill="#FFFFFF" />
      <circle cx="20" cy="14" r="1.5" fill="#FFFFFF" />
      <path d="M10 10V18C10 21 12.5 23 16 23C19.5 23 22 21 22 18V10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function VectorDbIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="9" cy="9" r="3" fill="#8B5CF6" />
      <circle cx="23" cy="9" r="3" fill="#8B5CF6" />
      <circle cx="16" cy="23" r="3" fill="#8B5CF6" />
      <path d="M11 10.5L21 10.5M10.5 11.5L14.5 21M21.5 11.5L17.5 21" stroke="#8B5CF6" strokeWidth="1.5" />
    </svg>
  );
}

function QdrantIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#DC2626" />
      <circle cx="16" cy="16" r="7" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      <path d="M20 20L24 24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function LangChainIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#059669" />
      <path d="M12 12C14 10 17 10 19 12M13 19C15 21 18 21 20 19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="10" cy="16" r="3" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="22" cy="16" r="3" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

function FaissIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#2563EB" />
      <path d="M11 16C11 13 14 13 16 16C18 19 21 19 21 16C21 13 18 13 16 16C14 19 11 19 11 16Z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
    </svg>
  );
}

function ChatbotIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M7 9C7 6.8 8.8 5 11 5H21C23.2 5 25 6.8 25 9V17C25 19.2 23.2 21 21 21H13L8 25V20.8C7.4 20.1 7 19.1 7 18V9Z" fill="#3B82F6" />
      <circle cx="12" cy="13" r="1.5" fill="#FFFFFF" />
      <circle cx="16" cy="13" r="1.5" fill="#FFFFFF" />
      <circle cx="20" cy="13" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#F05032" />
      <path d="M21.5 13.5L18.5 10.5M18.5 10.5L15.5 13.5M18.5 10.5V20.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18.5" cy="21.5" r="2" fill="#FFFFFF" />
      <circle cx="13.5" cy="15.5" r="2" fill="#FFFFFF" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#181717" />
      <path d="M16 7C11 7 7 11 7 16C7 20 9.6 23.4 13.2 24.6C13.7 24.7 13.8 24.4 13.8 24.1V22.4C11.3 22.9 10.8 21.3 10.8 21.3C10.4 20.3 9.8 20 9.8 20C9 19.4 9.9 19.4 9.9 19.4C10.8 19.5 11.3 20.4 11.3 20.4C12.1 21.8 13.4 21.4 13.9 21.2C14 20.6 14.2 20.2 14.5 19.9C12.5 19.7 10.4 18.9 10.4 15.5C10.4 14.5 10.7 13.7 11.3 13.1C11.2 12.8 10.9 11.8 11.4 10.6C11.4 10.6 12.2 10.3 13.9 11.5C14.7 11.3 15.4 11.2 16.2 11.2C17 11.2 17.7 11.3 18.5 11.5C20.2 10.3 21 10.6 21 10.6C21.5 11.8 21.2 12.8 21.1 13.1C21.7 13.7 22 14.5 22 15.5C22 18.9 19.9 19.7 17.9 19.9C18.2 20.2 18.5 20.8 18.5 21.7V24.1C18.5 24.4 18.7 24.7 19.2 24.6C22.4 23.4 25 20 25 16C25 11 21 7 16 7Z" fill="#FFFFFF" />
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#000000" />
      <path d="M16 8L25 23H7L16 8Z" fill="#FFFFFF" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#2496ED" />
      <rect x="8" y="14" width="3" height="3" fill="#FFFFFF" />
      <rect x="12" y="14" width="3" height="3" fill="#FFFFFF" />
      <rect x="16" y="14" width="3" height="3" fill="#FFFFFF" />
      <rect x="12" y="10" width="3" height="3" fill="#FFFFFF" />
      <rect x="16" y="10" width="3" height="3" fill="#FFFFFF" />
      <path d="M6 19C7 22 10 24 16 24C22 24 25 21 26 19H6Z" fill="#FFFFFF" />
    </svg>
  );
}

function FirebaseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M7 23L11 6L14 11L7 23Z" fill="#FFA000" />
      <path d="M19 13L16 8L7 23L19 13Z" fill="#F57C00" />
      <path d="M16 26L25 21L21 8L16 26Z" fill="#FFCA28" />
    </svg>
  );
}

function NginxIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#009639" />
      <path d="M11 9V23M11 9L21 23M21 9V23" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#00599C" />
      <text x="12" y="21" fill="#FFFFFF" fontSize="12" fontWeight="bold">C</text>
      <text x="21" y="17" fill="#659AD2" fontSize="9" fontWeight="bold">++</text>
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M16 6C11 6 11 8 11 8V11H16V12.5H8C8 12.5 6 12.5 6 17C6 21.5 8 21.5 8 21.5H10V18.5C10 16 12 16 12 16H17C17 16 19 16 19 14V8C19 8 19 6 16 6Z" fill="#3776AB" />
      <path d="M16 26C21 26 21 24 21 24V21H16V19.5H24C24 19.5 26 19.5 26 15C26 10.5 24 10.5 24 10.5H22V13.5C22 16 20 16 20 16H15C15 16 13 16 13 18V24C13 24 13 26 16 26Z" fill="#FFD43B" />
      <circle cx="13" cy="8.5" r="1" fill="#FFFFFF" />
      <circle cx="19" cy="23.5" r="1" fill="#3776AB" />
    </svg>
  );
}

function CProgIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#1B365D" />
      <text x="16" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">C</text>
    </svg>
  );
}

function SqlIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#0284C7" />
      <ellipse cx="16" cy="10" rx="8" ry="3" fill="#FFFFFF" />
      <path d="M8 10V16C8 17.6 11.6 19 16 19C20.4 19 24 17.6 24 16V10" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M8 16V22C8 23.6 11.6 25 16 25C20.4 25 24 23.6 24 22V16" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

function DsaIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#0F172A" />
      <circle cx="16" cy="9" r="2.5" fill="#38BDF8" />
      <circle cx="10" cy="21" r="2.5" fill="#38BDF8" />
      <circle cx="22" cy="21" r="2.5" fill="#38BDF8" />
      <path d="M14.5 11L11.5 19M17.5 11L20.5 19" stroke="#38BDF8" strokeWidth="1.5" />
    </svg>
  );
}

function VsCodeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M22 4L8 16L22 28L26 25V7L22 4Z" fill="#007ACC" />
      <path d="M18 16L6 9L4 10.5L14 18.5" fill="#1F9CF0" />
      <path d="M18 16L6 23L4 21.5L14 13.5" fill="#0065A9" />
    </svg>
  );
}

function NpmIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#CB3837" />
      <text x="16" y="21" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">npm</text>
    </svg>
  );
}

function PostmanIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" fill="#FF6C37" />
      <circle cx="16" cy="13" r="3.5" fill="#FFFFFF" />
      <path d="M11 22C12 19 14 18 16 18C18 18 20 19 21 22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloudinaryIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#3448C5" />
      <path d="M11 20C9.5 20 8 18.5 8 17C8 15.5 9 14.5 10.5 14C11 12 13 10.5 15.5 10.5C18.5 10.5 20.5 12.5 21 15C22.5 15.2 24 16.5 24 18C24 19.5 22.5 20 21 20H11Z" fill="#FFFFFF" />
    </svg>
  );
}

function RazorpayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#0C2340" />
      <path d="M10 24L17 7H22L15 24H10Z" fill="#0C84EB" />
      <path d="M14 24L19 14H22L17 24H14Z" fill="#3395FF" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// DATA CONFIGURATION
// ─────────────────────────────────────────────────────────────

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    // 01 Frontend
    {
      num: "01",
      title: "Frontend",
      desc: "Building responsive layouts, interactive single page applications, and modern web browser viewports.",
      icon: <Monitor size={18} />,
      accentColor: "#2563eb",
      badgeColor: "rgba(37, 99, 235, 0.1)",
      items: [
        { name: "HTML5", tier: "CORE", icon: <Html5Icon /> },
        { name: "CSS3", tier: "CORE", icon: <Css3Icon /> },
        { name: "JavaScript", tier: "CORE", icon: <JsIcon /> },
        { name: "React", tier: "CORE", icon: <ReactIcon /> },
        { name: "Next.js", tier: "CORE", icon: <NextIcon /> },
        { name: "Vite", tier: "CORE", icon: <ViteIcon /> },
        { name: "Tailwind", tier: "CORE", icon: <TailwindIcon /> },
        { name: "Responsive", tier: "CORE", icon: <ResponsiveIcon /> },
        { name: "Web APIs", tier: "CORE", icon: <WebApiIcon /> },
        { name: "Socket.IO", tier: "WORKING", icon: <SocketIoIcon /> }
      ]
    },

    // 02 Backend
    {
      num: "02",
      title: "Backend",
      desc: "Structuring APIs, secure endpoints, custom middlewares, and real-time event servers.",
      icon: <Server size={18} />,
      accentColor: "#0284c7",
      badgeColor: "rgba(2, 132, 199, 0.1)",
      items: [
        { name: "Node.js", tier: "CORE", icon: <NodeIcon /> },
        { name: "Express.js", tier: "CORE", icon: <ExpressIcon /> },
        { name: "REST APIs", tier: "CORE", icon: <RestApiIcon /> },
        { name: "Authentication", tier: "CORE", icon: <AuthIcon /> },
        { name: "JWT", tier: "CORE", icon: <JwtIcon /> },
        { name: "Socket.IO", tier: "WORKING", icon: <SocketIoIcon /> },
        { name: "NestJS", tier: "EXPLORING", icon: <NestJsIcon /> }
      ]
    },

    // 03 Databases
    {
      num: "03",
      title: "Databases",
      desc: "Modeling schemas, table relations, indexes, caches, and query performance optimizations.",
      icon: <Database size={18} />,
      accentColor: "#059669",
      badgeColor: "rgba(5, 150, 105, 0.1)",
      items: [
        { name: "MongoDB", tier: "CORE", icon: <MongoIcon /> },
        { name: "PostgreSQL", tier: "WORKING", icon: <PostgresIcon /> },
        { name: "MySQL", tier: "WORKING", icon: <MySqlIcon /> },
        { name: "Redis", tier: "WORKING", icon: <RedisIcon /> }
      ]
    },

    // 04 AI / GenAI & Agentic AI
    {
      num: "04",
      title: "AI / GenAI & Agentic AI",
      desc: "Integrating intelligent LLMs, autonomous agents, vector indices, and retrieval chains.",
      icon: <Bot size={18} />,
      accentColor: "#7c3aed",
      badgeColor: "rgba(124, 58, 237, 0.1)",
      items: [
        { name: "Agentic AI", tier: "WORKING", icon: <AgenticAiIcon /> },
        { name: "Generative AI", tier: "CORE", icon: <OpenAiIcon /> },
        { name: "LLM APIs", tier: "CORE", icon: <LlmApisIcon /> },
        { name: "RAG", tier: "WORKING", icon: <RagIcon /> },
        { name: "Ollama", tier: "WORKING", icon: <OllamaIcon /> },
        { name: "Vector DBs", tier: "WORKING", icon: <VectorDbIcon /> },
        { name: "Qdrant", tier: "WORKING", icon: <QdrantIcon /> },
        { name: "LangChain", tier: "WORKING", icon: <LangChainIcon /> },
        { name: "FAISS", tier: "EXPLORING", icon: <FaissIcon /> },
        { name: "AI Chatbots", tier: "CORE", icon: <ChatbotIcon /> }
      ]
    },

    // 05 DevOps & Cloud
    {
      num: "05",
      title: "DevOps & Cloud",
      desc: "Orchestrating script environments, proxies, automated hosting, and container setups.",
      icon: <Cloud size={18} />,
      accentColor: "#0284c7",
      badgeColor: "rgba(2, 132, 199, 0.1)",
      items: [
        { name: "Git", tier: "CORE", icon: <GitIcon /> },
        { name: "GitHub", tier: "CORE", icon: <GitHubIcon /> },
        { name: "Vercel", tier: "CORE", icon: <VercelIcon /> },
        { name: "Docker", tier: "WORKING", icon: <DockerIcon /> },
        { name: "Firebase", tier: "WORKING", icon: <FirebaseIcon /> },
        { name: "Nginx", tier: "WORKING", icon: <NginxIcon /> }
      ]
    },

    // 06 Programming & CS Foundations
    {
      num: "06",
      title: "Programming & CS Foundations",
      desc: "Core computational foundations, data configurations, and algorithm practices.",
      icon: <Code2 size={18} />,
      accentColor: "#f59e0b",
      badgeColor: "rgba(245, 158, 11, 0.1)",
      items: [
        { name: "JavaScript", tier: "CORE", icon: <JsIcon /> },
        { name: "C++", tier: "WORKING", icon: <CppIcon /> },
        { name: "Python", tier: "WORKING", icon: <PythonIcon /> },
        { name: "C", tier: "WORKING", icon: <CProgIcon /> },
        { name: "SQL", tier: "CORE", icon: <SqlIcon /> },
        { name: "DSA", tier: "CORE", icon: <DsaIcon /> }
      ]
    },

    // 07 Tools & Integrations
    {
      num: "07",
      title: "Tools & Integrations",
      desc: "Developer platforms, workflow engines, and environment configurations.",
      icon: <Wrench size={18} />,
      accentColor: "#2563eb",
      badgeColor: "rgba(37, 99, 235, 0.1)",
      items: [
        { name: "VS Code", tier: "CORE", icon: <VsCodeIcon /> },
        { name: "npm", tier: "CORE", icon: <NpmIcon /> },
        { name: "Postman", tier: "CORE", icon: <PostmanIcon /> },
        { name: "Cloudinary", tier: "WORKING", icon: <CloudinaryIcon /> },
        { name: "Razorpay", tier: "WORKING", icon: <RazorpayIcon /> }
      ]
    }
  ];

  const filterItemMatches = (item) => {
    if (activeTab === "all") return true;
    if (activeTab === "build") return item.tier === "CORE";
    if (activeTab === "learn") return item.tier === "WORKING";
    if (activeTab === "improve") return item.tier === "EXPLORING";
    return true;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .skills-page-container {
          padding-top: 110px;
          padding-bottom: 70px;
          max-width: 1220px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
          box-sizing: border-box;
          font-family: 'Outfit', sans-serif;
          color: #0f172a;
        }

        /* ── Top Hero Header with Atmospheric Desk Card ── */
        .skills-hero-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          margin-bottom: 34px;
          flex-wrap: wrap;
        }

        .skills-hero-left {
          flex: 1.15;
          min-width: 320px;
        }

        .skills-section-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 1.5px;
          color: #64748b;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .skills-main-title {
          font-size: 2.6rem;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.8px;
          color: #0f172a;
          margin: 0 0 12px 0;
        }

        .skills-main-title .gradient-word {
          color: #6366f1;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skills-cursor-pipe {
          display: inline-block;
          color: #7c3aed;
          font-weight: 400;
          animation: blinkPipe 1s infinite;
          margin-left: 2px;
        }

        @keyframes blinkPipe {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .skills-main-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #64748b;
          max-width: 580px;
          margin: 0 0 20px 0;
        }

        /* ── 4 Interactive Action Pills ── */
        .skills-action-pills-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .skill-action-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.95);
          font-size: 0.8rem;
          font-weight: 750;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);
        }

        .skill-action-pill:hover {
          background: #ffffff;
          color: #0f172a;
          border-color: #cbd5e1;
          transform: translateY(-1px);
        }

        .skill-action-pill.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
        }

        /* ── Top Right Desk Workspace Visual Card ── */
        .skills-desk-card {
          flex: 0.92;
          min-width: 300px;
          max-width: 440px;
          background: linear-gradient(135deg, #090d16 0%, #0f172a 60%, #1e1b4b 100%);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          padding: 20px 22px;
          box-sizing: border-box;
          color: #f8fafc;
          position: relative;
          overflow: hidden;
        }

        .desk-card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .desk-noida-pill {
          font-size: 0.72rem;
          font-weight: 800;
          color: #38bdf8;
          letter-spacing: 1px;
          font-family: 'JetBrains Mono', monospace;
        }

        .desk-quote-script {
          font-family: 'Caveat', cursive;
          font-size: 1.25rem;
          color: #e2e8f0;
          font-weight: 700;
          transform: rotate(-3deg);
        }

        .desk-workspace-content {
          display: flex;
          gap: 12px;
          align-items: stretch;
          margin-bottom: 12px;
        }

        .desk-books-column {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 110px;
        }

        .desk-book-spine {
          padding: 4px 6px;
          border-radius: 4px;
          font-size: 0.62rem;
          font-weight: 700;
          background: #1e293b;
          border-left: 3px solid;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .desk-terminal-window {
          flex: 1;
          background: #030712;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 10px;
          box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.8);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          line-height: 1.4;
          color: #94a3b8;
        }

        .terminal-dots-row {
          display: flex;
          gap: 4px;
          margin-bottom: 4px;
        }

        .terminal-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .desk-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.7rem;
          color: #cbd5e1;
        }

        /* ══════════════════════════════════════════════════════
           BALANCED & SYMMETRICAL CATEGORY PANELS
        ══════════════════════════════════════════════════════ */

        /* Row 1: 4 Equal Columns on Desktop */
        .skills-grid-row-1 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 18px;
        }

        /* Row 2: 3 Equal Columns on Desktop */
        .skills-grid-row-2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 24px;
        }

        /* Standardized Category Panel Card */
        .skill-category-box {
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 20px 18px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.035);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          min-height: 310px;
        }

        .skill-category-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .category-top-info {
          margin-bottom: 16px;
        }

        .category-title-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .category-icon-bubble {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .category-num-tag {
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.8px;
          color: #94a3b8;
          font-family: 'JetBrains Mono', monospace;
        }

        .category-name-heading {
          font-size: 1.05rem;
          font-weight: 850;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .category-description-text {
          font-size: 0.76rem;
          line-height: 1.4;
          color: #64748b;
          margin: 0;
        }

        /* ── Standardized Tech Items Grid ── */
        .category-items-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 8px;
          align-content: flex-start;
          flex: 1;
        }

        .tech-item-capsule {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 58px;
          text-align: center;
          gap: 4px;
          transition: transform 0.2s ease;
        }

        .tech-item-capsule:hover {
          transform: translateY(-2px);
        }

        .tech-icon-container {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .tech-item-capsule:hover .tech-icon-container {
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
          border-color: #818cf8;
          background: #ffffff;
        }

        .tech-name-label {
          font-size: 0.68rem;
          font-weight: 750;
          color: #334155;
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 56px;
        }

        .tech-status-badge {
          font-size: 0.58rem;
          font-weight: 850;
          letter-spacing: 0.4px;
          padding: 1px 5px;
          border-radius: 100px;
          line-height: 1;
          text-transform: uppercase;
        }

        .badge-core {
          background: rgba(79, 70, 229, 0.1);
          color: #4f46e5;
          border: 1px solid rgba(79, 70, 229, 0.25);
        }

        .badge-working {
          background: rgba(100, 116, 139, 0.1);
          color: #475569;
          border: 1px solid rgba(100, 116, 139, 0.2);
        }

        .badge-exploring {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        /* ── Technology Matrix Banner (Row 3) ── */
        .matrix-banner-card {
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 24px 28px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.035);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          box-sizing: border-box;
          flex-wrap: wrap;
        }

        .matrix-banner-left {
          min-width: 220px;
        }

        .matrix-tag-label {
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 1.5px;
          color: #64748b;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .matrix-banner-heading {
          font-size: 1.55rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.15;
          margin: 0;
        }

        .matrix-banner-heading .matrix-accent {
          color: #0284c7;
          background: linear-gradient(135deg, #0284c7 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .matrix-groups-grid {
          display: grid;
          grid-template-columns: repeat(6, auto);
          gap: 18px 24px;
          flex: 1;
        }

        .matrix-group-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .matrix-group-title {
          font-size: 0.76rem;
          font-weight: 850;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .matrix-pill-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .matrix-pill-tag {
          font-size: 0.72rem;
          font-weight: 650;
          padding: 2px 8px;
          border-radius: 6px;
          background: rgba(241, 245, 249, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          color: #475569;
          white-space: nowrap;
        }

        /* ══════════════════════════════════════════════════════
           RESPONSIVE BREAKPOINTS (NO HORIZONTAL OVERFLOW)
        ══════════════════════════════════════════════════════ */
        @media (max-width: 1140px) {
          .skills-grid-row-1 {
            grid-template-columns: repeat(2, 1fr);
          }
          .skills-grid-row-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          .matrix-groups-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .skills-grid-row-1,
          .skills-grid-row-2 {
            grid-template-columns: 1fr;
          }
          .skills-main-title {
            font-size: 2rem;
          }
          .skills-desk-card {
            max-width: 100%;
            width: 100%;
          }
          .matrix-groups-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .matrix-banner-card {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .skills-page-container {
            padding-top: 96px;
            padding-left: 14px;
            padding-right: 14px;
          }
          .matrix-groups-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="skills-page-container">

        {/* ── TOP HERO HEADER & DESK VISUAL CARD ── */}
        <div className="skills-hero-row">
          <div className="skills-hero-left">
            <span className="skills-section-badge">TECHNICAL ARSENAL</span>
            <h1 className="skills-main-title">
              Tools I use to turn ideas<br />
              into <span className="gradient-word">products.</span>
              <span className="skills-cursor-pipe">|</span>
            </h1>
            <p className="skills-main-desc">
              The tools I use depend on the problem I'm solving. I focus on understanding the system first and choosing technologies that keep the product maintainable and scalable.
            </p>

            {/* 4 Interactive Action Pills */}
            <div className="skills-action-pills-row">
              <button 
                className={`skill-action-pill ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                <span>⚡</span> All Arsenal
              </button>
              <button 
                className={`skill-action-pill ${activeTab === "build" ? "active" : ""}`}
                onClick={() => setActiveTab("build")}
              >
                <span>⚡</span> Build (Core)
              </button>
              <button 
                className={`skill-action-pill ${activeTab === "learn" ? "active" : ""}`}
                onClick={() => setActiveTab("learn")}
              >
                <span>📦</span> Learn (Working)
              </button>
              <button 
                className={`skill-action-pill ${activeTab === "improve" ? "active" : ""}`}
                onClick={() => setActiveTab("improve")}
              >
                <span>🛠</span> Improve (Exploring)
              </button>
            </div>
          </div>

          {/* Top Right Atmospheric Desk Workspace Card */}
          <div className="skills-desk-card">
            <div className="desk-card-top-bar">
              <span className="desk-noida-pill">NOIDA UP &lt;/&gt;</span>
              <span className="desk-quote-script">Plan, Build, Repeat.</span>
            </div>

            <div className="desk-workspace-content">
              {/* Stack of 3 Books */}
              <div className="desk-books-column">
                <div className="desk-book-spine" style={{ borderLeftColor: "#38bdf8", color: "#93c5fd" }}>Clean Code</div>
                <div className="desk-book-spine" style={{ borderLeftColor: "#a855f7", color: "#c084fc" }}>Better Systems</div>
                <div className="desk-book-spine" style={{ borderLeftColor: "#34d399", color: "#6ee7b7" }}>Bigger Dreams</div>
              </div>

              {/* Laptop Terminal Screen */}
              <div className="desk-terminal-window">
                <div className="terminal-dots-row">
                  <span className="terminal-dot" style={{ background: "#ef4444" }} />
                  <span className="terminal-dot" style={{ background: "#f59e0b" }} />
                  <span className="terminal-dot" style={{ background: "#10b981" }} />
                </div>
                <div style={{ color: "#38bdf8", fontWeight: 700 }}>Good Code</div>
                <div style={{ color: "#e2e8f0" }}>Better Tomorrow.</div>
                <div style={{ color: "#64748b", marginTop: "4px" }}>$ git commit -m &quot;ship&quot;</div>
              </div>
            </div>

            <div className="desk-bottom-row">
              <span>☕ Build Learn Improve Repeat</span>
              <span style={{ color: "#64748b" }}>Production Ready</span>
            </div>
          </div>
        </div>

        {/* ── ROW 1: 4 BALANCED CATEGORIES (Frontend, Backend, Databases, AI/GenAI) ── */}
        <div className="skills-grid-row-1">
          {categories.slice(0, 4).map((cat) => (
            <div key={cat.num} className="skill-category-box">
              <div className="category-top-info">
                <div className="category-title-header">
                  <div className="category-icon-bubble" style={{ background: cat.badgeColor, color: cat.accentColor }}>
                    {cat.icon}
                  </div>
                  <div>
                    <span className="category-num-tag">{cat.num}</span>
                    <h3 className="category-name-heading">{cat.title}</h3>
                  </div>
                </div>
                <p className="category-description-text">{cat.desc}</p>
              </div>

              <div className="category-items-grid">
                {cat.items.filter(filterItemMatches).map((item) => (
                  <div key={item.name} className="tech-item-capsule">
                    <div className="tech-icon-container">
                      {item.icon}
                    </div>
                    <span className="tech-name-label" title={item.name}>{item.name}</span>
                    <span className={`tech-status-badge badge-${item.tier.toLowerCase()}`}>
                      {item.tier}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── ROW 2: 3 BALANCED CATEGORIES (DevOps, Programming & CS, Tools & Integrations) ── */}
        <div className="skills-grid-row-2">
          {categories.slice(4, 7).map((cat) => (
            <div key={cat.num} className="skill-category-box">
              <div className="category-top-info">
                <div className="category-title-header">
                  <div className="category-icon-bubble" style={{ background: cat.badgeColor, color: cat.accentColor }}>
                    {cat.icon}
                  </div>
                  <div>
                    <span className="category-num-tag">{cat.num}</span>
                    <h3 className="category-name-heading">{cat.title}</h3>
                  </div>
                </div>
                <p className="category-description-text">{cat.desc}</p>
              </div>

              <div className="category-items-grid">
                {cat.items.filter(filterItemMatches).map((item) => (
                  <div key={item.name} className="tech-item-capsule">
                    <div className="tech-icon-container">
                      {item.icon}
                    </div>
                    <span className="tech-name-label" title={item.name}>{item.name}</span>
                    <span className={`tech-status-badge badge-${item.tier.toLowerCase()}`}>
                      {item.tier}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── ROW 3: TECHNOLOGY MATRIX SUMMARY BANNER ── */}
        <div className="matrix-banner-card">
          <div className="matrix-banner-left">
            <div className="matrix-tag-label">TECHNOLOGY MATRIX</div>
            <h2 className="matrix-banner-heading">
              A unified view<br />
              of <span className="matrix-accent">my stack.</span>
            </h2>
          </div>

          <div className="matrix-groups-grid">
            {/* Frontend */}
            <div className="matrix-group-col">
              <span className="matrix-group-title">Frontend</span>
              <div className="matrix-pill-tags-wrap">
                <span className="matrix-pill-tag">React</span>
                <span className="matrix-pill-tag">Next.js</span>
                <span className="matrix-pill-tag">JavaScript</span>
                <span className="matrix-pill-tag">HTML</span>
                <span className="matrix-pill-tag">CSS</span>
              </div>
            </div>

            {/* Backend */}
            <div className="matrix-group-col">
              <span className="matrix-group-title">Backend</span>
              <div className="matrix-pill-tags-wrap">
                <span className="matrix-pill-tag">Node.js</span>
                <span className="matrix-pill-tag">Express</span>
                <span className="matrix-pill-tag">REST APIs</span>
                <span className="matrix-pill-tag">Socket.IO</span>
              </div>
            </div>

            {/* Database */}
            <div className="matrix-group-col">
              <span className="matrix-group-title" style={{ color: "#059669" }}>Database</span>
              <div className="matrix-pill-tags-wrap">
                <span className="matrix-pill-tag">MongoDB</span>
                <span className="matrix-pill-tag">PostgreSQL</span>
                <span className="matrix-pill-tag">MySQL</span>
                <span className="matrix-pill-tag">Redis</span>
              </div>
            </div>

            {/* AI / GenAI */}
            <div className="matrix-group-col">
              <span className="matrix-group-title" style={{ color: "#7c3aed" }}>AI / GenAI</span>
              <div className="matrix-pill-tags-wrap">
                <span className="matrix-pill-tag">LLM APIs</span>
                <span className="matrix-pill-tag">Gemini</span>
                <span className="matrix-pill-tag">OpenAI</span>
                <span className="matrix-pill-tag">Ollama</span>
                <span className="matrix-pill-tag">RAG</span>
                <span className="matrix-pill-tag">Qdrant</span>
              </div>
            </div>

            {/* DevOps */}
            <div className="matrix-group-col">
              <span className="matrix-group-title">DevOps</span>
              <div className="matrix-pill-tags-wrap">
                <span className="matrix-pill-tag">Docker</span>
                <span className="matrix-pill-tag">Docker Compose</span>
                <span className="matrix-pill-tag">Nginx</span>
                <span className="matrix-pill-tag">PM2</span>
                <span className="matrix-pill-tag">Vercel</span>
                <span className="matrix-pill-tag">Firebase</span>
              </div>
            </div>

            {/* Programming */}
            <div className="matrix-group-col">
              <span className="matrix-group-title">Programming</span>
              <div className="matrix-pill-tags-wrap">
                <span className="matrix-pill-tag">JavaScript</span>
                <span className="matrix-pill-tag">C++</span>
                <span className="matrix-pill-tag">Python</span>
                <span className="matrix-pill-tag">SQL</span>
                <span className="matrix-pill-tag">DSA</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
