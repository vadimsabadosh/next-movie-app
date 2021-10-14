import { ApolloClient, ApolloLink, HttpLink } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import { setContext } from '@apollo/client/link/context'
const windowContext = typeof window !== 'undefined'

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
					locations
				)}, Path: ${path}`
			)
		)
	}
	if (networkError) {
		console.log(`[Network error]: ${networkError}`)
	}
})
const retryLink = new RetryLink({
	attempts: (count, operation, error) => {
		if (!!error && count <= 3) {
			return !!error
		}
		return false
	},
	delay: (count, operation, error) => count * 1000 * Math.random()
})

const authLink = setContext((_, { headers }) => {
	if (windowContext) {
		const token = window.localStorage.getItem('token')
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : ''
			}
		}
	}
})

const httpLink = new HttpLink({
	uri: process.env.NEXT_PUBLIC_API_URL
	// uri: 'https://radiant-oasis-74595.herokuapp.com/graphql'
})

const link = ApolloLink.from([errorLink, retryLink, authLink, httpLink])

export const apolloClient = new ApolloClient({
	link,
	cache: new InMemoryCache()
})
