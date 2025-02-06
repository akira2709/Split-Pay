import { Input } from "@/shared/ui/input";
import { AddContainer } from "@/shared/ui/add-container";
import { useState } from "react";


export const AddSplit = () => {
	const [place, setPlace] = useState<string>("")
	const [name, setName] = useState<string>("")

	const handleClick = () => {
		console.log(place, name)
	}

  return (
  	<>
   		<AddContainer onClick={handleClick}>
				<Input value={place} changeValue={setPlace} title={"Где"} placeholder={"Напиши название места"} />
				<Input value={name} changeValue={setName} title={"Имя"} placeholder={"Напиши имя того, кто платил"} />
     	</AddContainer>
   </>
  )
}
