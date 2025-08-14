import type { FC, ReactNode } from "react"
import styles from "./Subtitle.module.scss"

interface ISubtitleProps {
	children: ReactNode
	style?: string
}

const Subtitle: FC<ISubtitleProps> = ({ children, style }) => {
	return <h2 className={[styles.subtitle, style].join(" ")}>{children}</h2>
}

export default Subtitle
