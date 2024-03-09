"use client";

import ParticlesContainer from "@/app/components/Particles";
import { VaraText } from "@/app/components/VaraText";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CircuitBoard, Cpu, HardDrive, HdmiPort, MemoryStick, Palette, PowerSquare, Watch } from "lucide-react";
import { AspectRatio } from "@/app/components/ui/aspect-ratio";

import IP14Plus from "../../../lib/assets/ip14pl.jpg";
import IP7Plus from "../../../lib/assets/ip7pl.webp";
import APW from "../../../lib/assets/apw.webp";
import ATV from "../../../lib/assets/appletv.png";

export default function Devices() {
    const [device, setDevice] = useState<string>("Devices that I'm using");

    useEffect(() => {
        const d_h_w = document.getElementById("device-header-wrapper");
        const d_h = document.getElementById("device-header");

        const handleScroll = (event: Event) => {
            console.log(window.scrollY);
            // Header
            if (window.scrollY > 57) {
                d_h_w ? d_h_w.classList.add("border-b-2") : undefined;
                d_h_w ? d_h_w.classList.add("bg-background/95","backdrop-blur","supports-[backdrop-filter]:bg-background/60") : undefined;
                d_h ? d_h.classList.remove("border-b-2") : undefined;
            } else {
                d_h_w ? d_h_w.classList.remove("border-b-2") : undefined;
                d_h_w ? d_h_w.classList.remove("bg-background/95","backdrop-blur","supports-[backdrop-filter]:bg-background/60") : undefined;
                d_h ? d_h.classList.add("border-b-2") : undefined;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className="relative">
            <ParticlesContainer />
            <div className="sticky top-0 z-10" id="device-header-wrapper">
                <div className="w-full max-w-screen-lg m-auto px-12 py-1 border-b-2" id="device-header">
                    <div className="grid grid-cols-5">
                        <div className="col-span-4 flex items-center max-md:hidden">
                            <span>{device}</span>
                        </div>
                        <div className="col-span-1 max-md:col-span-5 m-auto">
                            <Select onValueChange={(e) => window.scrollTo(0,parseInt(e))}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a device" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel className="text-purple-400">Devices</SelectLabel>
                                        <SelectItem value="1900">Desktop</SelectItem>
                                        <SelectItem value="ip14">iPhone 14 Plus</SelectItem>
                                        <SelectItem value="ip7">iPhone 7 Plus</SelectItem>
                                        <SelectItem value="watch">Apple Watch Series 5</SelectItem>
                                    </SelectGroup>
                                    <SelectGroup>
                                        <SelectLabel className="text-purple-400">Homelabs</SelectLabel>
                                        <SelectItem value="smp">Thicc SMP</SelectItem>
                                        <SelectItem value="skyblocc">ThiccSkyblocc</SelectItem>
                                        <SelectItem value="database">Database</SelectItem>
                                        <SelectItem value="rasppi4">Raspberry Pi 4</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[150px] mt-16 flex items-center justify-center">
                <VaraText text="devices" />
            </div>
            <div className="mb-32 mt-[200px] w-full max-w-screen-xl m-auto">
                <div className="grid grid-cols-5 max-lg:grid-cols-1">
                    <div className="col-span-3 max-lg:mb-24">
                        <AspectRatio ratio={16 / 9}>
                            <video 
                                controls={false} autoPlay muted loop preload="auto"
                            >
                                <source src="/win11livescreen.mp4" type="video/mp4" />
                            </video>
                        </AspectRatio>
                    </div>
                    <div className="w-full col-span-2 m-auto border-l-4 border-purple-800 max-md:border-none px-6 max-md:ml-6">
                        <h1 className="text-2xl text-purple-400 mb-4 max-md:text-center max-md:underline">Desktop</h1>
                        <ul className="list-none list-outside text-lg columns-2 max-md:columns-1">
                            <li className="flex gap-2 items-center max-md:justify-center"><Cpu />Intel® Core™ i3-10105F</li>
                            <li className="flex gap-2 items-center max-md:justify-center"><MemoryStick />32GB DDR4 3200MHz</li>
                            <li className="flex gap-2 items-center max-md:justify-center"><HdmiPort />AMD Radeon RX 6600 XT</li>
                            <li className="flex gap-2 items-center max-md:justify-center"><HardDrive />120GB SATA SSD</li>
                            <li className="flex gap-2 items-center max-md:justify-center"><HardDrive />256GB NVMe PCIe 3x4</li>
                            <li className="flex gap-2 items-center max-md:justify-center"><HardDrive />1TB HDD</li>
                            <li className="flex gap-2 items-center max-md:justify-center"><HardDrive />500GB HDD</li>
                            <li className="flex gap-2 items-center max-md:justify-center"><CircuitBoard />ASRock B560M Pro4</li>
                            <li className="flex gap-2 items-center max-md:justify-center"><PowerSquare />Coolermaster PC600 PSU</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mb-32 w-full max-w-screen-xl m-auto">
                <div className="grid grid-cols-6 max-lg:grid-cols-2 max-md:grid-cols-1">
                    <div className="lg:col-start-2 lg:col-span-2">
                        <Image src={IP14Plus} alt="" className="m-auto mb-4 max-h-96 w-auto" />
                        <div className="w-full col-span-2 m-auto border-l-4 border-purple-800 max-md:border-none px-6 max-md:ml-6">
                            <h1 className="text-2xl text-purple-400 mb-4 max-md:text-center max-md:underline">iPhone 14 Plus</h1>
                            <ul className="list-none list-outside text-lg columns-2 max-md:columns-1">
                                <li className="flex gap-2 items-center max-md:justify-center"><Cpu />Apple A15 Bionic</li>
                                <li className="flex gap-2 items-center max-md:justify-center"><MemoryStick />6GB LPDDR4X</li>
                                <li className="flex gap-2 items-center max-md:justify-center"><HardDrive />128GB NVMe</li>
                                <li className="flex gap-2 items-center max-md:justify-center"><Palette /><span className="px-2 py-1 bg-[#a9bacc] rounded-lg text-blue-700">Blue</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <Image src={IP7Plus} alt="" className="m-auto mb-4 max-h-96 w-auto" />
                        <div className="w-full col-span-2 m-auto border-l-4 border-purple-800 max-md:border-none px-6 max-md:ml-6">
                            <h1 className="text-2xl text-purple-400 mb-4 max-md:text-center max-md:underline">iPhone 7 Plus</h1>
                            <ul className="list-none list-outside text-lg columns-2 max-md:columns-1">
                                <li className="flex gap-2 items-center max-md:justify-center"><Cpu />Apple A10 Fusion</li>
                                <li className="flex gap-2 items-center max-md:justify-center"><MemoryStick />3GB LPDDR4</li>
                                <li className="flex gap-2 items-center max-md:justify-center"><HardDrive />128GB NVMe</li>
                                <li className="flex gap-2 items-center max-md:justify-center"><Palette /><span className="px-2 py-1 bg-[#e8d1b7] rounded-lg text-yellow-700">Gold</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-32 w-full max-w-screen-xl m-auto">
                <div className="grid grid-cols-6 max-md:grid-cols-1">
                    <div className="w-full lg:col-start-2 col-span-2 max-lg:col-span-3 m-auto border-r-4 border-purple-800 max-md:border-none px-6 max-md:ml-6 md:text-right">
                        <h1 className="text-2xl text-purple-400 max-md:text-center">Apple Watch Series 5</h1>
                        <h1 className="text-lg text-purple-300 mb-4 max-md:text-center max-md:underline">44mm + GPS</h1>
                        <ul className="list-none list-outside text-lg columns-2 max-md:columns-1">
                            <li className="flex gap-2 items-center justify-end max-md:justify-center"><span className="max-md:order-2">Apple S5</span><Cpu /></li>
                            <li className="flex gap-2 items-center justify-end max-md:justify-center"><span className="max-md:order-2">1GB</span><MemoryStick /></li>
                            <li className="flex gap-2 items-center justify-end max-md:justify-center"><span className="max-md:order-2">32GB NVMe</span><HardDrive /></li>
                            <li className="flex gap-2 items-center justify-end max-md:justify-center"><span className="max-md:order-2 px-2 py-1 bg-[#3a3b38] rounded-lg text-gray-300">Space Gray</span><Palette /></li>
                            <li className="flex gap-2 items-center justify-end max-md:justify-center"><span className="max-md:order-2">Always-on Display</span><Watch /></li>
                        </ul>
                    </div>
                    <div className="col-span-2 max-lg:col-span-3 max-md:mb-12 max-md:order-first">
                        <Image src={APW} alt="" className="m-auto mb-4 max-h-96 w-auto" />
                    </div>
                </div>
            </div>
            <div className="mb-32 w-full max-w-screen-xl m-auto">
                <div className="grid grid-cols-5 max-lg:grid-cols-1">
                    <div className="col-span-3 max-lg:mb-24">
                        <Image src={ATV} alt="" className="m-auto mb-4 max-h-64 w-auto" />
                    </div>
                    <div className="w-full col-span-2 m-auto border-l-4 border-purple-800 max-md:border-none px-6 max-md:ml-6">
                        <h1 className="text-2xl text-purple-400 max-md:text-center">Apple TV 4K</h1>
                        <h1 className="text-lg text-purple-300 mb-4 max-md:text-center max-md:underline">2nd generation</h1>
                        <ul className="list-none list-outside text-lg columns-2 max-md:columns-1">
                            <li className="flex gap-2 items-center max-md:justify-center"><Cpu />Apple A12 Bionic</li>
                            <li className="flex gap-2 items-center max-md:justify-center"><MemoryStick />3GB LPDDR4</li>
                            <li className="flex gap-2 items-center max-md:justify-center"><HardDrive />64GB NVMe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}