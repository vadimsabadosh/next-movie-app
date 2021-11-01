import { hasOperationName } from '../utils/graphql-helper'
import movies from '../fixtures/movies.json'

context('Tests', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('modifies __NEXT_DATA__ on navigation', () => {
		cy.intercept('_next/data/development/movies.json', (req) => {
			// prevent the server from responding with 304
			// without an actual object
			delete req.headers['if-none-match']
			return req.continue((res) => {
				console.log(': res', res)
				// let's use the same test greeting
				res.body.pageProps.movies = movies
			})
		})
		cy.get('[href="/movies"]').click()
		cy.location('pathname').should('equal', '/movies')
	})

	it('should verify login data', () => {
		cy.visit('/movies/451048')

		cy.intercept('POST', 'https://radiant-oasis-74595.herokuapp.com/graphql', (req) => {
			if (hasOperationName(req, 'loginUser')) {
				// Declare the alias from the initial intercept in the beforeEach
				req.alias = 'gqlloginUserMutation'

				// Set req.fixture or use req.reply to modify portions of the response
				req.reply((res) => {
					res.body.data.loginUser = {
						email: 'mocked@example.com',
						firstName: 'mocked@example.com',
						id: '615637e6fd3bf49c72fd9f67',
						lastName: 'mocked@example.com',
						token:
							'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJkZTQ1ZjVhZGViN2Q3NzE3NzVhZSIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJmaXJzdE5hbWUiOiLQotC10YHRgtC-0LLQvtC1INC40LzRjyIsImxhc3ROYW1lIjoi0KLQtdGB0YLQvtCy0LDRjyDRhNCw0LzQuNC70LjRjyIsImlhdCI6MTYzNTgwNDYzOCwiZXhwIjoxNjM1ODA4MjM4fQ.rx6e_cO2E6eyVeLfeL3wbxMgEjqViV4mNFmzH3Yu9IA',
						watched_films: [],
						wish_list: []
					}
				})
			}
		})
		cy.contains('Добавить в просмотренные').click()
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
				cy.wait('@gqlloginUserMutation')
				cy.get('[data-cy="account-btn"]').should('contain', 'Аккаунт').click()
			})
		cy.location('pathname').should('equal', '/profile')
		cy.get('[data-cy="name"]').should('contain', 'mocked@example.com')
		cy.get('[data-cy="lastName"]').should('contain', 'mocked@example.com')
		cy.get('[data-cy="email"]').should('contain', 'mocked@example.com')
	})
})
