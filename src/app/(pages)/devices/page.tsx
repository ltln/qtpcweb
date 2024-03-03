"use client";

import ParticlesContainer from "@/app/components/Particles";
import { VaraText } from "@/app/components/VaraText";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { useEffect, useState } from "react";
import Image from "next/image";

import Windows from "../../../lib/assets/windows11_1.jpg";
import WindowsScreen from "../../../lib/assets/windows11_2.jpg";
import { CircuitBoard, Cpu, HardDrive, HdmiPort, MemoryStick, PowerSquare } from "lucide-react";

export default function Devices() {
    const [device, setDevice] = useState<string>("Devices that I'm using");

    useEffect(() => {
        const d_h_w = document.getElementById("device-header-wrapper");
        const d_h = document.getElementById("device-header");

        const d1 = document.getElementById("desktop-1");
        const d2 = document.getElementById("desktop-2");
        const di = document.getElementById("desktop-info");

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

            if (window.scrollY > 1800) {
                setDevice("Desktop");
                d1 ? d1.style.opacity = "0" : "";
                d2 ? d2.style.opacity = "1" : "";
                if (window.scrollY > 1900 && window.scrollY < 2301) {
                    d2 ? d2.style.transform = `scale(${1 - ((window.scrollY - 1900) / (2300 - 1900)) * 0.4})` : "";
                }

                if (window.scrollY > 2300) {
                    di ? di.classList.add('is-visible') : "";
                } else {
                    di ? di.classList.remove('is-visible') : "";
                }

            } else {
                setDevice("Devices that I'm using");
                d1 ? d1.style.opacity = "1" : "";
                d2 ? d2.style.opacity = "0" : "";
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className="relative" onScroll={() => console.log("Hello!")}>
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
            <div className="relative h-screen/2 min-h-[600px] flex items-center justify-center">
                <ParticlesContainer />
                <VaraText text="Devices" />
            </div>
            <div className="relative h-[1300px] mt-[1200px] w-full max-w-screen-xl m-auto">
                <div className="sticky top-[70px]">
                    <Image alt="" src={Windows} id="desktop-1" style={{ opacity: 1 }} />
                    <Image alt="" src={WindowsScreen} id="desktop-2" className="absolute top-0" style={{ transform: 'scale(1.03)', opacity: 0 }} />
                    <div className="fade-in-section mt-60 w-full max-w-screen-md m-auto border-l-4 border-purple-800 px-6 max-md:ml-6" id="desktop-info">
                        <h1 className="text-2xl text-purple-400 mb-4">Desktop</h1>
                        <ul className="list-none list-outside text-lg columns-2 max-md:columns-1">
                            <li className="flex gap-2 items-center"><Cpu />Intel® Core™ i3-10105F</li>
                            <li className="flex gap-2 items-center"><MemoryStick />32GB DDR4 3200MHz</li>
                            <li className="flex gap-2 items-center"><HdmiPort />AMD Radeon RX 6600 XT</li>
                            <li className="flex gap-2 items-center"><HardDrive />120GB SATA SSD</li>
                            <li className="flex gap-2 items-center"><HardDrive />256GB NVMe PCIe 3x4</li>
                            <li className="flex gap-2 items-center"><HardDrive />1TB HDD</li>
                            <li className="flex gap-2 items-center"><HardDrive />500GB HDD</li>
                            <li className="flex gap-2 items-center"><CircuitBoard />ASRock B560M Pro4</li>
                            <li className="flex gap-2 items-center"><PowerSquare />Coolermaster PC600 PSU</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="min-h-screen mt-[1200px] w-full m-auto">

            </div>
        </main>
    )
}