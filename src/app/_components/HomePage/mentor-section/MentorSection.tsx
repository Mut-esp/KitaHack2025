import AppMentor from "./AppMentor";



const MentorsSection = () => {
  return (
    <div className="container px-6 mx-auto">
      <div className="px-6 text-gray-800 md:px-12 lg:text-left xl:px-52">
        <h2 className="font-semibold leading-7 lg:text-center text-blue-500">
          Remember these people
        </h2>
        <p className="mt-2 text-3xl lg:text-center font-[GoogleSans-Bold] font-bold tracking-tight text-gray-700 sm:text-4xl">
          Mentors
        </p>

        <section className="flex flex-wrap items-center justify-center w-full gap-5 mt-20">
          <AppMentor />
          <AppMentor />
          <AppMentor />
        </section>
      </div>
    </div>
  );
};

export default MentorsSection;
