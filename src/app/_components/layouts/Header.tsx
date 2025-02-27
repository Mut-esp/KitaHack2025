"use client"
import Image from "next/image";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
// import { Button } from "@/components/ui/button"

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"


import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarSub,
    MenubarTrigger,
} from "@/components/ui/menubar"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarTrigger,
    SidebarMenuItem,
    SidebarMenuButton,

    SidebarMenuSub,
    SidebarMenuSubItem,

} from "@/components/ui/sidebar"


import { useSidebar } from "@/components/ui/sidebar"


import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react"
import { forwardRef } from "react";
import Link from "next/link";




type SubEvent = {
    title: string;
    href: string;
};

type EventContent = {
    title: string;
    href: string;
    subEvents?: SubEvent[]; // Allow subEvents to be undefined
};


const eventsContents: EventContent[] = [

    {
        title: "Coming Soon",
        href: "",
        subEvents: undefined, // Set subEvents to undefined 
    }, // use this for no events
    // {
    //     title: "Demo Day",
    //     href: "",
    //     subEvents: undefined, // Set subEvents to undefined instead of null
    // },
    // {
    //     title: "Google Solution Challenge 2025 Info Session",
    //     href: "",
    //     subEvents: undefined, // Set subEvents to undefined instead of null
    // },
    // {
    //     title: "2025 Solution Challenge Kickoff Event",
    //     href: "",
    //     subEvents: undefined, // Set subEvents to undefined instead of null
    // },
    // {
    //     title: "Workshops",
    //     href: "",
    //     subEvents: [
    //         {
    //             title: "No Workshops Yet",
    //             href: "",
    //         }, // use this for no workshops
    //         {
    //             title: "Sunway React & Firebase Workshop Series",
    //             href: "/ReactAndFirebaseWorkshop",
    //         },
    //         {
    //             title: "KDU Android Workshop",
    //             href: "#sub-event-2",
    //         },
    //     ],
    // }
];



const moreContents: { title: string; href: string; description: string; src: string }[] = [
    {
        title: "What is KitaHack",
        href: "/#kitahack-info",
        description:
            "Get a better understanding of KitaHack 2025",
        src: "images/question-mark-circle.svg"
    },
    {
        title: "What is Sustainable Development Goals?",
        href: "/#sdg-info",
        description:
            "Join to preserve the environment!",
        src: "images/earth.svg"
    },
    {
        title: "What is AI?",
        href: "/#ai-info",
        description:
            "Discover AI Technologies",
        src: "images/artificial-intelligence-04.svg"
    },
    {
        title: "Team Formation",
        href: "/#team-formation",
        description:
            "Stronger together",
        src: "images/team-fill.svg"
    },
    {
        title: "Judging Criteria",
        href: "/#judging-criteria",
        description:
            "Take note",
        src: "images/tick-circle-outline.svg"
    },
    // {
    //     title: "Submission Criteria",
    //     href: "/#submission-criteria",
    //     description:
    //         "You can only submit your project once",
    //     src: "images/email.svg"
    // },
]



const Header = ({ }) => {


    const {
        toggleSidebar,
    } = useSidebar()

    const { setTheme } = useTheme()


    const MoreMobileItem = forwardRef<
        React.ElementRef<typeof Link>,
        React.ComponentPropsWithoutRef<typeof Link> & { src?: string }
    >(({ className, title, src, ...props }, ref) => {
        return (
            <SidebarMenuSubItem>
                <Link
                    ref={ref}
                    onClick={() => toggleSidebar()}
                    className={cn(
                        "flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    {/* Icon */}
                    {src && (
                        <Image
                            src={src}
                            alt={`${title} icon`}
                            width={24}
                            height={24}
                            className="w-6 h-6 flex-shrink-0 dark:invert dark:brightness-0 dark:filter"
                        />
                    )}

                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                        <div className="text-sm font-medium leading-none">{title}</div>
                    </div>
                </Link>
            </SidebarMenuSubItem>
        );
    });
    MoreMobileItem.displayName = "MoreMobileItem";

    const MoreItem = forwardRef<
        React.ElementRef<typeof Link>,
        React.ComponentPropsWithoutRef<typeof Link> & { src?: string }
    >(({ className, title, src, children, ...props }, ref) => {
        return (
            <MenubarItem asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    {/* Icon */}
                    {src && (
                        <Image
                            src={src}
                            alt={`${title} icon`}
                            width={24}
                            height={24}
                            className="w-6 h-6 flex-shrink-0 dark:invert dark:brightness-0 dark:filter"
                        />
                    )}

                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="text-sm leading-snug text-muted-foreground">{children}</p>
                    </div>
                </Link>
            </MenubarItem>
        );
    });
    MoreItem.displayName = "MoreItem";

    const EventItem = forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a"> & {
            title: string;
            href?: string;
            subEvents?: { title: string; href: string }[];
        }
    >(({ className, title, href, subEvents, ...props }, ref) => {
        return subEvents && subEvents.length > 0 ? (
            <MenubarSub>
                <MenubarSubTrigger className={"justify-center"}>{title}</MenubarSubTrigger>
                <MenubarSubContent>
                    {subEvents.map((subEvent) => (
                        <MenubarItem key={subEvent.title} asChild>
                            <Link href={subEvent.href}>{subEvent.title}</Link>
                        </MenubarItem>
                    ))}
                </MenubarSubContent>
            </MenubarSub>
        ) : (
            <MenubarItem asChild>
                <Link
                    ref={ref}
                    href={href || "#"}
                    onClick={() => toggleSidebar()}
                    className={cn(
                        "w-full flex justify-end gap-1 px-3 py-2 rounded-md transition-colors",
                        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none text-right">{title}</div>
                </Link>
            </MenubarItem>
        );
    });
    EventItem.displayName = "EventItem";

    const EventMobileItem = forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a"> & {
            title: string;
            href?: string;
            subEvents?: { title: string; href: string }[];
        }
    >(({ className, title, href, subEvents, ...props }, ref) => {
        return subEvents && subEvents.length > 0 ? (
            <SidebarMenu>
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                                {title}
                                <ChevronsUpDown className="h-4 w-4" />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {subEvents.map((subEvent) => (
                                    <SidebarMenuSubItem key={subEvent.title}>
                                        <Link href={subEvent.href} onClick={() => toggleSidebar()}>{subEvent.title}</Link>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
            </SidebarMenu>
        ) : (
            <SidebarMenuSubItem>
                <Link
                    ref={ref}
                    href={href || "#"}
                    onClick={() => toggleSidebar()}
                    className={cn(
                        "flex flex-col gap-1 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </Link>
            </SidebarMenuSubItem>
        );
    });
    EventMobileItem.displayName = "EventItem";



    return (

        <>

            <div className="absolute inset-0 w-full h-3/5">
                <Image
                    src="/images/gradient-navbar.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="z-[-20] opacity-80 [mask-image:linear-gradient(to_bottom,black_10%,transparent_60%)] backdrop-blur-lg"
                />
            </div>

            <header className="h-16 text-[15px] fixed z-20 inset-0 bg-gradient-to-r from-[#FE79B9]/30 via-[#AD00FF]/30 to-[#2489FF]/30 backdrop-blur-md dark:bg-black/40">


                <nav className="mx-6 lg:mx-40 flex lg:justify-between items-center h-full">

                    <div className="flex items-center">
                        <Link href={"/"}>
                            <Image src="/images/KitaHack2025-Logo-new.svg" alt="" width={200} height={300} className="max-h-[120px] max-w-[120px] md:max-h-[200px] md:max-w-[200px] cursor-pointer" />
                        </Link>
                    </div>



                    <div className={"flex gap-4 ml-auto mr-2 lg:mx-0"}>
                        <Menubar className={""}>
                            <MenubarMenu>
                                <MenubarTrigger className={"p-1"}>

                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>

                                </MenubarTrigger>
                                <MenubarContent className={""} align="end">
                                    <MenubarItem onClick={() => setTheme("light")}>
                                        Light
                                    </MenubarItem>
                                    <MenubarItem onClick={() => setTheme("dark")}>
                                        Dark
                                    </MenubarItem>
                                    <MenubarItem onClick={() => setTheme("system")}>
                                        System
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>

                        </Menubar>


                        <div className={"hidden lg:block"}>
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger><a href="#faqs">FAQs</a></MenubarTrigger>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger>Events</MenubarTrigger>
                                    <MenubarContent className={"max-w-24"} align="end">
                                        {eventsContents.map((event) => (
                                            <EventItem key={event.title} title={event.title} href={event.href} subEvents={event.subEvents} />
                                        ))}
                                    </MenubarContent>
                                </MenubarMenu>

                                <MenubarMenu>
                                    <MenubarTrigger>Details</MenubarTrigger>
                                    <MenubarContent align="end" className={"max-h-64 overflow-y-auto hidden lg:block"}>
                                        {moreContents.map((moreContent) => (
                                            <MoreItem
                                                key={moreContent.title}
                                                title={moreContent.title}
                                                src={moreContent.src}
                                                href={moreContent.href}
                                                className={"px-2 py-4"}
                                            >
                                                {moreContent.description}
                                            </MoreItem>
                                        ))}
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        </div>

                    </div>
                    <SidebarTrigger className={"lg:hidden"} />
                    <div className={"lg:hidden"}>
                        <Sidebar side={"right"} collapsible={"offcanvas"} variant={"sidebar"} >
                            <SidebarContent>
                                <SidebarGroup>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            <Collapsible defaultOpen className="group/collapsible">
                                                <SidebarMenuItem>
                                                    <CollapsibleTrigger asChild>
                                                        <SidebarMenuButton>
                                                            KitaHack 2025 Info

                                                            <ChevronsUpDown className="h-4 w-4" />

                                                        </SidebarMenuButton>
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent>
                                                        <SidebarMenuSub>
                                                            {moreContents.map((moreContent) => (


                                                                <MoreMobileItem
                                                                    key={moreContent.title}
                                                                    title={moreContent.title}
                                                                    src={moreContent.src}
                                                                    href={moreContent.href}
                                                                    className={"px-2 py-3"}
                                                                >
                                                                    {moreContent.description}
                                                                </MoreMobileItem>


                                                            ))}

                                                        </SidebarMenuSub>
                                                    </CollapsibleContent>
                                                </SidebarMenuItem>
                                            </Collapsible>
                                            <Collapsible defaultOpen className="group/collapsible">
                                                <SidebarMenuItem>
                                                    <CollapsibleTrigger asChild>
                                                        <SidebarMenuButton>
                                                            Events

                                                            <ChevronsUpDown className="h-4 w-4" />

                                                        </SidebarMenuButton>
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent>
                                                        <SidebarMenuSub>
                                                            {eventsContents.map((event) => (
                                                                <EventMobileItem key={event.title} title={event.title} href={event.href} subEvents={event.subEvents} />
                                                            ))}

                                                        </SidebarMenuSub>
                                                    </CollapsibleContent>
                                                </SidebarMenuItem>
                                            </Collapsible>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>

                            </SidebarContent>
                        </Sidebar>

                    </div>
                </nav>


            </header>
        </>
    )
}
export default Header

