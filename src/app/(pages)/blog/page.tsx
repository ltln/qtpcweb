import Image from "next/image";

export default function BlogList() {
    return (
        <main>
            <section className="w-full max-w-screen-lg m-auto px-4 py-8">
                <div className="flex gap-8 items-center px-8 py-1">
                    <div className="h-12 w-1.5 rounded-md bg-purple-500" />
                    <h1 className="text-2xl min-w-40">Blog</h1>
                </div>
                <div className="group py-2 px-8 hover:cursor-pointer">
                    <div className="h-64 max-lg:h-48 w-full rounded-t-lg overflow-hidden bg-cover bg-no-repeat flex items-center">
                        <img className="transition duration-300 ease-in-out group-hover:scale-110" src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/427919704_2184059245289993_6221918424271669665_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEZi1jpXmQ7KWX3iC6IAwZaqJfqkZyL-RGol-qRnIv5EYLjAYGvtJ53tUfiA1qa-QnFPNWq3CA32MfkfMPdi70V&_nc_ohc=ijbL3D7NHhQAX-BGWLu&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfAnoltOai6SDKdD6XbNB2R3FgRs6Ob5xZsBnBuMhD2yaQ&oe=65FBC69F"/>
                    </div>
                    <div className="bg-slate-900 group-hover:bg-slate-900/80 duration-300 px-8 py-4 rounded-b-lg">
                        <span className="text-gray-300">Sunday, March 17, 2024</span>
                        <h1 className="text-3xl text-purple-400/70 group-hover:text-purple-400 mb-2">Người đẹp trai</h1>
                        <p className="text-gray-300 group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    </div>
                </div>
            </section>
        </main>
    )
}