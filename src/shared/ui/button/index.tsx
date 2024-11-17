import { ReactNode } from "react"
import styles from "./index.module.css"

interface Props {
	children?: ReactNode
	onClick?: () => void
}

export const Button = ({ children, onClick }: Props) => {
	return <button onClick={onClick} className={styles.button}>{ children }</button>
}
