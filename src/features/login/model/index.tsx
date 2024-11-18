import { atom } from "recoil";
import { LoginType } from "../types";


export const isLoginOpen = atom<LoginType>({
	key: "isLoginOpen",
	default: false
})
