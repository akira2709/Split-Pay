import styles from "./index.module.css"

interface Props {
	title: string
	content: string
	currency?: string
}

export const UserInfoBlock = (props: Props) => {
	return (
		<div className={styles.userInfoBlock}>
			<p className={styles.title}>{ props.title }</p>
			<p className={styles.content}>{ `${props.content} ${props.currency ?? ""}`  }</p>
		</div>
	)
}
