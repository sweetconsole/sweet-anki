import type { FC, ReactNode } from "react"
import styles from "./Text.module.scss"

interface ITextProps {
	children: ReactNode
	style?: string
}

const Text: FC<ITextProps> = ({ children, style }) => {
	return <p className={[styles.text, style].join(" ")}>{children}</p>
}

export default Text
