import type {IconType} from "react-icons";

export function SocialLink({href, Icon}: { href: string, Icon: IconType }) {
    return (
        <div className={"hover:scale-110 duration-300"}>
            <p className={"font-bold text-sm sm:text-base"}>
                <a className={"text-ctp-lavender"}
                   href={href}
                   target={"_blank"}>
                    <Icon className={"w-8 h-8 sm:w-7 sm:h-7"}/>
                </a>
            </p>
        </div>
    )
}