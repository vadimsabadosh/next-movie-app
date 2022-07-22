import React from 'react'
import { GetServerSideProps } from 'next'
import { apolloClient } from 'src/apollo/apollo-client'
import { GET_MOVIE } from 'src/graphql/query'
import MoviePage from 'src/components/modules/MoviePage'
import Head from 'next/head'
import { TMovie } from 'src/types'

const Movie: React.FC<{movie: TMovie}> = ({ movie }) => {
	return (
		<>
			<Head>
				<title>Фильм {movie.title}</title>
			</Head>
			<MoviePage movie={movie} />
		</>
	)
}

export default Movie
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { query } = ctx
	const { id } = query

	try {
		const response = await apolloClient.query({
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
