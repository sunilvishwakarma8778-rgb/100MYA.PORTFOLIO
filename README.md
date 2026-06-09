# Saumya Singh — Portfolio Website

A premium, animated React portfolio built with Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ installed
- npm or yarn

### Steps to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser at http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
```
Output goes to `dist/` folder.

## 🌐 Deploy to GitHub + Vercel

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Saumya portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/saumya-portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** ✅

### Step 3 — Custom Domain (optional)
In Vercel dashboard → Settings → Domains → Add your domain

---

## 📁 Project Structure

```
saumya-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cursor.jsx      — Custom animated cursor
│   │   ├── Navbar.jsx      — Sticky navigation
│   │   ├── Hero.jsx        — Full-screen landing with particles
│   │   ├── About.jsx       — About + stats section
│   │   ├── Skills.jsx      — Animated skill bars
│   │   ├── Projects.jsx    — Project list with hover effects
│   │   ├── Education.jsx   — Timeline layout
│   │   ├── Strengths.jsx   — 4-card strengths grid
│   │   ├── Contact.jsx     — Contact section
│   │   └── Footer.jsx      — Footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           — Global styles & CSS variables
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `src/index.css` → `:root`
- **Content**: Update data arrays in each component file
- **Add Photo**: In `Hero.jsx`, replace the `hero-initials` div with an `<img>` tag
- **Portfolio link**: Update the `href` in `Contact.jsx`

## ✨ Features

- Particle canvas background on hero
- Custom gold cursor with magnetic ring
- Scroll-triggered animations (IntersectionObserver)
- Animated skill progress bars
- Responsive design (mobile-first)
- Sticky navbar with blur backdrop
- Floating animated elements
- Smooth section transitions
