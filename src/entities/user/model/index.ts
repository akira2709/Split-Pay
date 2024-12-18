import { atom } from "recoil"
import { User } from "../types"

export const userState = atom<User | null>({
	key: "user",
	default: null,
})
