import styles from "./index.module.css";
import { ReactNode } from "react";

type Props = {
	children?: ReactNode,
}

export const OpenContaier = (props: Props) => {

  return (
  	<>
			<div className={ styles.splitContainer }>
				{ props.children }
	   	</div>
   </>
  )
}
