import logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="inset-x-0 px-4 flex justify-center">
            <div className="flex items-center justify-between w-full max-w-4xl">
                <Link href="/" className="h-16 flex items-center gap-2">
                    <Image alt="" src={logo} height={40} className="rounded-full" />
                    <span className="font-bold text-xl text-white">QuanTrieuPCYT</span>
                </Link>
                <div className="h-16 flex items-center gap-8">
                    <Link href="/info" className="text-gray-400 hover:text-white duration-300">Info</Link>
                    <Link href="/devices" className="text-gray-400 hover:text-white duration-300">Devices</Link>
                    <Link href="/posts" className="text-gray-400 hover:text-white duration-300">Posts</Link>
                    <Link href="https://status.qtpc.tech" className="text-gray-400 hover:text-white duration-300" target="_blank">Status</Link>
                </div>
            </div>
        </header>
    )
}