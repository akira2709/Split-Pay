import { useNavigate } from "react-router-dom"
import styles from "./index.module.css"

export const LinkToProfile = () => {
	const navigate = useNavigate()
	return <img src={"/google-icon.svg"} className={styles.linkIn} onClick={() => navigate("/profile")}/>
}
