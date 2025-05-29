const techStack = [
  {
    name: "git",
    href: "https://git-scm.com/",
    img: "/tech-stack/git.png",
  },
  {
    name: "html",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: "/tech-stack/html.png",
  },
  {
    name: "css",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: "/tech-stack/css.png",
  },
  {
    name: "javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: "/tech-stack/javascript.png",
  },
  {
    name: "typescript",
    href: "https://www.typescriptlang.org/",
    img: "/tech-stack/typescript.png",
  },
  {
    name: "react",
    href: "https://react.dev/",
    img: "/tech-stack/react.png",
  },
  {
    name: "react router",
    href: "https://reactrouter.com/",
    img: "/tech-stack/react-router.png",
  },
  {
    name: "tailwind css",
    href: "https://tailwindcss.com/",
    img: "/tech-stack/tailwind.svg",
  },
  {
    name: "docker",
    href: "https://www.docker.com/",
    img: "/tech-stack/docker.png",
  },
  {
    name: "python",
    href: "https://www.python.org/",
    img: "/tech-stack/python.png",
  },
];

export default function TechStack() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4">
      {techStack.map((stack) => (
        <div key={stack.name} className="tooltip" data-tip={stack.name}>
          <a
            href={stack.href}
            target="_blank"
            className="btn btn-xl btn-circle border-base-content/20 dark:bg-base-content/5 h-20 w-20 shadow-sm"
          >
            <img src={stack.img} alt={stack.name} className="w-8" />
          </a>
        </div>
      ))}
    </div>
  );
}
