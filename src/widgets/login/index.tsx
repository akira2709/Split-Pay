import styles from "./index.module.css"
import { LoginLink } from "@/shared/ui/login/link"
import { useRecoilState } from "recoil"
import { isLoginOpen } from "@/features/login/model"
import clsx from "clsx"

export const Login = () => {
	const [isOpen] = useRecoilState(isLoginOpen)

	return (
		<div className={clsx(styles.loginRoot, !isOpen ? styles.close : null)}>
			<div className={styles.loginBox}>
				<p className={styles.title}>
					Войдите, чтобы продолжить
				</p>
				<div className={styles.linksBox}>
					<LoginLink title={"telegram"} url={"/telegram-icon.svg"}/>
					<LoginLink title={"google"} url={"/google-icon.svg"}/>
					<LoginLink title={"github"} url={"/github-icon.svg"}/>
				</div>
			</div>
		</div>
	)
}
