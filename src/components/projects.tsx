import {projects} from "@/constants/projects";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {SiGithub} from "react-icons/si";

export function Projects() {
    return (
        <section id="projetos" className="md:min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 id="projects" className="font-bold text-center text-2xl">My <span
                    className="text-yellow-400">Projects</span></h2>

                <div className="p-4 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 mt-10">
                    {projects.map((project) => (
                        <Card key={project.id} className="max-w-sm">
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={500}
                                height={500}
                                className="object-cover w-full rounded-tr-md rounded-tl-md"
                            />
                            <CardContent className="p-2">
                                <CardTitle className="mt-4 flex items-center justify-between">{project.name}
                                    <Link href={project.link} className="inline-block">
                                        <SiGithub size={24} />

                                    </Link>
                                </CardTitle>
                                <CardDescription className="mt-3">
                                    {project.description}
                                </CardDescription>

                                <div className="mt-2">
                                    <h4>Tecnology</h4>
                                    <div className="grid grid-cols-4 justify-items-center w-full p-4">
                                        {project.technologies.map((technology) => (
                                            <div key={technology.name} className="text-3xl">
                                                {technology.icon}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}