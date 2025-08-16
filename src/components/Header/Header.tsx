import { type FC } from "react"
import { Link, useLocation } from "react-router-dom"
import { pagesConfig } from "../../config/pages.config.ts"
import { Container, Button } from "../ui"
import { useAuth } from "../../hooks/useAuth.ts"
import styles from "./Header.module.scss"

const Header: FC = () => {
	const user = useAuth()
	const location = useLocation()

	const getStylesLink = (link: string) => {
		if (location.pathname == link) {
			return [styles.link, styles.link_active].join(" ")
		} else {
			return styles.link
		}
	}

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.block}>
					<Link className={styles.logo} to={pagesConfig.home}>
						Anki
					</Link>

					<nav className={styles.navigation}>
						<Link
							className={getStylesLink(pagesConfig.rating)}
							to={pagesConfig.rating}
						>
							Рейтинг
						</Link>
						<Link
							className={getStylesLink(pagesConfig.cards)}
							to={pagesConfig.cards}
						>
							Карточки
						</Link>
						<Link
							className={getStylesLink(pagesConfig.categories)}
							to={pagesConfig.categories}
						>
							Категории
						</Link>

						{user ? (
							<>
								<Link to={pagesConfig.profile}>
									<Button text="Профиль" style="border" />
								</Link>
							</>
						) : (
							<>
								<Link to={pagesConfig.login}>
									<Button text="Войти" style="border" />
								</Link>
								<Link to={pagesConfig.register}>
									<Button text="Создать аккаунт" style="filled" />
								</Link>
							</>
						)}
					</nav>
				</div>
			</Container>
		</header>
	)
}

export default Header
