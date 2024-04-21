import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {MenuIcon, Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";
import * as React from "react";
import Link from "next/link";

export function Menu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden block" asChild>
                <Button variant="outline" size="icon" className="flex items-center">
                    <MenuIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href="#Sobre">
                        Sobre
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#Skills">
                        Skills
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#Projetos">
                        Projetos
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#Contato">
                        Contato
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    );
}