import React from 'react'
import MoviesPage from 'src/components/modules/MoviesPage'
import { apolloClient } from 'src/apollo/apollo-client'
import { GET_ALL_MOVIES } from 'src/graphql/query'
import { GetServerSideProps } from 'next'
import { TMovie } from 'src/types'
import Head from 'next/head'

const Movies: React.FC<{ movies: TMovie[] }> = ({ movies }) => {
	return (
		<>
			<Head>
				<title>Список фильмов</title>
			</Head>
			<MoviesPage movies={movies} />
		</>
	)
}

export default Movies
export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const response = await apolloClient.query({
			fetchPolicy: 'network-only',
			query: GET_ALL_MOVIES
		})

		if (!response) {
			return {
				notFound: true
			}
		}
		return {
			props: {
				movies: response.data.getAllMovies
			}
		}
	} catch (e) {
		return {
			notFound: true
		}
	}
}
