import { type FC } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Field } from "../../components/ui/"
import { auth } from "../../firebase.ts"
import { useAuth } from "../../hooks/useAuth.ts"
import { pagesConfig } from "../../config/pages.config.ts"
import { validEmail, validPassword } from "../../config/valid.config.ts"
import type { ILoginForm } from "./form.interface.ts"
import styles from "./AuthPages.module.scss"

const LoginPage: FC = () => {
	const { register, handleSubmit, formState } = useForm<ILoginForm>({
		mode: "onChange"
	})
	const navigate = useNavigate()

	const emailError = formState.errors["email"]?.message
	const passwordError = formState.errors["password"]?.message

	const onSubmit: SubmitHandler<ILoginForm> = async data => {
		try {
			await signInWithEmailAndPassword(auth, data["email"], data["password"])
			navigate(pagesConfig.home)
		} catch (error) {
			console.error("Error logging in:", error)
		}
	}

	if (useAuth().user != null) {
		navigate(pagesConfig.home)
	}

	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h1 className={styles.title}>Авторизация</h1>

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
								"Пароль должен иметь минимум 6 символов из них:\n● один специальный символ (!@#$%^&*=+-_)\n● одну заглавную и строчную букву\n● одну цифру"
						}
					})}
				/>

				<button
					className={styles.button}
					type="submit"
					disabled={!formState.isValid}
				>
					Войти
				</button>

				<p className={styles.text}>
					Нет учетной записи?{" "}
					<Link className={styles.link} to="../register/">
						Создать аккаунт
					</Link>
				</p>
			</form>
		</div>
	)
}

export default LoginPage
