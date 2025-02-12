import { CategoriesSection } from "../sections/categories-section"

interface HomeViewProps{
   
      categoryId?:string
  
  };
  

export const HomeView  =({categoryId}:HomeViewProps)=>{
    return (
        <div className="max-w-[2400px] flex flex-col mx-auto px-4 pt-2.5 gap-y-6 ">
         <CategoriesSection categoryId={categoryId}/>
        </div>
    )
}