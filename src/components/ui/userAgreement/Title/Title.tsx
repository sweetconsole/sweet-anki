import type { FC, ReactNode } from "react"
import styles from "./Title.module.scss"

interface ITitleProps {
	children: ReactNode
	style?: string
}

const Title: FC<ITitleProps> = ({ children, style }) => {
	return <h1 className={[styles.title, style].join(" ")}>{children}</h1>
}

export default Title
