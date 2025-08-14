import { type FC } from "react"
import { Link } from "react-router-dom"
import type { ICardProps } from "./cardView.interface.ts"
import styles from "./CardView.module.scss"

const CardView: FC<ICardProps> = ({ title, image }) => {
	return (
		<Link className={styles.card} to={`../card/${title.toLowerCase()}`}>
			<img className={styles.image} src={image} alt={title} />
			<p className={styles.title}>{title}</p>

			<div className={styles.hint}>
				<p className={styles.hint_text}>Пройти карточку</p>
			</div>
		</Link>
	)
}

export default CardView
