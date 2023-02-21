import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import {
  FaDev,
  FaEye,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser
} from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { MdComputer, MdDashboard } from "react-icons/md"
import { SiGmail } from "react-icons/si"
import About from "./components/aboutPage/About"
import DevBlogs from "./components/blogsPage/DevBlogs"
import Contact from "./components/contactPage/Contact"
import GuestBook from "./components/guestbookPage/GuestBook"
import Resume from "./components/resumePage/Resume"
import Stats from "./components/statistics/Stats"
import Works from "./components/worksPage/Works"
import {
  ClientData,
  MenuData,
  SeoData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from "./types"

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: "blog",
    Icon: FaRegNewspaper,
    Component: DevBlogs,
  },
  {
    id: 5,
    label: "stats",
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 6,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 7,
    label: "guest book",
    Icon: MdComputer,
    Component: GuestBook,
  },
]

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: FaDev,
    label: "Dev.to",
    logoColor: "black",
    mediaUrl: "https://dev.to/victor1890",
    info: "Follow me and read my articles on Dev.to",
  },
  {
    id: 3,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://github.com/Victor1890",
    info: "Star my projects on Github",
  },
  {
    id: 4,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    logoColor: "#0072b1",
    mediaUrl: "https://www.linkedin.com/in/victor-j-rosario-v/?locale=en_US",
    info: "Let's connect on Linkedin",
  },
  {
    id: 5,
    Icon: SiGmail,
    label: "Mail",
    logoColor: "#EA4335",
    mediaUrl: "mailto:victorrosariodeveloper@gmail.com",
    info: "For more info, contact me"
  },
]

export const clients: ClientData[] = [
  {
    id: 1,
    title: "Linkedin",
    linkLocation: "https://www.linkedin.com/",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    title: "Freelancer",
    linkLocation: "https://www.freelancer.com/",
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    title: "UpWork",
    linkLocation: "https://www.upwork.com/",
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    title: "Envato",
    linkLocation: "https://www.envato.com/",
    imgLocation: "/images/envato.png",
  },
]

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  userName: "Martin Fowler",
  userProfession: "Software Developer",
  userImage: { url: "/images/martin.jpg" },
}

export const statisticsData: StatisticsData[] = [
  {
    title: "stack",
    info: "MERN or T3",
  },
  {
    title: "projects",
    info: "70+",
  },
  {
    title: "clients",
    info: "40+",
  },
]

export const SEO: SeoData = {
  title: "",
  meta: [
    {
      name: "author",
      content: "Victor Rosario"
    },
    {
      name: "robots",
      content: "index,follow"
    },
    {
      name: "keywords",
      content: "victorrosario, victor rosario, victorjesusrosariovasquez, vjrv, victor jesus rosario vasquez, victor jesus, victor vasquez, victor 1890, victor1890, development, developer, backend, frontend, fullstack, Full Stack web development, Full Stack application development, Full Stack software development, Full Stack development framework, Full Stack development tools, Full Stack development portfolio, Full Stack development best practices, Full Stack development services, Frontend development, Backend development, Web development, Mobile development, Cross-platform development, Responsive design, Server-side scripting, Database management, API design and development, Testing and debugging, Continuous integration and delivery, Version control, Agile development methodologies, Cloud computing, DevOps, Scalability and performance optimization, Technologist, Technological Institute of the Americas (ITLA), FullStack Developer, JavaScript, TypeScript, Node, Node.js, PL / SQL, API REST, Blockchain technologies, Redis, Docker, WebSocket, Socket.io"
    },
    {
      name: "title",
      content: "Victor Rosario | Full Stack Developer",
    },
    {
      name: "og:title",
      content: "Victor Rosario | Full Stack Developer",
    },
    {
      name: "description",
      content: "A Technologist, I graduated from the Technological Institute of the Americas (ITLA) currently I work as a FullStack Developer, making use of different software such as JavaScript, TypeScript, Node.js, PL / SQL, API REST, blockchain technologies, Redis, Docker, WebSocket, Socket.io and more.",
    },
    {
      property: "og:description",
      content: "A Technologist, I graduated from the Technological Institute of the Americas (ITLA) currently I work as a FullStack Developer, making use of different software such as JavaScript, TypeScript, Node.js, PL / SQL, API REST, blockchain technologies, Redis, Docker, WebSocket, Socket.io and more.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ]
}