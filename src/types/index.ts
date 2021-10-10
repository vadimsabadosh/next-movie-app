export type TMovie = {
	id: string
	backdrop_path: string
	original_title: string
	overview: string
	popularity: string
	poster_path: string
	release_date: string
	title: string
	vote_average: number
}
export type TUser = {
	firstName: string
	lastName: string
	email: string
	password: string
	created_at: string
	watched_films: Array<TMovie>
	wish_list: Array<TMovie>
}
