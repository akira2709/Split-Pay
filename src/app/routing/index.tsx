import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "@/pages/home-page"
import { MainPage } from "@/pages/main-page"
import { ProfilePage } from "@/pages/profile-page"

export const router = createBrowserRouter([
  {
    path: "/Split-Pay/",
    element: <HomePage />,
  },
  {
    path: "/Split-Pay/main",
    element: <MainPage />
  },
  {
  	path: "/Split-Pay/profile",
   	element: <ProfilePage />
  }
])
