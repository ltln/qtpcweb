import { devices, servers } from "@/lib/devices";
import { IconDeviceDesktop, IconDeviceImac } from "@tabler/icons-react";

export default function page() {
    return (
        <div className="container max-w-4xl m-auto mt-8">
            <p className="text-center text-4xl text-white font-bold">Devices</p>
            <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-4 gap-2 mt-4 text-white">
            {
            devices.map((n,i) => {
            return (
                <div key={i} className="col-span-1 text-center">
                    {n.icon}
                    <p className="text-lg font-bold mt-2 mb-2 text-purple-400">{n.name}</p>
                    <p dangerouslySetInnerHTML={{ __html: n.description }}></p>
                </div>
            )
            })
            }
            </div>
            <p className="text-center text-4xl mt-4 text-white font-bold">Homelabs</p>
            <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-4 gap-2 mt-4 text-white">
            {
            servers.map((n,i) => {
            return (
                <div key={i} className="col-span-1 text-center">
                    {n.icon}
                    <p className="text-lg font-bold mt-2 mb-2 text-purple-400">{n.name}</p>
                    <p dangerouslySetInnerHTML={{ __html: n.description }}></p>
                </div>
            )
            })
            }
            </div>
        </div>
    )
}