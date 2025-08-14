import {
	collection,
	getDoc,
	getDocs,
	doc,
	query,
	where
} from "firebase/firestore"
import { type Card } from "../types/card.interface.ts"
import { firestore } from "../firebase.ts"

export const getCard = async (id: string): Promise<Card | null> => {
	try {
		const document = await getDoc(doc(firestore, "cards", id))

		if (document.exists()) {
			return { id: document.id, ...document.data() } as Card
		} else {
			return null
		}
	} catch (error) {
		console.error(`Error getting card ${error}`)
		throw error
	}
}

export const getCategoryCards = async (category: string): Promise<Card[]> => {
	try {
		const documentsQuery = query(
			collection(firestore, "cards"),
			where("category", "==", category)
		)
		const snapshot = await getDocs(documentsQuery)
		return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Card)
	} catch (error) {
		console.error(`Error getting cards ${error}`)
		throw error
	}
}

export const getCards = async (): Promise<Card[]> => {
	try {
		const documentsQuery = query(collection(firestore, "cards"))
		const snapshot = await getDocs(documentsQuery)
		return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Card)
	} catch (error) {
		console.error(`Error getting cards ${error}`)
		throw error
	}
}
