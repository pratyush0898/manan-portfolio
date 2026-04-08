import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "GenzPy",
    href: "/projects",
    tags: ["Python", "CLI", "Tool"],
    image: {
      LIGHT: "/images/projects/genzpy.png",
      DARK: "/images/projects/genzpy.png",
    },
  },
  {
    index: 1,
    title: "Reminder to Look at You",
    href: "/projects",
    tags: ["Productivity", "Web App"],
    image: {
      LIGHT: "/images/projects/reminder-to-look-at-you.png",
      DARK: "/images/projects/reminder-to-look-at-you.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "GenzPy",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/genzpy.png"],
    description:
      "A Python-based CLI tool tailored for the Gen Z developer — fast, expressive, and built with modern scripting in mind.",
    sourceCodeHref: "https://github.com/yousaytoday/genzpy",
    liveWebsiteHref: "https://github.com/yousaytoday/genzpy",
  },
  {
    name: "Reminder to Look at You",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/reminder-to-look-at-you.png"],
    description:
      "A conceptual application designed to remind users to look at themselves and practice mindfulness during long work sessions.",
    sourceCodeHref: "https://github.com",
    liveWebsiteHref: "https://github.com",
  },
];
