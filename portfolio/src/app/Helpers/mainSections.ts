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
    img: "https://unsplash.com/photos/vWchRczcQwM/download?force=true&w=590&h=640",
    title: "A few words about me and my goals",
    name: "Introduction",
    icon: faHandshake,
  },
  {
    img: "https://unsplash.com/photos/1V5zGGTYXVc/download?force=true&w=590&h=640",
    title: "Work experience and education",
    name: "Experience",
    icon: faBook,
  },
  {
    img: "https://unsplash.com/photos/b21Ty33CqVs/download?force=true&w=590&h=640",
    title: "List of recent projects",
    name: "Projects",
    icon: faList,
  },
  {
    img: "https://unsplash.com/photos/ipARHaxETRk/download?force=true&w=590&h=640",
    title: "Skills and technologies I am proficient in",
    name: "Skills",
    icon: faHtml5,
  },
  {
    img: "https://unsplash.com/photos/3xNn1zGvBwY/download?force=true&w=590&h=640",
    title: "Download my CV here!",
    name: "Resume",
    icon: faDownload,
    content: Resume,
  },
  {
    img: "https://unsplash.com/photos/5Ne6mMQtIdo/download?force=true&w=590&h=640",
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
