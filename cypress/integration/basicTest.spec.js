/// <reference types="cypress" />

describe('first test kit', () => {
	beforeEach(() => {
		cy.visit('/')
		cy.get('#movies').find('h2').should('contain', 'Популярные фильмы')
	})

	it('login test', () => {
		cy.get('[data-cy="login-button"]').click()
		cy.get('[data-cy="login-title"]').should('contain', 'Авторизация')
		cy.get('[data-cy="modal"]')
			.find('form')
			.then((form) => {
				cy.wrap(form)
					.find('[placeholder="Email Адресс"]')
					.clear()
					.type('admin@example.com')
					.should('have.value', 'admin@example.com')
				cy.wrap(form)
					.find('[placeholder="Пароль"]')
					.clear()
					.type('test1234')
					.should('have.value', 'test1234')
				cy.wrap(form).submit()
				cy.wait(5000)
				cy.get('[data-cy="account-btn"]').should('contain', 'Аккаунт')
			})
	})
	it('movies page test', () => {
		cy.get('[data-cy="menu-list"]').contains('Фильмы').click()
		cy.location('pathname', { timeout: 5000 }).should('include', '/movies')
		cy.get('h2').contains('Фильмы').should('contain', 'Фильмы')
		cy.get('[title="Главный герой"]').parent().click()
		cy.location('pathname', { timeout: 5000 }).should('include', '/movies/550988')
	})
	it('register window test', () => {
		cy.get('[data-cy="register-trigger"]').contains('Зарегистрироваться').click()
		cy.get('[data-cy="register"]').should('contain', 'Регистрация')
	})
	it('expectation of movies query ', () => {
		const movieQuery = `
		query getAllMovies {
			getAllMovies {
				id
				backdrop_path
				original_title
				overview
				popularity
				poster_path
				release_date
				title
				vote_average
			}
		}
		`
		cy.requestGraphQl(movieQuery).then((response) => {
			expect(response.body.data.getAllMovies[0].id).to.be.eq('550988')
		})
	})
})
