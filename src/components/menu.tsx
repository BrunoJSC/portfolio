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

export function Menu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden block" asChild>
                <Button variant="outline" size="icon" className="flex items-center">
                    <MenuIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    );
}