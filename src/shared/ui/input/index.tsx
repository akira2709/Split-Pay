import { ChangeEvent, memo } from "react"
import styles from "./index.module.css"
import clsx from "clsx"

type Props = {
	title: string
	placeholder?: string
	value: string | number
	changeValue: (value: string) => void
	type?: "number" | "string" | "date"
}

export const Input = memo((props: Props) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value
		switch (props.type) {
			case "number":
				if (/^\d*$/.test(inputValue)) {
					props.changeValue(inputValue)
				}
				break
			default:
				props.changeValue(inputValue)
				break
		}
	}
	return (
		<div className={ styles.inputContainer }>
			<p className={ clsx(styles.field, "required-field") }>{ props.title }</p>
			<input
				type={"text"}
				className={styles.input}
				placeholder={props.placeholder}
				onChange={handleChange}
				value={ props.value }
			/>
		</div>
	)
})
