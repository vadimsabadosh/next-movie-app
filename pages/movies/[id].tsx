import React from 'react'
import { GetServerSideProps } from 'next'
import { apolloClient } from 'src/apollo/apollo-client'
import { GET_MOVIE } from 'src/graphql/query'
import Movie from 'src/components/modules/Movie'
import Head from 'next/head'

const MoviePage = ({ movie }) => {
	return (
		<>
			<Head>
				<title>Фильм {movie.title}</title>
			</Head>
			<Movie movie={movie} />
		</>
	)
}

export default MoviePage
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { query } = ctx
	const { id } = query

	try {
		const response = await apolloClient.query({
			fetchPolicy: 'network-only',
			query: GET_MOVIE,
			variables: { id }
		})
		if (!response) {
			return {
				notFound: true
			}
		}
		return {
			props: {
				movie: response.data.getMovie
			}
		}
	} catch (e) {
		return {
			notFound: true
		}
	}
}
