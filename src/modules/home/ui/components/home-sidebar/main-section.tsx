"use client"

import { SidebarGroupContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";
import { useAuth , RedirectToSignIn, useClerk} from '@clerk/nextjs'

const items = [
{
title:"Home",
url:"/",
icon:HomeIcon
},
{
title:"Subscription",
url:"/feed/subscription",
icon:PlaySquareIcon,
auth:true
},
{
title:"Trending",
url:"/feed/trending",
icon:FlameIcon
}
]

export const  MainSection = ()=>{
  const { userId } =  useAuth()
  const clerk = useClerk()
    return(
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                  asChild 
                  tooltip={item.title} 
                  isActive={false}
                   onClick={(e)=>{
                    if(!userId && item.auth) {
                      e.preventDefault()
                     return clerk.openSignIn()
                    } 
                  }} >
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