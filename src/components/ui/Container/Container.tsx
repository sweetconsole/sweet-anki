import { type FC } from "react"
import styles from "./Container.module.scss"
import type { IContainerProps } from "./container.interface.ts"

const Container: FC<IContainerProps> = ({ children, style }) => {
	return <div className={[styles.container, style].join(" ")}>{children}</div>
}

export default Container
