import { type FC, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { type SubmitHandler, useForm } from "react-hook-form"
import { getCard } from "../../../services/cards.service.ts"
import { type Card } from "../../../types/card.interface.ts"
import { pagesConfig } from "../../../config/pages.config.ts"
import { validRussianWord } from "../../../config/validation.config.ts"
import { Header } from "../../../components"
import { Container } from "../../../components/ui"
import styles from "./CardPage.module.scss"

export interface IAnswerForm {
	answer: string
}

const CardPage: FC = () => {
	const [card, setCard] = useState<Card | null>()
	const cardName = useParams().title
	const { register, handleSubmit, formState } = useForm<IAnswerForm>({
		mode: "onChange"
	})
	const errorAnswer = formState.errors["answer"]?.message
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<IAnswerForm> = async data => {
		console.log(data.answer)
	}

	const loadCard = async () => {
		if (cardName) {
			const data = await getCard(cardName)

			if (!data) {
				navigate(pagesConfig.cards)
			}

			setCard(data)
		}
	}

	useEffect(() => {
		loadCard().catch(error => console.error(`Error loading card: ${error}`))
	}, [])

	return (
		<>
			<Header />

			<Container style={styles.block}>
				<img className={styles.image} src={card?.image} alt="Загрузка..." />
				<h1 className={styles.title}>{card?.title}</h1>

				<form className={styles.block} onSubmit={handleSubmit(onSubmit)}>
					<label className={styles.label}>
						Введите перевод:
						<input
							className={
								errorAnswer
									? [styles.input, styles.input_error].join(" ")
									: styles.input
							}
							autoComplete="off"
							placeholder="Ваш ответ..."
							{...register("answer", {
								required: "Вы не ввели ответ",
								pattern: {
									value: validRussianWord,
									message:
										"Ответ может состоять только из русского алфавита и без пробелов!"
								}
							})}
						/>
						{errorAnswer && <p className={styles.error}>{errorAnswer}</p>}
					</label>

					<button
						className={styles.button}
						type="submit"
						disabled={!formState.isValid}
					>
						Проверить
					</button>
				</form>
			</Container>
		</>
	)
}

export default CardPage
