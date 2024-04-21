import {Card} from "@/components/ui/card";
import {contact} from "@/constants/contact";

export function Contact() {
    return (
        <section id="contato" className="md:h-52 h-auto mt-20">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="font-bold text-center text-2xl">Contact <span className="text-yellow-400">Me</span></h2>

                <div className="grid md:grid-cols-2 gap-4 md:gap-2 p-4 justify-items-center w-full mt-10">
                    {contact.map((c) => (
                        <Card key={c.id} className="w-72 p-4 flex items-center gap-3">
                            <span>{c.icon}</span>
                            <p>{c.name}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}