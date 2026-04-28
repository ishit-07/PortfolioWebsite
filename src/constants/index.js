import blogger from "../assets/blogger.png";
import Weather from "../assets/Weather.png";
import tictactoe from "../assets/TicTacToe.png";
import Asus from "../assets/AsusROG.png";
import Portfolio from "../assets/Portfolio.png";
import realTimeChatApp from "../assets/realTimeChatApp.png";
import HousitizeEstate from "../assets/HousitizeEstate.png";
import financialDashboard from "../assets/financial-dashboard.png";
import repomindAnalysis from "../assets/repomind-analysis.png";

export const ABOUT_TEXT = `I am a full-stack developer focused on building responsive, production-ready web applications with React, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB. My recent work includes SaaS-style dashboards, real-time applications, admin panels, and GenAI products that combine RAG, AST-based code analysis, and LLM integrations. I enjoy turning complex product requirements into clean user experiences, scalable APIs, and maintainable systems that feel fast and reliable across devices.`;

export const HERO_TEXT = `Full-stack developer building modern web products with React, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB. I create responsive dashboards, real-time apps, and GenAI-powered tools with practical focus on clean UI, strong data flows, API design, and reliable user experiences.`;

export const EXPERIENCE = [
  {
    year: "Sep 2025 - Present",
    role: "Full-Stack Developer",
    company: "Housitize",
    description: `Built and maintained full-stack web applications including a Real Estate platform, a Medicine E-commerce website (similar to Tata 1mg), and a Cloud Service platform. Developed both frontend and backend systems with secure authentication, dynamic routing, and optimized performance. Created feature-rich admin panels for product, property, order, and user management to streamline business operations. Enhanced application performance and UX with efficient API integration, Redux state management, and server-side rendering.`,
    technologies: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    year: "May 2024 - Present",
    role: "Remote",
    company: "Freelance Full-Stack Developer",
    description: `Developed 2+ end-to-end web solutions including landing pages, portfolios, and admin dashboards using React,
 Tailwind CSS, Next.js, Node.js, and Express.js. Optimized server and client-side performance, achieving up to 35% faster load times through lazy loading, caching
 strategies, and code splitting. Constructed and integrated over 10 RESTful APIs with robust state management using React Context.`,
    technologies: [
      "JavaScript",
      "Tailwind CSS",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    year: "August 2023 - October 2023",
    role: "Intern",
    company: "Shiga",
    description: `During my internship, I actively contributed to projects by implementing responsive designs, optimizing website
performance, and integrating new features using HTML5, CSS3, and JavaScript, including frameworks like React.js.
I collaborated closely with the development team, participated in code reviews, and provided solutions to enhance
project efficiency. This experience honed my frontend development skills and provided valuable insights into
industry best practices and the software development lifecycle.`,
    technologies: ["JavaScript", "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "Repomind",
    image: repomindAnalysis,
    description:
      "An AI-powered codebase assistant that ingests public GitHub repositories and lets users explore them through natural language. It combines Next.js, Express.js, MongoDB, Gemini, RAG, Babel AST parsing, dependency graphs, file trees, and Mermaid diagrams for deeper repository understanding.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI",
      "RAG",
      "AST",
    ],
    link: "https://github.com/ishit-07/Repomind",
  },
  {
    title: "Real-Time Chat App",
    image: realTimeChatApp,
    description:
      "Enabled real-time messaging with Socket.io, supporting simultaneous conversations among 50+ users. Secured authentication and authorisation using JWT and Express middleware, eliminating unauthorised access. Crafted a responsive UI using React and Tailwind CSS, achieving a 95+ accessibility score on Lighthouse.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    link: "https://github.com/ishit-07/RealTime_ChatAPP",
  },
  {
    title: "Financial Dashboard",
    image: financialDashboard,
    description:
      "A production-quality finance dashboard built with React, Vite, Tailwind CSS, Zustand, and Recharts. It supports transaction CRUD, role-based Admin and Viewer modes, advanced filters, responsive analytics, anomaly insights, dark mode, local persistence, and one-click CSV export.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Recharts",
      "JavaScript",
    ],
    link: "https://financial-dashboard-sandy-omega.vercel.app",
  },
  {
    title: "Housitize Estate",
    image: HousitizeEstate,
    description:
      "We built a full-stack real estate platform from scratch as a Freelance Developer using Next.js, Express.js, Node.js, MongoDB, and Redux Toolkit. Implemented property listings, search & filter, authentication and Form validation with a responsive, user-friendly interface.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
    ],
    link: "https://housitize-vgnu.vercel.app/",
  },
  {
    title: "Portfolio",
    image: Portfolio,
    description:
      "My portfolio website, built with React and styled with Tailwind CSS, showcases my skills, projects, and professional journey. Enjoy a responsive, modern design with easy navigation and detailed insights into my work and experience.",
    technologies: ["Tailwind", "React", "Framer-motion"],
    link: "https://github.com/ishit-07/PortfolioWebsite",
  },
  {
    title: "Blogger",
    image: blogger,
    description: `Created a React-based blog website enabling users to add, read, and delete blogs, as well as showcase their own
content. Incorporated a JSON server for efficient handling of blog operations including deletion, addition, and
retrieval`,
    technologies: ["JavaScript", "React", "JSON"],
    link: "https://github.com/ishit-07/Blogger",
  },
  {
    title: "Weather App",
    image: Weather,
    description: `The weather app using HTML, CSS, and JavaScript delivers real-time weather information for user-specified
locations, featuring current conditions and multi-day forecasts with dynamic updates.The app utilizes API to fetch weather data, offering an interactive and user-friendly interface for users to access
weather details for their chosen locations.
`,
    technologies: ["JavaScript", "HTML", "CSS", "API"],
    link: "https://github.com/ishit-07/Weather-app",
  },
  {
    title: "Tic Tac Toe",
    image: tictactoe,
    description: ` It is a classic two-player game where players take turns marking X or O on a 3x3 grid. The objective is to get three
of your marks in a row, either horizontally, vertically, or diagonally, while preventing your opponent from doing the
same`,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/ishit-07/TicTacToe",
  },
  {
    title: "ASUS ROG Website",
    image: Asus,
    description: "This website is a clone of Asus Rog website.",
    technologies: ["HTML", "CSS"],
    link: "https://github.com/ishit-07/Asus-ROG",
  },
];
