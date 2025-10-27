import blogger from "../assets/blogger.png";
import Weather from "../assets/Weather.png";
import tictactoe from "../assets/TicTacToe.png";
import Asus from "../assets/AsusROG.png";
import Portfolio from "../assets/Portfolio.png";
import realTimeChatApp from "../assets/realTimeChatApp.png";
import HousitizeEstate from "../assets/HousitizeEstate.png";

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Having recently completed my studies, I have gained experience working with technologies like React, Next.js, Tailwind CSS,  Node.js, Express.js and MongoDB through various projects and internship. My journey in web development began with a deep curiosity for how things work, and it has evolved into a pursuit where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const HERO_TEXT = `Results-oriented and recently graduated full-stack developer proficient in building scalable web applications. Possessing a strong skill set in front-end development with HTML, CSS, JavaScript, React, Tailwind CSS, and back-end development using Node.js, Express.js and MongoDB, gained through practical projects and an internship. Committed to applying technical knowledge and enthusiasm to drive business growth and create impactful user experiences.`;

export const EXPERIENCE = [
  {
    year: "May 2024 - Present",
    role: "Remote",
    company: "Freelance Full-Stack Developer",
    description: `Developed 2+ end-to-end web solutions including landing pages, portfolios, and admin dashboards using React,
 Tailwind CSS, Next.js, Node.js, and Express.js. Optimized server and client-side performance, achieving up to 35% faster load times through lazy loading, caching
 strategies, and code splitting. Constructed and integrated over 10 RESTful APIs with robust state management using React Context.`,
    technologies: [
      "Javascript",
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
    technologies: ["Javascript", "React.js"],
  },
];

export const PROJECTS = [
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
    link: "https://github.com/ishit-07/PortfolioWebsite",
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
    technologies: ["Javascirpt", "React", "JSON"],
    link: "https://github.com/ishit-07/Blogger",
  },
  {
    title: "Weather App",
    image: Weather,
    description: `The weather app using HTML, CSS, and JavaScript delivers real-time weather information for user-specified
locations, featuring current conditions and multi-day forecasts with dynamic updates.The app utilizes API to fetch weather data, offering an interactive and user-friendly interface for users to access
weather details for their chosen locations.
`,
    technologies: ["Javascirpt", "HTML", "CSS", "API"],
    link: "https://github.com/ishit-07/Weather-app",
  },
  {
    title: "Tic Tac Toe",
    image: tictactoe,
    description: ` It is a classic two-player game where players take turns marking X or O on a 3x3 grid. The objective is to get three
of your marks in a row, either horizontally, vertically, or diagonally, while preventing your opponent from doing the
same`,
    technologies: ["HTML", "CSS", "Javascirpt"],
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
