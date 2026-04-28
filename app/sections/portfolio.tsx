import React from "react";
import Image from "next/image";

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

function PortfolioItem({name, description, photo}: {
    name: string,
    description: string,
    photo: React.ReactNode
}) {
    return (
        <div className={"flex-1 border-2 rounded flex flex-col items-center"}>
            <h1 className={"font-playfair text-2xl py-2 text-center"}>{name}</h1>
            <p className={"font-opensans text-center"}>{description}</p>
            <div className={"w-full h-full fex-1 relative flex justify-center items-center"}>{photo}</div>
        </div>
    );
}

export default function Portfolio() {
    return (
        <div className={"min-h-screen snap-start flex flex-col"}>
            <TextSpan />
            <div className={"flex flex-col flex-1"}>
                <div className={"ml-10 font-playfair"}>
                    <h1 className={"md:text-4xl text-2xl"}>What I'm working on:</h1>
                    <small className={"font-opensans"}>This page is actively changed to reflect my two primary projects. </small>
                </div>
                <div className={"flex-1 flex md:flex-row flex-col gap-5 p-5"}>
                    <PortfolioItem name={"Howard Wettan's Campaign Website"}
                                   description={"I am currently managing Howard Wettan's campaign website!"}
                                   photo={<Image alt={"Howard"} src={"/howard.png"} width={500} height={500}/>} />
                    <PortfolioItem name={"Sonder"}
                                   description={"My personal project Sonder seeks to fill gaps in current finance information aggregation tools. " +
                                       "There is much left to do, including a collaboration with William Chastain."}
                                   photo={<Image alt={"Sonder"} src={"/sonder.png"} width={500} height={500} />} />
                </div>
            </div>
        </div>
    );
}