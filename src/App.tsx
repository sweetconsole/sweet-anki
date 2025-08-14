import { type FC } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { pagesConfig } from "./config/pages.config.ts"
import { HomePage, RegisterPage, LoginPage } from "./pages"
import "./assets/styles/fonts.scss"
import "./assets/styles/global.scss"

const App: FC = () => {
	return (
		<>
			<Routes>
				<Route path={pagesConfig.home} element={<HomePage />} />
				<Route path={pagesConfig.login} element={<LoginPage />} />
				<Route path={pagesConfig.register} element={<RegisterPage />} />

				<Route path='*' element={<Navigate to={pagesConfig.register} />} />
			</Routes>
		</>
	)
}

export default App
