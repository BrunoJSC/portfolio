"use client";

import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left"
    >
      <div className="md:mt-2 md:w-1/2">
        <Image
          src="/images/profile.jpg"
          alt="Bruno"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>

      <div className="md:mt-2 md:w-3/5">
        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
          Oi, sou Bruno!
        </h1>
        <p className="text-lg mt-4 mb-6 md:text-2xl">
          Sou um{" "}
          <span className="font-semibold text-teal-600">
            Engenheiro de Software.
          </span>
          Trabalhando para a criação de software que torna a vida mais fácil e
          significativa.
        </p>

        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" color="#0d9488" />
        </Link>
      </div>
    </section>
  );
}
