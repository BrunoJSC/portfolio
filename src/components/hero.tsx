import {ArrowDown} from "lucide-react";

export function Hero() {
    return (
        <section className="w-full flex justify-center items-center p-3 min-h-screen relative">
            <div className="md:max-w-5xl w-full max-auto">
                <div className="w-full">
                    <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
                        Desenvolvedor
                        <p className="text-yellow-400">
                            Full Stack
                        </p>
                    </h1>
                    <p className="md:max-w-4xl text-md text-center w-full w-3xl text-md font-normal mx-auto mt-3">
                        Transformo ideias complexas em soluções digitais elegantes e robustas. Com um profundo
                        compromisso com a inovação e a excelência técnica, elevo cada projeto acima das expectativas.
                        Pronto para revolucionar seu próximo desafio digital? Vamos definir o futuro juntos.
                    </p>
                </div>
            </div>

            <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full px-4">
                <hr className="flex-grow border-t mx-2"/>
                <ArrowDown size={24} className="mx-2"/>
                <hr className="flex-grow border-t mx-2"/>
            </div>
        </section>
    )
}