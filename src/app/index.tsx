import ReactDOM from 'react-dom/client'
import { router } from "./routing";
import { Providers } from "@/app/providers";
import { queryClient } from "@/shared/api/query-client";
import "./global.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Providers router={router} client={queryClient}/>
)
