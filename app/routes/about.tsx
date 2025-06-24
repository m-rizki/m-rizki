import FaGithub from "~/components/icons/fa-github";
import type { Route } from "./+types/about";
import FaLinkedin from "~/components/icons/fa-linkedin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Muhamad Rizki - About" },
    {
      name: "description",
      content: "Hi, I'm Muhamad Rizki.",
    },
  ];
}

export default function AboutPage() {
  return (
    <div className="mt-36">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="avatar">
            <div className="border-base-content/70 w-72 rotate-3 rounded-xl border-3">
              <img src="/profile-adj.jpg" />
            </div>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-base-content text-4xl font-bold">
            Hi, I'm Muhamad Rizki.
          </h1>
          <div className="text-base-content/70 mt-6 space-y-7">
            <p>
              Have you ever reopened an old codebase only to wonder what you
              were thinking back then? I certainly have. Those early challenges
              as a developer shaped my commitment to writing clean, simple, and
              well-documented code.
            </p>
            <p>
              I hold a degree in Computer Science from Universitas Negeri
              Jakarta and currently work as a software engineer. While my
              day-to-day focus lies in front-end development with React, my
              curiosity spans the entire field of software engineering.
            </p>
            <p>
              This website is where I share personal projects, write about
              development insights, and document the things I've learned along
              the way. While most of the content currently leans toward
              front-end topics, the scope will naturally grow as I explore other
              areas of interest.
            </p>
            <p>
              I believe good code is more than just code that works, it should
              be maintainable, resilient, and clear to those who come after you.
              After encountering tangled codebases, hard-to-trace bugs, and
              projects lacking proper documentation, I've grown to appreciate
              the value of simplicity, structure, and clarity. Principles like
              "Keep It Simple, Stupid" (KISS) and clean architecture aren't just
              ideals to me, they're practical tools for building better
              software.
            </p>
            <p>
              Outside of work, I enjoy keeping up with emerging technologies and
              learning new approaches to solve real-world problems. I'm also
              passionate about sharing knowledge, and many of the articles here
              are based on real experiences, challenges, and growth moments
              throughout my journey.
            </p>
            <p>
              More than just a personal archive, I hope this website can be a
              useful resource for fellow developers, whether you're just
              starting out or simply looking for a fresh perspective.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul className="flex flex-col gap-6">
            <li className="text-base-content/70 hover:text-accent group cursor-pointer">
              <a
                target="_blank"
                href="https://github.com/m-rizki/"
                className="flex items-center gap-4"
              >
                <FaGithub
                  widthClass="w-6"
                  additionalClass="group-hover:fill-accent"
                />
                <span>Follow on GitHub</span>
              </a>
            </li>
            <li className="text-base-content/70 hover:text-accent group cursor-pointer">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rizki1998/"
                className="flex items-center gap-4"
              >
                <FaLinkedin
                  widthClass="w-6"
                  additionalClass="group-hover:fill-accent"
                />
                <span>Connect on LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
