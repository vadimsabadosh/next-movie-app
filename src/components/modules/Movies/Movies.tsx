import React from 'react'
import MovieList from 'src/components/elements/MovieList'
import Title from 'src/components/elements/Title'
import { TMovie } from 'src/types'

const Movies: React.FC<{ movies: TMovie[] }> = ({ movies }) => {
	return (
		<div className="container">
			<Title text="Фильмы" />
			<MovieList movies={movies} />
		</div>
	)
}

export default Movies
