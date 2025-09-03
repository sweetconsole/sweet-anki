import { type FC } from "react"
import { Link, useLocation } from "react-router-dom"
import { pagesConfig } from "../../config/pages.config.ts"
import { Container, Button } from "../ui"
import { useAuth } from "../../hooks/useAuth.ts"
import { links } from "./header.data.ts"
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
						{links.map((link, index) => (
							<Link
								className={getStylesLink(link.href)}
								to={link.href}
								key={index}
							>
								{link.title}
							</Link>
						))}

						{user ? (
							<>
								<Link to={pagesConfig.profile}>
									<Button
										text="Профиль"
										style="border"
										customStyles={styles.button}
									/>
								</Link>
							</>
						) : (
							<>
								<Link to={pagesConfig.login}>
									<Button
										text="Войти"
										style="border"
										customStyles={styles.button}
									/>
								</Link>
								<Link to={pagesConfig.register}>
									<Button
										text="Создать аккаунт"
										style="filled"
										customStyles={styles.button}
									/>
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
