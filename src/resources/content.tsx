import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Deepjyoti",
  lastName: "Das",
  name: `Deepjyoti Das`,
  role: "Full Stack Developer",
  avatar: "/images/gallery/ChatGPT Image Jul 26, 2026, 03_26_05 PM.png",
  email: "deepjyoti478@gmail.com",
  location: "Asia/Kolkata", // Used for time display logic. The UI will explicitly say "Delhi, India"
  languages: ["Assamese", "English", "Hindi", "Bengali"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Deepjyoti78",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/deep-jyoti-das-4148bb31a/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/deepjyoti__78?igsh=MW9vbzZveXBhbTJpbA==",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      <span className="hide-on-desktop">
        {/* Mobile View */}
        Building scalable <br /> web experiences with <br /> <Text as="span" style={{ color: "#0B0B0B", backgroundImage: "linear-gradient(transparent 20%, #DDF82A 20%, #DDF82A 85%, transparent 85%)", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", padding: "0 4px" }}>clean code.</Text>
      </span>
      <span className="hide-on-mobile">
        {/* Desktop View */}
        Building&nbsp;scalable&nbsp;web <br /> experiences with <br /> <Text as="span" style={{ color: "#0B0B0B", backgroundImage: "linear-gradient(transparent 20%, #DDF82A 20%, #DDF82A 85%, transparent 85%)", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", padding: "0 4px" }}>clean code.</Text>
      </span>
    </>
  ),
  featured: {
    display: true,
    title: "Available for work",
    href: "/about",
  },
  subline: (
    <>
      I'm Deepjyoti Das, a Full Stack Developer passionate about building scalable web applications using React, Node.js, Django and PostgreSQL. I enjoy creating intuitive user experiences while solving real-world engineering problems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Delhi, India`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: `mailto:${person.email}`,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm {person.firstName}, a Delhi-based {person.role.toLowerCase()} with a passion for transforming complex challenges
        into simple, elegant design solutions. My work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Vellora Healthcare",
        timeframe: "2026",
        role: "Frontend Engineer (Client Project)",
        achievements: [
          <>
            Designed and built an interactive clinical care frontend with React 19, Next.js, and Tailwind CSS.
          </>,
          <>
            Implemented faceted doctor filtering, appointment scheduling UI, and responsive patient workflows with backend services in active development.
          </>,
        ],
        images: [],
      },
      {
        company: "RelayForge",
        timeframe: "2026",
        role: "Distributed Systems Engineer",
        achievements: [
          <>
            Architected a high-throughput webhook delivery and distributed workflow engine with at-least-once delivery guarantees.
          </>,
          <>
            Decoupled high-frequency ingestion APIs from asynchronous BullMQ workers backed by Redis and PostgreSQL row locks.
          </>,
        ],
        images: [],
      },
      {
        company: "ConcurrencyLab",
        timeframe: "2026",
        role: "Systems & Simulation Engineer",
        achievements: [
          <>
            Developed an operating systems simulator coupling a C++20 instruction engine with a React 19 time-travel debugger.
          </>,
          <>
            Implemented deterministic reverse/forward stepping with O(1) state restoration and formal deadlock detection.
          </>,
        ],
        images: [],
      },
      {
        company: "The Detour",
        timeframe: "2026",
        role: "Creative Frontend Engineer",
        achievements: [
          <>
            Developed an editorial self-drive road trip portal featuring curated scenic route schematics and waypoint elevation profiles.
          </>,
          <>
            Crafted responsive tactile UI interactions and multi-hub fleet reservation interfaces.
          </>,
        ],
        images: [],
      },
      {
        company: "RoboGyan Robotics Society",
        timeframe: "June 2024 – Jan 2025",
        role: "UI/UX Lead",
        achievements: [
          <>
            Led creative visual identity, UI/UX design systems, and digital assets across university technical workshops and events.
          </>,
          <>
            Designed promotional assets, certificates, and presentation decks using Figma and Canva.
          </>,
        ],
        images: [],
      },
      {
        company: "National Hackathons",
        timeframe: "2024 – Present",
        role: "Hackathon Participant",
        achievements: [
          <>
            Competed in competitive national hackathons, rapidly prototyping full-stack solutions and delivering working MVPs under strict deadlines.
          </>,
          <>
            Collaborated in multidisciplinary teams to ideate, architect, and deploy end-to-end prototypes.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Guru Gobind Singh Indraprastha University (GGSIPU), Delhi",
        description: <>Bachelor of Technology in Computer Science and Engineering (July 2023 – Present) • CGPA: 8.0</>,
      },
      {
        name: "Kendriya Vidyalaya No.1, Tezpur",
        description: <>Class XII (2022) • Percentage: 72% | Class X (2020) • Percentage: 80%</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full Stack Development",
        description: (
          <>Building scalable web applications with React, Next.js, Node.js, and TypeScript.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [],
      },
      {
        title: "Backend & Systems",
        description: (
          <>Developing resilient backend services and database architectures with PostgreSQL and Redis.</>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
