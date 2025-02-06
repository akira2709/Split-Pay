import styles from "./index.module.css";
import { ReactNode } from "react";

type Props = {
	children?: ReactNode,
	onClick: () => void
}

export const AddContainer = (props: Props) => {

  return (
  	<>
			<div className={ styles.splitContainer }>
				{ props.children }
	   	</div>
			<button className={ styles.addButton } onClick={ props.onClick }>
				Добавить
			</button>
   </>
  )
}
