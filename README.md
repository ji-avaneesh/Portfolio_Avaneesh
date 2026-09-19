# Avaneesh Kumar — Portfolio

> Full Stack Developer & AI Product Builder | MCA Graduate from HBTU Kanpur

A modern, high-performance developer portfolio built with **React 19**, **Vite**, and **Framer Motion**. Designed with a bespoke frosted glassmorphic aesthetic, ambient interactive physics, dynamic SEO routing, and verified project showcases.

---

## 🌟 Features

- **Frosted Glassmorphic Design System:** Custom CSS token architecture utilizing translucent glass cards, backdrop blur filters, and atmospheric pastel radial gradients.
- **Micro-Interactions & Animations:** Fluid cursor ripple effects ([`useRipple`](file:///Users/avaneeshkumar/Desktop/portfolio/src/hooks/useRipple.js)), morphing liquid blobs with SVG goo filters ([`LiquidBlob`](file:///Users/avaneeshkumar/Desktop/portfolio/src/components/LiquidBlob.jsx)), and animated page transitions with [`framer-motion`](https://www.framer.com/motion/).
- **Dynamic SEO & Open Graph Support:** Intelligent per-route titles, meta descriptions, JSON-LD structured schemas, and social share previews ([`og-image.png`](file:///Users/avaneeshkumar/Desktop/portfolio/public/og-image.png)) for WhatsApp, LinkedIn, and Twitter.
- **Interactive Project Filtering:** Filter between Built Projects and In-Development Featured Concepts with live counter badges.
- **Printable Resume:** Standalone printable resume accessible at `/resume.html` with print-specific CSS media queries.
- **Accessibility & Motion Preferences:** Built-in support for `prefers-reduced-motion` with static graceful degradation.
- **Single Page Application (SPA) Rewrites:** Configured with [`vercel.json`](file:///Users/avaneeshkumar/Desktop/portfolio/vercel.json) to eliminate 404 errors on deep route hard refreshes.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Motion & Animation** | [Framer Motion](https://www.framer.com/motion/) + Vanilla CSS Keyframes |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Code Quality** | [Oxlint](https://oxc.rs/) |
| **Styling** | Modular Vanilla CSS Variables & Glassmorphic Utilities |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Branded browser tab icon
│   ├── og-image.png            # 1200x630 Open Graph preview banner
│   ├── resume.html             # Printable HTML resume
│   └── images/
│       ├── profile/
│       │   └── profile_avatar.png  # Profile avatar image
│       └── projects/
│           ├── aura_ai_thumb.png   # Aura AI project thumbnail
│           └── anr_insta_thumb.png # Enterprise platform thumbnail
├── src/
│   ├── assets/                 # Static vector assets and isometric 3D models
│   ├── components/             # Reusable UI primitives (GlassCard, RippleButton, SEO, Navbar, Footer)
│   ├── data/                   # Centralized data sources (portfolioData.js, siteConfig.js)
│   ├── hooks/                  # Custom React hooks (useRipple, useReducedMotion, useScrollReveal)
│   ├── layouts/                # MainLayout wrapper
│   ├── pages/                  # Dedicated page views (Home, About, Projects, Skills, Experience, Education, Contact, NotFound)
│   ├── styles/                 # Design system tokens (variables, globals, glass, liquid, animations)
│   ├── App.jsx                 # Route definitions and transitions
│   └── main.jsx                # Application root entrypoint
├── index.html                  # HTML5 entrypoint with social meta tags
├── vercel.json                 # Vercel SPA rewrites configuration
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies and scripts
```

---

## 🚀 Projects Overview

### Built Projects
1. **PDF AI Assistant** — Intelligent helper enabling semantic document search, conversational Q&A, and summaries from PDFs. *(Next.js, React, Gemini API, Pinecone)*
2. **Cyber Kavach VPN** — Secure virtual private network script configurations mapping local client tunnels. *(Bash, OpenVPN, Networking)*
3. **Store Rating Fullstack** — Retail analytics dashboard capturing customer feedback, rating trends, and business metrics. *(React, Express, Node.js, MongoDB)*
4. **Cyber Kavach** — Cybersecurity scanner mapping firewalls, open ports, security audits, and vulnerabilities. *(Python, Bash, Linux)*
5. **TRON Neon Snake** — Arcade Snake game styled with futuristic TRON neon color themes and collision engines. *(HTML5 Canvas, CSS3, JavaScript)*
6. **Tictoe Game** — Browser-based game featuring modular AI opponent logics. *(HTML, CSS, JavaScript)*
7. **Bio-Data** — Structured resume and bio-data builder with printable exports. *(React, CSS3, JavaScript)*
8. **AI Document Q&A System** — RAG-driven document manager for local and cloud LLM answers. *(Next.js, Ollama, ChromaDB, Python)*
9. **AI Chatbot** — Conversational chat interface with persistent session memory. *(React, Node.js, Express, Gemini API)*
10. **Phishing URL Detector** — Machine learning heuristics engine verifying security scores of URLs. *(Python, Scikit-Learn, Flask)*
11. **DS Practice Library** — Data structures and algorithms implementation library in C++. *(C++, Algorithms, DSA)*
12. **File Management System** — Local file storage manager supporting metadata indexing and downloads. *(Node.js, Express, EJS)*

### In-Development Concepts
- **Aura AI** — Local personal life engine coordinating contextual tasks and memory logs.
- **ANR Pvt Ltd** — Scalable enterprise platform showcasing product lineups and architectures.
- **CleanX** — Developer CLI utility suite auditing disk usage and purging redundant packages.
- **QnA Generator** — Curriculum flashcard generator parsing raw study materials with LLMs.

---

## 💻 Installation & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `pnpm`

### Step 1: Clone the repository
```bash
git clone https://github.com/ji-avaneesh/portfolio.git
cd portfolio
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Run development server
```bash
npm run dev
```
Open [http://localhost:3030](http://localhost:3030) in your browser.

### Step 4: Validate code & build
```bash
# Run ultra-fast linter
npm run lint

# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Environment Variables

This portfolio operates completely out-of-the-box with **zero required environment variables**.

Optional integrations (e.g. connecting a remote form provider such as Web3Forms or EmailJS):
```env
# Optional: Form submission API key
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

---

## 🌐 Deployment

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: initial release"
   git push origin main
   ```
2. Import the repository into [Vercel](https://vercel.com/new).
3. The framework preset is automatically detected as **Vite**.
4. Click **Deploy**. The `vercel.json` file ensures client-side routing works seamlessly across all paths.

---

## 📬 Contact & Connect

- **Email:** [jiavaneesh399@gmail.com](mailto:jiavaneesh399@gmail.com)
- **Phone:** [+91 9140487098](tel:9140487098)
- **GitHub:** [@ji-avaneesh](https://github.com/ji-avaneesh)
- **Location:** Pan India / Remote

---

© 2026 **Avaneesh Kumar**. All rights reserved.
