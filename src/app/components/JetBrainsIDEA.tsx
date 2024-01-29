import { IconApps, IconBan, IconBug, IconChevronDown, IconChevronRight, IconCoffee, IconDots, IconDotsVertical, IconFolder, IconGitBranch, IconGitCommit, IconLockOpen, IconPlayerPlay, IconSearch, IconSettings, IconSquare, IconUserPlus, IconX } from "@tabler/icons-react";
import anime from 'animejs';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function JetBrains() {
    useEffect(() => {
        anime.timeline({ duration: 1000 })
          .add({ targets: ['#ani_1'], opacity: 1 }) // line 15
          .add({ targets: ['#ani_2'], opacity: 1 }) // line 60
          .add({ targets: ['#ani_3'], duration: 300, opacity: 0 }) // line 146
          .add({ targets: ['.ani_4'], duration: 300, opacity: 1 })
          .add({ targets: ['#ani_3'], duration: 100, width: 0, height: 0 }) // line 105 + 112
    })
    return (
        <div className="w-full rounded-lg mt-12 bg-gray-900 opacity-0" id="ani_1">
            <div className="h-12 w-full flex justify-between px-3 border-b-[1px] bg-gray-800 border-b-gray-900 rounded-t-lg">
                <div className="flex items-center gap-2" style={{ background: 'radial-gradient(circle, rgba(168,85,247,1) 0%, rgba(31,41,55,1) 100%)'}}>
                    <div className="h-3 w-3 bg-red-400 rounded-full" />
                    <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                    <div className="h-3 w-3 bg-green-400 rounded-full" />
                    <div className="flex items-center ml-3 gap-2 text-white">
                        <span className="h-8 w-8 flex items-center justify-center bg-purple-500 rounded-lg">Q</span>
                        <span className="max-md:hidden">QuanTrieuPCYT</span>
                        <IconChevronDown size="16px" className="text-gray-300 max-md:hidden" />
                    </div>
                    <div className="flex items-center ml-3 gap-2 text-white">
                        <IconGitBranch />
                        <span>master</span>
                        <IconChevronDown size="16px" className="text-gray-300" />
                    </div>
                </div>
                <div className="flex gap-12 max-md:hidden">
                    <div className="flex items-center gap-2">
                    <div className="flex items-center ml-3 gap-2 text-white max-sm:hidden">
                        <span>Current File</span>
                        <IconChevronDown size="16px" className="text-gray-300" />
                    </div>
                    <IconPlayerPlay size="22px" className="text-green-400" />
                    <IconBug size="22px" className="text-green-400" />
                    <IconDotsVertical size="22px" className="text-gray-300" />
                    </div>
                    <div className="flex items-center gap-2">
                    <IconUserPlus size="22px" className="text-gray-300" />
                    <IconSearch size="22px" className="text-gray-300" />
                    <IconSettings size="22px" className="text-gray-300" />
                    </div>
                </div>
            </div>
            <div className="w-full flex">
                <div className="max-w-12 px-2 py-2 flex flex-col items-center gap-2 bg-gray-800 text-gray-300 border-r-[1px] border-r-gray-900">
                    <IconFolder className="bg-gray-500 p-1 rounded-md" size="34px" />
                    <IconGitCommit className="rotate-90 p-1" size="34px" />
                    <hr className="h-[1px] w-full bg-gray-500 border-none" />
                    <IconApps className="p-1" size="34px" />
                    <IconDots className="p-1" size="34px" />
                </div>
                <div className="relative w-full grid grid-cols-12">
                    <div className="col-span-3 px-3 py-2 flex flex-col gap-2 bg-gray-800 text-white max-lg:hidden">
                    <p className="flex items-center gap-1 font-bold">Project <IconChevronDown size="16px" className="text-gray-300" /></p>
                    <div className="opacity-0" id="ani_2">
                        <ul className="list-none">
                        <li className="flex items-center gap-1">
                            <IconChevronDown size="16px" className="text-gray-300" />
                            <IconFolder size="16px" className="text-white" />
                            <p className="font-semibold">QuanTrieuPCYT{' '}<span className="font-normal text-gray-400">~/qtpc</span></p>
                        </li>
                        <ul className="list-none px-5">
                            <li className="flex items-center gap-1">
                            <IconChevronRight size="16px" className="text-gray-300" />
                            <IconFolder size="16px" className="text-white" />
                            <p>.github</p>
                            </li>
                            <li className="flex items-center gap-1">
                            <IconChevronRight size="16px" className="text-gray-300" />
                            <IconFolder size="16px" className="text-white" />
                            <p>.idea</p>
                            </li>
                            <li className="flex items-center gap-1">
                            <IconChevronDown size="16px" className="text-gray-300" />
                            <IconFolder size="16px" className="text-white" />
                            <p>src</p>
                            </li>
                            <ul className="list-none px-5">
                            <li className="flex items-center gap-1">
                                <IconChevronDown size="16px" className="text-gray-300" />
                                <IconFolder size="16px" className="text-white" />
                                <p>tech.qtpc.web</p>
                            </li>
                            <ul className="list-none px-5">
                                <li className="flex items-center gap-1">
                                <IconCoffee size="16px" className="text-white" />
                                <p>Main</p>
                                </li>
                            </ul>
                            <li className="flex items-center gap-1">
                                <IconBan size="16px" className="text-white" />
                                <p>.gitignore</p>
                            </li>
                            </ul>
                        </ul>
                        </ul>
                    </div>
                </div>
                <div className="col-span-9 max-lg:col-span-full">
                    <div className="w-full border-b-[1px] border-b-gray-800 opacity-0 ani_4">
                        <div className="h-10 w-36 flex items-center justify-center gap-1 border-b-[3px] -mb-[1px] border-b-blue-600 text-white">
                        <IconCoffee size="16px" />
                        <span className="mr-2">Main.java</span>
                        <IconX size="14px" className="text-gray-400" />
                        </div>
                    </div>
                    <div className="flex opacity-0 ani_4">
                        <div className="flex flex-col w-12 items-end px-2 font-mono text-gray-500 border-r-[1px] border-r-gray-800">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        </div>
                        <div className="flex flex-col items-start px-2 font-mono text-white">
                        <p><span className="text-blue-500">package</span> tech.qtpc.web;</p>
                        <br />
                        <p><span className="text-blue-500">public class</span> Main {'{'}</p>
                        <p className="ml-8 max-md:ml-2"><span className="text-blue-500">public static void main</span>(String[] args) {'{'}</p>
                        <p className="ml-16 max-md:ml-4">System.<span className="text-purple-400">out</span>.println(<span className="text-green-400">&#34;Hi there, Welcome to my portfolio!&#34;</span>);</p>
                        <p className="ml-16 max-md:ml-4">System.<span className="text-purple-400">out</span>.println(<span className="text-green-400">&quot;I&apos;m a 17-year old Vietnamese who likes tinkering with tech things.&quot;</span>);</p>
                        <p className="ml-16 max-md:ml-4">
                            System.<span className="text-purple-400">out</span>.println(<span className="text-green-400">&quot;</span>
                            <Link href="https://fb.com/qtpctechhxd" target="_blank" className="text-blue-400 hover:text-blue-500 font-bold">Facebook</Link>,{' '}
                            <Link href="https://discord.com/users/839427463334461490" target="_blank" className="text-purple-400 hover:text-purple-500 font-bold">Discord</Link>,{' '}
                            <Link href="https://github.com/QuanTrieuPCYT" target="_blank" className="text-slate-500 hover:text-slate-600 font-bold">GitHub</Link>,{' '}
                            <Link href="https://twitter.com/qtpctechhxd" target="_blank" className="text-sky-400 hover:text-sky-500 font-bold">X</Link>,{' '}
                            <Link href="https://www.youtube.com/c/QuanTrieuPCYT" target="_blank" className="text-red-400 hover:text-red-500 font-bold">Youtube</Link>,{' '}
                            <Link href="https://www.reddit.com/user/qtpctechhxd/" target="_blank" className="text-orange-400 hover:text-orange-500 font-bold">Reddit</Link>
                            <span className="text-green-400">&quot;</span>);
                        </p>
                        <p className="ml-8">{'}'}</p>
                        <p>{'}'}</p>
                        </div>
                    </div>
                    <div className="absolute flex flex-col gap-2 px-24 py-16 bg-gray-900 top-0 text-white" id="ani_3">
                        <p>Search Everywhere <span className="text-gray-500">Double Shift</span></p>
                        <p>Go to File <span className="text-gray-500">Double Shift</span></p>
                        <p>Recent Files <span className="text-gray-500">Double Shift</span></p>
                        <p>Navigation Bar <span className="text-gray-500">Double Shift</span></p>
                        <p>Drop files here to open them</p>
                    </div>
                    </div>
                    <div className="col-span-full text-white bg-gray-800 border-t-[1px] border-t-gray-900">
                    <div className="flex items-center gap-2 px-2 py-1">
                        <span className="font-semibold">Terminal</span>
                        <div className="h-10 flex items-center justify-center px-3 border-b-[2px] -mb-[4px] border-b-gray-600 text-white">
                        <span className="mr-2">Local</span>
                        <IconX size="14px" className="text-gray-400" />
                        </div>
                    </div>
                    <div className="h-32 px-1 bg-gray-900 text-gray-400">
                        <p>qtpctechhxd@web % <span></span></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 bg-gray-800 text-sm text-gray-300 border-t-[1px] border-t-gray-900 rounded-b-lg">
                <div className="flex items-center gap-2 max-md:hidden">
                    <div className="flex items-center gap-1">
                        <IconSquare size="12px" className="text-blue-600" /> QuanTrieuPCYT
                    </div>
                    <IconChevronRight size="14px" />
                    <span>src</span>
                    <IconChevronRight size="14px" />
                    <span>tech</span>
                    <IconChevronRight size="14px" />
                    <span>qtpc</span>
                    <IconChevronRight size="14px" />
                    <span>web</span>
                    <IconChevronRight size="14px" />
                    <div className="flex items-center gap-1">
                        <IconCoffee size="12px" className="text-blue-600" /> Main
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>LF</span>
                    <span>UTF-8</span>
                    <span>4 spaces</span>
                    <IconLockOpen size="16px" />
                </div>
            </div>
        </div>
    )
}