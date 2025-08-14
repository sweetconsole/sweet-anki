import { type FC } from "react"
import { Header } from "../components"
import { BlockTitle, Container } from "../components/ui"

const HomePage: FC = () => {
	return (
		<>
			<Header />

			<Container>
				<BlockTitle text="Главная страница" />
			</Container>
		</>
	)
}

export default HomePage
