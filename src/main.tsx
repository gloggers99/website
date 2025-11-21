import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css';
import {Header} from "./header.tsx";
import {About} from "./about.tsx";
import {Projects} from "./projects.tsx";
import {Footer} from "./footer.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="flex justify-start items-center sm:items-start flex-col min-h-screen w-full p-4 sm:p-8 bg-ctp-crust gap-6 sm:gap-10">
            <Header />
            <About />
            <Projects />
            <Footer />
        </div>
    </StrictMode>
)
