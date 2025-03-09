"use client"

import Image from "next/image";
import Footer from "./Footer"
import Header from "./Header"
import { SidebarProvider } from "@/components/ui/sidebar";


const HeaderFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {


    return (
        <>

            <SidebarProvider className={"block"} defaultOpen={false}>
                <div className={"relative"}>

                    <Header />


                    {children}

                    <Footer />
                </div>

            </SidebarProvider>


        </>
    )
}
export default HeaderFooter