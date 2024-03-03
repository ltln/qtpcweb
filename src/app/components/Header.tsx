"use client";

import { cn } from "@/lib/utils";
import { CheckIcon, GitHubLogoIcon, GlobeIcon, HamburgerMenuIcon, MagnifyingGlassIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";
import { Gavel } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import Logo from "../../lib/assets/qtpc.jpg";
import Image from "next/image";

const links = [
    {
        title: "Devices",
        path: "/devices",
        internal: true
    },
    {
        title: "Blog",
        path: "/blog",
        internal: true
    },
    {
        title: "Status",
        path: "https://status.qtpc.tech",
        internal: false
    },
]

export default function Header() {
    return (
        <header className={cn("z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-lg")}>
            <div className="container flex h-14 max-w-screen-lg items-center">
                <div className="flex gap-3">
                    <Popover>
                        <PopoverTrigger>
                            <HamburgerMenuIcon height={25} width={25} className="lg:hidden text-slate-500 hover:text-slate-300 duration-300" />
                        </PopoverTrigger>
                        <PopoverContent className="flex flex-col gap-1 w-48">
                            <p className="mb-1 font-bold">Navigation Menu</p>
                            { links.map((n,i) => <Link key={i} href={n.path} target={n.internal ? "_self" : "_blank"} className="transition-colors hover:text-foreground/80 text-foreground/60">{n.title}</Link>)}
                        </PopoverContent>
                    </Popover>
                    <Link href="/" className="flex items-center gap-4 mr-4">
                        <Image alt="" src={Logo} height={28} className="rounded-full" />
                        <span className="font-bold text-gray-300 hover:text-purple-400 duration-300">QuanTrieuPCYT</span>
                    </Link>
                    <nav className="flex items-center text-base gap-6 max-lg:hidden">
                        { links.map((n,i) => <Link key={i} href={n.path} target={n.internal ? "_self" : "_blank"} className="transition-colors hover:text-foreground/80 text-foreground/60">{n.title}</Link>)}
                    </nav>
                </div>
                <div className="flex flex-1 items-center space-x-2 justify-end">
                    <nav className="flex items-center">
                        <Link href="https://github.com/ltln/litebans-next" target="_blank">
                            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                                <GitHubLogoIcon className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}