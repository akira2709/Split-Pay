import { router } from "../routing"
import { Providers } from "@/app/providers"
import { ToastContainer } from "react-toastify"
import { queryClient } from "@/shared/api/query-client"
import "../global.css"
import { useEffect } from "react"


export const App = () => {
	useEffect(() => {
		const theme = localStorage.getItem("theme") ?? "light"
		document.documentElement.setAttribute("data-theme", theme)
	}, [])
	return (
		<>
			<ToastContainer />
			<Providers router={router} client={queryClient} />
		</>
	)
}
