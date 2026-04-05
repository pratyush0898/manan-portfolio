import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
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
    name: "Reminder to Look at You",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/reminder-to-look-at-you.png"],
    description:
      "A conceptual application designed to remind users to look at themselves and practice mindfulness during long work sessions.",
    sourceCodeHref: "https://github.com",
    liveWebsiteHref: "https://github.com",
  },
];
