import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
    return (
        <div className="pb-20 pt-36 relative z-10">
            {/* Spotlights */}
            <div>
                <Spotlight
                    className="-top-[60vh] -left-[30vw] md:-left-[25vw] h-[200vh] w-[150vw]"
                    fill="white"
                />
                <Spotlight
                    className="h-[150vh] w-[100vw] top-0 left-[40vw]"
                    fill="purple"
                />
                <Spotlight
                    className="top-20 left-[20vw] h-[120vh] w-[90vw]"
                    fill="blue"
                />
            </div>

            {/* Background Grid */}
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center -z-10"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            {/* Main Content */}
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 relative my-20 z-10 max-w-7xl mx-auto px-6">
                {/* Text section */}
                <div className="flex flex-col items-center md:items-start max-w-2xl text-center md:text-left">
                    <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            <span className="bg-white/10 text-blue-400 font-medium rounded-md px-1">
              Dynamic Web Magic
            </span>{" "}
                        with{" "}
                        <span className="bg-purple-500/20 text-purple-300 font-medium rounded-md px-1">
              Next.js
            </span>
                    </p>

                    <TextGenerateEffect
                        words="Bridging Creativity and Security through Code"
                        className="text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m Nguyễn Thanh Sang (Kuro), a Vietnamese highschool
                        student passionate about{" "}
                        <span className="bg-white/10 text-blue-300 font-medium rounded-md px-1">
              Mobile App Development
            </span>{" "}
                        and{" "}
                        <span className="bg-purple-500/10 text-pink-400 font-medium rounded-md px-1">
              DevSecOps
            </span>
                        .
                    </p>

                    <a href="#about">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>

                {/* Image Section */}
                <div className="group relative w-[250px] md:w-[350px] lg:w-[400px] aspect-square rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1">
                    {/* Background Glow */}
                    <div className="absolute inset-0 z-10 rounded-2xl bg-blue-500/40 blur-[100px] opacity-40 group-hover:opacity-60 transition-all duration-700" />
                    {/* Main Image */}
                    <Image
                        src="/pfp.PNG"
                        alt="Hero illustration"
                        fill
                        className="object-cover rounded-2xl shadow-[0_0_60px_10px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_90px_20px_rgba(59,130,246,0.4)] transition-all duration-700"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;