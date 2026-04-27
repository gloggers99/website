import React from "react";
import SocialLink from "@/app/components/socialLink";
import Chevron from "@/app/other/chevron";
import {SiGithub, SiGmail, SiInstagram} from "@icons-pack/react-simple-icons";

export default function Head() {
    return (
        <div className={"h-screen flex snap-start"}>
            <div className={"flex md:flex-row flex-col-reverse flex-1"}>
                <div className={`flex-1 flex flex-col-reverse md:justify-center justify-center
                                 items-center md:items-start dark:bg-background z-50 bg-background`}>
                    <div className={"min-h-20 flex flex-col justify-center items-center w-full"}>
                        <p className={"font-opensans font-bold"}>About Me</p>
                        <div className={"animate-pulse"}>
                            <Chevron />
                        </div>
                    </div>

                    <div className={"md:ml-5 md:text-left text-center flex flex-1 flex-col justify-center "}>
                        <small className={"font-opensans text-lg font-bold"}>Hi, my name is</small>
                        <h1 className={"font-playfair bold lg:text-8xl text-6xl tracking-tight"}>
                            LUCAS MARTA
                        </h1>

                        <div className={"flex flex-row gap-4 mt-5 md:justify-start justify-center"}>
                            <SocialLink icon={<SiInstagram size={40} />}
                                        link={"https://instagram.com/lucas.gloggers"} />
                            <SocialLink icon={<SiGithub size={40} />}
                                        link={"https://github.com/gloggers99"} />
                            <SocialLink icon={<SiGmail size={40}/>}
                                        link={"mailto:lucas.marta0799@gmail.com"} />
                        </div>
                    </div>
                </div>

                {/* Horizontal — mobile */}
                <div className={"block md:hidden z-50"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path
                            d="M0,15 C400,50 800,50 1200,15 L1200,60 L0,60 Z"
                            fill="var(--background)"
                            stroke="none"
                        />
                        <path
                            d="M0,15 C400,50 800,50 1200,15"
                            stroke="var(--foreground)"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>

                {/* Vertical — desktop */}
                <div className={"hidden md:block relative w-10 z-50 self-stretch"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="100%"
                        viewBox="0 0 40 1200"
                        preserveAspectRatio="none"
                        className="absolute inset-0"
                    >

                        <path
                            d="M20,0 C8,600 8,600 20,1200 L0,1200 L0,0 Z"
                            fill="var(--background)"
                            stroke="none"
                        />
                        <path
                            d="M20,0 C8,600 8,600 20,1200"
                            stroke="var(--foreground)"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>

                <div className={"flex-1 flex flex-col justify-center items-center relative bg-cover bg-[url('/IMG_5093.png')] md:-ml-10 md:mb-0 -mb-10"} />
            </div>
        </div>
    );
}