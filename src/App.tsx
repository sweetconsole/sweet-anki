import { type FC } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { pagesConfig } from "./config/pages.config.ts"
import {
	HomePage,
	RegisterPage,
	LoginPage,
	CategoriesPage,
	CategoryPage,
	UserAgreementPage,
	CardsPage,
	CardPage
} from "./pages"
import "./assets/styles/fonts.scss"
import "./assets/styles/general.scss"

const App: FC = () => {
	return (
		<>
			<Routes>
				<Route path={pagesConfig.home} element={<HomePage />} />
				<Route path={pagesConfig.login} element={<LoginPage />} />
				<Route path={pagesConfig.register} element={<RegisterPage />} />

				<Route path={pagesConfig.rating} element={<HomePage />} />
				<Route path={pagesConfig.profile} element={<HomePage />} />

				<Route path={pagesConfig.card} element={<CardPage />} />
				<Route path={pagesConfig.cards} element={<CardsPage />} />
				<Route path={pagesConfig.categories} element={<CategoriesPage />} />
				<Route path={pagesConfig.category} element={<CategoryPage />} />
				<Route
					path={pagesConfig.userAgreement}
					element={<UserAgreementPage />}
				/>

				<Route path="*" element={<Navigate to={pagesConfig.home} />} />
			</Routes>

			<SpeedInsights />
			<Analytics />
		</>
	)
}

export default App
