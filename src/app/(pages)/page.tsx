import { QuoteIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import qtpc from "../../lib/assets/e.jpg";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { IconBrandDiscordFilled, IconBrandFacebookFilled, IconBrandGithubFilled, IconBrandReddit, IconBrandXFilled, IconBrandYoutubeFilled } from "@tabler/icons-react";

export default function Home() {
  return (
    <main>
      <section className="w-full max-w-screen-lg m-auto px-4 py-8">
        <div className="grid grid-cols-2">
          <div className="col-span-1 max-lg:col-span-2">
            <div className="text-lg flex gap-2 items-end">
              <QuoteIcon className="h-10 w-10 rotate-180 text-gray-600" />
              <span className="text-gray-300">Hello there, I'm</span>
            </div>
            <div className="px-12 py-8">
              <p className="text-6xl font-bold text-purple-400">
                Quân Triệu
              </p>
              <p className="text-2xl text-purple-400"><span className="text-lg text-gray-200">aka</span> QuanTrieuPCYT<span className="text-lg text-gray-200">,</span> cutiepc <span className="text-lg text-gray-200">or</span> qtpctechhxd</p>
              <hr className="h-2 rounded-sm my-6 border-0 bg-purple-700" />
              <div className="px-8 border-l-4 border-purple-700">
                <p>A 18-year old Vietnamese who likes tinkering with tech things.</p>
              </div>
              <div className="mt-8 text-lg">
                <p className="text-gray-300">Some infos about me:</p>
                <ul className="info text-base list-disc list-outside ml-4">
                  <li>I play <Link href="https://namemc.com/QuanTrieuPCYT" target="_blank">Minecraft</Link> and <Link href="https://osu.ppy.sh/users/19029746" target="_blank">osu!</Link></li>
                  <li>I own <Link href="https://namemc.com/QuanTrieuPCYT" target="_blank">ThiccMC</Link>, a Minecraft network</li>
                  <li>I'm currently a twelveth grader @ <Link href="https://hes.vnu.edu.vn" target="_blank">HES High School</Link></li>
                  <li>My music taste is kinda 'diverse' as I listen to a lot of genres of songs. I can list some artists such as <Link href="https://ehrlingmusic.com" target="_blank">Ehrling</Link>, <Link href="https://www.glassanimals.com" target="_blank">Glass Animals</Link>, <Link href="https://www.r3hab.com/" target="_blank">R3HAB</Link>, <Link href="https://www.youtube.com/channel/UCuKWFCkVDNzcFy5JGeJFrOw" target="_blank">Ngot</Link> and <Link href="https://www.youtube.com/channel/UCf14c1oBpl47qcbzWbFjNxA" target="_blank">Kien Trinh</Link>.</li>
                  <li>Romcom is my favorite category of animes and mangas. I really love the series "<Link href="https://5hanayome.fandom.com/wiki/5-toubun_no_Hanayome" target="_blank">The Quintessential Quintuplets</Link>" and I adapted <Link href="https://5hanayome.fandom.com/wiki/Miku_Nakano" target="_blank">The Miku Nakano</Link> as my waifu 😭</li>
                  <li>I'm an <Link href="https://apple.com" target="_blank">Apple</Link> fanboy. I also do hackintoshes and use Linux (5 years of Linux sysadmin experience!)</li>
                  <li>I self-host my servers (the process is easier than you think 😆)</li>
                  <li>The Linux distribution that I use is <Link href="https://www.debian.org" target="_blank">Debian</Link> (both on my daily driver and my servers!)</li>
                  <li>I also have a strange obsession with home automation</li>
                </ul>
              </div>
              <div className="flex justify-end -mr-12">
                <QuoteIcon className="h-10 w-10 text-gray-600" />
              </div>
            </div>
          </div>
          <div className="col-span-1 max-lg:col-span-2 flex flex-col gap-4 justify-center">
            <Image alt="" src={qtpc} className="rounded-xl" />
            <div className="flex gap-2 items-center justify-center max-lg:order-first">
              <Button className="bg-[#1877F2] text-white hover:bg-[#1877F2d0]">
                <Link href="https://www.facebook.com/qtpctechhxd" target="_blank" className="flex">
                  <IconBrandFacebookFilled />
                </Link>
              </Button>
              <Button className="bg-[#5865F2] text-white hover:bg-[#5865F2d0]">
                <Link href="https://discord.com/users/839427463334461490" target="_blank" className="flex">
                  <IconBrandDiscordFilled />
                </Link>
              </Button>
              <Button className="bg-[#232323] text-white hover:bg-[#232323d0]">
                <Link href="https://github.com/QuanTrieuPCYT" target="_blank" className="flex">
                  <IconBrandGithubFilled />
                </Link>
              </Button>
              <Button className="bg-[#000000] text-white hover:bg-[#040404]">
                <Link href="https://twitter.com/qtpctechhxd" target="_blank" className="flex">
                  <IconBrandXFilled />
                </Link>
              </Button>
              <Button className="bg-[#FF0000] text-white hover:bg-[#FF0000d0]">
                <Link href="https://www.youtube.com/c/QuanTrieuPCYT?themeRefresh=1" target="_blank">
                  <IconBrandYoutubeFilled />
                </Link>
              </Button>
              <Button className="bg-[#FF4500] text-white hover:bg-[#FF4500d0]">
                <Link href="https://www.reddit.com/user/qtpctechhxd/" target="_blank">
                  <IconBrandReddit />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
