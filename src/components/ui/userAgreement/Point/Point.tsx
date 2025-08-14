import type { FC, ReactNode } from "react"
import styles from "./Point.module.scss"

interface IPointProps {
	children: ReactNode
	style?: string
}

const Point: FC<IPointProps> = ({ children, style }) => {
	return <li className={[styles.point, style].join(" ")}>• {children}</li>
}

export default Point
