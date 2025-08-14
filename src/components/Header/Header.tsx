import { type FC } from "react"
import { Link } from "react-router-dom"
import { pagesConfig } from "../../config/pages.config.ts"
import { Container } from "../ui"
import styles from "./Header.module.scss"

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.block}>
					<Link className={styles.logo} to={pagesConfig.home}>
						Anki
					</Link>

					<nav className={styles.navigation}>
						<Link className={styles.link} to={pagesConfig.cards}>
							Карточки
						</Link>
						<Link className={styles.link} to={pagesConfig.categories}>
							Категории
						</Link>
						<Link className={styles.link} to={pagesConfig.home}>
							Профиль
						</Link>
						<Link className={styles.link} to={pagesConfig.login}>
							Войти
						</Link>
						<Link className={styles.link} to={pagesConfig.register}>
							Зарегистрироваться
						</Link>
					</nav>
				</div>
			</Container>
		</header>
	)
}

export default Header
