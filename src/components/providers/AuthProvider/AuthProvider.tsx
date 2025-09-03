import { type FC } from "react"
import type { IAuthProviderProps } from "./authProvider.interface.ts"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth.ts"

const AuthProvider: FC<IAuthProviderProps> = ({
	auth,
	redirect,
	children,
	alternativeElement
}) => {
	const navigate = useNavigate()
	const user = useAuth().user

	const getAuth = () => {
		if (user) {
			return true
		} else {
			return false
		}
	}

	if (getAuth() != auth && redirect) navigate(redirect)

	return (
		<>
			{getAuth() != auth ? (
				{ children }
			) : (
				<> {alternativeElement ? { alternativeElement } : null} </>
			)}
		</>
	)
}

export default AuthProvider
