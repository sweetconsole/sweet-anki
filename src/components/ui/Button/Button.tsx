import { type FC } from "react"
import { type IButtonProps } from "./button.interface.ts"
import styles from "./Button.module.scss"

const Button: FC<IButtonProps> = ({ text, style, customStyles }) => {
	const getStylesButton = () => {
		if (style.toString() == "border") {
			return [styles.button_border, customStyles].join(" ")
		} else {
			return [styles.button_filled, customStyles].join(" ")
		}
	}

	return <button className={getStylesButton()}>{text}</button>
}

export default Button
