import styles from "./index.module.css"
import { BeginButton } from "@/features/begin-button"

export const HomePage = () => {
	return (
		<div className={styles.homePage}>
			<p className={styles.title}>Split Pay</p>
			<img src="star1.svg" className={styles.star1} />
			<img src="star2.svg" className={styles.star2} />
			<p className={styles.content}> — Начни считать свои долги</p>
			<div className={styles.beginBtnBox}>
				<BeginButton />
			</div>
		</div>
	)
}
