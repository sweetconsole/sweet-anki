import { type JSX } from "react"

export interface IAuthProviderProps {
	auth: boolean
	redirect?: string
	children?: JSX.Element[] | JSX.Element
	alternativeElement?: JSX.Element
}
