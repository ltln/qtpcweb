import { Typewriter } from "react-simple-typewriter";

export default function Typewritter({ text }: { text: string[] }) {
    return <Typewriter
        words={text}
        loop={0}
        cursor
        cursorStyle='_'
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={2000}
    />
}