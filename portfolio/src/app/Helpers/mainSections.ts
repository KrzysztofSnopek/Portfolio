import {
  faHandshake,
  faDownload,
  faList,
  faBook,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ContactComponent from "../Layouts/Contact";
import Resume from "../Layouts/Resume";
import Skills from "../Layouts/Skills";
import Home from "../Layouts/Home";
import Experience from "../Layouts/Experience";
import Projects from "../Layouts/Projects";

type Section = {
  img: string;
  title: string;
  name: string;
  icon?: IconProp;
  content?: React.ReactNode | (() => React.ReactNode);
};

export const mainSections: Section[] = [
  {
    img: "",
    title: "",
    name: "",
  },
  {
    img: "/Images/handshake.jpg",
    title: "A few words about me and my goals",
    name: "Introduction",
    icon: faHandshake,
    content: Home,
  },
  {
    img: "/Images/experience.jpg",
    title: "Work experience and education",
    name: "Experience",
    icon: faBook,
    content: Experience,
  },
  {
    img: "/Images/projects.jpg",
    title: "List of recent projects",
    name: "Projects",
    icon: faList,
    content: Projects,
  },
  {
    img: "/Images/skills.jpg",
    title: "Skills and technologies I am proficient in",
    name: "Skills",
    icon: faHtml5,
    content: Skills,
  },
  {
    img: "/Images/resume.jpg",
    title: "Download my CV here!",
    name: "Resume",
    icon: faDownload,
    content: Resume,
  },
  {
    img: "/Images/contact.jpg",
    title: "Please do message me :)",
    name: "Contact",
    icon: faPhone,
    content: ContactComponent,
  },
  {
    img: "",
    title: "",
    name: "",
  },
];
