import styles from "./index.module.css"
import { ChangeTheme } from "./change-theme"
import { LinkFromProfile } from "./link-from-profile"
import { Logout } from "./logout"


export const NavModule = () => {
	return (
		<div className={styles.navModule}>
			<LinkFromProfile />
			<ChangeTheme />
			<Logout />
		</div>
	)
}
