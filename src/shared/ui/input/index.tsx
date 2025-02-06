import { ChangeEvent, memo } from "react"
import styles from "./index.module.css"
import clsx from "clsx"

type Props = {
	title: string
	placeholder?: string
	changeValue: (value: string) => void
}

export const Input = memo((props: Props) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		props.changeValue(event.target.value)
	}
	return (
		<div className={ styles.inputContainer }>
			<p className={ clsx(styles.field, "required-field") }>{ props.title }</p>
			<input type={"text"} className={styles.input} placeholder={props.placeholder}
			onChange={handleChange} />
		</div>
	)
})
