# Michael Shah — Portfolio

A high-performance personal portfolio for **Michael Shah** (Computer Science / B.Tech CSE student at Jain University, FET), showcasing systems engineering, cybersecurity tools, and technical experiments.

Built with a dark editorial visual language inspired by architectural grids, cinematic lighting, and technical monospace HUD elements.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Email Transmission**: [Resend](https://resend.com/)
- **Icons & Graphics**: Custom SVG / Lucide-style iconography

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.18.0 or later (v20+ recommended)
- **npm**: v9+ or later

### 2. Installation
Extract the package and install project dependencies:
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the project root:
```env
# Optional: Resend API Key for direct contact form transmissions
RESEND_API_KEY=your_resend_api_key_here

# Optional: Custom sender and recipient emails
CONTACT_TO_EMAIL=shshmichael020@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```
*(Note: If no API key is provided, the contact endpoint runs in safe development mode and simulates email transmission in the console.)*

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Creating a Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
michael-shah-portfolio/
├── public/
│   └── assets/
│       ├── hero.mp4               # Cinematic hero intro video
│       ├── hero.webm              # Optimized WebM fallback
│       ├── poster.jpg             # High-res hero portrait
│       ├── about-portrait-dark.png# Portrait integrated with dark canvas
│       └── noise.png              # Film grain texture
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/route.ts   # Server-side Resend email dispatch & honeypot
│   │   ├── layout.tsx             # Root layout with fonts, metadata & grain
│   │   ├── page.tsx               # Primary single-page portfolio layout
│   │   └── globals.css            # Base styles and animations
│   ├── components/
│   │   ├── Header.tsx             # Fixed navigation bar
│   │   ├── CinematicHero.tsx      # Dual-layer hero (Poster + Video Background)
│   │   ├── SelectedWork.tsx       # Featured project case studies
│   │   ├── ProjectCard.tsx        # Project card component
│   │   ├── LabSection.tsx         # The Lab experiments grid
│   │   ├── AboutSection.tsx       # Asymmetric editorial bio & interests
│   │   ├── ContactSection.tsx     # Direct transmission form & verified links
│   │   └── ContactForm.tsx        # Client interactive form with validation
│   └── lib/
│       └── constants.ts           # Central source of truth for all content
├── tailwind.config.ts             # Custom typography, colors, and layout tokens
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Project scripts and dependencies
```

---

## 📄 License
© 2025 Michael Shah. All rights reserved.
