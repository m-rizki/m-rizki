import { KeyRound, NotebookPen } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  description: string;
  repoLink: {
    title: string;
    href: string;
  };
  link: {
    title: string;
    href: string;
  };
  logo: any;
  techStack: {
    name: string;
    color: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "1",
    name: "r-g-keep",
    description: "Todo List app inspired by Google Keep",
    link: {
      title: "r-g-keep site",
      href: "",
    },
    logo: <NotebookPen size={24} />,
    repoLink: {
      title: "r-g-keep repository",
      href: "https://github.com/m-rizki/r-g-keep",
    },
    techStack: [
      { name: "react", color: "text-cyan-400" },
      { name: "react-router", color: "text-rose-500" },
      { name: "tailwind-css", color: "text-sky-400" },
      { name: "daisy-ui", color: "text-yellow-400" },
      { name: "dnd-kit", color: "text-base-content" },
      { name: "jotai", color: "text-base-content" },
      { name: "react-hook-form", color: "text-pink-400" },
    ],
  },
  {
    id: "2",
    name: "m-rizki",
    description: "Personal website portfolio & blog",
    link: {
      title: "m-rizki site",
      href: "",
    },
    logo: (
      <img
        src="/profile-adj.jpg"
        className="border-base-content/5 h-9 w-9 rounded-full border"
        alt="m-rizki"
      />
    ),
    repoLink: {
      title: "m-rizki repository",
      href: "https://github.com/m-rizki/m-rizki",
    },
    techStack: [
      { name: "react", color: "text-cyan-400" },
      { name: "react-router", color: "text-rose-500" },
      { name: "tailwind-css", color: "text-sky-400" },
      { name: "daisy-ui", color: "text-yellow-400" },
    ],
  },
  {
    id: "3",
    name: "r-auth",
    description:
      "A full-stack authentication system demonstrating flexible, JWT authentication using both HTTP-only cookies and Authorization headers",
    link: {
      title: "r-auth site",
      href: "",
    },
    logo: <KeyRound size={24} />,
    repoLink: {
      title: "r-auth repository",
      href: "https://github.com/m-rizki/r-auth",
    },
    techStack: [
      { name: "express-js", color: "text-emerald-400" },
      { name: "react", color: "primary" },
      { name: "react-router", color: "text-rose-500" },
      { name: "axios", color: "text-base-content" },
    ],
  },
  // {
  //   id: "4",
  //   name: "acm-wound-v2",
  //   description: `rewrite my thesis source code "Detection of Wound Circumference using Active Contour" by creating CLI app "acm-wound-v2"`,
  //   link: {
  //     title: "acm-wound app",
  //     href: "",
  //   },
  //   logo: <p>dashboard</p>,
  //   repoLink: {
  //     title: "",
  //     href: "",
  //   },
  //   techStack: [{ name: "react", color: "primary" }],
  // },
];
