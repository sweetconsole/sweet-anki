import { type FC, useEffect, useState } from "react"
import { CardView, Header } from "../../components"
import { BlockTitle, Container } from "../../components/ui"
import type { Card } from "../../types/card.interface.ts"
import { getCards } from "../../services/cards.service.ts"

const CardsPage: FC = () => {
	const [cards, setCards] = useState<Card[]>([])

	const loadCards = async () => {
		const data = await getCards()
		setCards(data)
	}

	useEffect(() => {
		loadCards().catch(error => console.error(`Error loading cards: ${error}`))
	}, [])

	return (
		<>
			<Header />

			<Container>
				<BlockTitle>Список карточек</BlockTitle>

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
			</Container>
		</>
	)
}

export default CardsPage
