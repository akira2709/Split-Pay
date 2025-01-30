import { useNavigate } from "react-router-dom"
import styles from "./index.module.css"

export const LinkFromProfile = () => {
	const navigate = useNavigate()
	return (
		<button className={styles.linkBack} onClick={() => navigate(-1)}>
			<div className={styles.icon}></div>
		</button>
	)
}
