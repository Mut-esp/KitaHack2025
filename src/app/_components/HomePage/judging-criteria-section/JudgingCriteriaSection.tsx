import "./style.css"

const JudgingCriteriaSection = () => {
    return (
        <section id="judging-criteria" className="container px-6 mx-auto">
            <div className="px-6 text-gray-800 md:px-12 lg:text-left xl:px-52">
                <h2 className="font-semibold leading-7 lg:text-center text-yellow-500">
                    Take note 📝
                </h2>
                <p className="mt-2 text-3xl lg:text-center font-[GoogleSans-Bold] font-bold tracking-tight text-gray-700 sm:text-4xl">
                    Judging Criteria
                </p>

                {/* <h3 className="mt-10 mb-2 text-2xl font-bold font-[GoogleSans-Bold] text-center text-gray-600 md:text-4xl dark:text-white">
                    Number of rounds
                </h3>
                <div className="flex flex-col text-white bg-blue-500 shadow-lg stats-container dark:bg-gray-700 md:flex-row">
                    <div className="border-b-4 border-white stats-left md:border-0">
                        <div className="stat place-items-center">
                            <div className="stat-title">First Round</div>
                            <div className="text-4xl stat-value text-">Ideathon</div>
                            <div className="stat-desc">
                                Impact - <b className="font-bold font-[GoogleSans-Bold]">50</b> points || Technology - <b className="font-bold font-[GoogleSans-Bold]">10</b> points
                            </div>
                        </div>
                    </div>

                    <div className="hidden separator md:block"></div>

                    <div className="stats-right">
                        <div className="stat place-items-center">
                            <div className="stat-title">Second Round</div>
                            <div className="stat-value">Prototype/MVP</div>
                            <div className="mt-1 stat-desc">
                                Impact - <b className="font-bold font-[GoogleSans-Bold]">10</b> points || Technology - <b className="font-bold font-[GoogleSans-Bold]">50</b> points
                            </div>
                        </div>
                    </div>
                </div> */}

                <h3 className="mt-10 text-xl font-bold font-[GoogleSans-Bold] text-center text-gray-600 md:text-4xl dark:text-white">
                    Impact
                </h3>
                <section className="mt-8 text-justify">
                    <ol className="ml-5 list-decimal">
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            <b className="font-bold font-[GoogleSans-Bold]">Problem Statement & SDG Alignment 🚀</b>
                            <ol className="ml-5 list-none mt-2">
                                <li>
                                    The team must clearly define a problem statement, justify its alignment with a Sustainable Development Goal (SDG) based on real-world needs, and demonstrate how AI or other technologies can effectively address the issue.
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            <b className="font-bold font-[GoogleSans-Bold]">User Feedback & Iteration 🚀</b>
                            <ol className="ml-5 list-none mt-2">
                                <li>
                                    The team must gather real user feedback, identify at least three key insights, and provide evidence of how they iterated on their solution based on user input.
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            <b className="font-bold font-[GoogleSans-Bold]">Success Metrics & Scalability 🚀</b>
                            <ol className="ml-5 list-none mt-2">
                                <li>
                                    The team must define measurable success metrics to demonstrate impact and present a clear roadmap for scaling their solution.
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            <b className="font-bold font-[GoogleSans-Bold]">AI Integration [Google AI Studio / Gemini / Vertex AI] 🚀</b>
                            <ol className="ml-5 list-none mt-2">
                                <li>
                                    The team must meaningfully integrate AI (Google AI Studio, Gemini, Vertex AI, etc.), justify their choice, and explain how it enhances their solution.
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            <b className="font-bold font-[GoogleSans-Bold]">Technology Innovation 🚀</b>
                            <ol className="ml-5 list-none mt-2">
                                <li>
                                    The team must demonstrate creativity in addressing SDG-related world issues and effectively utilize technology to solve real-world problems.
                                </li>
                            </ol>
                        </li>
                    </ol>
                    <b className="font-bold font-[GoogleSans-Bold]"><b className="font-bold font-[GoogleSans-Bold]"><b className="font-bold font-[GoogleSans-Bold]"> </b></b></b>
                </section>

                <h3 className="mt-10 mb-2 text-xl font-bold font-[GoogleSans-Bold] text-center text-gray-600 md:text-4xl dark:text-white">
                    Technology
                </h3>
                <section className="mt-8 text-justify">
                    <ol className="ml-5 list-decimal">
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            <b className="font-bold font-[GoogleSans-Bold]">Technical Architecture & Google Technologies 💻</b>
                            <ol className="ml-5 list-none mt-2">
                                <li>
                                    The team must clearly describe their system architecture, outlining key components and responsibilities, while justifying their use of Google Cloud, Firebase, Gemini, or other Google technologies.
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            <b className="font-bold font-[GoogleSans-Bold]">Technical Implementation & Challenges 💻</b>
                            <ol className="ml-5 list-none mt-2">
                                <li>
                                    The team must successfully implement all required technical components, highlight a major technical challenge, explain how they resolved it, and describe key technical decisions.
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            <b className="font-bold font-[GoogleSans-Bold]">Completeness and Demonstration 💻</b>
                            <ol className="ml-5 list-none mt-2">
                                <li>
                                    The team must develop a functional prototype, preferably with real coding, but at least using a low-code platform, and successfully demonstrate it.
                                </li>
                            </ol>
                        </li>
                    </ol>
                </section>

                <h3 className="mt-10 text-xl font-bold font-[GoogleSans-Bold] text-center text-gray-600 md:text-4xl dark:text-white">
                    Ensuring Fair and Impartial Judging
                </h3>
                <section className="mt-8 text-justify">
                    <p className="mt-4">
                        Ensuring fair and unbiased judging is crucial for the integrity of any
                        competition. We implement measures to eliminate bias when evaluating
                        submissions.
                    </p>

                    <p className="mt-4">
                        We average the scores from multiple judges and
                        <strong className="font-bold font-[GoogleSans-Bold]"> drop the highest and lowest scores.</strong> This helps to
                        reduce the impact of any individual judge's opinion and focuses on the
                        <strong className="font-bold font-[GoogleSans-Bold]"> collective judgment of the group.</strong>
                    </p>

                    <p className="mt-4">
                        We believe that this measure helps to ensure fair and unbiased judging
                        and contribute to the overall integrity of the competition. If you have
                        any questions or feedback, please feel free to contact us.
                    </p>
                </section>
            </div>
        </section>

    )
}
export default JudgingCriteriaSection