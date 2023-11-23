const galleryTechnologyStack: string[] = [
  "React",
  "TypeScript",
  "MobX",
  "Tailwind",
  "Firebase",
  "Jest",
];
const stockTechnologyStack: string[] = [
  "React",
  "TypeScript",
  "Bootstrap",
  "Firebase",
];
const portfolioTechnologyStack: string[] = [
  "React",
  "TypeScript",
  "Tailwind",
  "Responsive Web Design",
];

interface ProjectData {
  imgSrc: string;
  name: string;
  gitLink: string;
  liveDemo?: string;
  description: string;
  technologyStack: string[];
  key: string;
  id: string;
}

export const projectData: ProjectData[] = [
  {
    imgSrc: "/Images/sharepicture.PNG",
    name: "Photo Gallery",
    gitLink: "https://github.com/KrzysztofSnopek/ShareYourPic",
    liveDemo: "https://show-your-picture.web.app/",
    description:
      "Gallery allowing uploading and browsing through photos stored in a database. You can create a profile and engage with content through a photo liking system. First testing on components and functions. System of minimalistic state management with MobX library.",
    technologyStack: galleryTechnologyStack,
    key: "gallery",
    id: "proj-1",
  },
  {
    imgSrc: "/Images/stock3.PNG",
    name: "Stock App",
    gitLink: "https://github.com/KrzysztofSnopek/Stock-app",
    description:
      "An app allowing the user to check, buy and sell stock shares, which prices are updated in real time with api calls. Authorization created with Firebase.",
    technologyStack: stockTechnologyStack,
    key: "stock",
    id: "proj-2",
  },
  {
    imgSrc: "/Images/oldportfolio.PNG",
    name: "Previous portfolio",
    gitLink: "https://github.com/KrzysztofSnopek/resume",
    liveDemo: "https://resume-73edc.web.app/",
    description:
      "Fully responsive one-page website with portfolio and general information about myself.",
    technologyStack: portfolioTechnologyStack,
    key: "oldportfolio",
    id: "proj-3",
  },
];
