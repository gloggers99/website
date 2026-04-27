import Head from "@/app/sections/head";
import About from "@/app/sections/about";
import Portfolio from "@/app/sections/portfolio";

export default function Page() {
    return (
        <main className={"h-screen scroll-smooth overflow-y-scroll snap-y snap-mandatory"}>
            <Head />
            <About />
            <Portfolio />
        </main>
    );
}
