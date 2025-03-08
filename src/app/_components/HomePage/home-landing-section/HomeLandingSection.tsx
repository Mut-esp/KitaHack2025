import Image from "next/image";
import "./style.css";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";

const HomeLandingSection = () => {

    return (
        <section className="flex items-center lg:mt-20 z-10">
            <div className="container px-6 mx-auto z-10">

                {/* Old Version */}
                {/* <div className="px-6 text-center text-gray-800 md:px-12 lg:text-left xl:px-52">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <h1 id="hero_title" className="font-[GoogleSans-Bold] mb-6 text-5xl font-bold tracking-tight text-transparent gradient-text md:text-6xl xl:text-6xl">
                                GDGoC KitaHack 2025
                            </h1>
                            <p className="max-w-2xl mb-6 font-normal text-gray-700 dark:text-gray-400 lg:mb-8">
                                KitaHack is a 2-month event featuring <strong className="font-[GoogleSans-Bold]">
                                    talks, events, and a hackathon
                                </strong> organised by Google Developer Group On Campus Malaysia (GDGoC Malaysia).
                            </p>
                            <p className="max-w-2xl mb-6 font-normal text-gray-700 dark:text-gray-400 lg:mb-8">
                                The event duration is <strong className="font-[GoogleSans-Bold]">
                                    22nd February 2025 - 4th May 2025
                                </strong>
                            </p>

                            <a id="" href="https://docs.google.com/forms/d/e/1FAIpQLSeDYPVS5cLgbcmZulvzG-ElgBJJGd94WIdtpZP56IfOwp1F6Q/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="gradient-border-button h-14 btn border-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                                <span className="font-[GoogleSans-Bold] font-bold relative flex px-5 py-3.5 transition-all ease-in duration-75 ">
                                    Register Now!
                                </span>
                            </a>

                        </div>
                        <div className="mb-12 lg:mb-0">
                            <Image
                                src="/images/gsc_home_hero_logo.png"
                                width={500} // Adjust width based on actual image size
                                height={400} // Adjust height based on actual image size
                                className="w-full rounded-lg shadow-2xl shadow-blue-400"
                                alt="GSC Home Hero Logo"
                                priority // Optimizes loading for LCP
                            />
                        </div>
                    </div>
                </div> */}

                <div className="px-6 text-center text-gray-800 md:px-12 lg:text-left xl:px-52">

                    {/* Grid Layout */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            {/* Component Badge */}
                            <span className="bg-purple-100 inline-flex items-center rounded-full border border-purple-500 px-3 py-1 text-sm text-purple-700">
                                <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                                <span className="ml-1">KitaHack2025</span>
                            </span>
                            {/* Header and Paragraph */}
                            <h1 id="hero_title" className="font-semibold mt-3 mb-6 text-5xl text-black md:text-6xl xl:text-6xl dark:text-white">
                                Innovate, Build and Compete!
                            </h1>
                            <p className="max-w-2xl mb-6 font-normal text-gray-700 dark:text-gray-400 lg:mb-8">
                                <strong><em>GDGoC KitaHack 2025</em></strong> is
                                the ultimate hackathon for developers, designers, and tech enthusiasts. Compete, collaborate, and create innovative
                                solutions. <span className="underline"><a href="">Explore Google's latest AI tools</a></span> through hands-on workshops,
                                inspiring sessions, and more.
                            </p>
                            {/* Buttons */}
                            <div className="flex space-x-4 justify-center lg:justify-start">
                                <a id="knowMoreButton" href="">
                                    <span className="inline-block px-7 py-3 text-[#1D68E5] border border-[#1D68E5] rounded-full">
                                        Know More
                                        <Icon icon="mdi:wand" className="inline-block h-6 w-6 ml-2" />
                                    </span>
                                </a>
                                <a id="registerButton" href="https://docs.google.com/forms/d/e/1FAIpQLSeDYPVS5cLgbcmZulvzG-ElgBJJGd94WIdtpZP56IfOwp1F6Q/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                                    <span className="inline-block px-7 py-3 bg-[#1D68E5] text-white rounded-full">
                                        Register Now
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* Pictures */}
                        <div className="mb-12 lg:mb-0">
                            <Image
                                src="/images/gsc_home_hero_logo.png"
                                width={400} // Adjust width based on actual image size
                                height={400} // Adjust height based on actual image size
                                className="w-full rounded-xl shadow-2xl shadow-xl"
                                alt="GSC Home Hero Logo"
                                priority // Optimizes loading for LCP
                            />
                        </div>
                    </div>

                    {/* University Logos */}
                    <div className="relative bg-[#FCFBFD] mt-24 p-8 rounded-2xl dark:bg-[#1A1A1A]">
                        <div className="w-full space-x-10 overflow-x-auto no-scrollbar scroll-smooth snap-x">
                            <div className="flex space-x-1 min-w-max w-full animate-scroll">
                                {[...Array(2)].map((_, i) => (
                                    <>
                                        <a key={`APU-${i}`} href="https://gdg.community.dev/gdg-on-campus-asia-pacific-university-of-technology-innovation-kuala-lumpur-malaysia/" target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                            <Image src="/images/university-logos/APU.svg"
                                                alt="APU"
                                                width={300}
                                                height={100}
                                                className="opacity-50 hover:opacity-100"
                                            />
                                        </a>
                                        <a key={`IIUM-${i}`} href="https://gdg.community.dev/gdg-on-campus-international-islamic-university-malaysia-selangor-malaysia/" target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                            <Image src="/images/university-logos/IIUM.svg"
                                                alt="IIUM"
                                                width={300}
                                                height={100}
                                                className="opacity-50 hover:opacity-100"
                                            />
                                        </a>
                                        <a key={`MMU-${i}`} href="https://gdg.community.dev/gdg-on-campus-multimedia-university-selangor-malaysia/" target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                            <Image src="/images/university-logos/MMU.svg"
                                                alt="MMU"
                                                width={300}
                                                height={100}
                                                className="opacity-50 hover:opacity-100"
                                            />
                                        </a>
                                        <a key={`MUM-${i}`} href="https://gdg.community.dev/gdg-on-campus-monash-university-malaysia-selangor-malaysia/" target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                            <Image src="/images/university-logos/MUM.svg"
                                                alt="MUM"
                                                width={300}
                                                height={100}
                                                className="opacity-50 hover:opacity-100"
                                            />
                                        </a>
                                        <a key={`SUM-${i}`} href="https://gdg.community.dev/gdg-on-campus-sunway-university-selangor-malaysia/" target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                            <Image src="/images/university-logos/SUM.svg"
                                                alt="SUM"
                                                width={300}
                                                height={100}
                                                className="opacity-50 hover:opacity-100"
                                            />
                                        </a>
                                        <a key={`tarumt-${i}`} href="https://gdg.community.dev/gdg-on-campus-tunku-abdul-rahman-university-of-management-and-technology-kuala-lumpur-malaysia/" target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                            <Image src="/images/university-logos/tarumt.svg"
                                                alt="tarumt"
                                                width={300}
                                                height={100}
                                                className="opacity-50 hover:opacity-100"
                                            />
                                        </a>
                                        <a key={`UM-${i}`} href="https://gdg.community.dev/gdg-on-campus-universiti-malaya-kuala-lumpur-malaysia/" target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                            <Image src="/images/university-logos/UM.svg"
                                                alt="UM"
                                                width={300}
                                                height={100}
                                                className="opacity-50 hover:opacity-100"
                                            />
                                        </a>
                                        <a key={`UPM-${i}`} href="https://gdg.community.dev/gdg-on-campus-universiti-putra-malaysia-selangor-malaysia/" target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                            <Image src="/images/university-logos/UPM.svg"
                                                alt="UPM"
                                                width={300}
                                                height={100}
                                                className="opacity-50 hover:opacity-100"
                                            />
                                        </a>
                                        <a key={`USM-${i}`} href="https://gdg.community.dev/gdg-on-campus-universiti-sains-malaysia-penang-malaysia/" target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                            <Image src="/images/university-logos/USM.svg"
                                                alt="USM"
                                                width={300}
                                                height={100}
                                                className="opacity-50 hover:opacity-100"
                                            />
                                        </a>
                                        <a key={`UTM-${i}`} href="https://gdg.community.dev/gdg-on-campus-universiti-teknologi-malaysia-johor-bahru-malaysia/" target="_blank" rel="noopener noreferrer" className="snap-center flex items-center">
                                            <Image src="/images/university-logos/UTM.svg"
                                                alt="UTM"
                                                width={300}
                                                height={100}
                                                className="opacity-50 hover:opacity-100"
                                            />
                                        </a>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* JavaScript for manual scrolling */}
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        (function() {
                        const scrollContainer = document.getElementById('scrollContainer');
                        const scrollContent = document.getElementById('scrollContent');
                        let timeout;

                        // Pause animation when scrolling manually
                        scrollContainer.addEventListener('scroll', () => {
                            scrollContent.classList.add('paused');
                            clearTimeout(timeout);

                            // Resume after 3s of inactivity
                            timeout = setTimeout(() => {
                            scrollContent.classList.remove('paused');
                            }, 1000);
                        });
                        })();
                    `}} />
                </div>
            </div>
        </section>
    );
};

export default HomeLandingSection;
