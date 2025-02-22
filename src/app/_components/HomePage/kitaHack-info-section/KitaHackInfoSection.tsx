import Image from "next/image";
import "./style.css";

const KitaHackInfoSection = () => {
    return (
        <section id="kitahack-info" className="container px-6 mx-auto">
            <div className="px-6 text-gray-800 md:mx-12 lg:text-left xl:mx-52">
                <h2 className="font-semibold leading-7 lg:text-center text-blue-600">
                    Something you should know
                </h2>
                <p className="mt-2 text-3xl lg:text-center font-[GoogleSans-Bold] font-bold tracking-tight text-gray-700 dark:text-gray-100 sm:text-4xl">
                    What is KitaHack?
                </p>

                <div className="flex flex-row justify-between">
                    <div>
                        <h3 className="mt-5 mb-2 text-lg font-[GoogleSans-Bold] font-bold text-gray-700 md:text-xl dark:text-white md:text-left">
                            Brief overview
                        </h3>
                        <p className="text-left text-gray-700 max-w-prose dark:text-gray-400">
                            KitaHack launched in 2021, is a nationwide collaboration with all GDG chapters in Malaysia. It’s more than just a hackathon, it’s a platform for dedicated and talented individuals to develop their skills, tackle Real-World AI & SDG - aligned Challenges and prepare participants for the Google Solution Challenge.

                        </p>

                        <h3 className="mt-4 mb-2 text-lg font-[GoogleSans-Bold] font-bold text-gray-700 md:text-xl dark:text-white md:text-left">
                            Purpose
                        </h3>
                        <p className="text-left text-gray-700 max-w-prose dark:text-gray-400">
                            The main purpose of KitaHack is to help participants improve their proposals for the 2025 Solution Challenge
                            We provide valuable feedback, networking opportunities with industry professionals, and mentorship from experts. Participants will also have the chance to win exciting prizes from our sponsors!
                        </p>

                        <h3 className="mt-4 mb-2 text-lg font-[GoogleSans-Bold] font-bold text-gray-700 md:text-xl dark:text-white md:text-left">
                            Theme
                        </h3>
                        <p className="text-left text-gray-700 max-w-prose dark:text-gray-400">
                            AI & SDG (Sustainable Development Goals)
                            KitaHack focuses on leveraging Artificial Intelligence (AI) to create solutions aligned with the United Nations' 17 Sustainable Development Goals (SDGs).
                        </p>
                        <h3 className="mt-4 mb-2 text-lg font-[GoogleSans-Bold] font-bold text-gray-700 md:text-xl dark:text-white md:text-left">
                            Problem Statement
                        </h3>
                        <p className="text-left text-gray-700 max-w-prose dark:text-gray-400">
                            How can Google AI Technologies be leveraged to develop innovative, scalable, and inclusive solutions that address one or more SDG-related challenges, ensuring long-term impact and sustainability?
                        </p>
                    </div>

                    <div className="self-center hidden p-10 lg:block">
                        <Image
                            src="/images/KitaHack2025-info.png"
                            width={300}
                            height={300}
                            alt="Kitahack 2024 Logo"
                            className="self-center max-w-[350px] border rounded-lg shadow-2xl shadow-blue-400 dark:shadow-gray-400"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KitaHackInfoSection;
