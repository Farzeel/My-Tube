import Image from "next/image";


export default function Home() {
return(
  <>
      <Image 
      src="/logo.svg" 
      alt="My-Tube Logo"
      width={32}
      height={32} 
     
      />
      <p className="font-semibold tracking-tight text-xl">MyTube</p> 
  </>
)
}
