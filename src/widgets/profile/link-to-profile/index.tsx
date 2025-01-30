import { useNavigate } from "react-router-dom"
import styles from "./index.module.css"

export const LinkToProfile = () => {
	const navigate = useNavigate()
	const linkIcon = "avatar.jpg"
	return (
		<img src={linkIcon} className={styles.linkIn} onClick={() => navigate("/profile")}/>
	)
}
