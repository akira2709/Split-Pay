import styles from "./index.module.css"

export const UserUsername = () => {
	const username = {
		name: "Имя",
		surname: "Фамилия"
	}
	return (
		<div className={styles.username}>
			<span>{ username.name }</span>
			<span>{ username.surname }</span>
		</div>
	)
}
