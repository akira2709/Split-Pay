import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useRecoilState } from "recoil"
import { userState } from "@/entities/user/model"
import httpClient from "@/shared/api/http-client"
import { isLoginOpen } from "@/features/login/model"

export const MainPage = () => {
	const [user, setUser] = useRecoilState(userState)
	const [, setOpen] = useRecoilState(isLoginOpen)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const {data} = await httpClient.get('/user')
				setUser(data)
			} catch (e) {
				if (e === 401) {
						setOpen(true)
				}
			}
		}
		fetchData()
	}, [])
	return (
		<>
			main page
			<Outlet />
		</>
	)
}
