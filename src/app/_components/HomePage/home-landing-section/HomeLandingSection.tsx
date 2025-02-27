import Image from "next/image";
import "./style.css";

const HomeLandingSection = () => {
    return (
        <section className="flex items-center lg:mt-20 z-10">
            <div className="container px-6 mx-auto z-10">
                <div className="px-6 text-center text-gray-800 md:px-12 lg:text-left xl:px-52">
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
                </div>
            </div>
        </section>
    );
};

export default HomeLandingSection;
