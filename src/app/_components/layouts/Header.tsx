"use client"
import Image from "next/image";
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
        title: "Demo Day",
        href: "",
        subEvents: undefined, // Set subEvents to undefined instead of null
    },
    {
        title: "Google Solution Challenge 2025 Info Session",
        href: "",
        subEvents: undefined, // Set subEvents to undefined instead of null
    },
    {
        title: "2025 Solution Challenge Kickoff Event",
        href: "",
        subEvents: undefined, // Set subEvents to undefined instead of null
    },
    {
        title: "Workshops",
        href: "",
        subEvents: [
            {
                title: "Sunway React & Firebase Workshop Series",
                href: "/ReactAndFirebaseWorkshop",
            },
            {
                title: "KDU Android Workshop",
                href: "#sub-event-2",
            },
        ], 
    }
];



const moreContents: { title: string; href: string; description: string; src: string }[] = [
    {
        title: "What is KitaHack",
        href: "#kitahack-info",
        description:
            "Get a better understanding of KitaHack 2025",
        src: "images/question-mark-circle.svg"
    },
    {
        title: "What is Sustainable Development Goals?",
        href: "#sdg-info",
        description:
            "Join to preserve the environment!",
        src: "images/earth.svg"
    },
    {
        title: "How to join",
        href: "#how-to-join",
        description:
            "A conversation between two friends",
        src: "images/click.svg"
    },
    {
        title: "Team Formation",
        href: "#team-formation",
        description:
            "Stronger together",
        src: "images/team-fill.svg"
    },
    {
        title: "Judging Criteria",
        href: "#judging-criteria",
        description:
            "Take note",
        src: "images/tick-circle-outline.svg"
    },
    {
        title: "Submission Criteria",
        href: "#submission-criteria",
        description:
            "You can only submit your project once",
        src: "images/email.svg"
    },
    {
        title: "Mentors",
        href: "#mentor",
        description:
            "Remember these people",
        src: "images/person.svg"
    },
    {
        title: "Chapters",
        href: "#chapter",
        description:
            "Organise with love",
        src: "images/degree-hat.svg"
    }
]



const Header = ({ }) => {


    return (

        <header className="h-16 text-[15px] fixed z-20 inset-0 bg-white">
            <nav className="mx-6 lg:mx-40 flex lg:justify-between items-center h-full">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image src="/images/kitahack2024.png" alt="" width={56} height={56} className="h-14 w-auto cursor-pointer" />
                    </Link>
                </div>


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
                            <MenubarTrigger>More</MenubarTrigger>
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

                <SidebarTrigger className={"lg:hidden ml-auto"} />
                <div className={"lg:hidden"}>
                    <Sidebar side={"right"} collapsible={"offcanvas"} variant={"sidebar"}>
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
    )
}
export default Header

const MoreMobileItem = forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { src?: string }
>(({ className, title, src, ...props }, ref) => {
    return (
        <SidebarMenuSubItem>
            <a
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
                        className="w-6 h-6 flex-shrink-0"
                    />
                )}

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <div className="text-sm font-medium leading-none">{title}</div>

                </div>
            </a>
        </SidebarMenuSubItem>
    );
});

MoreMobileItem.displayName = "MoreItem";


const MoreItem = forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { src?: string }
>(({ className, title, src, children, ...props }, ref) => {
    return (
        <MenubarItem asChild>
            <a
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
                        className="w-6 h-6 flex-shrink-0"
                    />
                )}

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </div>
            </a>
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
                                    <Link href={subEvent.href}>{subEvent.title}</Link>
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

