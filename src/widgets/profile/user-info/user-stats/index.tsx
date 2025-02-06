import styles from "./index.module.css"
import { UserInfoBlock } from "./user-info-block"

export const UserStats = () => {
	const stats = {
		debtors: "56",
		debts: "622",
		splits: "124",
		shifts: "579 081"
	}
	return (
		<div className={styles.stats}>
			<UserInfoBlock title={"Всего должников:"} content={ stats.debtors } />
			<span>
				<UserInfoBlock title={"Всего сплитов:"} content={ stats.splits } />
				<UserInfoBlock title={"Всего долгов:"} content={ stats.debts } />
			</span>
			<UserInfoBlock title={"Всего переведено:"} content={stats.shifts} currency={"₽"} />
		</div>
	)
}
