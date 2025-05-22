export type Article = {
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
};

export const articles: Article[] = [
  {
    slug: "r-auth-auth-system-with-express-and-react-router-v7",
    author: "Muhamad Rizki",
    date: "2025-05-22",
    title: "r-auth - An Authentication System with Express and React Router v7",
    description:
      "A full-stack authentication system demonstrating flexible, JWT authentication using both HTTP-only cookies and Authorization headers. Built with React Router v7 (frontend) and Express.js (backend), this project lets you choose your preferred authentication method with minimal code changes.",
  },
];
