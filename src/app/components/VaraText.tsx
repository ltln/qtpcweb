"use client";

import { useEffect } from "react";
import Vara from "vara";

export function VaraText({ text }: { text: string }) {
    let ignore = false;
    useEffect(() => {
        if (ignore) return;
        var vara = new Vara(
            "#vara-container",
            "/Pacifico.json",
            [
                {
                    text: text,
                    letterSpacing: 1,
                    fontSize: 75,
                    strokeWidth: 1,
                    color: "#c084fc",
                    textAlign: "center"
                },
            ]
        );
        ignore = true;
    }, [ignore]);
    
    return <div id="vara-container" className="w-[500px]"></div>;
}