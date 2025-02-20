import WorkShopEventPage from "../_components/EventsPage/WorkShopTemplate/WorkShopEventPage"


const page = () => {
    const eventData = {
        title: "React & Firebase Workshop Series",
        subtitle: "Master real-world Firebase integration with React",
        date: "2025-03-15",
        time: "10:00 AM - 5:00 PM",
        venue: { location: "Sunway University, Malaysia", time: "10:00 AM - 5:00 PM" },
        rsvpLink: "https://example.com/rsvp",
        eventImage: "/images/Events/images/react_firebase_logo.png",
        gdgLogos: [
            { src: "/images/Events/images/GDSC_Malaysia_Transparent_Horizontal.png", alt: "GDSC Malaysia" },
            { src: "/images/Events/images/GDSC_Sunway_University_Logo_Transparent_Horizontal.png", alt: "GDSC Sunway University" },
        ],
        countdown: "March 15, 2025 10:00:00",
        techStacks: [
            { name: "React", logo: "/images/Events/images/React_logo.png" },
            { name: "Firebase", logo: "/images/Events/images/firebase_logo.png" },
        ], // optional, leave it as techStacks: [] if there's no techstacks
        videoUrl: "https://www.youtube.com/watch?v=-FwhBeDb1wM", // optional, leave it as "" if there's no recording
        description: [
            "Join us for an immersive WebDev workshop series where you'll learn how to integrate Firebase into React applications.",
            "During this series, you'll gain practical experience with authentication, Firestore, and real-time database operations.",
            "This workshop is ideal for developers looking to enhance their full-stack development skills with modern technologies.",
            "Don't miss out on this opportunity to network with industry experts and fellow developers!",
        ],
        schedule: [
            { part: "Part 1: Building a website with React", date: "March 15th, 2025" },
            { part: "Part 2: WebDev with Firebase", date: "March 16th, 2025" },
        ],
        speakers: [
            {
                name: "Tech Community Malaysia",
                image: "/images/Events/images/shahmir_varqha.webp",
                role: "Event Partner",
                profileURL: "https://gdsc.community.dev/u/m99rp2/"
            },
            {
                name: "Sunway University Dev Club",
                image: "/images/Events/images/gdsc_sunway_university.webp",
                role: "Co-Organizer",
                profileURL: "https://gdsc.community.dev/u/mv74dx/"
            },
        ], // optional, leave it as speakers: [] if there's no speakers
        organizers: [
            {
                name: "Tech Community Malaysia",
                image: "/images/Events/images/shahmir_varqha.webp",
                role: "Event Partner",
                profileURL: "https://gdsc.community.dev/u/m99rp2/"
            },
            {
                name: "Sunway University Dev Club",
                image: "/images/Events/images/gdsc_sunway_university.webp",
                role: "Co-Organizer",
                profileURL: "https://gdsc.community.dev/u/mv74dx/"
            },
        ],
        sponsorshipTitle: "Sponsorship Opportunities",
        sponsorshipDescription: "Partner with us to support this workshop and gain exposure to a talented group of developers and industry professionals. Become a sponsor and showcase your brand to a highly engaged audience.",
        sponsors: {
            Diamond: [
                { name: "Tech Innovators", subtitle: "Leading the Future", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Platinum: [
                { name: "Cloud Systems", subtitle: "Pioneering Cloud Technology", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Gold: [
                { name: "Code Masters", subtitle: "Empowering Developers", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Silver: [
                { name: "DevTools Inc.", subtitle: "Building the Future of DevOps", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Bronze: [
                { name: "Open Source Hub", subtitle: "Supporting Innovation", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
        },
    };




    return (
        <>

            <WorkShopEventPage {...eventData} />

        </>
    )
}
export default page