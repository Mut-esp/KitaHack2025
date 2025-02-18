"use client"; // If you're using the Next.js App Router

import React from "react";

const SdgInfoSection = () => {
  return (
    <section id="sdg-info" className="container px-6 mx-auto">
      <div className="px-6 text-gray-800 md:px-12 lg:text-left xl:px-52">
        {/* Intro Section */}
        <section className="items-center text-center text-gray-700 dark:text-gray-400">
          <h2 className="font-semibold leading-7 lg:text-center text-green-500">
            Join to preserve the environment!
          </h2>
          <p className="mt-2 text-3xl lg:text-center font-[GoogleSans-Bold] font-bold tracking-tight text-gray-700 sm:text-4xl">
            What is Sustainable Development Goals?
          </p>

          <ul className="flex flex-col gap-2 mt-10 lg:gap-4">
            <li className="text-justify lg:text-left">
              In 2015, the United Nations created 17 Sustainable Development Goals and aimed to achieve them by 2030. All 193 United Nations Member States agreed on these 17 goals to end poverty, ensure prosperity, and protect the planet.
            </li>
            <li className="text-justify lg:text-left">
              For KitaHack and the 2023 Solution Challenge, we want to encourage participants to create projects that contribute to solving one or more of the 17 SDGs using Google technologies. We believe that by working towards these goals, we can make a positive impact on the world and create a more sustainable future for all.
            </li>
            <li className="text-justify lg:text-left">
              You can learn more about the SDGs and the specific targets for each goal on the{" "}
              <a
                href="https://sdgs.un.org/goals"
                target="_blank"
                className="text-blue-600"
                rel="noreferrer"
              >
                United Nations website
              </a>
              . Additionally, you can visit{" "}
              <a
                href="https://developers.google.com/community/gdsc-solution-challenge/UN-goals"
                target="_blank"
                className="text-blue-600"
                rel="noreferrer"
              >
                Google's SDG website
              </a>{" "}
              to learn about the company's efforts to support and promote the SDGs.
            </li>
          </ul>
        </section>

        {/* Video Section */}
        <section className="container flex flex-col items-center justify-center gap-8 mt-10 lg:flex-row">
          <iframe
            className="w-full rounded-md lg:w-2/4"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/0XTBYMfZyrM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full rounded-md lg:w-2/4"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/xVWHuJOmaEk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </section>
  );
};

export default SdgInfoSection;
