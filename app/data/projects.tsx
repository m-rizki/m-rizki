import { KeyRound, NotebookPen } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  description: {
    en: string;
    id: string;
  };
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
    name: "r-keep",
    description: {
      en: "Advanced Note Management App inspired by Google Keep",
      id: "Aplikasi manajemen catatan yang terinspirasi dari Google Keep",
    },
    link: {
      title: "r-keep site",
      href: "https://r-keep.vercel.app/",
    },
    logo: <NotebookPen size={24} />,
    repoLink: {
      title: "r-g-keep repository",
      href: "https://github.com/m-rizki/r-keep",
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
    name: "r-auth",
    description: {
      en: "A full-stack authentication system demonstrating flexible, JWT authentication using both HTTP-only cookies and Authorization headers",
      id: "Sistem otentikasi full-stack yang menunjukkan fleksibilitas penggunaan JWT, dengan dukungan otentikasi melalui HTTP-only cookies maupun Authorization headers",
    },
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
      { name: "react", color: "text-cyan-400" },
      { name: "react-router", color: "text-rose-500" },
      { name: "axios", color: "text-base-content" },
    ],
  },
  {
    id: "3",
    name: "acm-wound-v2",
    description: {
      en: `Rewrite my thesis source code "Detection of Wound Circumference using Active Contour" by creating "v2" CLI app`,
      id: `Menulis ulang source code tugas akhir saya berjudul "Deteksi Keliling Luka Menggunakan Active Contour" dengan membuat aplikasi CLI versi "v2".`,
    },
    link: {
      title: "acm-wound app",
      href: "",
    },
    logo: <p className="text-xs">ACM</p>,
    repoLink: {
      title: "acm-wound app",
      href: "https://github.com/m-rizki/skripsi/blob/main/v2/readme.md",
    },
    techStack: [
      { name: "python", color: "text-yellow-200" },
      { name: "numpy", color: "text-cyan-400" },
      { name: "matplotlib", color: "text-blue-400" },
      { name: "pandas", color: "text-base-content" },
      { name: "skimage", color: "text-orange-500" },
      { name: "jupyter-notebook", color: "text-base-content" },
    ],
  },
  {
    id: "4",
    name: "m-rizki",
    description: {
      en: "Personal website portfolio & blog",
      id: "Website personal yang di dalamnya terdapat Portofolio dan Blog",
    },
    link: {
      title: "m-rizki site",
      href: "https://m-rizki.vercel.app",
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
      { name: "i18next", color: "text-base-content" },
      { name: "daisy-ui", color: "text-yellow-400" },
      { name: "mdx", color: "text-base-content" },
    ],
  },
];
