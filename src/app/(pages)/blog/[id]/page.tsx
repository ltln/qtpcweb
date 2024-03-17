import { Button } from "@/app/components/ui/button";
import { IconShare, IconShare3 } from "@tabler/icons-react";
import Link from "next/link";

export default function BlogDetails() {
    return (
        <main>
            <section className="w-full max-w-screen-lg m-auto px-4 py-8">
                <div className="flex gap-2 text-gray-300">
                    <Link href="/blog" className="text-purple-400/70 hover:text-purple-400 mb-2">
                        Blog
                    </Link>
                    /
                    <span>
                        Người đẹp trai
                    </span>
                </div>
                <div className="bg-slate-900 rounded-b-lg">
                    <div className="h-80 max-lg:h-64 w-full rounded-t-lg overflow-hidden bg-cover bg-no-repeat flex items-center">
                        <img src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/427919704_2184059245289993_6221918424271669665_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEZi1jpXmQ7KWX3iC6IAwZaqJfqkZyL-RGol-qRnIv5EYLjAYGvtJ53tUfiA1qa-QnFPNWq3CA32MfkfMPdi70V&_nc_ohc=ijbL3D7NHhQAX-BGWLu&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfAnoltOai6SDKdD6XbNB2R3FgRs6Ob5xZsBnBuMhD2yaQ&oe=65FBC69F"/>
                    </div>
                    <div className="px-8 py-4 mb-2">
                        <span className="text-gray-300">Sunday, March 17, 2024</span>
                        <h1 className="text-3xl text-purple-400 mb-2">Người đẹp trai</h1>
                        <p className="text-white duration-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <span className="text-gray-400">...</span></p>
                        <hr className="h-0.5 rounded-sm my-4 border-0 bg-gray-700" />
                        <Button variant={"ghost"} className="flex gap-2 items-center">
                            <IconShare3 /> Share this post
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}