import {Title} from "./title.tsx";
import {Language} from "./language.tsx";
import {SiCplusplus, SiTypescript} from "react-icons/si";
import {FaJava, FaPython, FaReact, FaRust} from "react-icons/fa";
import {DiHaskell, DiVisualstudio} from "react-icons/di";

export function About() {
    return (
        <div>
            <Title text={"About Me"}/>
            <div className={"sm:max-w-3/4"}>
                <p>
                    I'm a <p className={"inline bg-amber-950"}>17-year-old</p> programmer living in California.
                </p>

                <br/>

                <p>
                    I enjoy working on system-level projects in languages
                    like <Language name={"C/C++"} Icon={SiCplusplus} color={"text-ctp-blue"}/>
                    , <Language name={"Rust"} Icon={FaRust} color={"text-ctp-red"}/>
                    , <Language name={"Python"} Icon={FaPython} color={"text-ctp-green"}/>. I also dabble in web stuff
                    with <Language name={"TypeScript"} Icon={SiTypescript} color={"text-ctp-yellow"}/> + <Language
                    name={"React"} Icon={FaReact} color={"text-white"}/> to make things
                    like this! Additionally I have experience with <Language name={"Java"} Icon={FaJava}
                                                                             color={"text-ctp-maroon"}/>
                    , <Language name={"C Sharp"} Icon={DiVisualstudio} color={"text-ctp-sapphire"}/>
                    , <Language name={"Haskell"} Icon={DiHaskell} color={"text-ctp-mauve"}/>, and more.
                </p>

                <br/>

                <p>
                    Currently, I am employed by a fantastic <a className={"bg-amber-950"}
                                                               href={"https://www.codeninjas.com/"}>Code
                    Ninja's</a> franchise,
                    where I share my knowledge with those younger than me.
                </p>
            </div>
        </div>
    )
}