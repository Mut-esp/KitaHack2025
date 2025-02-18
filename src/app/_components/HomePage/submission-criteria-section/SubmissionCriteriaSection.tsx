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
                                            Please clearly describe the challenge you are solving using a problem statement
                                        </li>
                                        <li>
                                            What United Nations' Sustainable Development goal(s) AND target(s) did you choose for your solution?
                                            What inspired you to select these specific goal(s) AND target(s)?
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
                                            Describe the architecture that your team chose for you solutaion
                                            What are the high-level components of your architecture? What is the
                                            responsibility of each component?
                                        </li>
                                        <li>
                                            Which specific products and platforms did you choose to implement these components and why?
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
                                            Walk us through the step you took to test your solution with real users
                                            (outside of your team). Provide three specific feedback points you received from real users.
                                        </li>
                                        <li>
                                            What did you learn and how did it help improve your solution? What are three specific things you implemented
                                            and improved for your solution based on the feedback from users?
                                        </li>
                                        <li>
                                            Highlight one challenge you face while building your code, including details on how you addressed the issues and
                                            the technical decisions and implmentations you had to make
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
                                            How does your solution address the challenge you are looking to solve for? Describe the success of your solution using metrics,
                                            goals, and outcome. What Google technologies are you using to track usgae analytics? Using relevent (or meaningful) statistics,
                                            concrete data or numerical examples where possible
                                        </li>
                                        <li>
                                            Upload a copy of your demo video. Make sure the video demostrate a working application and how a user will interact with the
                                            solution. Make sure the video also makes effective use of chosen Google products. Feel free to include infographics or visual
                                            representation of the data in you demo video
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
                                            What do you see as the future / next steps for your projects? How would you expand your solution to reach a larger audience?
                                        </li>
                                        <li>
                                            Explain how the techinical architecture of your solution could support (in its current state or with minor changes) scaling
                                            to a larger audience
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