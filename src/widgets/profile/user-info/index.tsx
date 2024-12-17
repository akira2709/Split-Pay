import styles from "./index.module.css"
import { UserAvatar } from "./user-avatar"
import { UserUsername } from "./user-username"

export const UserInfo = () => {
	return (
		<main className={styles.main}>
			<UserAvatar />
			<UserUsername />
		</main>
	)
}
