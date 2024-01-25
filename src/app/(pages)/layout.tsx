import { Metadata } from "next";
import { ReactElement } from "react";

export const metadata: Metadata = {
    title: "QuanTrieuPCYT",
    description: "17-year old Vietnamese who likes tinkering with tech things."
}

export default function layout({ children }: { children: ReactElement }) {
    return (
        <>
            {children}
        </>
    )
}