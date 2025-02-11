
import { HydrateClient, trpc } from "@/trpc/server"
import { ClientPage } from "./client"
import { Suspense } from "react"
import {ErrorBoundary} from "react-error-boundary"

export default async function Home() {
  void trpc.hello.prefetch({text:"Farzeel"})
return(
  <>
  <HydrateClient>
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
  <Suspense fallback={<div>Loading...</div>}>

   <ClientPage/>
  </Suspense>
  </ErrorBoundary>
  </HydrateClient>
  </>
)
}
