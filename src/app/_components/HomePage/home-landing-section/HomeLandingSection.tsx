import Image from "next/image";
import "./style.css";

const HomeLandingSection = () => {
    return (
        <section className="flex items-center lg:mt-20">
            <div className="container px-6 mx-auto">
                <div className="px-6 text-center text-gray-800 md:px-12 lg:text-left xl:px-52">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <h1 id="hero_title" className="font-[GoogleSans-Bold] mb-6 text-5xl font-bold tracking-tight text-transparent gradient-text md:text-6xl xl:text-6xl dark:text-white dark:bg-none">
                                GDGoc KitaHack 2025
                            </h1>
                            <p className="max-w-2xl mb-6 font-normal text-gray-700 dark:text-gray-400 lg:mb-8">
                                KitaHack is a 2-month event featuring <strong className="font-[GoogleSans-Bold]">
                                    talks, events, and a hackathon
                                </strong> organised by Google Developer Student Clubs Malaysia (GDSC Malaysia).
                            </p>
                            <p className="max-w-2xl mb-6 font-normal text-gray-700 dark:text-gray-400 lg:mb-8">
                                The event duration is <strong className="font-[GoogleSans-Bold]">
                                    3rd Dec 2023 - 28th Jan 2024
                                </strong>
                            </p>

                            <a id="hero_button" href="https://forms.gle/YCZZj5EQg5vS61y78" target="_blank" rel="noopener noreferrer" className="gradient-border-button h-14 btn border-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                                <span className="font-[GoogleSans-Bold] font-bold relative flex px-5 py-3.5 transition-all ease-in duration-75 dark:text-gray-400 dark:bg-[#2A303C] rounded-md group-hover:bg-opacity-0 dark:hover:text-white">
                                    Register Now!
                                </span>
                            </a>
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <Image
                                src="/images/gsc_home_hero_logo.png"
                                width={500} // Adjust width based on actual image size
                                height={400} // Adjust height based on actual image size
                                className="w-full rounded-lg shadow-2xl shadow-gray-900 dark:shadow-gray-400"
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
