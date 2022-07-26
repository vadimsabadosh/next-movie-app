import { GetServerSideProps } from 'next'
import RegisterTrigger from 'src/components/elements/RegisterTrigger'
import MainScreen from 'src/components/modules/MainScreen'
import MoviesBlock from 'src/components/modules/MoviesBlock'
import { apolloClient } from 'src/apollo/apollo-client'
import { GET_ALL_MOVIES } from 'src/graphql/query'
import { TMovies } from 'src/types'
import Head from 'next/head'

const Home: React.FC<TMovies> = ({ movies }) => {
	return (
		<>
			<Head>
				<title>Главная</title>
			</Head>
			<MainScreen />
			<MoviesBlock movies={movies} />
			<RegisterTrigger />
		</>
	)
}
export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const response = await apolloClient.query({
			query: GET_ALL_MOVIES
		})

		if (!response) {
			return {
				notFound: true
			}
		}
		return {
			props: {
				movies: response.data.getAllMovies.slice(0, 12)
			}
		}
	} catch (e) {
		return {
			notFound: true
		}
	}
}

export default Home
