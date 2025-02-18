import Image from "next/image";

interface MentorProps {
    name?: string;
    title?: string;
    description?: string;
    imageUrl?: string;
    profileUrl?: string;
}

const AppMentor: React.FC<MentorProps> = ({
    name = "To be announced",
    title = "TBA",
    description = "We are currently in the process of selecting and inviting the top mentors to join us at KitaHack. Keep an eye out for announcements on their names and expertise in the coming weeks. We can't wait to share their valuable insights and experiences with you!",
    imageUrl = "https://media.tenor.com/_cL3US50IEUAAAAd/donkey-shrek-donkey.gif",
    profileUrl = "#",
}) => {
    return (
        <div className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md w-[300px] my-14 dark:bg-gray-700">
            {/* Mentor Image */}
            <div className="absolute top-0 overflow-hidden -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl left-2/4 w-38 h-38">
                <Image
                    className="object-cover w-full aspect-square brightness-50 dark:brightness-100"
                    src={imageUrl}
                    alt={name}
                    width={152}
                    height={152}
                />
            </div>

            {/* Mentor Details */}
            <p className="mt-20 mb-2 text-xl font-bold text-gray-700 dark:text-white">
                {name}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">{title}</p>
            <p className="px-2 mt-4 font-normal text-justify text-gray-700 dark:text-gray-400">
                {description}
            </p>

            {/* Profile Button */}
            <button className="px-4 py-2 mt-5 mb-2 font-bold text-white transition ease-in-out bg-yellow-500 rounded delay-50 hover:bg-white hover:text-yellow-500 border border-transparent hover:border-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:border-white">
                <a href={profileUrl}>View Profile</a>
            </button>
        </div>
    );
};

export default AppMentor;
