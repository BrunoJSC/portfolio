import Link from "next/link";
import {LinkedinIcon, LucideGithub} from "lucide-react";

export function About() {
    return (
        <section id="Sobre" className="md:h-auto mt-20">
            <div className="max-w-5xl rounded-lg p-6 mx-auto">
                <div className="col-lg-8 mx-auto">
                    <h2 className="text-center font-bold text-2xl">About <span className="text-yellow-400">Me</span></h2>
                    <p className="mt-4 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                        Olá! Meu nome é Bruno de Jesus, um desenvolvedor Full Stack apaixonado por
                        transformar ideias em soluções web e móveis inovadoras. Com formação em Análise e
                        Desenvolvimento de Sistemas pela Universidade Nove de Julho, possuo uma base sólida em
                        tecnologias como JavaScript, TypeScript, React.js e Next.js.
                    </p>
                    <p className="mt-4 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                        Em minha recente experiência na Auto Negocie, liderei projetos front-end, melhorando
                        significativamente a visibilidade e o engajamento do usuário. Sou um defensor de interfaces
                        limpas e dinâmicas que melhoram a experiência do usuário e facilitam a interação.
                    </p>

                    <p className="mt-4 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                        Estou sempre em busca de novos desafios e oportunidades para aprender mais e contribuir para
                        projetos inovadores. Vamos conectar e criar algo especial juntos!
                    </p>
                    <div className="max-w-2xl mx-auto mt-10 flex items-center gap-4">
                        <Link href='https://www.linkedin.com/in/bruno-jsc/' target="_blank">
                            <LinkedinIcon/>
                        </Link>
                        <Link href='https://github.com/BrunoJSC' target="_blank">
                            <LucideGithub/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}