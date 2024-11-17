import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "@/pages/home-page"
import { MainPage } from "@/pages/main-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/main",
    element: <MainPage />,
    children: [
    	{
     		path: "profile/:userId",
       	element: <>profile</>
     	},
      {
     		path: "stats/:userId",
      	element: <>stats</>
      }
    ]
  },
])
