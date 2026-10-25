export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  role: string;
  problem: string;
  solution: string;
  keyConcept: string;
  description: string;
  tags: string[];
  accentColor?: string;
  linkText: string;
  href: string;
}

export interface LabExperiment {
  id: string;
  name: string;
  status: string;
  description: string;
  tags: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  index: string;
  description: string;
  skills: {
    name: string;
    level: "Intermediate" | "Beginner / Learning" | "Working Knowledge";
  }[];
}

export interface TechnicalFocusArea {
  index: string;
  title: string;
  description: string;
}

export interface ExplorationArea {
  index: string;
  title: string;
  subtitle: string;
  status: string;
}

export const SITE_METADATA = {
  title: "Michael Shah — Systems & Creative Engineering",
  description:
    "Computer Science student building at the intersection of software, cybersecurity, systems, and experimentation.",
  author: "Michael Shah",
  headline: "THIS IS MICHAEL.",
  subheadline:
    "I build at the intersection of software, security, and experimentation.",
};

export const NAVIGATION_LINKS = [
  { label: "Work", href: "#selected-work" },
  { label: "Lab", href: "#the-lab" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const EDUCATION_INFO = {
  institution: "Jain University",
  faculty: "Faculty of Engineering and Technology (FET)",
  degree: "B.Tech in Computer Science and Engineering",
  status: "Currently Pursuing Undergraduate Studies",
  description:
    "Core curriculum focused on algorithms, discrete mathematics, operating systems, computer networking, database management, and information security.",
  highlights: [
    "Systems Programming & Operating Systems Internals",
    "Data Structures & Algorithm Design",
    "Computer Networks (TCP/IP stack & protocol analysis)",
    "Applied Cryptography & Security Fundamentals",
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "PROGRAMMING",
    index: "01",
    description: "Core languages used for systems construction, scripting, and application engineering.",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "Linux / Bash / Shell Scripting", level: "Intermediate" },
      { name: "C++", level: "Beginner / Learning" },
      { name: "JavaScript / TypeScript", level: "Beginner / Learning" },
    ],
  },
  {
    title: "CYBERSECURITY",
    index: "02",
    description: "Offensive fundamentals, network traffic auditing, and defensive vulnerability inspection.",
    skills: [
      { name: "Kali Linux", level: "Working Knowledge" },
      { name: "Wireshark", level: "Working Knowledge" },
      { name: "Nmap", level: "Working Knowledge" },
      { name: "Linux Security", level: "Working Knowledge" },
      { name: "Networking Protocols", level: "Working Knowledge" },
      { name: "Vulnerability Assessment", level: "Working Knowledge" },
      { name: "Ethical Hacking Fundamentals", level: "Working Knowledge" },
    ],
  },
  {
    title: "SYSTEMS & NETWORKING",
    index: "03",
    description: "Low-level execution environments, operating system mechanics, and protocol architecture.",
    skills: [
      { name: "Linux OS Internals", level: "Working Knowledge" },
      { name: "Computer Architecture", level: "Working Knowledge" },
      { name: "TCP/IP & UDP Protocols", level: "Working Knowledge" },
      { name: "Shell / Bash Scripting", level: "Intermediate" },
      { name: "Process & Memory Models", level: "Working Knowledge" },
    ],
  },
  {
    title: "WEB & SOFTWARE",
    index: "04",
    description: "Modern web standards, modular UI architecture, and version control workflows.",
    skills: [
      { name: "HTML & Modern CSS", level: "Working Knowledge" },
      { name: "React / Next.js", level: "Beginner / Learning" },
      { name: "WebExtensions API", level: "Beginner / Learning" },
      { name: "Git & GitHub", level: "Working Knowledge" },
      { name: "REST APIs & JSON", level: "Working Knowledge" },
    ],
  },
  {
    title: "DATA & AI",
    index: "05",
    description: "Pattern recognition, practical machine learning pipelines, and generative AI tool integration.",
    skills: [
      { name: "Python Data Stack", level: "Working Knowledge" },
      { name: "scikit-learn", level: "Beginner / Learning" },
      { name: "Machine Learning Fundamentals", level: "Beginner / Learning" },
      { name: "LLM APIs & Prompt Architecture", level: "Working Knowledge" },
      { name: "Computer Vision Fundamentals", level: "Beginner / Learning" },
    ],
  },
];

export const TECHNICAL_FOCUS: TechnicalFocusArea[] = [
  {
    index: "01",
    title: "CYBERSECURITY",
    description:
      "Ethical hacking, network security, vulnerability assessment, Linux-based security tooling, security research, and practical security experimentation.",
  },
  {
    index: "02",
    title: "SOFTWARE ENGINEERING",
    description:
      "Building practical software, automation tools, web applications, APIs, and developer-focused systems.",
  },
  {
    index: "03",
    title: "SYSTEMS & NETWORKING",
    description:
      "Linux, networking fundamentals, operating systems, system internals, command-line tooling, and infrastructure concepts.",
  },
  {
    index: "04",
    title: "AI & EXPERIMENTATION",
    description:
      "Exploring AI-assisted development, LLM tooling, automation, experimental applications, and practical AI systems.",
  },
];

export const TECHNICAL_ACTIVITIES = [
  {
    title: "Hands-on Network Security & Protocol Labs",
    tag: "Security Labs",
    description:
      "Configuring isolated virtual network environments to study packet streams, simulate protocol anomalies, and analyze traffic using Wireshark and Nmap.",
  },
  {
    title: "Cross-Platform Utility & Extension Engineering",
    tag: "Tool Construction",
    description:
      "Building real-world developer tools including browser WebExtensions for quota monitoring and serverless file transfer relays designed for segmented networks.",
  },
  {
    title: "Collaborative Academic Engineering & Workshops",
    tag: "FET Jain University",
    description:
      "Engaging in department computer science seminars, hands-on lab sessions, and technical discussions focused on core systems and software engineering.",
  },
  {
    title: "Open Code & Experimental Prototyping",
    tag: "Open Exploration",
    description:
      "Maintaining an active technical notebook and public repositories exploring physics simulation, network pattern recognition, and Linux system mechanics.",
  },
];

export const PERSONAL_INTERESTS = [
  "Football",
  "Volleyball",
  "Badminton",
  "Fitness & Athletics",
  "Systems Architecture",
  "Visual Design & Film",
];

export const SELECTED_PROJECTS: Project[] = [
  {
    id: "ghostshare",
    index: "01 // WORK",
    title: "GhostShare",
    subtitle: "WebRTC Peer-to-Peer File Transfer",
    category: "Distributed Systems / WebRTC P2P",
    status: "Active Prototype",
    role: "System Architecture & Implementation",
    problem:
      "Traditional file transfers depend on centralized cloud storage buckets, third-party authentication, or local network adjacency, creating privacy trade-offs and recurring storage overhead.",
    solution:
      "Engineered a zero-cloud-storage transfer utility streaming DTLS-encrypted binary chunks directly between browsers over WebRTC SCTP data channels, utilizing OPFS for direct-to-disk streaming and Cloudflare Durable Objects for strongly consistent ephemeral signaling.",
    keyConcept:
      "Browser-to-browser WebRTC SCTP streaming with OPFS direct-to-disk writing, backpressure flow control, and authoritative ephemeral session signaling without central cloud storage.",
    description:
      "An anonymous, browser-based peer-to-peer file transfer application. Files stream directly browser-to-browser across end-to-end DTLS-encrypted WebRTC SCTP data channels using 8-digit pairing codes, OPFS direct-to-disk streaming, and SQLite-backed Cloudflare Durable Objects for ephemeral signaling with zero central cloud file storage.",
    tags: ["WebRTC", "SCTP Data Channels", "OPFS Streaming", "Cloudflare Durable Objects", "Next.js", "OpenNext"],
    accentColor: "accent-cyan",
    linkText: "View Repository",
    href: "https://github.com/shshmichael020-alt/ghostshare",
  },
  {
    id: "snapse",
    index: "02 // WORK",
    title: "Snapse",
    subtitle: "Desktop Task Manager & Hardware Telemetry Suite",
    category: "Desktop Systems / Hardware Telemetry",
    status: "Windows V1 Prototype",
    role: "Desktop Architecture & Systems Implementation",
    problem:
      "Default operating system diagnostic tools can be opaque, heavyweight, or lack granular per-core diagnostics, visual process trees, and safe process termination guards.",
    solution:
      "Engineered a modern Windows desktop task manager and hardware monitor in Tauri 2 and Rust, combining real-time hardware telemetry (CPU, RAM, disk I/O, network), process hierarchy inspection, and identity-verified process termination guards to prevent PID reuse race conditions.",
    keyConcept:
      "Low-overhead native hardware telemetry collection via sysinfo and Win32 APIs coupled with identity-verified process control safety guards and interactive Three.js 3D resource visualization.",
    description:
      "A modern, high-performance Windows desktop task manager and hardware system monitor built with Tauri 2, Rust, and React. Combines real-time normalized hardware telemetry (CPU, memory, disk I/O, network), process tree inspection, guarded process lifecycle controls (WM_CLOSE and TerminateProcess), and 3D WebGL resource landscapes.",
    tags: ["Tauri 2", "Rust", "Win32 APIs", "React", "TypeScript", "Three.js WebGL", "System Telemetry"],
    accentColor: "accent-cyan",
    linkText: "View Repository",
    href: "https://github.com/shshmichael020-alt/snapse-system-monitor",
  },
  {
    id: "ai-limit",
    index: "03 // WORK",
    title: "AI Limit",
    subtitle: "Privacy-First Chromium HUD for AI Usage Tracking",
    category: "Browser Extension / Manifest V3",
    status: "Active Development",
    role: "Extension Architecture & Frontend",
    problem:
      "Developers and students using multiple AI providers (ChatGPT, Claude, Gemini, Copilot) frequently hit unexpected usage cutoffs due to opaque, fragmented quota windows without unified local visibility.",
    solution:
      "Engineered a Chromium browser extension maintaining two strictly separated lanes: provider-visible quota detection where officially exposed, and local O200K token activity estimation, keeping all prompts and session data strictly on-device.",
    keyConcept:
      "Dual-lane architecture separating official provider-visible percentage data from local token counting heuristics, ensuring unverified estimates are never falsified as official quota.",
    description:
      "A working Chromium browser-extension prototype providing a privacy-first usage HUD across ChatGPT, Claude, Gemini, and GitHub Copilot. Accurately distinguishes provider-visible quota data from locally measured activity, operating with zero external analytics and zero credential transmission.",
    tags: ["Chromium Extension (MV3)", "TypeScript", "O200K Tokenizer", "Client-Side State", "Privacy-First"],
    accentColor: "accent-violet",
    linkText: "View Repository",
    href: "https://github.com/shshmichael020-alt/Universial_Ai_Limit_Checker",
  },
  {
    id: "deeptrust",
    index: "04 // WORK",
    title: "DeepTrust",
    subtitle: "Synthetic Video & Deepfake Detection Prototype",
    category: "Computer Vision / Security",
    status: "Research Prototype",
    role: "Concept Exploration & Prototype",
    problem:
      "Synthetic media and real-time deepfakes pose emerging verification risks in remote video communications and online identity verification.",
    solution:
      "Developed an experimental prototype investigating browser-accessible visual heuristics and frame artifact detection for video conferencing feeds (Google Meet, Zoom).",
    keyConcept:
      "Lightweight spatial and temporal heuristic evaluation of facial boundary coherence to spot anomalous synthetic blending in video streams.",
    description:
      "An experimental prototype exploring browser-based detection of possible deepfake or synthetic video content in conferencing environments such as Google Meet and Zoom, operating at the intersection of AI, cybersecurity, and media authenticity.",
    tags: ["AI / Computer Vision", "Cybersecurity", "Video Authenticity", "Heuristic Analysis", "Prototype"],
    accentColor: "accent-cyan",
    linkText: "View Project Details",
    href: "https://github.com/shshmichael020-alt",
  },
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: "physics-online",
    name: "physics-online",
    status: "Public Project",
    description:
      "Interactive physics and scientific visualization project exploring browser-based computational models and canvas rendering.",
    tags: "Physics / Scientific Visualization",
    href: "https://github.com/shshmichael020-alt/physics_online",
  },
  {
    id: "ml-network-algorithms",
    name: "ml-network-algorithms",
    status: "Exploration",
    description:
      "Machine learning experiments and pattern recognition involving simulated network traffic flows and packet telemetry.",
    tags: "Machine Learning / Network Data",
    href: "https://github.com/shshmichael020-alt/ML-Algorithms-Project",
  },
  {
    id: "nmap-topology",
    name: "nmap-topology-scanner",
    status: "Security Lab",
    description:
      "Automated network scanning scripts and service signature analysis for hands-on cybersecurity learning and port posture assessment.",
    tags: "Cybersecurity / Nmap / Python",
    href: "https://github.com/shshmichael020-alt",
  },
  {
    id: "linux-systems",
    name: "linux-systems-experiments",
    status: "Systems Study",
    description:
      "Hands-on explorations of Linux operating system mechanics, process isolation, namespace boundaries, and shell pipelines.",
    tags: "Linux / Systems / Runtimes",
    href: "https://github.com/shshmichael020-alt",
  },
];

export const CONTACT_INFO = {
  email: "shshmichael020@gmail.com",
  emailHref: "mailto:shshmichael020@gmail.com",
  github: {
    handle: "github.com/shshmichael020-alt",
    href: "https://github.com/shshmichael020-alt",
  },
  linkedin: {
    handle: "linkedin.com/in/michael-shah-87a993313",
    href: "https://www.linkedin.com/in/michael-shah-87a993313/",
  },
  copyright: "© 2026 MICHAEL SHAH",
  colophon: "SYSTEMS & CREATIVE ENGINEERING",
};

/**
 * Production Formspree Contact Endpoint (GitHub Pages static export compatible)
 */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbglnvwd";

/**
 * Environment-Aware Base Path
 * - GitHub Pages builds set NEXT_PUBLIC_BASE_PATH=/michael-shah-portfolio
 * - Cloudflare Pages and local development leave it unset/empty ("")
 */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const BASE_PATH = rawBasePath
  ? (rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`).replace(/\/$/, "")
  : "";




