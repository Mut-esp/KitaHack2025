import "./style.css"

const SubmissionCriteriaSection = () => {
    return (
        <section id="submission-criteria" className="container px-6 mx-auto">
            <div className="px-6 text-gray-800 md:px-12 lg:text-left xl:px-52">
                <h2 className="font-semibold leading-7 lg:text-center text-red-500">
                    You can only submit your project once.
                </h2>
                <p className="mt-2 text-3xl lg:text-center font-[GoogleSans-Bold] font-bold tracking-tight text-gray-700 sm:text-4xl">
                    Submission Criteria
                </p>

                <div className="mt-5 timeline">
                    <div className="flex flex-row justify-center">
                        <div className="order-1 w-[1px] lg:w-2/4 timeline-middle">
                            <div className="left-[99.8%] ml-auto middle-point">
                                <div className="bg-red-500 center-point"></div>
                            </div>
                            <div className="ml-auto bg-red-500 middle-line"></div>
                        </div>
                        <div className="box-border order-2 w-full lg:w-2/4 group">
                            <div className="transition duration-500 border-2 border-red-500 group-hover:bg-red-500 group-hover:text-white group-hover:font-bold timeline-content-right">
                                <h1 className="content-title font-bold font-[GoogleSans-Bold]">PROJECT SETUP</h1>
                                <br />
                                <span className="bg-red-500 group-hover:text-red-300 group-hover:bg-white content-mark">
                                    10 point
                                </span>
                                <br />
                                <div className="content">
                                    <ol className="pl-5 space-y-4 list-decimal">
                                        <li>
                                            Describe the challenge addressed by your project
                                        </li>
                                        <li>
                                            Describe the UN Sustainable Development goal(s) and target(s) chosen for your solution, along with your reasons.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center">
                        <div className="order-4 w-[1px] lg:w-[49.5%] timeline-middle">
                            <div className="bg-blue-500 middle-line"></div>
                            <div className="middle-point">
                                <div className="bg-blue-500 center-point"></div>
                            </div>
                        </div>
                        <div className="order-3 w-full lg:w-[49%] group">
                            <div className="transition duration-500 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:font-bold timeline-content-left">
                                <h1 className="content-title font-bold font-[GoogleSans-Bold]">IMPLEMENTATION</h1> <span className="bg-blue-500 group-hover:text-blue-300 group-hover:bg-white content-mark">10 point </span>
                                <div className="content">
                                    <ol className="pl-5 space-y-4 list-decimal ">
                                        <li>
                                            Describe your team's solution architecture and the responsibilities of each component.
                                        </li>
                                        <li>
                                            Specify the products and platforms chosen for implementation and explain the reasons. (Please make sure there is at least one Google Developer Technology)
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center">
                        <div className="order-5 w-[1px] lg:w-2/4 timeline-middle">
                            <div className="ml-auto bg-green-500 middle-line"></div>
                            <div className="left-[99.8%] middle-point">
                                <div className="bg-green-500 center-point"></div>
                            </div>
                        </div>
                        <div className="order-6 w-full lg:w-2/4 group">
                            <div className="transition duration-500 border-2 border-green-500 group-hover:bg-green-500 group-hover:text-white group-hover:font-bold timeline-content-right">
                                <h1 className="content-title font-bold font-[GoogleSans-Bold]">FEEDBACK / TESTING / ITERATION</h1> <span className="bg-green-500 group-hover:text-green-300 group-hover:bg-white content-mark">10 point </span>
                                <div className="content">
                                    <ul className="pl-5 space-y-4 list-decimal ">
                                        <li>
                                            Walk us through the steps you took to test your solution with real users (outside of your team). Provide three specific feedback points.
                                        </li>
                                        <li>
                                            What did you learn from user feedback, and how did it enhance your solution? List three specific implementations based on user input.
                                        </li>
                                        <li>
                                            Highlight a coding challenge faced during development, including the detail on how you addressed it and the technical decisions made.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center">
                        <div className="order-8 timeline-middle w-[1px] lg:w-[49.5%] ">
                            <div className="bg-yellow-500 middle-line"></div>
                            <div className="middle-point">
                                <div className="bg-yellow-500 center-point"></div>
                            </div>
                        </div>
                        <div className="order-7 group w-full lg:w-[49%] ">
                            <div className="transition duration-500 border-2 border-yellow-500 group-hover:bg-yellow-500 group-hover:text-white group-hover:font-bold timeline-content-left">
                                <h1 className="content-title font-bold font-[GoogleSans-Bold]">SUCCESS AND COMPLETTION OF SOLUTION</h1> <span className="bg-yellow-500 group-hover:text-yellow-300 group-hover:bg-white content-mark">10 point </span>
                                <div className="content">
                                    <ul className="pl-5 space-y-4 list-decimal">
                                        <li>
                                            Describe how your solution addresses the challenge, emphasizing success using metrics, goals, and outcomes.
                                        </li>
                                        <li>
                                            What Google technologies are used for tracking usage analytics? Share relevant statistics or, where numbers aren't available, describe your project's impact using cause and effect.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center">
                        <div className="order-9 w-[1px] lg:w-2/4 timeline-middle">
                            <div className="ml-auto bg-red-500 middle-line"></div>
                            <div className="left-[99.8%] middle-point">
                                <div className="bg-red-500 center-point"></div>
                            </div>
                            <div className="left-[99.8%] middle-point end-point">
                                <div className="bg-red-500 center-point"></div>
                            </div>
                        </div>
                        <div className="order-10 w-full lg:w-2/4 group">
                            <div className="transition duration-500 border-2 border-red-500 group-hover:bg-red-500 group-hover:text-white group-hover:font-bold timeline-content-right">
                                <h1 className="content-title font-bold font-[GoogleSans-Bold]">SCALABILITY / NEXT STEP</h1> <span className="bg-red-500 group-hover:text-red-300 group-hover:bg-white content-mark">10 point </span>
                                <div className="content">
                                    <ul className="pl-5 space-y-4 list-decimal">
                                        <li>
                                            Outline the future steps for your project and how you plan to expand it for a larger audience.
                                        </li>
                                        <li>
                                            Explain how the current technical architecture (or with minor changes) in your solution supports scaling or can be adapted for a larger audience.

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default SubmissionCriteriaSection