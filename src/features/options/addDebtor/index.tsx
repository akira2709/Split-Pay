import { Input } from "@/shared/ui/input";
import { AddContainer } from "@/shared/ui/add-container";
import { useState } from "react";


export const AddDebtor = () => {
	const [debtorName, setDebtorName] = useState<string>("")
	const [deadline, setDeadline] = useState<string>("")
	const [total, setTotal] = useState<string>("")

	const handleClick = () => {
		console.log(debtorName, deadline, total)
	}

  return (
  	<>
   		<AddContainer onClick={handleClick}>
				<Input value={debtorName} changeValue={setDebtorName} title={"Кто"} placeholder={"Напиши имя и фамилию"} />
				<Input value={deadline} changeValue={setDeadline} type={"date"} title={"Край сдачи"} placeholder={"00 / 00 / 0000"} />
				<Input value={total} changeValue={setTotal} type={"number"} title={"Сумма, ₽"} placeholder={"Напиши сумму долга"} />
     	</AddContainer>
   </>
  )
}
