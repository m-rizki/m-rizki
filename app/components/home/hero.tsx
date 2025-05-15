import FaGithub from "../icons/fa-github";
import FaLinkedin from "../icons/fa-linkedin";

export default function Hero() {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content p-0 justify-self-start">
        <div className="max-w-2xl">
          <div className="avatar pb-2">
            <div className="w-24 rounded-full">
              <img src="/profile-adj.jpg" alt="pp" />
            </div>
          </div>
          <h1 className="text-5xl font-bold">Software Engineer</h1>
          <p className="py-6 text-base-content/70">
            I'm Rizki, a computer science graduate with hands-on experience in
            front-end development. I enjoy building clean, responsive, and
            user-friendly interfaces that bring ideas to life. While my current
            focus is on front-end, I'm also passionate about exploring other
            areas in tech.
          </p>
          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://github.com/m-rizki/"
              className="btn btn-ghost btn-circle"
            >
              <FaGithub widthClass="w-6" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rizki1998/"
              className="btn btn-ghost btn-circle"
            >
              <FaLinkedin widthClass="w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
