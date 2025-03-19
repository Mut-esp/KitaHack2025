import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAltIcon";

const InnovateWithAISection = () => {

    // Bento Grids
    const bentoGrids = [
        {
            id: 1,
            span: "md:col-span-1 md:aspect-square",
            background: "bg-[url('/images/kitahack-bg.png')] bg-cover bg-center bg-no-repeat",
            style: { backgroundSize: "150%" },
            content: <img src="images/KitaHack2025-logo.svg" alt="KitaHack Logo"/>,
        },
        {
            id: 2,
            span: "md:col-span-2",
            background: "bg-[url('/images/Pattern-BG.png')] dark:bg-[url('/images/Pattern-Dark-BG.svg')] bg-no-repeat bg-[right_top] p-4 lg:p-6 pr-10 lg:pr-28",
            style: { backgroundSize: "60%" },
            title: "EMPOWERING INNOVATORS FOR AI & SDG CHALLENGES",
            text: "KitaHack launched in 2021, is a nationwide collaboration with all GDG chapters in Malaysia. It's more than just a hackathon, it's a platform for dedicated and talented individuals to develop their skills, tackle Real-World AI & SDG - aligned Challenges and prepare participants for the Google Solution Challenge.",
        },
        {
            id: 3,
            span: "row-span-1 md:col-span-2 text-left md:text-center relative py-8 md:py-16 md:px-28 lg:px-32",
            bubblesgas: <img src="images/Bubble-GAS.png" alt="bubbles" />,
            bubblesgmi: <img src="images/Bubble-GMI.png" alt="bubbles" />,
            bubblesvai: <img src="images/Bubble-VAI.png" alt="bubbles" />,
            background: "none",
            title: "ENHANCING PROPOSALS FOR THE 2025 SOLUTION CHALLENGE",
            text: "The main purpose of KitaHack is to help participants improve their proposals for the 2025 Solution Challenge. We provide valuable feedback, networking opportunities with industry professionals, and mentorship from experts. Participants will also have the chance to win exciting prizes from our sponsors!",
        },
        {
            id: 4,
            span: "col-span-1 row-span-1 md:col-span-1",
            background: "bg-[url('/images/Pattern-BG.png')] dark:bg-[url('/images/Pattern-Dark-BG.svg')] bg-no-repeat bg-[right_top] pr-12 lg:pr-28",
            style: { backgroundSize: "75%" },
            title: "THEME",
            text: "AI & SDG (Sustainable Development Goals) KitaHack focuses on leveraging Artificial Intelligence (AI) to create solutions alligned with the United Nations' 17 Sustainable Development Goals (SDGs).",
        },
        {
            id: 5,
            span: "row-span-1 col-span-1 md:col-span-1",
            background: "bg-[url('/images/Pattern-BG.png')] dark:bg-[url('/images/Pattern-Dark-BG.svg')] bg-no-repeat bg-[right_top] pr-12 lg:pr-28",
            style: { backgroundSize: "75%" },
            title: "PROBLEM STATEMENT",
            text: "How can Google AI Technologies be leveraged to develop innovative, scalable, and inclusive solutions that address one or more SDG-related challenges, ensuring long-term impact and sustainability?",
        },
    ]

    return (
        <section id="kitahack-info" className="container px-6 mx-auto">
            <div className="px-6 text-gray-800 md:mx-12 lg:text-left xl:mx-52"></div>
            <div className="flex flex-col justify-center items-center text-center gap-4">
                {/* Badge Componenet */}
                <span className="bg-[#F6F3FF] inline-flex items-center rounded-full border border-[#7C3AED] px-3 py-1 text-sm text-purple-700">
                    <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                    <span className="ml-1">About</span>
                </span>
                {/* Headers */}
                <h1 id="innovateAI_title" className=" font-semibold text-5xl text-black md:text-6xl xl:text-6xl dark:text-white">
                    Innovate with AI for a <br></br> Sustainable Future
                </h1>
                {/* Italic Wordings */}
                <p>
                    <i className="text-[#5A5A5A] dark:text-gray-400">KitaHack Uncovered: Everything You Need to Know!</i>
                </p>
            </div>

            {/* Bento Grids */}
            <div className="space-y-6 p-6 md:px-12 xl:px-52">
                {/* First two items (Grid 3-cols) */}
                <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-3 gap-6">
                    {bentoGrids.slice(0, 2).map((grid) => (
                        <div key={grid.id} style={grid.style} className={`dark:bg-[#1D1D1D] outline outline-2 outline-[#DBDBDB] hover:outline-[#4285F4] transition-color duration-200 bg-white shadow-lg rounded-xl flex flex-col gap-2 justify-center ${grid.span} ${grid.background}`}>
                            {grid.content ? grid.content : (
                                <>
                                    <h2 className="text-blue-600 font-bold text-sm md:text-base max-w-[400px]">{grid.title}</h2>
                                    <p className="text-gray-600 text-sm md:text-base dark:text-gray-400 max-w-[480px]"><i>{grid.text}</i></p>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Remaining items (Grid 2-cols) */}
                <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-2 gap-6">
                    {bentoGrids.slice(2).map((grid) => (
                        <div 
                            key={grid.id} 
                            style={grid.style} 
                            className={`outline outline-2 outline-[#DBDBDB] hover:outline-[#4285F4] transition-color duration-200 relative justify-center md:justify-normal dark:bg-[#1D1D1D] bg-white shadow-lg rounded-xl p-6 flex flex-col gap-2 ${grid.span} ${grid.background}`}
                        >
                            {grid.id === 3 && (
                                <>
                                    <div className="absolute top-1/4 left-0 transform -translate-x-1/2 hidden md:block">
                                        <div className="w-16">{grid.bubblesvai}</div> {/* VAI at center */}
                                        <div className="absolute top-6 left-10 w-20">{grid.bubblesgas}</div> {/* GAS southeast */}
                                    </div>
                                    <div className="absolute top-1/4 right-[-7%] transform -translate-x-1/2 hidden md:block">
                                        <div className="w-16">{grid.bubblesvai}</div> {/* VAI at center */}
                                        <div className="absolute top-6 right-10 w-20">{grid.bubblesgmi}</div> {/* GMI southwest */}
                                    </div>
                                </>
                            )}
                    
                            {grid.content ? grid.content : (
                                grid.id !== 3 ? (
                                    <>
                                        <h2 className="text-blue-600 font-bold text-sm md:text-base">{grid.title}</h2>
                                        <p className="text-gray-600 text-sm md:text-base dark:text-gray-400 w-[68%]">
                                            <i>{grid.text}</i>
                                        </p>
                                    </>
                                ) : (
                                    <div className="text-center flex flex-col gap-2 items-center">
                                        <>
                                            <h2 className="text-blue-600 font-bold text-sm md:text-base">{grid.title}</h2>
                                            <p className="text-gray-600 text-sm md:text-base dark:text-gray-400 w-[68%]">
                                                <i>{grid.text}</i>
                                            </p>
                                        </>
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InnovateWithAISection;