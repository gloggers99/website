"use client";

import React from "react";

export default function SocialLink({icon, link}: {
    icon: React.ReactNode,
    link: string
}) {
    return (
        <button className={`border-frame hover:bg-frame border
                        rounded-2xl size-14 hover:dark:bg-frame-dark hover:bg-frame-light
                        transition-colors duration-300 flex flex-col gap-2 justify-center items-center
                        cursor-pointer`}
                onClick={() => {open(link)}}>
            {icon}
        </button>
    );
}

