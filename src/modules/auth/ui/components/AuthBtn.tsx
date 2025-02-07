import { Button } from "@/components/ui/button"
import {  UserCircleIcon } from "lucide-react"

export const AuthBtn = ()=>{
    return(
        <Button className="px-4 py-2 font-medium text-blue-600 hover:text-blue-500 border-blue-500 rounded-full shadow-none" variant={"outline"}>
            <UserCircleIcon/>
            Sign-In
        </Button>
    )
}