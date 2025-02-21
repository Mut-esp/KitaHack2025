import Image from "next/image"



const AIinfoSection = () => {
    return (
        <section id="ai-info" className={"container px-6 mx-auto"}>
            <div className={"flex flex-col items-center justify-center md:px-12 lg:text-left xl:px-52 gap-10"}>
                <div className={"text-center space-y-5"}>
                    <h2 className="font-semibold leading-7 lg:text-center text-blue-500">
                        Discover AI Technologies.
                    </h2>
                    <h1 className={"font-black text-3xl lg:text-4xl font-[GoogleSans-Bold] text-gray-700"}>What is AI?</h1>
                    <p className={"text-justify"}>
                        Artificial Intelligence (AI) refers to the simulation of human intelligence in machines, enabling them to learn, reason, and make decisions. AI is revolutionizing industries by automating tasks, optimizing processes, and providing data-driven insights to solve complex problems.
                    </p>
                </div>

                <div className={"grid grid-cols-1 lg:grid-cols-[1fr,1fr,1fr] gap-16 "}>
                    <div className={"space-y-10 flex flex-col items-center"}>
                        <Image src={"/images/ai-studio-icon.png"} alt="ai-studio-icon" width={250} height={250} className="shadow-2xl shadow-blue-400 dark:shadow-gray-400 p-4 rounded-lg" />
                        <div className={"space-y-4"}>
                            <h1 className={"font-black text-3xl lg:text-4xl font-[GoogleSans-Bold] text-gray-700 text-center"}>Google <br />Cloud AI</h1>
                            <p className={"text-center text-xl text-gray-800"}> A collection of AI-powered APIs for vision, speech, translation, and text processing.</p>
                        </div>
                    </div>
                    <div className={"space-y-10 flex flex-col items-center"}>
                        <Image src={"/images/Gemini-icon.png"} alt="Gemini-icon" width={250} height={250} className="shadow-2xl shadow-blue-400 dark:shadow-gray-400 p-4 rounded-lg" />
                        <div className={"space-y-4"}>
                            <h1 className={"font-black text-3xl lg:text-4xl font-[GoogleSans-Bold] text-gray-700 text-center h-[80px] flex justify-center items-center"}>Gemini AI</h1>
                            <p className={"text-center text-xl text-gray-800 "}> A cutting-edge multimodal AI model designed for natural language understanding, code generation, and more.</p>
                        </div>
                    </div>
                    <div className={"space-y-10 flex flex-col items-center"}>
                        <Image src={"/images/VertexAI-icon.webp"} alt="VertexAI-icon.webp" width={250} height={250} className="shadow-2xl shadow-blue-400 dark:shadow-gray-400 p-4 rounded-lg" />
                        <div className={"space-y-4"}>
                            <h1 className={"font-black text-3xl lg:text-4xl font-[GoogleSans-Bold] text-gray-700 text-center  h-[80px] flex justify-center items-center"}>Vertex AI</h1>
                            <p className={"text-center text-xl text-gray-800"}> A unified platform for building, deploying, and scaling machine learning models efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AIinfoSection