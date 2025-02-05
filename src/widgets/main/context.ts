import { Dispatch, SetStateAction, createContext } from "react"

export type AddOption = "addSplit" | "addDebt" | "addDebtor"
type OpenOption = "openSplits" | "openDebts" | "openDebtors"
export type Option = AddOption | OpenOption | "close"

export type ContextType = {
	currentOption: Option,
	setOption: Dispatch<SetStateAction<Option>>
}

export const OptionContext = createContext<ContextType>({currentOption: "close", setOption: () => {}})
