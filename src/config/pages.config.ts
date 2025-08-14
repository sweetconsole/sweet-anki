const baseUrl = "/"

class PagesConfig {
	home = `${baseUrl}`
	login = `${baseUrl}login/`
	register = `${baseUrl}register/`
	categories = `${baseUrl}categories/`
	category = `${baseUrl}category/:name/`
}

export const pagesConfig = new PagesConfig()
