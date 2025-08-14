import type { FC, JSX } from "react"
import styles from "./List.module.scss"

interface IListProps {
	children: JSX.Element[]
	style?: string
}

const List: FC<IListProps> = ({ children, style }) => {
	return <ul className={[styles.list, style].join(" ")}>{children}</ul>
}

export default List
