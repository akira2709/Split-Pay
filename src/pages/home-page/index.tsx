import { useNavigate } from "react-router-dom"
import styles from "./index.module.css"
import { Button } from "@/shared/ui/button"

export const HomePage = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.homePage}>
			<p className={styles.title}>Split Pay</p>
			<div className={styles.star1}></div>
			<div className={styles.star2}></div>
			<p className={styles.content}> — Начни считать свои долги</p>
			<div className={styles.beginBtnBox}>
				<Button onClick={() => navigate("/main")}>Начать</Button>
			</div>
		</div>
	)
}
