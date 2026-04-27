import SocialLink from "@/app/components/socialLink";
import {SiGithub, SiGmail} from "@icons-pack/react-simple-icons";
import React from "react";

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
                    <tspan fill="var(--frame)">OLIO</tspan>
                    <tspan fill="var(--foreground)">PORTFOLIO</tspan>
                    <tspan fill="var(--frame)">PO</tspan>
                </text>
            </svg>
        </div>
    );
}

export default function Portfolio() {
    return (
        <div className={"min-h-screen snap-start flex flex-col"}>
            <TextSpan />
            <div className={"justify-center items-center gap-5 flex flex-col flex-1"}>
                <h1 className={"text-5xl"}>This section is a work in progress.</h1>
                <div className={"flex flex-row items-center gap-5"}>
                    <p className={"text-2xl"}>For now please refer to my GitHub account:</p>
                    <SocialLink icon={<SiGithub size={40} />}
                                link={"https://github.com/gloggers99"} />
                </div>
                <div className={"flex flex-row items-center gap-5"}>
                    <p className={"text-2xl"}>For inquiries please contact me via email:</p>
                    <SocialLink icon={<SiGmail size={40}/>}
                                link={"mailto:lucas.marta0799@gmail.com"} />
                </div>
            </div>
        </div>
    );
}