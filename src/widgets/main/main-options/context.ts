import { Dispatch, SetStateAction, createContext } from "react"

export type Option = "addSplit" | "addDebt" | "addDebtor" | "openSplits" | "openDebts" | "openDebtors" | "close"
export interface ContextType {
	currentOption: Option,
	setOption: Dispatch<SetStateAction<Option>>
}
export const OptionContext = createContext<ContextType>({currentOption: "close", setOption: () => {}})
