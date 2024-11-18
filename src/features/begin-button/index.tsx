import { Button } from "@/shared/ui/button"
import { useNavigate } from "react-router-dom"




export const BeginButton = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/main')
	}
	return (
		<>
			<Button onClick={() => handleClick()}>Начать</Button>
		</>
	)
}
