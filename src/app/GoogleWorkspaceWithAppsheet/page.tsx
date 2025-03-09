import GoogleWorkSpaceWithAppSheet from "./_components/GoogleWorkSpaceWithAppSheet";




const page = () => {

    const eventData = {
        title: "Google Workspace with Automation",
        subtitle: "Effortless Scheduling & AI-Powered Insights with App Script",
        date: "14th March 2025",
        time: "7:00 PM – 9:00 PM",
        venue: { location: "Hybrid (In-person: For Monash students, Online: For non-Monash students)", time: "7:00 PM – 9:00 PM" },
        rsvpLink: "https://gdg.community.dev/events/details/google-gdg-on-campus-monash-university-malaysia-selangor-malaysia-presents-google-workspace-with-automation-effortless-scheduling-amp-ai-powered-insights-with-app-script/cohost-gdg-on-campus-monash-university-malaysia-selangor-malaysia",
        eventImage: "/images/workshops/googleWorkspace-hero.svg",
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
        countdown: "March 14, 2025 10:00:00",
        // techStacks: [
        //     { name: "App Write", logo: "/images/Events/images/React_logo.png" },
        //     { name: "Firebase", logo: "/images/Events/images/firebase_logo.png" },
        // ], // optional, leave it as techStacks: [] if there's no techstacks
        // videoUrl: "https://www.youtube.com/watch?v=-FwhBeDb1wM", // optional, leave it as "" if there's no recording
        description: [
            "Join the Google Workspace Workshop with Hernando Ivan Teddy, in collab with KitaHack 2025, and unlock the power of automation and AI insights using Google Apps Script! Learn to streamline workflows, boost productivity, and enhance collaboration with Docs, Sheets, Slides, Drive, and Gmail. Elevate your efficiency",
        ],
        // schedule: [
        //     { part: "Part 1: Building a website with React", date: "March 15th, 2025" },
        //     { part: "Part 2: WebDev with Firebase", date: "March 16th, 2025" },
        // ],
        speakers: [
            {
                name: "Hernando Ivan Teddy",
                image: "/images/speakers/Hernando-Ivan-Teddy.png",
                role: "Ørsted",
                profileURL: "https://gdsc.community.dev/u/m99rp2/"
            },
        ], // optional, leave it as speakers: [] if there's no speakers
        organizers: [
            {
                name: "Sarviin Hari",
                image: "/images/organisers/sarviin_hari.webp",
                role: "Monash University Malaysia Lead",
                profileURL: "https://gdg.community.dev/u/sarviin/"
            },
            {
                name: "Chee Min Hao",
                image: "/images/organisers/chee_min_hao.webp",
                role: "Co-Lead",
                profileURL: "https://gdg.community.dev/u/chee/"
            },
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
        <GoogleWorkSpaceWithAppSheet {...eventData} />

    )
}
export default page