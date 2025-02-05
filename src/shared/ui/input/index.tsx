import { ChangeEvent, memo } from "react"
import styles from "./index.module.css"

interface Props {
	changeValue: (value: string) => void
	placeholder?: string
}

export const Input = memo((props: Props) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		props.changeValue(event.target.value)
	}
	return (
		<input type="text" className={styles.input} placeholder={props.placeholder}
		onChange={handleChange} />
	)
})
