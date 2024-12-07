import styles from "./index.module.css"

export const ChangeTheme = () => {
	const changeTheme = () => {
		const theme = document.documentElement.getAttribute("data-theme") ?? "light"
		const newTheme = theme === "dark" ? "light" : "dark"
		document.documentElement.setAttribute("data-theme", newTheme)
		localStorage.setItem("theme", newTheme)
	}
	return (
		<div className={styles.changeTheme}
			onClick={changeTheme}>
			<div className={styles.icon}></div>
		</div>
	)
}
