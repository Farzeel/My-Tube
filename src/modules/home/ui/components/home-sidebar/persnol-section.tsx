"use client"

import { SidebarGroupContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupLabel } from "@/components/ui/sidebar";
import { useAuth, useClerk } from "@clerk/nextjs";
import { FlameIcon, HistoryIcon, HomeIcon, ListVideoIcon, PlaySquareIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const items = [
{
title:"History",
url:"/playslist/history",
icon:HistoryIcon,
auth:true
},
{
title:"LikedVideos",
url:"/playslist/liked",
icon:ThumbsUpIcon,
auth:true
},
{
title:"All PlayLists",
url:"/playlists",
icon:ListVideoIcon,
auth:true
}
]

export const PersnolSection = ()=>{
  const {userId} =useAuth()
  const clerk = useClerk() 
    return(
        <SidebarGroup>
            <SidebarGroupContent>
            <SidebarGroupLabel>You</SidebarGroupLabel>
                <SidebarMenu>
                {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={false}
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