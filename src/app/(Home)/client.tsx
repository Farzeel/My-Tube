"use client"

import { trpc } from "@/trpc/client"

export const ClientPage = ()=>{
    const [data] = trpc.hello.useSuspenseQuery({text:"Farzeel"})
return(
    <>
    <p> {data.greeting}</p>
    </>
)
}