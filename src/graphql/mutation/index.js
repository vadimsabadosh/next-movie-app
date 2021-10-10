import { gql } from '@apollo/client/core'

import { MOVIE } from '../fragments'

export const REGISTER_USER = gql`
	mutation registerUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		registerUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
			confirmPassword: $confirmPassword
		) {
			id
			token
			email
			firstName
			lastName
			watched_films {
				...Movie
			}
			wish_list {
				...Movie
			}
		}
	}
	${MOVIE}
`
export const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			id
			token
			email
			firstName
			lastName
			watched_films {
				...Movie
			}
			wish_list {
				...Movie
			}
		}
	}
	${MOVIE}
`
export const UPDATE_USER = gql`
	mutation updateUser($firstName: String, $lastName: String, $email: String) {
		updateUser(firstName: $firstName, lastName: $lastName, email: $email) {
			id
			token
			email
			firstName
			lastName
		}
	}
`
export const ADD_TO_WATCHED = gql`
	mutation addMovieToWatched($movieId: ID!) {
		addMovieToWatched(movieId: $movieId) {
			watched_films {
				...Movie
			}
		}
	}
	${MOVIE}
`
export const DELETE_FROM_WATCHED = gql`
	mutation deleteMovieFromWatched($movieId: ID!) {
		deleteMovieFromWatched(movieId: $movieId) {
			watched_films {
				...Movie
			}
		}
	}
	${MOVIE}
`
export const ADD_TO_WISH_LIST = gql`
	mutation addMovieToWishList($movieId: ID!) {
		addMovieToWishList(movieId: $movieId) {
			wish_list {
				...Movie
			}
		}
	}
	${MOVIE}
`
export const DELETE_FROM_WISH_LIST = gql`
	mutation deleteMovieFromWishList($movieId: ID!) {
		deleteMovieFromWishList(movieId: $movieId) {
			wish_list {
				...Movie
			}
		}
	}
	${MOVIE}
`
