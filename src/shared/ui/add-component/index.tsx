import styles from "./index.module.css"
import { useState } from "react"

interface Props {
	title: string
}

export const AddComponent = (props: Props) => {
	const [isOpen, setOpen] = useState(false)

	const toggleOpen = () => {
		setOpen((prev) => !prev)
	}

	return (
		<div className={ styles.addBlock }>
			<button className={ styles.addImgCont }>
				<div className={ styles.addImg }></div>
			</button>
			<p className={ styles.title }>
				{ props.title }
			</p>
			<button onClick={toggleOpen} className={styles.btnCont}>
				{ isOpen && <div className={styles.openBtn}></div> }
				{ !isOpen && <div className={ styles.closeBtn }></div> }
			</button>
		</div>
	)
}
