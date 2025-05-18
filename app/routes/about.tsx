import FaGithub from "~/components/icons/fa-github";
import type { Route } from "./+types/about";
import FaLinkedin from "~/components/icons/fa-linkedin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
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
          <div className="text-base-content/60 mt-6 space-y-7">
            <p>
              Ever opened an old code file and felt completely lost? That's
              exactly what I experienced in my first couple of years as a
              developer. Those experiences are what drive me to always strive
              for clean, simple, robust, and well-documented code. Not because
              of some obsession, but because I've dealt with enough confusing
              spaghetti code.
            </p>
            <p>
              I graduated with a computer science degree from Universitas Negeri
              Jakarta and currently work as a software engineer. Although my
              current focus revolves around React in the front-end space, my
              interests actually span across software engineering as a whole.
              What started as a simple curiosity has evolved into the career I'm
              dedicated to today.
            </p>
            <p>
              On this website, you'll find various projects I've worked on,
              along with articles based on my experiences as a developer. While
              the content is currently centered around front-end development,
              the scope will continue to expand.
            </p>
            <p>
              In my view, good code isn't just about functionality—it's about
              being robust and easily understood by other developers. After
              facing difficult-to-maintain code, security vulnerabilities, and
              minimal documentation multiple times, I've come to deeply
              appreciate the KISS (Keep It Simple, Stupid) principle and clean
              code architecture in every project.
            </p>
            <p>
              In my free time, I usually keep up with the latest technology
              trends or learn new concepts that can be applied in software
              development. I also enjoy sharing knowledge and experiences about
              software development through articles on this website.
            </p>
            <p>
              If you're interested in discussing software development, best
              practices, or would like to collaborate on a project, don't
              hesitate to reach out. Let's create better, cleaner, and more
              resilient software together!
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
