import { gql } from '@apollo/client/core'
import { MOVIE } from '../fragments'

export const GET_ALL_MOVIES = gql`
	query getAllMovies {
		getAllMovies {
			...Movie
		}
	}
	${MOVIE}
`

export const GET_MOVIE = gql`
	query getMovie($id: ID!) {
		getMovie(id: $id) {
			...Movie
		}
	}
	${MOVIE}
`
export const GET_USER_WATCHED_MOVIES = gql`
	query getUserWatchedMovies($id: ID!) {
		getUserWatchedMovies(id: $id) {
			...Movie
		}
	}
	${MOVIE}
`
export const GET_USER_WANT_TO_WATCH_MOVIES = gql`
	query getUserWantToWatchMovies($id: ID!) {
		getUserWantToWatchMovies(id: $id) {
			...Movie
		}
	}
	${MOVIE}
`
