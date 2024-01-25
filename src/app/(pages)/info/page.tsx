"use client";

import anime from 'animejs';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import E from "@/assets/e.jpg";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    anime.timeline({ duration: 500 })
      .add({ targets: ['#terminal-l-01','#terminal-l-02'], opacity: 1 })
      .add({ targets: '#terminal-l-03', opacity: 1 }, '+=1000')
      .add({ targets: '#terminal-l-04', opacity: 1 }, '+=200')
      .add({ targets: '#terminal', opacity: 0 })
      .add({ targets: '#info', opacity: 1, translateY: -220 })
  })
  
  return (
    <>
      <div className="container m-auto md:w-2/3 lg:w-1/2 max-w-3xl px-4 lg:px-0" id="terminal">
        <div className="w-full rounded-lg mt-12 bg-gray-900">
          <div className="h-8 w-full flex items-center px-3 gap-2 border-b-[0.5px] bg-gray-700 border-b-black rounded-t-lg">
            <div className="h-3 w-3 bg-red-400 rounded-full" />
            <div className="h-3 w-3 bg-yellow-400 rounded-full" />
            <div className="h-3 w-3 bg-green-400 rounded-full" />
            <span className="absolute left-1/2 -translate-x-1/2 font-semibold text-white">Terminal</span>
          </div>
          <div className="w-full">
            <div className="text-white px-2 py-1 h-[200px]">
              <p id="terminal-l-01" className="opacity-0">Last login: Thur Jan 25 23:50:00 on qtpctechhxd</p>
              <p id="terminal-l-02" className="opacity-0">qtpctechhxd@web ~ %{' '}
                <Typewriter
                  words={['','viewinfo']}
                  typeSpeed={60}
                  delaySpeed={700}
                />
              </p>
              <p id="terminal-l-03" className="text-green-400 opacity-0">Fetching info for qtpctechhxd...</p>
              <p id="terminal-l-04" className="text-green-400 opacity-0">Done!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto max-lg:px-4 w-full max-w-5xl opacity-0" id="info">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-white gap-2">
          <div>
            <p className="text-4xl font-bold mb-4">Infos about me:</p>
            <ul className="list-disc text-lg px-5 info">
              <li>I play <Link href="https://namemc.com/QuanTrieuPCYT" target="_blank">Minecraft</Link> and <Link href="https://osu.ppy.sh/u/QuanTrieuPCYT" target="_blank">osu!</Link></li>
              <li>I own <Link href="https://thiccmc.com" target="_blank">ThiccMC</Link>, a Minecraft network</li>
              <li>I'm currently a twelveth grader @ <Link href="https://hes.vnu.edu.vn" target="_blank">HES High School</Link></li>
              <li>My music taste is kinda 'diverse' as I listen to a lot of genres of songs. I can list some artists such as <Link href="https://osu.ppy.sh/u/QuanTrieuPCYT" target="_blank">Ehrling</Link>, <Link href="http://glassanimals.com" target="_blank">Glass Animals</Link>, <Link href="https://r3hab.com" target="_blank">R3HAB</Link>, <Link href="https://www.youtube.com/channel/UCuKWFCkVDNzcFy5JGeJFrOw" target="_blank">Ngot</Link> and <Link href="https://www.youtube.com/channel/UCf14c1oBpl47qcbzWbFjNxA" target="_blank">Kien Trinh</Link>.</li>
              <li>Romcom is my favorite category of animes and mangas. I really love the series <Link href="https://5hanayome.fandom.com/wiki/5-toubun_no_Hanayome" target="_blank">"The Quintessential Quintuplets"</Link> and I adapted <Link href="https://5hanayome.fandom.com/wiki/Miku_Nakano" target="_blank">Miku Nakano</Link> as my waifu 😭</li>
              <li>I'm an <Link href="https://apple.com" target="_blank">Apple</Link> fanboy. I also do hackintoshes and use Linux (5 years of Linux sysadmin experience!)</li>
              <li>I self-host my servers (the process is easier than you think 😆)</li>
              <li>The Linux distribution that I use is <Link href="https://www.debian.org" target="_blank">Debian</Link> (both on my daily driver and my servers!)</li>
              <li>I also have a strange obsession with home automation</li>
            </ul>
          </div>
          <Image alt="deptrai" src={E} className="rounded-lg" />
        </div>
      </div>
    </>
  );
}
