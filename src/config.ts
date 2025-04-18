import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "adinfahru",
  logo: "/code.png",
  email: "mohamad.fahrudin18@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "/home",
    url: "/",
  },
  {
    title: "/about",
    url: "/about",
  },
  {
    title: "/projects",
    url: "/projects",
  },
  {
    title: "/blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "Github",
    url: "https://github.com/adinfahru",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mohamadfahrudin/",
    icon: "mdi:linkedin",
  },
  {
    title: "Gmail",
    url: "mohamad.fahrudin18@gmail.com",
    icon: "mdi:gmail",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Mohamad Fahrudin",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  role: "student & software engineer",
  location: "bandung, indonesia",
  description:
    "Hi!, I'm Mohamad Fahrudin — a student who loves building full-stack web apps, with a special interest in front-end. I enjoy crafting clean, user-friendly interfaces, and lately I've been diving into AI and machine learning to explore how they can make apps smarter and more intuitive.",
  socialLinks: socialLinks,
  links: [
    {
      title: "see my projects",
      url: "/projects",
    },
    {
      title: "my work experience",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "about | adinfahru",
    description:
      "Full time student from Indonesia who loves building cool things.",
    image: identity.logo,
  },
  subtitle: "some information about myself",
  about: {
    description: `
Full time student from Indonesia who loves building cool things.
<br/><br/>
Fahrudin is a final-year Information Systems student focusing on full-stack development, with a special interest in front-end technologies. He has a strong foundation in web development and enjoys designing user-friendly interfaces and building scalable applications, particularly using the React ecosystem.
<br/><br/>
Recently, Fahrudin has been delving into the exciting realms of AI and machine learning. He's eager to explore how these technologies can be integrated into his development work to enhance user experiences.
<br/><br/>
Fahrudin is committed to staying updated with the latest tech trends and is always ready to tackle new challenges. As he transitions from academia to the professional world, he’s looking to join a dynamic team where he can apply his skills and make a meaningful contribution to innovative projects in the tech industry.`,
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `As an undergraduate student, I’ve worked on many different areas of software development. These experiences have helped me build confidence, improve my technical skills, and understand what it’s like to work with real industry`, // Markdown is supported
    items: [
      {
        title: "Quality Assurance Engineer - Internship",
        company: {
          name: "Dropsuite",
        },
        date: "June 2024 - August 2024",
      },
      {
        title: "Teaching Assistant",
        company: {
          name: "Telkom University",

        },
        date: "August 2023 - January 2025",
      },
      {
        title: "Frontend Developer",
        company: {
          name: "FPS (FRI Punya Startup)",

        },
        date: "May 2023 - August 2023",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "projects | adinfahru",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`",
  projects: [
    {
      title: "personal-website-v2",
      description: "this is my personal website version 2",
      image: "/webv2.png",
      year: "2025",
      url: "https://github.com/adinfahru/web-portofolio-v2",
      highlighted: true,
      tags: ["astro", "react", "typescript", "tailwind", "reactbits"]
    },
    {
      title: "simple-webRTC", 
      description: "A minimal WebRTC video calling app built with plain HTML, JavaScript, and a Node.js signaling server via Socket.io. Supports one-on-one video calls between users using peer-to-peer connection.",
      image: "/webv2.png",
      year: "2025",
      url: "https://github.com/adinfahru/simple-WebRTC",
      highlighted: true,
      tags: ["javascript", "nodejs", "socket.io", 'webRTC'],
    },
    {
      title: "learnly",
      description: "alearning quiz platform for senior high school in bandung.",
      image: "/webv2.png",
      year: "2024",
      url: "https://github.com/adinfahru/learnly",
      tags: ["react", "django", "tailwind", 'shadcn-ui'],
      highlighted: true,
    },
    {
      title: "dme-qbo-automation",
      description: "a QA automation project built during my internship, focusing on automating test scenarios for QuickBooks Online using Cucumber and Selenium WebDriver. The goal was to improve testing efficiency and reduce manual effort by implementing behavior-driven development (BDD) practices.",
      image: "/webv2.png",
      year: "2024",
      url: "https://github.com/adinfahru/dme-qbo-automation",
      tags: ["cucumber", "selenium", "javascript", "nodejs"],
    },
    {
      title: "personal-website-v1",
      description: "this is my first personal website",
      image: "/webv2.png",
      year: "2024",
      url: "https://adinfahru.vercel.app/",
      tags: ["nextjs", "typescript", "tailwind"]
    },
    {
      title: "role-playing-game",
      description: "my first game development project, a challange course from freecodecamp",
      image: "/webv2.png",
      year: "2024",
      url: "https://role-playing-games.netlify.app/",
      tags: ["html", "javascript", "css"]
    },
    {
      title: "k-rent",
      description: "this final project web development course, aims to develop a web-based platform for student vehicle rental services",
      image: "/webv2.png",
      year: "2023",
      url: "https://github.com/adinfahru/k-rent",
      tags: ["laravel", "tailwind", "daisyui"]
    },
    {
      title: "phising-url-detection",
      description: "phishing url detection with three different machine learning model's, for Turnamen Sains Data Nasional 2023. deployment using nginx on ubuntu 22.04",
      image: "/webv2.png",
      year: "2023",
      url: "https://github.com/adinfahru/phishing-url-detection",
      tags: ["python", "flask", "gradient boosting", "multilayer perceptron", "catboost"],
      highlighted: true
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "blog | adinfahru",
    description: "thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "thoughts, stories and ideas.",
};
