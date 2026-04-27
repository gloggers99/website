import Head from "@/app/sections/head";
import About from "@/app/sections/about";
import Portfolio from "@/app/sections/portfolio";

// Tired of William Chastain's BS, so now I'm making
// an objectively better website than his.

export default function Page() {
    return (
        <main className={"h-screen scroll-smooth overflow-y-scroll snap-y snap-mandatory"}>
            <Head />
            <About />
            <Portfolio />
        </main>
    );
}
