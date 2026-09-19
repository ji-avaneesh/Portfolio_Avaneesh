import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

const routeMetadata = {
  "/": {
    title: "Avaneesh Kumar | Full Stack Developer | AI/GenAI | Agentic AI",
    description: "Building full-stack applications and AI-powered products with modern web and Agentic AI technologies. MCA Graduate from HBTU Kanpur."
  },
  "/about": {
    title: "About | Avaneesh Kumar",
    description: "Learn about Avaneesh Kumar — Full Stack Developer & AI/GenAI builder with a strong mathematical foundation from B.Sc. and MCA from HBTU Kanpur."
  },
  "/projects": {
    title: "Projects | Avaneesh Kumar",
    description: "Explore the 4-tier project architecture of Avaneesh Kumar: Main Projects, Active Current Builds, Side Projects, and the Vision Project ORTHIA."
  },
  "/skills": {
    title: "Skills | Avaneesh Kumar",
    description: "Technical skills of Avaneesh Kumar across Frontend, Backend, Databases, AI/GenAI & Agentic AI, Cloud, and Systems Engineering."
  },
  "/experiment": {
    title: "Experiments & Prototypes | Avaneesh Kumar",
    description: "Exploratory software experiments, prototypes, and side projects built by Avaneesh Kumar."
  },
  "/experience": {
    title: "Experience | Avaneesh Kumar",
    description: "Professional journey and industry experience of Avaneesh Kumar: Freelance Developer, Software Engineer Intern at Cloud Kitchen Service, and Full Stack Developer Intern at VPN Digital Services Pvt. Ltd."
  },
  "/education": {
    title: "Education | Avaneesh Kumar",
    description: "Academic background of Avaneesh Kumar — MCA from Harcourt Butler Technical University (HBTU) Kanpur and B.Sc. Mathematics."
  },
  "/certifications": {
    title: "Certifications | Avaneesh Kumar",
    description: "Technical certifications and verified industry credentials of Avaneesh Kumar across Data Structures, Frontend Development, JavaScript, C++, and Systems."
  },
  "/contact": {
    title: "Contact | Avaneesh Kumar",
    description: "Get in touch with Avaneesh Kumar for full-time developer roles, AI/full-stack product development, or technical collaborations."
  }
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const meta = routeMetadata[currentPath] || {
      title: "404 Not Found | Avaneesh Kumar",
      description: "The requested resource could not be found."
    };

    // Update dynamic document title
    document.title = meta.title;

    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        if (name.startsWith("og:") || name.startsWith("twitter:")) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const ogImageUrl = `${window.location.origin}/og-image.png`;

    setMeta("description", meta.description);
    setMeta("keywords", "Avaneesh Kumar, Full Stack Developer, React Developer, Node.js Developer, AI Developer, GenAI Developer, Agentic AI, LLM, RAG, HBTU Kanpur, Noida");
    setMeta("og:title", meta.title);
    setMeta("og:description", meta.description);
    setMeta("og:type", "website");
    setMeta("og:url", window.location.href);
    setMeta("og:image", ogImageUrl);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", ogImageUrl);

    // Build verified social profile links for JSON-LD schema
    const socialLinks = [];
    if (siteConfig.socials.github && siteConfig.socials.github !== "#") {
      socialLinks.push(siteConfig.socials.github);
    }
    if (siteConfig.socials.linkedin && siteConfig.socials.linkedin !== "#") {
      socialLinks.push(siteConfig.socials.linkedin);
    }

    // JSON-LD Schema
    let schemaScript = document.getElementById("jsonld-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "jsonld-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Avaneesh Kumar",
      "jobTitle": "Full Stack Developer | AI/GenAI | Agentic AI",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "India"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Harcourt Butler Technical University (HBTU) Kanpur"
      },
      "url": window.location.origin,
      "sameAs": socialLinks
    });
  }, [location.pathname]);

  return null;
}
