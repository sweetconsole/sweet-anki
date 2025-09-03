import { pagesConfig } from "../../config/pages.config.ts"

export type HeaderLink = {
	href: string
	title: string
}

export const links: Array<HeaderLink> = [
	{
		href: pagesConfig.rating,
		title: "Рейтинг"
	},
	{
		href: pagesConfig.cards,
		title: "Карточки"
	},
	{
		href: pagesConfig.categories,
		title: "Категории"
	}
]
