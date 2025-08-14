import { useEffect, useState } from "react"
import { onAuthStateChanged, type User } from "firebase/auth"
import { auth } from "../firebase.ts"

export const useAuth = () => {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		return onAuthStateChanged(auth, user => {
			setUser(user)
			setLoading(false)
		})
	}, [])

	return { user, loading }
}
