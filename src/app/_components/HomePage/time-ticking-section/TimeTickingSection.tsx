"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";
import "./style.css"

const TimeTickingSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
    });

    useEffect(() => {
        const startCountdown = (endDate: string) => {
            const interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = new Date(endDate).getTime() - now;

                if (distance < 0) {
                    clearInterval(interval);
                    setTimeLeft({ days: "0", hours: "0", minutes: "0", seconds: "0" });
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ).toString();
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
                const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

                setTimeLeft({ days, hours, minutes, seconds });
            }, 1000);

            return () => clearInterval(interval); // Cleanup function to stop interval
        };

        startCountdown("Feb 22, 2025 12:00:00");
    }, []);

    return (
        <section className="container px-6 mx-auto bg-center bg-no-repeat bg-cover">
            <div className="px-6 text-gray-800 md:px-12 lg:text-left xl:px-52">
                <h2 className="font-semibold leading-7 text-center text-google-red-500">
                    Time ticking ⏰
                </h2>
                <p className="mt-2 text-3xl text-center font-[GoogleSans-Bold] font-bold">
                    Days until Demo-day
                </p>

                <div className={"flex flex-col text-white text-center mt-4 gap-5 sm:flex-row sm:justify-center"}>
                    <div className={"flex flex-col bg-red-500 py-2 border rounded-lg sm:w-32"}>
                        <span className={"text-6xl"}>{timeLeft.days}</span>
                        <span className={"text-3xl"}>days</span>
                    </div>
                    <div className={"flex flex-col bg-blue-500 py-2 border rounded-lg sm:w-32"}>
                        <span className={"text-6xl"}>{timeLeft.hours}</span>  {/* Corrected */}
                        <span className={"text-3xl"}>hours</span>
                    </div>
                    <div className={"flex flex-col bg-green-500 py-2 border rounded-lg sm:w-32"}>
                        <span className={"text-6xl"}>{timeLeft.minutes}</span>  {/* Corrected */}
                        <span className={"text-3xl"}>minutes</span>
                    </div>
                    <div className={"flex flex-col bg-yellow-500 py-2 border rounded-lg sm:w-32"}>
                        <span className={"text-6xl"}>{timeLeft.seconds}</span>  {/* Corrected */}
                        <span className={"text-3xl"}>seconds</span>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default TimeTickingSection;
