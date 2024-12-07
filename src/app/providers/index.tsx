import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import type { Router } from "@remix-run/router/dist/router"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RecoilRoot } from "recoil"

type Props = {
  router: Router
  client: QueryClient
}

export const Providers = ({ router, client }: Props) => {
  return (
    <QueryClientProvider client={client}>
   		<RecoilRoot>
	      <RouterProvider router={router}/>
	      <ReactQueryDevtools />
     	</RecoilRoot>
    </QueryClientProvider>
  )
}
