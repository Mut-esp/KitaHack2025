import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAltIcon";

const InnovateWithAISection = () => {

    // Bento Grids
    const bentoGrids = [
        {
            id: 1,
            span: "col-span-1 md:col-span-2 xl:col-span-1",
            background: <img src="images/kitahack-bg.png"></img>,
            content: <img src="images/KitaHack2025-logo.svg" alt="KitaHack Logo"/>,
        },
        {
            id: 2,
            span: "col-span-1 md:col-span-2 xl:col-span-1",
            background: <img src="images/Pattern-BG.png"></img>,
            title: "EMPOWERING INNOVATORS FOR AI & SDG CHALLENGES",
            text: "KitaHack launched in 2021, is a nationwide collaboration with all GDG chapters in Malaysia. It's more than just a hackathon, it's a platform for dedicated and talented individuals to develop their skills, tackle Real-World AI & SDG - aligned Challenges and prepare participants for the Google Solution Challenge.",
        },
        {
            id: 3,
            span: "col-span-1 md:col-span-4 xl:col-span-2 text-center",
            background: "none",
            title: "ENHANCING PROPOSALS FOR THE 2025 SOLUTION CHALLENGE",
            text: "The main purpose of KitaHack is to help participants improve their proposals for the 2025 Solution Challenge. We provide valuable feedback, networking opportunities with industry professionals, and mentorship from experts. Participants will also have the chance to win exciting prizes from our sponsors!",
        },
        {
            id: 4,
            span: "col-span- md:col-span-2 xl:col-span-1",
            background: <img src="images/Pattern-BG.png"></img>,
            title: "THEME",
            text: "AI & SDG (Sustainable Development Goals) KitaHack focuses on leveraging Artificial Intelligence (AI) to create solutions alligned with the United Nations' 17 Sustainable Development Goals (SDGs).",
        },
        {
            id: 5,
            span: "col-span-1 md:col-span-2 xl:col-span-1",
            background: <img src="images/Pattern-BG.png"></img>,
            title: "PROBLEM STATEMENT",
            text: "How can Google AI Technologies be leveraged to develop innovative, scalable, and inclusive solutions that address one or more SDG-related challenges, ensuring long-term impact and sustainability?",
        },
    ]

    return (
        <section id="kitahack-info" className="container px-6 mx-auto">
            <div className="px-6 text-gray-800 md:mx-12 lg:text-left xl:mx-52"></div>
            <div className="flex flex-col justify-center items-center text-center">
                {/* Badge Componenet */}
                <span className="bg-[#F6F3FF] inline-flex items-center rounded-full border border-[#7C3AED] px-3 py-1 text-sm text-purple-700">
                    <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                    <span className="ml-1">About</span>
                </span>
                {/* Headers */}
                <h1 id="innovateAI_title" className="w-[734px] h-[150px] font-semibold text-5xl text-black md:text-6xl xl:text-6xl dark:text-white">
                    Innovate with AI for a Sustainable Future
                </h1>
                {/* Italic Wordings */}
                <p>
                    <i className="text-[#5A5A5A]">KitaHack Uncovered: Everything You Need to Know!</i>
                </p>
            </div>

            {/* Bento Grids */}
            {/* Still finding a way on how to integrate the background into the grids*/}
            <div className="grid grid-cols-3 md:px-12 xl:px-52 md:grid-cols-2 gap-6 p-6">
                {bentoGrids.map((grid) => (
                    <div key={grid.id} className={`bg-white shadow-lg rounded-xl p-6 ${grid.span}`}>
                    {grid.content ? grid.content : (
                        <>
                        <h2 className="text-blue-600 font-bold text-lg">{grid.title}</h2>
                        <p className="text-gray-600 mt-2">{grid.text}</p>
                        </>
                    )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default InnovateWithAISection;