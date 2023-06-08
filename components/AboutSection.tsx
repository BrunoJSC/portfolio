"use client";

import Image from "next/image";

import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiNodedotjs,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  { skill: "HTML5", icon: <AiFillHtml5 size={30} /> },
  { skill: "CSS3", icon: <SiCss3 size={30} /> },
  { skill: "JavaScript", icon: <SiJavascript size={30} /> },
  { skill: "TypeScript", icon: <SiTypescript size={30} /> },
  { skill: "React", icon: <SiReact size={30} /> },
  { skill: "Redux", icon: <SiRedux size={30} /> },
  { skill: "React Native", icon: <SiReact size={30} /> },
  { skill: "Next.js", icon: <SiNextdotjs size={30} /> },
  { skill: "tailwindcss", icon: <SiTailwindcss size={30} /> },
  { skill: "prisma", icon: <SiPrisma size={30} /> },
  { skill: "firebase", icon: <SiFirebase size={30} /> },
  { skill: "supabase", icon: <SiSupabase size={30} /> },
  { skill: "mongodb", icon: <SiMongodb size={30} /> },
  { skill: "Node.js", icon: <SiNodedotjs size={30} /> },
  { skill: "Git", icon: <SiGit size={30} /> },
  { skill: "GitHub", icon: <SiGithub size={30} /> },
];

export default function AboutSection() {
  return (
    <section id="sobre">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre mim
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              Me conhecer!
            </h1>
            <p
              className="text-center text-gray-600 md:text-left"
              style={{ lineHeight: "1.8rem" }}
            >
              Oi, meu nome é <strong className="text-teal-500">Bruno</strong> e
              sou um <strong>engenheiro de software</strong>
            </p>
            <br />

            <p>
              Sou formado pela <strong>Universidade Nove de Julho</strong>, me
              formei em 2020 em analise e desenvolvimento de sistemas. Em busca
              da minha primeira oportunidade como desenvolvedor.
            </p>
            <br />

            <p>
              Tenho uma ampla gama de hobbies e paixões que me mantêm ocupado.
              Estou sempre em busca de novas experiências e adoro me manter
              engajados e aprendendo coisas novas.
            </p>
            <br />

            <p>
              Eu acredito que você nunca deveria parar de crescer e é isso que
              eu me esforço para fazer, tenho paixão por tecnologia e um desejo
              de sempre ultrapassar os limites do que é possível. Estou animado
              para ver onde minha carreira me levará e estou sempre aberto a
              novas oportunidades
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Minhas habilidades</h1>

            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-full px-6 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 flex items-center gap-2"
                >
                  {skill.icon}
                  {skill.skill}
                </div>
              ))}
            </div>
            <Image
              src="/images/people.svg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 rounded-full object-contain mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
