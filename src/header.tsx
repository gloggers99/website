import {SocialLinks} from "./socialLinks.tsx";

export function Header() {
    return (
        <div className={"flex flex-col gap-4 sm:gap-x-5 w-full"}>
            <div className={"flex flex-col items-center"}>
                <p className={"text-6xl font-semibold text-gradient"}>Lucas Marta</p>
                <p className={"text-sm sm:text-base"}>Programmer | Developer</p>
            </div>
            <SocialLinks/>
        </div>
    )
}