import { router } from "../routing"
import { Providers } from "@/app/providers"
import { ToastContainer } from "react-toastify"
import { queryClient } from "@/shared/api/query-client"
import "../global.css"
import { Login } from "@/widgets/login"





export const App = () => {

	return (
		<Providers router={router} client={queryClient}>
			<ToastContainer />
			<Login />
		</Providers>
	)
}
