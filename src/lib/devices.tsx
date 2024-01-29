import { IconDatabase, IconDeviceDesktop, IconDeviceMobile, IconServer, IconServer2 } from "@tabler/icons-react";
import { ReactElement } from "react";

interface QuanTrieuDevices {
    name: string;
    icon: ReactElement;
    sub?: string;
    description: string;
}

const icon_size = 60;

export const devices: QuanTrieuDevices[] = [
    {
        name: "Desktop",
        icon: <IconDeviceDesktop size={icon_size} className="m-auto text-gray-400" />,
        description: "Intel® Core™ i3-10105F <br />32GB DDR4 3200MHz<br />AMD Radeon RX 6600 XT<br />120GB SATA SSD<br />256GB NVMe PCIe 3x4<br />1TB HDD<br />500GB HDD<br />ASRock B560M Pro4<br />Coolermaster PC600 PSU"
    },
    {
        name: "iPhone 14 Plus",
        icon: <IconDeviceMobile size={icon_size} className="m-auto text-gray-400" />,
        description: "Apple A15 Bionic<br />6GB LPDDR4X RAM<br />128GB NVMe<br />Blue"
    },
    {
        name: "iPhone 7 Plus",
        icon: <IconDeviceMobile size={icon_size} className="m-auto text-gray-400" />,
        description: "Apple A10 Fusion<br />3GB LPDDR4 RAM<br />128GB NVMe<br />Gold"
    },
    {
        name: "Apple Watch Series 5",
        icon: <IconDeviceMobile size={icon_size} className="m-auto text-gray-400" />,
        sub: "44nm + GPS",
        description: "Apple S5<br />1GB RAM<br />32GB NVMe<br />Space Gray<br />Always-on Display"
    }
]

export const servers: QuanTrieuDevices[] = [
    {
        name: "Thicc SMP",
        icon: <IconServer size={icon_size} className="m-auto text-gray-400" />,
        description: "Intel® Core™ i5-9400F<br />32GB DDR4 2666MHz<br />NVIDIA GeForce GT 730<br />1TB NVMe<br />240GB SATA SSD<br />MSI B365M PRO-VDH<br />X-POWER III 350W PSU"
    },
    {
        name: "ThiccSkyblocc",
        icon: <IconServer size={icon_size} className="m-auto text-gray-400" />,
        description: "Intel® Core™ i3-9100F<br />16GB DDR4 2400MHz<br />NVIDIA GeForce GT 220<br />240GB SATA SSD<br />ASUS H310M-F PRIME<br />HP Proprietary 180W PSU"
    },
    {
        name: "MySQL",
        icon: <IconDatabase size={icon_size} className="m-auto text-gray-400" />,
        description: "Intel® Core™ i5-3337U<br />8GB DDR3 1600MHz<br />Intel® HD Graphics 4000<br />120GB SATA SSD<br />Sony VAIO Z40UL.MB"
    },
    {
        name: "Raspberry Pi 4",
        icon: <IconServer2 size={icon_size} className="m-auto text-gray-400" />,
        description: "Broadcom BCM2711<br />2GB LPDDR4-3200<br />VideoCore VI<br />32GB Class 10 SD Card<br />1TB USB 3.0 HDD"
    }
]