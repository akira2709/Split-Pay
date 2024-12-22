import { AddComponent } from "@/shared/ui/add-component"
import styles from "./index.module.css"

export const MainOptions = () => {


	return (
		<main className={styles.options}>
			<AddComponent title={"Сплит счета"}></AddComponent>
			<AddComponent title={"Должники"}></AddComponent>
			<AddComponent title={"Долги"}></AddComponent>
		</main>
	)
}
