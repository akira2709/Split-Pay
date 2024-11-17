import styles from "./index.module.css"

export const Login = () => {
	return (
		<div className={styles.loginRoot}>
			<div className={styles.loginBox}>
				<p className={styles.title}>
					Войдите, чтобы продолжить
				</p>
				<div className={styles.linksBox}>
					<div className={styles.link}>
						<img src="telegram-icon.svg" />
						<p>telegram</p>
					</div>
					<div className={styles.link}>
						<img src="google-icon.svg" />
						<p>google</p>
					</div>
					<div className={styles.link}>
						<img src="github-icon.svg" />
						<p>github</p>
					</div>
				</div>
			</div>
		</div>
	)
}
