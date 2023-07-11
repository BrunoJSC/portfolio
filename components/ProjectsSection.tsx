"use client";

import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";

import { BsArrowRightSquare, BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "Blog AI App",
    description:
      "Repositório 'blog-ai-app': um projeto pessoal para um site sobre inteligência artificial, com artigos, tutoriais e insights sobre aprendizado de máquina, processamento de linguagem natural e visão computacional.",
    image: "/images/blog.png",
    github: "https://github.com/BrunoJSC/blog-ai-app",
    link: "https://blog-ai-app-ashen.vercel.app/",
  },
  {
    name: "AI Summarizer App",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/images/sumz.png",
    github: "https://github.com/BrunoJSC/AI-Summarizer-app",
    link: "https://ai-summarizer-app.vercel.app",
  },
  {
    name: "Promptopia",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/images/prompt.png",
    github: "https://github.com/BrunoJSC/promptopia-app",
    link: "https://prompttopia-app.vercel.app",
  },
  {
    name: "Hoobank",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/images/hoobank.png",
    github: "https://github.com/BrunoJSC/hoobank",
    link: "https://hoobank-plum.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projetos
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => (
          <div key={index}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:neutral-300">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-button space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub className="w-8 h-8 text-neutral-600 dark:neutral-300 hover:text-teal-500" />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowRightSquare size={30} className="text-teal-500" />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
}
