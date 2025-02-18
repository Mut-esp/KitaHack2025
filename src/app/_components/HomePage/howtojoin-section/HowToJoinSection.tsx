import Chatbox from "./ChatBox";

import "./style.css"

export default function HowToJoinSection() {
  return (
    <section id="how-to-join" className="container px-6 mx-auto">
      <div className="flex flex-col px-6 text-gray-800 md:px-12 lg:text-left xl:px-52">
        <h2 className="font-semibold leading-7 lg:text-center text-google-yellow-500">
          How to join?
        </h2>
        <p className="lg:text-center mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
          A Conversation Between Two Friends
        </p>

        <Chatbox isLeft={true} bgColor="#4285F4">
          <p className="p-1 text-white">
            Eh, I heard that KitaHack is coming back for year 2024 leh.
            Wanna join mou?
          </p>
        </Chatbox>

        <Chatbox bgColor="#DB4437">
          <p className="p-1 text-white">
            KitaHack? I never heard about it before. What is it about?
          </p>
        </Chatbox>

        <Chatbox isLeft={true} bgColor="#4285F4">
          <div className="p-1 text-white">
            Walao, you seriously don't know ah? It is the
            <span className="font-bold text-white">
              biggest annual hackathon
            </span>
            organised by GDSC Malaysia for us to better prepare for
            <span className="font-bold text-white">
              Google Solution Challenge.
            </span>
            The participants need to come out with an innovative solution that solves one or
            many SDGs problems using Google Technologies.
          </div>
        </Chatbox>

        <Chatbox bgColor="#DB4437">
          <div className="p-1 text-white">
            Wahh, it seems interesting la. I think I would give it a
            try. First of all, I need to find my teammates? How can I get more
            information about KitaHack team formation?
          </div>
        </Chatbox>

        <Chatbox isLeft={true} bgColor="#4285F4">
          <div className="p-1 text-white">
            Worries not. You may refer to the <span className="font-bold text-white">Team Formation</span> below for
            more information.
          </div>
        </Chatbox>

        <Chatbox bgColor="#DB4437">
          <div className="p-1 text-white">
            Ok. Thank you very much.
          </div>
        </Chatbox>
      </div>
    </section>
  );
}
