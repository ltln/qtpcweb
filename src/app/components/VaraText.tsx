"use client";

import { useEffect } from "react";
import Vara from "vara";

export function VaraText({ text }: { text: string }) {
    let ignore = false;
    useEffect(() => {
        if (ignore) return;
        var vara = new Vara(
            "#vara-container",
            "/SatisfySL.json",
            [
                {
                    text: text,
                    letterSpacing: 2,
                    fontSize: 75,
                    strokeWidth: 2,
                    color: "#c084fc",
                    textAlign: "center"
                },
            ]
        );
        ignore = true;
    }, [ignore]);
    
    return <div id="vara-container" className="max-w-[400px] m-auto"></div>;
}