"use client"
import { useSidebar } from "@/components/ui/sidebar"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
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
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupContent,
    SidebarMenu,
    SidebarProvider,
    SidebarTrigger,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupLabel,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils";
import { Calendar, ChevronsUpDown, Home, Inbox, Search, Settings } from "lucide-react"
import { forwardRef, ReactNode, useState } from "react";



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
                href: "#sub-event-1",
            },
            {
                title: "KDU Android Workshop",
                href: "#sub-event-2",
            },
        ], // You can still define subEvents here
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



const HeaderFooter = ({ children }: { children: ReactNode }) => {
    // const {
    //     state,
    //     open,
    //     setOpen,
    //     openMobile,
    //     setOpenMobile,
    //     isMobile,
    //     toggleSidebar,
    // } = useSidebar()

    return (
        <SidebarProvider className={"block"} defaultOpen={false}>

            <header className="h-16 text-[15px] fixed z-20 inset-0 bg-white">
                <nav className="mx-6 lg:mx-40 flex lg:justify-between items-center h-full">
                    <div className="flex items-center">
                        <img src="images/kitahack2024.png" alt="" className="h-14 w-auto" />
                    </div>


                    <div className={"hidden lg:block"}>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger><a href="#faqs">FAQs</a></MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Events</MenubarTrigger>
                                <MenubarContent className={"max-w-24 text-right"} align="end">
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


            {children}

            <footer className="mt-40">
                <div className="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <a href="https://www.facebook.com/dscmalaysiakita/" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/gdsc.malaysia/" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://github.com/Google-Developer-Student-Club-Malaysia" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-xs leading-5 text-center text-gray-500">
                            &copy; 2024 GDSC Malaysia&trade;. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </SidebarProvider>
    )
}
export default HeaderFooter

const MoreMobileItem = forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { src?: string }
>(({ className, title, src, children, ...props }, ref) => {
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
                    <img
                        src={src}
                        alt={`${title} icon`}
                        className="w-6 h-6 flex-shrink-0"
                    />
                )}

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <div className="text-sm font-medium leading-none">{title}</div>
                    {/* <p className="text-sm leading-snug text-muted-foreground">
                        {children}
                    </p> */}
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
                    <img
                        src={src}
                        alt={`${title} icon`}
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
        subEvents?: { title: string; href: string }[]; // Allow undefined
    }
>(({ className, title, href, subEvents, ...props }, ref) => {
    return subEvents && subEvents.length > 0 ? (
        <MenubarSub>
            <MenubarSubTrigger className={"justify-center"}>{title}</MenubarSubTrigger>
            <MenubarSubContent>
                {subEvents.map((subEvent) => (
                    <MenubarItem key={subEvent.title} asChild>
                        <a href={subEvent.href}>{subEvent.title}</a>
                    </MenubarItem>
                ))}
            </MenubarSubContent>
        </MenubarSub>
    ) : (
        <MenubarItem asChild>
            <a
                ref={ref}
                href={href}
                className={cn(
                    "flex flex-col gap-1 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
            </a>
        </MenubarItem>
    );
});
EventItem.displayName = "EventItem";

const EventMobileItem = forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & {
        title: string;
        href?: string;
        subEvents?: { title: string; href: string }[]; // Allow undefined
    }
>(({ className, title, href, subEvents, ...props }, ref) => {
    return subEvents && subEvents.length > 0 ? (
        <SidebarMenu>

            <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                            Workshops

                            <ChevronsUpDown className="h-4 w-4" />

                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {subEvents.map((subEvent) => (
                                <SidebarMenuSubItem key={subEvent.title}>
                                    <a href={subEvent.href}>{subEvent.title}</a>
                                </SidebarMenuSubItem>
                            ))}

                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    ) : (
        <SidebarMenuSubItem>
            <a
                ref={ref}
                href={href}
                className={cn(
                    "flex flex-col gap-1 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
            </a>
        </SidebarMenuSubItem>
    );
});
EventMobileItem.displayName = "EventItem";

