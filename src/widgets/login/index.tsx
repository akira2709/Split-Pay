import styles from "./index.module.css"
import { LoginLink } from "@/shared/ui/login/link"

export const Login = () => {
	return (
		<div className={styles.loginRoot}>
			<div className={styles.loginBox}>
				<p className={styles.title}>
					Войдите, чтобы продолжить
				</p>
				<div className={styles.linksBox}>
					<LoginLink title={"telegram"} url={"telegram-icon.svg"}/>
					<LoginLink title={"google"} url={"google-icon.svg"}/>
					<LoginLink title={"github"} url={"github-icon.svg"}/>
				</div>
			</div>
		</div>
	)
}
