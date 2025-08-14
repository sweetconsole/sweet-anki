import { type FC } from "react"
import { Header, Categories } from "../components"
import { BlockTitle, Container } from "../components/ui"

const CategoriesPage: FC = () => {
	return (
		<>
			<Header />

			<Container>
				<BlockTitle text="Категории" />

				<Categories />
			</Container>
		</>
	)
}

export default CategoriesPage
