import { NotebookPen } from "lucide-react";

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
}

export const projects: Project[] = [
  {
    id: "1",
    name: "rGKeep",
    description: "Todo List app inspired by Google Keep",
    link: {
      title: "r-g-keep site",
      href: "",
    },
    logo: <NotebookPen size={24} />,
    repoLink: {
      title: "r-g-keep",
      href: "https://github.com/m-rizki/r-g-keep",
    },
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
        className="w-9 h-9 rounded-full border border-base-content/5"
        alt="m-rizki"
      />
    ),
    repoLink: {
      title: "m-rizki",
      href: "https://github.com/m-rizki/m-rizki",
    },
  },
  // {
  //   id: "3",
  //   name: "dashboard",
  //   description: "dashboard with auth",
  //   link: "",
  //   logo: <p>dashboard</p>,
  //   repoLink: "",
  // },
  // {
  //   id: "4",
  //   name: "e-commerce",
  //   description: "dashboard with auth",
  //   link: "",
  //   logo: <p>dashboard</p>,
  //   repoLink: "",
  // },
  // {
  //   id: "5",
  //   name: "acm-wound-v2",
  //   description: `rewrite my thesis source code "Detection of Wound Circumference using Active Contour" by creating CLI app "acm-wound-v2"`,
  //   link: "",
  //   logo: <p>dashboard</p>,
  //   repoLink: "",
  // },
];
