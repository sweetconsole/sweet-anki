import { collection, getDoc, getDocs, doc, query } from "firebase/firestore"
import { type Category } from "../types/category.ts"
import { firestore } from "../firebase.ts"

export const getCategory = async (id: string): Promise<Category | null> => {
	try {
		const document = await getDoc(doc(firestore, "categories", id))

		if (document.exists()) {
			return { id: document.id, ...document.data() } as Category
		} else {
			return null
		}
	} catch (error) {
		console.error(`Error getting Category ${error}`)
		throw error
	}
}

export const getCategories = async (): Promise<Category[]> => {
	try {
		const documentsQuery = query(collection(firestore, "categories"))
		const snapshot = await getDocs(documentsQuery)
		return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Category)
	} catch (error) {
		console.error(`Error getting Categories ${error}`)
		throw error
	}
}
