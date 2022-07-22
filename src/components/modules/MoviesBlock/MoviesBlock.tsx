import React from 'react'
import styles from './MoviesBlock.module.scss'
import MovieList from 'src/components/elements/MovieList'
import Button from 'src/components/elements/Button'
import Title from 'src/components/elements/Title'
import { TMovies } from 'src/types'
import { useRouter } from 'next/router'

const MoviesBlock: React.FC<TMovies> = ({ movies }) => {
	const router = useRouter()

	const onClick = async () => {
		await router.push('/movies')
	}
	return (
		<div className="container">
			<div className={styles.list__block} id="movies">
				<Title text="Популярные фильмы" />
				<MovieList movies={movies} />
				<Button onClick={onClick}>Показать больше</Button>
			</div>
		</div>
	)
}

export default MoviesBlock
