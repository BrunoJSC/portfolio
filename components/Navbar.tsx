"use client";

import { useState } from "react";
import { Link } from "react-scroll/modules";

import { usePathname } from "next/navigation";

import { useTheme } from "next-themes";

import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Sobre",
    page: "sobre",
  },
  {
    label: "Projetos",
    page: "projetos",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <header className="w-full max-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-[#18181B]">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="#home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-dark dark:text-white">
                  Bruno de Jesus
                </h2>
              </div>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.page}
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
