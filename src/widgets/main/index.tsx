import { OptionComponent } from "./option-component"
import styles from "./index.module.css"
import { AddDebt, AddDebtor, AddSplit, OpenDebtors, OpenDebts, OpenSplits } from "@/features/options"
import { useState } from "react"
import { type Option, OptionContext } from "./context"


export const MainOptions = () => {
	const [currentOption, setOption] = useState<Option>("close")

	return (
		<OptionContext.Provider value={{ currentOption: currentOption, setOption: setOption }}>
			<main className={ styles.options }>
				<OptionComponent title={"Сплит счета"} AddComponent={AddSplit} OpenComponent={OpenSplits} addOption={"addSplit"} openOption={"openSplits"}/>
				<OptionComponent title={"Должники"} AddComponent={AddDebtor} OpenComponent={OpenDebtors} addOption={"addDebtor"} openOption={"openDebtors"} />
				<OptionComponent title={"Долги"} AddComponent={AddDebt} OpenComponent={OpenDebts} addOption={"addDebt"} openOption={"openDebts"} />
			</main>
		</OptionContext.Provider>
	)
}
