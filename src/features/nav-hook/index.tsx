import { useNavigate } from "react-router-dom"
import { ReactNode, useState } from "react"

export const useRoute = () => {
	const [content, setContent] = useState<ReactNode | null>(null)
	const navigate = useNavigate()
	const user = false
	const redirect = (route: string) => {
		if (user) {
			navigate(route)
		} else {
			setContent((<>login</>))
		}
		return null
	}
	return [content, redirect]
}
