import type { FC, ReactNode } from "react"
import { Link as RouterDomLink } from "react-router-dom"
import styles from "./Link.module.scss"

interface ILinkProps {
	children: ReactNode
	link: string
	style?: string
}

const Link: FC<ILinkProps> = ({ children, link, style }) => {
	return (
		<RouterDomLink className={[styles.link, style].join(" ")} to={link}>
			{children}
		</RouterDomLink>
	)
}

export default Link
