import styles from "./index.module.css"

export const UserAvatar = () => {
	const imgUrl = "avatar.jpg"
	return (
		<div className={styles.avatar}>
			<img src={imgUrl} />
		</div>
	)
}
