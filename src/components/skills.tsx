import React from "react";
import {mySkills} from "@/constants/skills";
import {Card} from "@/components/ui/card";

export function Skills() {
    return (
        <section id="Skills" className="mt-20 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-2xl">My <span className="text-yellow-400">Skills</span></h2>

                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 p-4">
                    {mySkills.map((skill, index) => (
                        <Card key={index} className="max-w-sm h-32 flex flex-col items-center justify-center">
                            <span className="text-5xl">
                                {skill.icon}
                            </span>

                            <p>
                                {skill.name}
                            </p>

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}