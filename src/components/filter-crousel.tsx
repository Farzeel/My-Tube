import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Badge } from "./ui/badge"
import { cn } from "@/lib/utils"
import React from "react"
import { Skeleton } from "./ui/skeleton"

 

interface filterCrouselProps{
    value?: string |null
    isLoading?:boolean
    onSelect:(value:string)=>void
    data:{
    value:string
    label:string   
    }[]
}

export const FilterCrousel = ({value,isLoading,data,onSelect}:filterCrouselProps)=>{

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
          return
        }
     
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])

return (
    <div className=" relative w-full">
        <div
        className={cn("absolute left-12 z-10 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none",
        current == 1 && "hidden"
        )}
        />
        <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                dragFree:true
              }}
              className="w-full px-12"
        >
         <CarouselContent>
            {!isLoading&&<CarouselItem onClick={()=>onSelect("null")} className="basis-auto">
                <Badge
                variant={!value ? "default":"secondary"}
                className="rounded-lg px-3 py-1 cursor-pointer  whitespace-nowrap text-sm"
                >
                All
                </Badge>
            </CarouselItem >}
            {isLoading && 
            Array.from({length:13}).map((_,index)=>(
                <CarouselItem key={index}  className="basis-auto">
                    <Skeleton className="rounded-lg h-full px-3 py-1 text-sm w-[100px] font-semibold">
                    &nbsp;

                    </Skeleton>
                </CarouselItem>
            ))
            }
            {!isLoading && data.map(item=>(
                <CarouselItem onClick={()=>onSelect(item.value)} className="basis-auto" key={item.value}>
                    <Badge title={item.value}
                    variant={value=== null ? "default":"secondary"}
                    className="rounded-lg px-3 py-1 cursor-pointer  whitespace-nowrap text-sm"
                    >
                    {item.label}
                    </Badge>
                </CarouselItem>
                
            ))}

         </CarouselContent>
         <CarouselPrevious className="left-0 z-20"/>
            <CarouselNext className="right-0 z-20"/>
        </Carousel>
    
        <div
        className={cn("absolute right-12 z-50 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none",
        current == count && "hidden"
        )}
        />
    </div>
)
}