import logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/DropdownMenu";
import { IconChevronRight, IconMenu2 } from "@tabler/icons-react";

export default function Header() {
    return (
        <header className="inset-x-0 px-4 flex justify-center">
            <div className="flex items-center justify-between w-full max-w-4xl">
                <Link href="/" className="h-16 flex items-center gap-2">
                    <Image alt="" src={logo} height={40} className="rounded-full" />
                    <span className="font-bold text-xl text-white">QuanTrieuPCYT</span>
                </Link>
                <div className="h-16 flex items-center gap-8">
                    <Link href="/info" className="text-gray-400 hover:text-white duration-300 max-md:hidden">Info</Link>
                    <Link href="/devices" className="text-gray-400 hover:text-white duration-300 max-md:hidden">Devices</Link>
                    <Link href="/posts" className="text-gray-400 hover:text-white duration-300 max-md:hidden">Posts</Link>
                    <Link href="https://status.qtpc.tech" className="text-gray-400 hover:text-white duration-300 max-md:hidden" target="_blank">Status</Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="md:hidden outline-none focus:outline-none">
                            <IconMenu2 size="36px" className="text-gray-400 hover:text-white duration-300" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="min-w-40">
                            <Link href="/info">
                                <DropdownMenuItem className="cursor-pointer text-md px-4">
                                    Info
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/devices">
                                <DropdownMenuItem className="cursor-pointer text-md px-4">
                                    Devices
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/posts">
                                <DropdownMenuItem className="cursor-pointer text-md px-4">
                                    Posts
                                </DropdownMenuItem>
                            </Link>
                            <Link href="https://status.qtpc.tech" target="_blank">
                                <DropdownMenuItem className="cursor-pointer text-md px-4">
                                    Status
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}