import { SidebarGroupContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";

const items = [
{
title:"Home",
url:"/",
icon:HomeIcon
},
{
title:"Subscription",
url:"/feed/subscription",
icon:PlaySquareIcon
},
{
title:"Trending",
url:"/feed/trending",
icon:FlameIcon
}
]

export const MainSection = ()=>{
    return(
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={false} >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}