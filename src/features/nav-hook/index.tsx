import { useNavigate } from "react-router-dom"
import { ReactNode, useState } from "react"
import { Login } from "./ui/login"


export const useRoute = () => {
	const [content, setContent] = useState<ReactNode>(null)
	const navigate = useNavigate()
	const user = true
	function redirect(route: string) {
		if (user) {
			navigate(route)
		} else {
			setContent(<Login />)
		}
	}
	return [content, redirect]
}
