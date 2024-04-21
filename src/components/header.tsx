"use client";

import {ModeToggle} from "@/components/mode-toggle";
import Link from "next/link";
import {menuItems} from "@/constants/menu-items";
import {Menu} from "@/components/menu";
import {useTheme} from "next-themes";

export function Header() {
    const {theme} = useTheme();
    return (
        <header className="w-full flex items-center justify-between p-4 border-b">
            <h1 className="font-bold">
                Bruno
                <span className="text-yellow-400">JS</span>
            </h1>

            <nav className="flex items-center gap-2">
                <ul className="md:flex items-center gap-4 mr-10 hidden">
                    {menuItems.map((menuItem) => (
                        <li key={menuItem.href} className="p-2 rounded-md hover:bg-secundery hover:text-yellow-400 hover:underline">
                            <Link href={menuItem.href} passHref>
                                {menuItem.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Menu />
                <ModeToggle/>
            </nav>
        </header>
    )
}