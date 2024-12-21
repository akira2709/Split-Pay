import styles from "./index.module.css"
import clsx from "clsx"

interface Props {
	title: string
	content: string
	currency?: boolean
}

export const UserInfoBlock = (props: Props) => {
	return (
		<div className={styles.userInfoBlock}>
			<p className={styles.title}>{ props.title }</p>
			<p className={clsx(styles.content, props.currency ? styles.currency : null)}>{ props.content }</p>
		</div>
	)
}
