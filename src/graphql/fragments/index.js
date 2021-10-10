import { gql } from '@apollo/client/core'

export const MOVIE = gql`
	fragment Movie on Movie {
		id
		backdrop_path
		original_title
		overview
		popularity
		poster_path
		release_date
		title
		vote_average
	}
`
