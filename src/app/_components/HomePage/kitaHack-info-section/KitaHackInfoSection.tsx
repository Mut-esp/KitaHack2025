import "./style.css"

const KitaHackInfoSection = () => {
    return (
        <section id="kitahack-info" className="container px-6 mx-auto">
            <div className="px-6 text-gray-800 md:px-12 lg:text-left xl:px-52">
                <h2 className="font-semibold leading-7 lg:text-center text-blue-600">
                    Something you should know
                </h2>
                <p className="mt-2 text-3xl lg:text-center font-[GoogleSans-Bold] font-bold tracking-tight text-gray-700 sm:text-4xl">
                    What is KitaHack?
                </p>

                <div className="flex flex-row">
                    <div>
                        <h3 className="mt-5 mb-2 text-lg font-[GoogleSans-Bold] font-bold text-gray-700 md:text-xl dark:text-white md:text-left">
                            Brief overview
                        </h3>
                        <p className="text-left text-gray-700 max-w-prose dark:text-gray-400">
                            KitaHack is a two-month event featuring talks, events, and a hackathon organized by Google Developer Student Clubs Malaysia. It's a great opportunity to get feedback and practice your skills, with the goal of helping you create and fine-tune innovative ideas using Google technologies.
                        </p>

                        <h3 className="mt-4 mb-2 text-lg font-[GoogleSans-Bold] font-bold text-gray-700 md:text-xl dark:text-white md:text-left">
                            Purpose
                        </h3>
                        <p className="text-left text-gray-700 max-w-prose dark:text-gray-400">
                            The main purpose of KitaHack is to help participants improve their proposals for the <a href="https://developers.google.com/community/gdsc-solution-challenge" className="text-blue-600 font-[GoogleSans-Bold] font-bold">
                                2024 Solution Challenge
                            </a>.
                            We offer feedback and networking opportunities with industry professionals, speakers, and mentors to help you get the most out of your experience. Plus, there are prizes to be won from our sponsors!
                        </p>

                        <h3 className="mt-4 mb-2 text-lg font-[GoogleSans-Bold] font-bold text-gray-700 md:text-xl dark:text-white md:text-left">
                            Theme
                        </h3>
                        <p className="text-left text-gray-700 max-w-prose dark:text-gray-400">
                            KitaHack centers around the United Nations' 17 Sustainable Development Goals (SDGs). During the event, you'll be challenged to create a project that helps solve one or more of these goals using Google technologies. It's a chance to make a real difference in the world and learn new skills at the same time.
                        </p>
                    </div>

                    <div className="self-center hidden p-20 lg:block">
                        <img src="images/kitahack.png" alt="Kitahack 2024 Logo" className="self-center max-w-[300px]"/>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default KitaHackInfoSection