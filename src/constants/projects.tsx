import {
    SiCss3,
    SiFirebase,
    SiGithub, SiGooglechrome,
    SiJavascript,
    SiNextdotjs, SiOpenai,
    SiReact,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";

export const projects = [
    {
        id: 1,
        name: "Netflix clone",
        description: "O 'Netflix Clone' simula a interface da Netflix para demonstrar técnicas avançadas de front-end e UI/UX. Inclui funcionalidades como navegação e busca de conteúdo, destacando-se como uma ferramenta de aprendizado para desenvolvedores e designers interessados em aplicações web interativas e responsivas.",
        image: "/netflix.png",
        link: "https://github.com/BrunoJSC/netflix-clone",
        technologies: [
            {icon: <SiReact />, name: "React.js"},
            {icon: <SiNextdotjs key="nextjs"/>, name: "Next.js"},
            {icon: <SiTypescript key="typescript"/>, name: "TypeScript"},
            {icon: <SiTailwindcss key="tailwindcss"/>, name: "Tailwind CSS"}
        ]
    },
    {
        id: 2,
        name: "React Quiz",
        description: "Claro! Aqui está uma descrição concisa para o projeto \"React Quiz\":\n" +
            "\n" +
            "\"O 'React Quiz' é uma aplicação interativa desenvolvida em React.js e TypeScript, oferecendo um ambiente dinâmico para testes de conhecimentos variados. Com design responsivo utilizando CSS3, é ideal para quem busca aprimorar habilidades em desenvolvimento web e lógica de programação através de quizzes.\"",
        image: "/quiz.png",
        link: "https://github.com/BrunoJSC/react-quiz",
        technologies: [
            {icon: <SiReact />, name: "React.js"},
            {icon: <SiTypescript key="typescript"/>, name: "TypeScript"},
            {icon: <SiCss3 key="css3"/>, name: "CSS3"}
        ]
    },
    {
        id: 3,
        name: "Summarize",
        description: "Aqui está uma descrição concisa para o projeto \"Summarize\":\n" +
            "\n" +
            "\"O 'Summarize' é uma aplicação desenvolvida em React.js que utiliza JavaScript e Tailwind CSS para criar resumos de textos com a ajuda da inteligência artificial da OpenAI. Ideal para estudantes e profissionais que desejam otimizar a compreensão de grandes volumes de texto rapidamente.\"",
        image: "/summarize.png",
        link: "https://github.com/BrunoJSC/AI-Summarizer-app",
        technologies: [
            {icon: <SiJavascript />, name: "JavaScript"},
            {icon: <SiReact />, name: "React.js"},
            {icon: <SiTailwindcss key="tailwindcss"/>, name: "Tailwind CSS"},
            {icon: <SiOpenai key="openai"/>, name: "Open AI"}
        ]
    },
    {
        id: 4,
        name: "NLW Expert",
        description: "O 'NLW Expert' é uma aplicação web avançada que integra as melhores práticas de desenvolvimento front-end com tecnologias como React.js, TypeScript e Tailwind CSS. Destaca-se pelo uso da API de Reconhecimento de Voz, proporcionando uma interface de usuário controlável por voz. É ideal para usuários que buscam interações inovadoras e acessíveis em plataformas digitais.",
        image: "/list.png",
        link: "https://github.com/BrunoJSC/lista-de-tarefas",
        technologies: [
            {icon: <SiTypescript />, name: "TypeScript"},
            {icon: <SiReact />, name: "React.js"},
            {icon: <SiTailwindcss key="tailwindcss"/>, name: "Tailwind CSS"},
            {icon: <SiGooglechrome key="google"/>, name: "Google Chrome"}
        ]
    }
]