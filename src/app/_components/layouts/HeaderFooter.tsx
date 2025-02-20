"use client"

import Footer from "./Footer"
import Header from "./Header"
import { SidebarProvider } from "@/components/ui/sidebar";


const HeaderFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {


    return (
        <>

            <SidebarProvider className={"block"} defaultOpen={false}>
                <Header />

                {children}

                <Footer />

            </SidebarProvider>


        </>
    )
}
export default HeaderFooter