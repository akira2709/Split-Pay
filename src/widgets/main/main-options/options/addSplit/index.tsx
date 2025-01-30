import styles from "./index.module.css";
import clsx from "clsx";

export const AddSplit = () => {
  return (
		<div className={ styles.splitContainer }>
			<div className={ styles.inputContainer }>
				<p className={ clsx(styles.field, "required-field") }>Где</p>
				<input type="text" className={ styles.input } />
			</div>
			<div className={ styles.inputContainer }>
				<p className={ clsx(styles.field, "required-field") }>Имя</p>
				<input type="text" className={ styles.input } />
			</div>
   	</div>
  )
}
