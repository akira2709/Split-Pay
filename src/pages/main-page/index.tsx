import { BackLayout } from "@/shared/ui/back-layout"
import { MainOptions } from "@/widgets/main"
import { LinkToProfile } from "@/widgets/profile/link-to-profile"


export const MainPage = () => {
	return (
		<>
			<BackLayout />
			<LinkToProfile />
			<MainOptions />
		</>
	)
}
