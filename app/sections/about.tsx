import React from "react";
import {
    SiC,
    SiCplusplus,
    SiHaskell,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiRust,
    SiTypescript
} from "@icons-pack/react-simple-icons";
import Chevron from "@/app/other/chevron";

function TextSpan() {
    return (
        <div className="w-full px-0 font-playfair">
            <svg viewBox="0 0 1000 120" width="100%" xmlns="http://www.w3.org/2000/svg">
                <text
                    x="0"
                    y="100"
                    textLength="1000"
                    lengthAdjust="spacing"
                    fontSize="120"
                    fontWeight="400"
                    fontFamily="inherit"
                    fill="#6b7280"
                >
                    <tspan fill="var(--frame)">E </tspan>
                    <tspan fill="var(--foreground)">ABOUT ME</tspan>
                    <tspan fill="var(--frame)"> ABOU</tspan>
                </text>
            </svg>
        </div>
    );
}

// AI Generated.
function getAge() {
    const birth = new Date(2007, 11, 26);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const beforeBirthday =
        today.getMonth() < birth.getMonth() ||
        (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
    if (beforeBirthday) age--;
    return age;
}

function Tool({icon, children}: {
    icon: React.ReactNode
    children?: React.ReactNode
}) {
    return (
        <span className={"inline-flex items-center gap-1 font-bold"}>
            {icon}
            {children}
        </span>
    );
}

function Seperator() {
    return (
        <p className={"border-b border-frame"} />
    );
}

export default function About() {
    return (
        <div className={"min-h-screen snap-end flex flex-col"}>
            <TextSpan />
            <div className={"flex-1 flex flex-row"}>
                <div className={"md:flex-1 flex invisible md:visible bg-[url('/ball.jpg')] bg-center bg-cover border-b-2 border-r-2 border-t-2 border-foreground"} />

                <div className={"flex-2 flex flex-row"}>
                    <div className={"flex flex-col-reverse"}>

                        <div className={"min-h-20 flex flex-col justify-center items-center w-full"}>
                            <p className={"font-opensans font-bold"}>Portfolio</p>
                            <div className={"animate-pulse"}>
                                <Chevron />
                            </div>
                        </div>
                        <div className={"flex-1 flex px-10 flex-col gap-10 font-opensans"}>
                            <p className={"text-6xl font-playfair mt-5"}>I'm an <b>{getAge()}</b>-year-old aspiring <b>computer programmer</b>.</p>
                            <Seperator />
                            <p className={"md:text-xl text-lg"}>
                                Ever since I was in elementary school I developed a passion for computer science.
                                I created games, programs, websites, getting better with every creation.
                            </p>
                            <p className={"md:text-xl text-lg"}>
                                I've learned <Tool icon={<SiC size={20} color={"#A8B9CC"} />}>C</Tool>,{" "}
                                <Tool icon={<SiCplusplus size={20} color={"#00599C"} />}>C++</Tool>,{" "}
                                <Tool icon={<SiRust size={20} color={"#CE422B"} />}>Rust</Tool>,{" "}
                                <Tool icon={<SiTypescript size={20} color={"#3178C6"} />}>TypeScript</Tool>,{" "}
                                <Tool icon={<SiReact size={20} color={"#61DAFB"} />}>React</Tool>,{" "}
                                <Tool icon={<SiNextdotjs size={20} color={"var(--foreground)"} />}>Next.js</Tool>,{" "}
                                <Tool icon={<SiHaskell size={20} color={"#5D4F85"} />}>Haskell</Tool>,{" "}
                                <Tool icon={<SiPython size={20} color={"#3776AB"} />}>Python</Tool>,{" "}
                                and even more.
                            </p>
                            <p className={"md:text-xl text-lg"}>
                                I currently work at a <b>Code Ninjas</b> franchise, teaching kids and teens STEM concepts and
                                advanced <Tool icon={<SiPython size={20} color={"#3776AB"} />}>Python</Tool> for competitive
                                programming competitions.
                            </p>
                            <p className={"md:text-xl text-lg"}>
                                I also have a passion for financial technology. Investments, algorithms, money stuff, etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}