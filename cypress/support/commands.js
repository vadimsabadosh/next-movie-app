Cypress.Commands.add('requestGraphQl', (queryName) => {
	cy.request({
		url: 'https://radiant-oasis-74595.herokuapp.com/graphql',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			query: queryName
		},
		failOnStatusCode: false
	})
})
