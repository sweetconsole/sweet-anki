const baseUrl = "/"

class PagesConfig {
	home = `${baseUrl}`
	login = `${baseUrl}login/`
	register = `${baseUrl}register/`
	rating = `${baseUrl}rating/`
	profile = `${baseUrl}profile/`
	cards = `${baseUrl}cards/`
	card = `${baseUrl}card/:title/`
	categories = `${baseUrl}categories/`
	category = `${baseUrl}category/:name/`
	userAgreement = `${baseUrl}user-agreement/`
}

export const pagesConfig = new PagesConfig()
