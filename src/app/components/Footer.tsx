"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { IconChevronUp } from "@tabler/icons-react";

export default function Footer() {
    const scrollToTop = () => {
        window ? window.scrollTo(0,0) : null;
    }
    return (
        <footer className="py-4 border-t-[1px] border-t-slate-100 dark:border-t-slate-900">
            <div className="container text-center max-md:text-left">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
                    Built & Designed with ❤️ by @<Link href="https://github.com/ltln" target="_blank" className="font-medium underline underline-offset-2">ltln</Link>
                </p>
                <div className="text-center">
                    <Button variant={"ghost"} onClick={scrollToTop}>
                        <IconChevronUp className="animate-bounce" />
                    </Button>
                </div>
            </div>
        </footer>
    )
}