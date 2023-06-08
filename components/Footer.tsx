import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-28">
      <hr className="w-full h-0.5 mx-auto bg-neutral-200 border-0" />

      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center space-x-1  dark:text-neutral-100">
          <p className="text-slate-900">© 2023 Bruno de Jesus</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://github.com/BrunoJSC"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer bg-slate-900 rounded-full dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/bruno-jsc/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer "
              color="#0077B5"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
