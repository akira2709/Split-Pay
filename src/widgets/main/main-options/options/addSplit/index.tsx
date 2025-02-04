import styles from "./index.module.css";
import { Input } from "@/shared/ui/input";
import clsx from "clsx";
import { useState } from "react";
import { AddButton } from "@/shared/ui/add-button";


export const AddSplit = () => {
	const [place, setPlace] = useState<string>("")
	const [name, setName] = useState<string>("")

	const handleClick = () => {
		console.log(place, name)
	}

  return (
  	<>
			<div className={ styles.splitContainer }>
				<div className={ styles.inputContainer }>
					<p className={ clsx(styles.field, "required-field") }>Где</p>
					<Input changeValue={setPlace}/>
				</div>
				<div className={ styles.inputContainer }>
					<p className={ clsx(styles.field, "required-field") }>Имя</p>
					<Input changeValue={setName}/>
				</div>
	   	</div>
			<AddButton onClick={handleClick} />
   </>
  )
}
