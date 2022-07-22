import React from 'react'
import MovieList from 'src/components/elements/MovieList'
import Title from 'src/components/elements/Title'
import { TMovies } from 'src/types'

const MoviesPage: React.FC<TMovies> = ({ movies }) => {
	return (
		<div className="container">
			<Title text="Фильмы" />
			<MovieList movies={movies} />
		</div>
	)
}

export default MoviesPage
