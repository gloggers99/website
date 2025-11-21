import {SocialLink} from "./socialLink.tsx";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {MdMail} from "react-icons/md";

export function SocialLinks() {
    return (
        <div className={"flex flex-wrap items-end gap-2 sm:gap-x-2 justify-center"}>
            <SocialLink
                href={"https://www.linkedin.com/in/lucas-marta-498b2b32b/"}
                Icon={FaLinkedin}
            />

            <SocialLink
                href={"https://github.com/gloggers99"}
                Icon={FaGithub}
            />
            <SocialLink
                href={"https://instagram.com/lucas.gloggers"}
                Icon={FaInstagram}
            />
            <SocialLink
                href={"mailto:lucas.marta0799@gmail.com"}
                Icon={MdMail}
            />
        </div>
    )
}