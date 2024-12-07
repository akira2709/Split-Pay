import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "@/pages/home-page"
import { MainPage } from "@/pages/main-page"
import { ProfilePage } from "@/pages/profile-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/main",
    element: <MainPage />
  },
  {
  	path: "/profile",
   	element: <ProfilePage />
  }
])
