const { ApolloServer, gql, MockList } = require('apollo-server')
const movies = require('./movies')

const typeDefs = gql`
	type User {
		id: String
		token: String
		email: String
		firstName: String
		lastName: String
		watched_films: [Movie]
		wish_list: [Movie]
	}
	type updateUser {
		id: String
		token: String
		email: String
		firstName: String
		lastName: String
	}
	type Movie {
		id: ID
		backdrop_path: String
		original_title: String
		overview: String
		popularity: String
		poster_path: String
		release_date: String
		title: String
		vote_average: String
	}
	type getAllMovies {
		id: Int
		backdrop_path: String
		original_title: String
		overview: String
		popularity: String
		poster_path: String
		release_date: String
		title: String
		vote_average: String
	}
	type Mutation {
		registerUser(
			firstName: String!
			lastName: String!
			email: String!
			password: String!
			confirmPassword: String!
		): User
		loginUser(email: String!, password: String!): User
		updateUser(firstName: String, lastName: String, email: String): updateUser
	}
	type Query {
		getMovie(id: ID!): Movie
		getAllMovies: [Movie]
	}
	schema {
		query: Query
		mutation: Mutation
	}
`

const mocks = {
	Movie: () => ({
		backdrop_path: '/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg',
		id: 550988,
		original_title: 'Free Guy',
		overview:
			'У сотрудника крупного банка всё идёт по накатанной, пока однажды он не выясняет, что окружающий его мир — это часть огромной видеоигры, а сам он в ней — всего лишь второстепенный персонаж. Хватит ли у него духу переписать свой код, обратить на себя внимание прекрасной девушки и, наконец, спасти мир? Одним словом, получится ли из него главный герой?',
		popularity: 7783.635,
		poster_path: '/qJZ3UeKAOgz2kFVJPZZFzLtn1Qk.jpg',
		release_date: '2021-08-11',
		title: 'Не Главный герой',
		vote_average: 7.9
	}),
	getAllMovies: () => ({
		backdrop_path: '/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg',
		id: 550988,
		original_title: 'Free Guy',
		overview:
			'У сотрудника крупного банка всё идёт по накатанной, пока однажды он не выясняет, что окружающий его мир — это часть огромной видеоигры, а сам он в ней — всего лишь второстепенный персонаж. Хватит ли у него духу переписать свой код, обратить на себя внимание прекрасной девушки и, наконец, спасти мир? Одним словом, получится ли из него главный герой?',
		popularity: 7783.635,
		poster_path: '/qJZ3UeKAOgz2kFVJPZZFzLtn1Qk.jpg',
		release_date: '2021-08-11',
		title: 'Не Главный герой',
		vote_average: 7.9
	}),
	User: () => ({
		id: 'String',
		token: 'String',
		email: 'String',
		firstName: 'String',
		lastName: 'String',
		watched_films: [
			{
				id: 'String',
				backdrop_path: 'String',
				original_title: 'String',
				overview: 'String'
			}
		],
		wish_list: [
			{
				id: 'String',
				backdrop_path: 'String',
				original_title: 'String',
				overview: 'String'
			}
		]
	})
}

const server = new ApolloServer({
	typeDefs,
	mocks
})

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at {url}`)
})
