import TensorflowWorkshop from "./_components/TensorflowWorkshop";




const page = () => {

    const eventData = {
        title: "Tensorflow Workshop",
        subtitle: "Deep Dive into Deep Learning",
        date: "8th March 2025",
        time: "10:00 AM - 12:00 PM",
        venue: { location: "Virtually on Bevy", time: "10:00 AM - 12:00 PM" },
        rsvpLink: "https://gdg.community.dev/events/details/google-gdg-on-campus-monash-university-malaysia-selangor-malaysia-presents-google-workspace-with-automation-effortless-scheduling-amp-ai-powered-insights-with-app-script/cohost-gdg-on-campus-monash-university-malaysia-selangor-malaysia",
        eventImage: "/images/TensorFlow.png",
        gdgLogos: [
            {
                src: {
                    light: "/images/university-logos/MUM.svg",
                    dark: "/images/university-logos/MUM-dark.svg"
                },
                alt: "GDGoc MUM"
            },
            // {
            //     src: {
            //         light: "/images/Events/images/GDSC_Sunway_University_Logo_Transparent_Horizontal.png",
            //         dark: "/images/Events/images/GDSC_Sunway_University_Logo_Transparent_Horizontal_Dark.png"
            //     },
            //     alt: "GDSC Sunway University"
            // }
        ],
        countdown: "March 8, 2025 10:00:00",
        // techStacks: [
        //     { name: "App Write", logo: "/images/Events/images/React_logo.png" },
        //     { name: "Firebase", logo: "/images/Events/images/firebase_logo.png" },
        // ], // optional, leave it as techStacks: [] if there's no techstacks
        // videoUrl: "https://www.youtube.com/watch?v=-FwhBeDb1wM", // optional, leave it as "" if there's no recording
        description: [
            "Join us for an exciting and transformative TensorFlow workshop, designed specifically for deep learning enthusiasts! Led by our very own GDGoC IIUM 2024/2025 ML/AI Lead, Aiman Hakimi Bin Mohd Abd Rahman, this workshop will guide you through the basics and intricacies of TensorFlow, equipping you with the skills to tackle real-world deep learning challenges. ",
        ],
        // schedule: [
        //     { part: "Part 1: Building a website with React", date: "March 15th, 2025" },
        //     { part: "Part 2: WebDev with Firebase", date: "March 16th, 2025" },
        // ],
        // speakers: [
        //     {
        //         name: "Hernando Ivan Teddy",
        //         image: "/images/speakers/Hernando-Ivan-Teddy.png",
        //         role: "Ørsted",
        //         profileURL: "https://gdsc.community.dev/u/m99rp2/"
        //     },
        // ], // optional, leave it as speakers: [] if there's no speakers
        organizers: [
            {
                name: "Nur Fatihah binti Abdullah",
                image: "/images/organisers/nur_fatihah_binti_abdullah.webp",
                role: "Lead",
                profileURL: "#"
            },
            {
                name: "Abdulmalik Mohamed Hadi Habeebi",
                image: "/images/organisers/abdulmalik_mohamed_hadi_habaebi.webp",
                role: "Co Lead",
                profileURL: "#"
            },
            {
                name: "Ainul Mardhiah",
                image: "/images/organisers/no-pfp.jpg",
                role: "Lead Secretary",
                profileURL: "#"
            },
            {
                name: "Aqil Imran",
                image: "/images/organisers/no-pfp.jpg",
                role: "Vice Secretary",
                profileURL: "#"
            },
            {
                name: "nur afifah amni",
                image: "/images/organisers/no-pfp.jpg",
                role: "Lead Treasurer",
                profileURL: "#"
            },
            {
                name: "Nadzif Zakwan",
                image: "/images/organisers/no-pfp.jpg",
                role: "Vice Treasurer",
                profileURL: "#"
            },
            {
                name: "Nik Irdhina",
                image: "/images/organisers/no-pfp.jpg",
                role: "Multimedia and Communication Team Lead",
                profileURL: "#"
            },
            {
                name: "Adam Fitri",
                image: "/images/organisers/no-pfp.jpg",
                role: "Multimedia and Communication Team Co Lead",
                profileURL: "#"
            },
            {
                name: "Suraya Aini",
                image: "/images/organisers/no-pfp.jpg",
                role: "Multimedia and Communication Core Team Member",
                profileURL: "#"
            },
            {
                name: "Jobayer Hasan",
                image: "/images/organisers/no-pfp.jpg",
                role: "Marketing Core Team Member",
                profileURL: "#"
            },
            {
                name: "Mohammed Ismail Chowdhury Sohan",
                image: "/images/organisers/no-pfp.jpg",
                role: "Marketing Core Team Member",
                profileURL: "#"
            },
            {
                name: "Hafiz Firdaus",
                image: "/images/organisers/no-pfp.jpg",
                role: "Community Team Lead",
                profileURL: "#"
            },
            {
                name: "Nur Amira Azhari",
                image: "/images/organisers/no-pfp.jpg",
                role: "Community Team Co Lead",
                profileURL: "#"
            },
            {
                name: "zahirulhaq zahid",
                image: "/images/organisers/no-pfp.jpg",
                role: "Community Core Team Member",
                profileURL: "#"
            },
            {
                name: "Nazim Azman",
                image: "/images/organisers/no-pfp.jpg",
                role: "Web and Mobile App Development Team Lead",
                profileURL: "#"
            },
            {
                name: "alia syafiqah",
                image: "/images/organisers/no-pfp.jpg",
                role: "Web and Mobile App Development Team Co Lead",
                profileURL: "#"
            },
            {
                name: "Salman Firdaus",
                image: "/images/organisers/no-pfp.jpg",
                role: "Web and Mobile App Development Core Team Member",
                profileURL: "#"
            },
            {
                name: "Musanna zul",
                image: "/images/organisers/no-pfp.jpg",
                role: "Web and Mobile App Development Core Team Member",
                profileURL: "#"
            },
            {
                name: "NURUL BALQIS JAMHARI",
                image: "/images/organisers/no-pfp.jpg",
                role: "UI/UX Team Co Lead",
                profileURL: "#"
            },
            {
                name: "Faiz Fitri",
                image: "/images/organisers/no-pfp.jpg",
                role: "UI/UX Core Team Member",
                profileURL: "#"
            },
            {
                name: "Rusyaidi Mohd Husni",
                image: "/images/organisers/no-pfp.jpg",
                role: "UI/UX Core Team Member",
                profileURL: "#"
            },
            {
                name: "Aiman Hakimi",
                image: "/images/organisers/no-pfp.jpg",
                role: "ML/AI Team Lead",
                profileURL: "#"
            },
            {
                name: "Faris Bin Suhaimi",
                image: "/images/organisers/no-pfp.jpg",
                role: "ML/AI Team Co Lead",
                profileURL: "#"
            },
            {
                name: "Aiman Iskandar",
                image: "/images/organisers/no-pfp.jpg",
                role: "ML/AI Core Team Member",
                profileURL: "#"
            },
            {
                name: "Muhd Hafiz",
                image: "/images/organisers/no-pfp.jpg",
                role: "UI/UX Team Lead",
                profileURL: "#"
            }
        ],
        sponsorshipTitle: "Sponsorship Opportunities",
        sponsorshipDescription: "Partner with us to support this workshop and gain exposure to a talented group of developers and industry professionals. Become a sponsor and showcase your brand to a highly engaged audience.",
        sponsors: {
            Diamond: [
                { name: "", subtitle: "", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Platinum: [
                { name: "", subtitle: "", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Gold: [
                { name: "", subtitle: "", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Silver: [
                { name: "", subtitle: "", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Bronze: [
                { name: "", subtitle: "", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
        },
    };

    return (
            <TensorflowWorkshop {...eventData} />

    )
}
export default page