import styles from "./index.module.css"
import { OpenContaier } from "@/shared/ui/open-container"

export const OpenSplits = () => {
	const splits = [
		{
			date: "12 / 02 / 2026",
			time: "22:22"
		},
		{
			date: "12 / 02 / 2026",
			time: "22:22"
		},
		{
			date: "12 / 02 / 2026",
			time: "22:22"
		},
		{
			date: "12 / 02 / 2026",
			time: "22:22"
		},
	]
	return (
		<OpenContaier>
			<div className={ styles.title }>
				<p>Дата события</p>
				<p>Время</p>
			</div>
			<div className={ styles.splits }>
				{ splits.map((split, index) => {
					return (
						<div key={index} className={styles.split}>
							<div className={ styles.time }>
								<p>{ split.date }</p>
								<p>{ split.time }</p>
							</div>
							<div className={ styles.options }>
								<button className={ styles.open }></button>
								<button className={ styles.delete }></button>
							</div>
						</div>
					)
				}) }
			</div>
		</OpenContaier>
	)
}
