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
                            Problem Statement & SDG Alignment {/* <b className="font-bold font-[GoogleSans-Bold]">clear challenge</b> using their problem
                            statement?*/} 🚀
                            <ol className="ml-5 list-[upper-roman]">
                                <li>
                                    Does the team establish a <b className="font-bold font-[GoogleSans-Bold]">clear challenge</b> using their problem statement?
                                </li>
                                <li>
                                    Do they explain clearly which <b className="font-bold font-[GoogleSans-Bold]">(Selected SDG)</b> they chose for their solution and why?
                                </li>
                                <li>
                                    Does the team clearly demonstrate how <b className="font-bold font-[GoogleSans-Bold]">AI or other technologies</b> effectively address the identified issue?
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            User Feedback & Iteration 🚀
                            {/* <b className="font-bold font-[GoogleSans-Bold]">(Selected SDG)</b> they chose for their
                            solution and why?*/}
                            <ol className="ml-5 list-[upper-roman]">
                                <li>
                                    Does the team clearly describe three <b className="font-bold font-[GoogleSans-Bold]">feedback points they received from real users</b> and the steps they took to test them?
                                </li>
                                <li>
                                    Is there evidence of what the team learned and <b className="font-bold font-[GoogleSans-Bold]">how the solution was iterated upon</b> based on user feedback?
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            Success Metrics & Scalability{/* Feedback from users, testing &amp; iteration*/}🚀
                            <ol className="ml-5 list-[upper-roman]">
                                <li>
                                    Does the <b className="font-bold font-[GoogleSans-Bold]">solution address the challenge (and problem statement)</b> identified by the team?
                                </li>
                                <li>
                                    Does the team adequately <b className="font-bold font-[GoogleSans-Bold]">describe the success of their solution</b> using metrics, goals, and outcomes, or through cause and effect?
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            AI Integration [Google AI Studio / Gemini / Vertex AI] 🚀
                            {/* Does the
                            <b className="font-bold font-[GoogleSans-Bold]">solution address the challenge (and problem statement)</b> identified
                            by the team? Does the team adequately
                            <b className="font-bold font-[GoogleSans-Bold]">describe the success of their solution</b> using metrics, goals, and
                            outcomes, or through cause and effect?<b className="font-bold font-[GoogleSans-Bold]"> 🚀 </b> */}
                            <ol className="ml-5 list-[upper-roman]">
                                <li>
                                    Does the team meaningfully <b className="font-bold font-[GoogleSans-Bold]">integrate AI (Google AI Studio, Gemini, Vertex AI, etc.)</b> into their solution?
                                </li>
                                <li>
                                    Does the team provide a clear <b className="font-bold font-[GoogleSans-Bold]">justification for their choice of AI technology and explain how its integration</b> enhances the functionality or impact of their solution?
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            Technology Innovation 🚀
                            <ol className="ml-5 list-[upper-roman]">
                                <li>
                                    Does the team demonstrate <b className="font-bold font-[GoogleSans-Bold]">creativity in addressing SDG-related</b> world issues?
                                </li>
                                <li>
                                    Do they  <b className="font-bold font-[GoogleSans-Bold]">effectively utilize technology</b> to solve real-world problems?
                                </li>
                            </ol>
                        </li>
                        {/* <b className="font-bold font-[GoogleSans-Bold]">
                            <li className="px-2 mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                                Is there evidence of next steps? Does the team display a
                                <b className="font-bold font-[GoogleSans-Bold]">clear plan for future extension to a larger audience</b> if they
                                were to continue?<b className="font-bold font-[GoogleSans-Bold]">🚀</b>
                            </li>
                        </b> */}
                    </ol>
                    <b className="font-bold font-[GoogleSans-Bold]"><b className="font-bold font-[GoogleSans-Bold]"><b className="font-bold font-[GoogleSans-Bold]"> </b></b></b>
                </section>

                <h3 className="mt-10 mb-2 text-xl font-bold font-[GoogleSans-Bold] text-center text-gray-600 md:text-4xl dark:text-white">
                    Technology
                </h3>
                <section className="mt-8 text-justify">
                    <ol className="ml-5 list-decimal">
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            Technical Architecture & Google Technologies 💻
                            <ol className="ml-5 list-[upper-roman]">
                                <li>
                                    Does the team clearly describe their <b className="font-bold font-[GoogleSans-Bold]">architecture</b>?
                                </li>
                                <li>
                                    Do they provide a clear explanation of the <b className="font-bold font-[GoogleSans-Bold]">components</b> of their system and <b className="font-bold font-[GoogleSans-Bold]">outline the responsibilities</b> of each component?
                                </li>
                                <li>
                                    Have they justified their use of <b className="font-bold font-[GoogleSans-Bold]">Google Cloud, Firebase, Gemini, or other Google products</b>?
                                </li>
                            </ol>
                            {/* Does the team clearly describe the following: <b className="font-bold font-[GoogleSans-Bold]">architecture</b>,
                            high-level <b className="font-bold font-[GoogleSans-Bold]">components</b>, <b className="font-bold font-[GoogleSans-Bold]">responsibility</b> of each component,
                            <b className="font-bold font-[GoogleSans-Bold]"> specific products and platform</b> they implemented? Have they justified their use of <b className="font-bold font-[GoogleSans-Bold]">Google Cloud, Firebase, Gemini, or other Google products they used</b> and why?<b className="font-bold font-[GoogleSans-Bold]"> 💻</b> */}
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            Technical Implementation & Challenges 💻
                            <ol className="ml-5 list-[upper-roman]">
                                <li>
                                    Has the team successfully <b className="font-bold font-[GoogleSans-Bold]">implemented all required technical components</b>?
                                </li>
                                <li>
                                    Have they <b className="font-bold font-[GoogleSans-Bold]">highlighted a major technical challenge</b> they faced?
                                </li>
                                <li>
                                    Did they <b className="font-bold font-[GoogleSans-Bold]">explain how they resolved the challenge and describe key technical decisions</b>?
                                </li>
                            </ol>
                        </li>
                        <li className="mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            Completeness and Demonstration 💻
                            <ol className="ml-5 list-[upper-roman]">
                                <li>
                                    Has the team developed a <b className="font-bold font-[GoogleSans-Bold]">functional prototype</b>?
                                </li>
                                <li>
                                    Did they build it using <b className="font-bold font-[GoogleSans-Bold]">real coding</b> or at least a <b className="font-bold font-[GoogleSans-Bold]">low-code platform</b>, and <b className="font-bold font-[GoogleSans-Bold]">successfully demonstrate</b> it?
                                </li>
                            </ol>
                            {/* Does the team clearly describe the following: <b className="font-bold font-[GoogleSans-Bold]">architecture</b>,
                            high-level <b className="font-bold font-[GoogleSans-Bold]">components</b>, <b className="font-bold font-[GoogleSans-Bold]">responsibility</b> of each component,
                            <b className="font-bold font-[GoogleSans-Bold]">specific products and platform</b> they implemented? Has the team
                            clearly explained what <b className="font-bold font-[GoogleSans-Bold]">Google technology they used</b> and why? 💻 */}
                        </li>
                        {/* <li className="px-2 mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            Does the video demonstration show an
                            <b className="font-bold font-[GoogleSans-Bold]">actual working application</b> (not a mockup) and
                            <b className="font-bold font-[GoogleSans-Bold]">how a user will interact with the solution</b>? Does the demo show
                            how the solution
                            <b className="font-bold font-[GoogleSans-Bold]">makes effective and appropriate use of the features</b> of the chosen
                            Google technology or platform? 💻
                        </li>
                        <li className="px-2 mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            Does the video demonstration show an
                            <b className="font-bold font-[GoogleSans-Bold]">actual working application</b> (not a mockup) and
                            <b className="font-bold font-[GoogleSans-Bold]">how a user will interact with the solution</b>? Does the demo show
                            how the solution
                            <b className="font-bold font-[GoogleSans-Bold]">makes effective and appropriate use of the features</b> of the chosen
                            Google technology or platform? 💻
                        </li>
                        <li className="px-2 mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                            Can the solution, in its current form or minor structural changes,
                            <b className="font-bold font-[GoogleSans-Bold]">support more users and increased scale</b>?<b className="font-bold font-[GoogleSans-Bold]"> 💻</b>
                        </li> */}
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
                        <strong className="font-bold font-[GoogleSans-Bold]">drop the highest and lowest scores.</strong> This helps to
                        reduce the impact of any individual judge's opinion and focuses on the
                        <strong className="font-bold font-[GoogleSans-Bold]">collective judgment of the group.</strong>
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