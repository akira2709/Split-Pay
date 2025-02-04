import styles from "./index.module.css"

type Props = {
	onClick?: () => void
}

export const AddButton = (props: Props) => {
	return (
		<button className={ styles.addButton } onClick={ props.onClick }>
			Добавить
		</button>
	)
}
