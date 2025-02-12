"use client"

import { FilterCrousel } from "@/components/filter-crousel"
import { trpc } from "@/trpc/client"

import { Suspense } from "react"
import {ErrorBoundary} from "react-error-boundary"

interface CategoriesSectionProps{
   
   categoryId?:string

};


export const CategoriesSection =  ({categoryId}:CategoriesSectionProps)=>{


   return(
      <Suspense fallback={<FilterCrousel  onSelect={()=>{}} isLoading data={[]}/>}>
       <ErrorBoundary fallback = {<p>Error..</p>}>
         <CategoriesSuspense categoryId={categoryId}/>
       </ErrorBoundary>
      </Suspense>
   )

}
 const CategoriesSuspense =  ({categoryId}:CategoriesSectionProps)=>{
   const [categories]  =  trpc.categories.getMany.useSuspenseQuery();
   const data = categories.map(({name,id})=>(
      {
         value:id,
         label:name
      }
   ))   

   return(
      <>

       <div><FilterCrousel  onSelect={x=>console.log(x)} value={categoryId} data={data} /></div>
    
       </>
   )
}