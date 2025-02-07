import Image from "next/image"
import { SearchInput } from "../../layouts/searchInput"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"
import { AuthBtn } from "@/modules/auth/ui/components/AuthBtn"
export const HomeNvabar = ()=>{
    return (
    <nav className="flex fixed left-0 right-0 top-0 bg-white-400 h-16 bg-white items-center px-2 pr-5 z-50">

       <div className="flex gap-4 items-center w-full">
        <div className="flex items-center flex-shrink-0">
        <SidebarTrigger/>
        <Link href={"/"}>
            <div  className="flex p-4 items-center gap-1">
            <Image 
      src="/logo.svg" 
      alt="My-Tube Logo"
      width={32}
      height={32} 
     
      />
      <p className="font-semibold tracking-tight text-xl">MyTube</p> 
            </div>

      </Link>
        </div>
        <div className="flex-1 flex  max-w-[700px] mx-auto ">
        <SearchInput/>

        </div>
        <div>
            <AuthBtn/>
            </div>            
       </div>
           
    </nav>
    )
}