import { type FC, useEffect, useState } from "react"
import { getCategories } from "../../services/categories.service.ts"
import type { Category } from "../../types/category.ts"
import styles from "./Categories.module.scss"
import { Link } from "react-router-dom"

const Categories: FC = () => {
	const [categories, setCategories] = useState<Category[]>([])

	const loadCategories = async () => {
		const data = await getCategories()
		setCategories(data)
	}

	useEffect(() => {
		loadCategories().catch(error =>
			console.error(`Error loading categories: ${error}`)
		)
	}, [])

	return (
		<ul className={styles.categories}>
			{categories.map((category, index) => (
				<li key={index}>
					<Link className={styles.category} to={`../category/${category.id}`}>
						<img
							className={styles.category_icon}
							src={category.icon}
							alt={category.title}
						/>
						<p className={styles.category_title}>{category.title}</p>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Categories
