# MD SAKIB HOSEN — 3D Personal Portfolio Website

A futuristic, highly interactive 3D personal portfolio website for **MD SAKIB HOSEN**, Full Stack Developer & UI/UX Designer.

Built with **React, TypeScript, Three.js, Tailwind CSS, and Motion**, featuring real-time WebGL visuals, mobile-first responsive design, and zero performance compromises.

---

## 🌟 Key Features

- **Genuine 3D WebGL Experiences**:
  - Interactive 3D Developer Core with floating geometric crystal, cyber-rings, and code cubes that track mouse/touch movement in real-time.
  - Ambient 3D background particle matrix with adaptive framerate.
  - 3D Graduation crystal badge for the Education section.
- **Mobile-First & Adaptive Performance**:
  - Automatically scales down 3D particle count and DPR on mobile devices and respects `prefers-reduced-motion`.
  - Pause-on-scroll IntersectionObserver to save battery life.
- **Complete Profile & Authenticated Showcase**:
  - **About Me**: 6+ Years Experience, Full Stack, UI/UX, Bot Development & Automation, Ethical Security Tooling.
  - **Skills**: HTML, CSS, JavaScript, PHP, Python, Node.js, React, MySQL, MongoDB.
  - **8 Projects**:
    1. Messenger Group Adda Bot
    2. Ethical Hacking / Cybersecurity Tool (Connected with DarkByteCrew Facebook page)
    3. Telegram Bot
    4. E-commerce Website
    5. SMM Panel
    6. Loan Website
    7. Deposit Website
    8. Earning Website
  - **Experience**: Independent Developer (6+ Years, 2019 — Present)
  - **Education**: HSC, Govt Akbar Ali College (2025)
  - **Achievements**: Clean roadmap section (*"More milestones coming soon."*)
  - **Interactive Contact**: Form with validation, honey-pot spam protection, and direct social cards (Email, WhatsApp, Facebook, Messenger, Telegram).
  - **CV Download**: Integrated interactive viewer, printable resume view, and direct download for `/public/MD-SAKIB-HOSEN-CV.pdf`.

---

## 🚀 Deploying to Render

This project is pre-configured for instant deployment on [Render](https://render.com).

### Method 1: Deploy as a Static Site (Recommended)

1. Push your repository to GitHub or GitLab.
2. Log in to [Render Dashboard](https://dashboard.render.com/) and click **New +** > **Static Site**.
3. Connect your repository.
4. Set the following build settings:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. In **Redirects / Rewrites**, add:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`
6. Click **Create Static Site**.

### Method 2: Deploy using `render.yaml` (Blueprint)

Render will automatically recognize the included `render.yaml` file in the root directory and configure the static site with optimal security headers.

---

## 🛠️ Adding Your CV and Custom Photo

1. **CV PDF File**:
   - Place your PDF resume in the `public/` directory named:
     `public/MD-SAKIB-HOSEN-CV.pdf`
   - The "Download CV" buttons will instantly serve this file.

2. **Profile Photo**:
   - Place your portrait image in `public/avatar.jpg` or update `photoUrl` in `src/components/About.tsx`.

3. **Data Updates**:
   - All personal data, social links, project descriptions, and experience items are centrally maintained in `src/data/portfolioData.ts`.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📄 License
© 2026 MD SAKIB HOSEN. All rights reserved.
