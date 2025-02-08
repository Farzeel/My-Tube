import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { MainSection } from "./main-section"
import { Separator } from "@/components/ui/separator"
import { PersnolSection } from "./persnol-section"

export const HomeSidebar =()=>{
    return(
        <Sidebar collapsible="icon" className="pt-16 border-none z-40">
            <SidebarContent className="bg-background">
            <MainSection/>
            <Separator/>
            <PersnolSection/>
            </SidebarContent>
        </Sidebar>
    )
}