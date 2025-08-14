import { type FC } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../firebase.ts"
import { pagesConfig } from "../../config/pages.config.ts"
import { useAuth } from "../../hooks/useAuth.ts"
import {
	validEmail,
	validName,
	validPassword
} from "../../config/valid.config.ts"
import { Field } from "../../components/ui"
import type { IRegisterForm } from "./form.interface.ts"
import styles from "./AuthPages.module.scss"

const RegisterPage: FC = () => {
	const { register, handleSubmit, formState } = useForm<IRegisterForm>({
		mode: "onChange"
	})
	const navigate = useNavigate()

	const nameError = formState.errors["name"]?.message
	const emailError = formState.errors["email"]?.message
	const passwordError = formState.errors["password"]?.message

	const onSubmit: SubmitHandler<IRegisterForm> = async data => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				data["email"],
				data["password"]
			)
			await updateProfile(userCredential.user, { displayName: data["name"] })
			navigate(pagesConfig.home)
		} catch (error) {
			console.error("Error registering user:", error)
		}
	}

	if (useAuth().user != null) {
		navigate(pagesConfig.home)
	}

	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h1 className={styles.title}>Регистрация</h1>

				<Field
					label="Введите свое имя"
					placeholder="Иван"
					type="text"
					error={nameError}
					{...register("name", {
						required: "Это поле обязательное",
						pattern: { value: validName, message: "Некорректное имя" }
					})}
				/>

				<Field
					label="Введите электронную почту"
					placeholder="youremail@example.com"
					type="email"
					error={emailError}
					{...register("email", {
						required: "Это поле обязательное",
						pattern: { value: validEmail, message: "Неверный формат почты" }
					})}
				/>

				<Field
					label="Введите электронную почту"
					placeholder="пароль"
					type="password"
					error={passwordError}
					{...register("password", {
						required: "Это поле обязательное",
						pattern: {
							value: validPassword,
							message:
								"Пароль должен иметь минимум:\n● 6 символов\n● один специальный символ (!@#$%^&*=+-_)\n● одну заглавную и строчную букву"
						}
					})}
				/>

				<button
					className={styles.button}
					type="submit"
					disabled={!formState.isValid}
				>
					Зарегистрироваться
				</button>

				<p className={styles.text}>
					Уже зарегистрированы?{" "}
					<Link className={styles.link} to="../login/">
						Войдите
					</Link>
				</p>
			</form>
		</div>
	)
}

export default RegisterPage
