import { Button } from "@/shared/ui/button"
import { useRoute } from "@/features/nav-hook"


export const BeginButton = () => {
	const [loginPage, redirect] = useRoute()

	const handleClick = () => {
		redirect('/main/profile/1')
	}
	return (
		<>
			{ loginPage }
			<Button onClick={() => handleClick()}>Начать</Button>
		</>
	)
}
