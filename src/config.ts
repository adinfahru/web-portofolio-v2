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
    title: "",
    url: "https://github.com/adinfahru",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "",
    url: "https://www.linkedin.com/in/mohamadfahrudin/",
    icon: "mdi:linkedin",
  },
  {
    title: "",
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
      title: "get to know me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Tim Witzdam",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Tim Witzdam, a full time student from Germany who also loves building cool things using code.
<br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`, // Markdown is supported
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
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2021 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2019 - 2021",
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
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
