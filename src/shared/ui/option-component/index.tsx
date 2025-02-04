import styles from "./index.module.css"
import { useContext } from "react"
import { OptionContext, Option, ContextType } from "@/widgets/main/main-options/context"
import { motion, AnimatePresence } from "motion/react"

type Props = {
	title: string
	AddComponent: () => JSX.Element
	OpenComponent: () => JSX.Element
	addOption: Option
	openOption: Option
}


export const OptionComponent = ({ AddComponent, OpenComponent, title, addOption, openOption }: Props) => {
	const {currentOption, setOption} = useContext<ContextType>(OptionContext)

	const toggleOption = (newOption: Option) => {
		setOption((prev: Option): Option => {
			if (newOption === prev) return "close"
			return newOption
		})
	}

	return (
		<div className={ styles.optionBlock }>
			<div className={ styles.addBlock }>
				<button className={ styles.addImgCont } onClick={ () => toggleOption(addOption) }>
					<div className={ styles.addImg }></div>
				</button>
				<p className={ styles.title }>
					{ title }
				</p>
				<button onClick={ () => toggleOption(openOption) } className={ styles.btnCont }>
					{ currentOption === openOption && <div className={ styles.openBtn }></div> } { /* content close */}
					{ currentOption !== openOption && <div className={ styles.closeBtn }></div> } { /* content open */ }
				</button>
			</div>
			{/* { currentOption === addOption && <AddComponent /> }
			{ currentOption === openOption && <OpenComponent /> } */}
			{/* without animation */}
			<AnimatePresence mode={"sync"}>
				<motion.div
					key={currentOption}
					initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          style={{ background: 'transparent', overflow: "hidden" }}
				>
					{ currentOption === addOption && <AddComponent /> }
					{ currentOption === openOption && <OpenComponent /> }
				</motion.div>
			</AnimatePresence>
		</div>

	)
}
