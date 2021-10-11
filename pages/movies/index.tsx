import React from 'react'
import Movies from 'src/components/modules/Movies'
import { apolloClient } from 'src/apollo/apollo-client'
import { GET_ALL_MOVIES } from 'src/graphql/query'
import { GetServerSideProps } from 'next'
import { TMovie } from 'src/types'
import Head from 'next/head'

const MoviesPage: React.FC<{ movies: TMovie[] }> = ({ movies }) => {
	return (
		<>
			<Head>
				<title>Список фильмов</title>
			</Head>
			<Movies movies={movies} />
		</>
	)
}

export default MoviesPage
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
