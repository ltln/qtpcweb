import Link from "next/link";

export default function Footer() {
    return (
        <div className="mt-36 px-2 py-2 left-0 w-full flex justify-center text-center text-white">
            <div className="text-sm text-gray-200">
                <p>© Copyright 2024 QuanTrieuPCYT. All Rights Reversed.</p>
                <p>Proudly designed with ❤️ by <Link href="https://github.com/ltln" target="_blank" className="text-pink-300 hover:text-pink-400">@ltln</Link>.</p>
                <p>Built using <Link href="https://nextjs.org" target="_blank" className="text-pink-300 hover:text-pink-400">Next.js</Link> and <Link href="https://tailwindcss.com" target="_blank" className="text-pink-300 hover:text-pink-400">Tailwind CSS</Link></p>
            </div>
        </div>
    )
}