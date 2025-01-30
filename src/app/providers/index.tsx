import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { DataRouter, RouterProvider } from "react-router-dom"

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RecoilRoot } from "recoil"

type Props = {
  router: DataRouter
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
