import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import type { Router } from "@remix-run/router/dist/router"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RecoilRoot } from "recoil"
import { ReactNode } from "react"

type Props = {
  router: Router
  client: QueryClient
  children?: ReactNode
}

export const Providers = ({ router, client, children }: Props) => {
  return (
    <QueryClientProvider client={client}>
   		<RecoilRoot>
     		{ children }
	      <RouterProvider router={router}/>
	      <ReactQueryDevtools />
     	</RecoilRoot>
    </QueryClientProvider>
  )
}
