import React from 'react'
import Link from 'next/link'
import { TMovie } from 'src/types'
import styles from './MovieList.module.scss'
import { constant } from 'src/utils/constants'

const MovieList: React.FC<{ movies?: TMovie[] }> = ({ movies }) => {
	return (
		<>
			<div className={styles.movie__list}>
				{!movies.length && (
					<div className={styles.movie__empty}>
						<img src="/images/empty.png" alt="" />
						<p className={styles.movie__empty_text}>Список пуст</p>
					</div>
				)}
				{movies?.map((movie) => {
					return (
						<div className={styles.movie__item} key={movie.id}>
							<Link href={`/movies/${movie.id}`}>
								<a>
									<img
										src={constant.IMAGE_LINK + movie.poster_path}
										alt={movie.original_title}
										title={movie.title}
										className={styles.movie__image}
									/>
								</a>
							</Link>
							<div className={styles.movie__descriptionBlock}>
								<h4 className={styles.movie__title}>{movie.title}</h4>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default MovieList
