import styles from "./index.module.css"

interface Props {
	url: string
	title: string
}

export const LoginLink = ({ url, title }: Props) => {
	return (
		<div className={styles.link}>
			<img src={url} />
			<p>{ title }</p>
		</div>
	)
}
