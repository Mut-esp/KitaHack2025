const TeamFormationSection = () => {
    return (
        <section id="team-formation">

            <div className="container px-6 mx-auto">
                <div className="px-6 text-gray-800 lg:my-12 md:px-12 lg:text-center xl:px-52 font-[GoogleSans-Bold]">
                    <h2 className="font-semibold leading-7 lg:text-center text-red-500">
                        Stronger together
                    </h2>
                    <p className="mt-2 text-3xl lg:text-center font-[GoogleSans-Bold] font-bold tracking-tight text-gray-700 sm:text-4xl">
                        Team Formation
                    </p>
                </div>

                <div className="px-6 mt-10 text-gray-800 md:px-12 xl:px-52">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div className="relative pl-16">
                            <dt className="text-xl font-semibold font-[GoogleSans-Bold] leading-7 text-gray-700">
                                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                    </svg>
                                </div>
                                Number of members
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                A team can have only up to <strong>4 members</strong> in a team.
                                Please note that only one entry per person which means that you can
                                only join one team.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-xl font-semibold font-[GoogleSans-Bold] leading-7 text-gray-700">
                                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                    </svg>
                                </div>
                                Team member roles
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Here is a simple guideline for you when forming a team.
                                <ul className="list-disc list-inside">
                                    <li>Need to be part of GDGoC</li>
                                    <li>Project Manager (Team Leader)</li>
                                    <li>UI/UX Designer</li>
                                    <li>Frontend Developer</li>
                                    <li>Backend Developer</li>
                                    <li>Problem Domain Experts</li>
                                </ul>
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-xl font-semibold font-[GoogleSans-Bold] leading-7 text-gray-700">
                                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                                    </svg>
                                </div>
                                Team member background
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                You can have members from any academic background (undergraduate,
                                graduate, art, science backgrounds). However, we encourage you to
                                have members from different backgrounds to ensure that your team can
                                work together effectively.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-xl font-semibold font-[GoogleSans-Bold] leading-7 text-gray-700">
                                <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 rounded-full bg-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                </div>
                                How to find team members?
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                You can invite your friends to join KitaHack with you.
                                Alternatively, you can also join our Discord server to find team
                                members.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>

    )
}
export default TeamFormationSection