# Portfolio Setup Instructions

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Clean Installation
\`\`\`bash
# Remove existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Or on Windows:
rmdir /s node_modules
del package-lock.json
\`\`\`

### 2. Install Dependencies
\`\`\`bash
# Install with legacy peer deps to resolve conflicts
npm install --legacy-peer-deps

# Alternative: Force installation
npm install --force
\`\`\`

### 3. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

### 4. Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

## Troubleshooting

### If you get ERESOLVE errors:
\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

### If Next.js is not recognized:
\`\`\`bash
# Clear npm cache
npm cache clean --force

# Reinstall
npm install --legacy-peer-deps
\`\`\`

### If port 3000 is busy:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

## Project Structure
\`\`\`
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── projects-section.tsx
│   ├── experience-section.tsx
│   ├── skills-section.tsx
│   ├── contact-section.tsx
│   └── navbar.tsx
├── hooks/
├── lib/
├── public/
│   └── images/
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
\`\`\`

## Deployment
Ready to deploy on Vercel, Netlify, or any other platform that supports Next.js.
