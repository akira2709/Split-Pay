import { BackLayout } from "@/shared/ui/back-layout"
import { NavModule } from "@/widgets/profile/nav-module"
import { UserInfo } from "@/widgets/profile/user-info"


export const ProfilePage = () => {
	return (
		<>
			<BackLayout />
			<NavModule />
			<UserInfo />
		</>
	)
}
