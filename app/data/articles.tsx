import type { ReactNode } from "react";

export type Article = {
  slug: string;
  author: string;
  date: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: ReactNode;
    id: ReactNode;
  };
};

export const articles: Article[] = [
  {
    slug: "2025-05-24-project-r-auth-auth-system-with-express-and-react-router-v7",
    author: "Muhamad Rizki",
    date: "2025-05-24",
    title: {
      en: "Project : r-auth - An Authentication System with Express and React Router v7",
      id: "Proyek : r-auth - Sistem Autentikasi dengan Express dan React Router v7",
    },
    description: {
      en: "A full-stack authentication system demonstrating flexible, JWT authentication using both HTTP-only cookies and Authorization headers. Built with React Router v7 (frontend) and Express.js (backend), this project lets you choose your preferred authentication method with minimal code changes.",
      id: (
        <>
          Sistem autentikasi <em>full-stack</em> yang mendemonstrasikan
          fleksibilitas penggunaan JWT, baik melalui <em>HTTP-only cookies</em>{" "}
          maupun <em>Authorization headers</em>. Dibangun menggunakan React
          Router v7 (<em>frontend</em>) dan Express.js (<em>backend</em>),
          proyek ini memungkinkan Anda memilih metode autentikasi yang
          diinginkan dengan sedikit penyesuaian.
        </>
      ),
    },
  },
];
