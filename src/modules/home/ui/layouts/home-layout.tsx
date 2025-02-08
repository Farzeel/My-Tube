import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { HomeNvabar } from '../components/home-navbar'
import { HomeSidebar } from '../components/home-sidebar'
interface homeLayoutProps{
    children: React.ReactNode
}

export const HomeLayout = ({children}:homeLayoutProps) => {
  return (
    <SidebarProvider>
        <div className='w-full'>
       <HomeNvabar/>
       <div className='flex min-h-screen pt-[4rem]'>
        <HomeSidebar/>
         <main className='flex-1 overflow-y-auto'>
          
         {children}
         </main>
       </div>
        </div>
    </SidebarProvider>
  )
}


