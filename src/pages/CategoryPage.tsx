import { type FC, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { Card } from "../types/card.interface.ts"
import type { Category } from "../types/category.ts"
import { getCategoryCards } from "../services/cards.service.ts"
import { getCategory } from "../services/categories.service.ts"
import { pagesConfig } from "../config/pages.config.ts"
import { Header, CardView } from "../components"
import { BlockTitle, Container } from "../components/ui"

const CategoryPage: FC = () => {
	const [cards, setCards] = useState<Card[]>([])
	const [category, setCategory] = useState<Category | null>()
	const categoryName = useParams().name
	const navigate = useNavigate()

	const loadCards = async () => {
		if (categoryName) {
			const data = await getCategoryCards(categoryName)
			setCards(data)
		}
	}

	const loadCategory = async () => {
		if (categoryName) {
			const data = await getCategory(categoryName)

			if (!data) {
				navigate(pagesConfig.categories)
			}

			setCategory(data)
		}
	}

	useEffect(() => {
		loadCategory().catch(error =>
			console.error(`Error loading cards: ${error}`)
		)

		loadCards().catch(error => console.error(`Error loading cards: ${error}`))
	}, [])

	return (
		<>
			<Header />

			<Container>
				<section>
					<BlockTitle>Категория: {category?.title.toLowerCase()}</BlockTitle>

					<div
						style={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
							gap: "3rem"
						}}
					>
						{cards.map((card, index) => (
							<CardView key={index} {...card} />
						))}
					</div>
				</section>
			</Container>
		</>
	)
}

export default CategoryPage
