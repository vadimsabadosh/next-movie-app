import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import Button from 'src/components/elements/Button'
import {
	ADD_TO_WATCHED,
	ADD_TO_WISH_LIST,
	DELETE_FROM_WATCHED,
	DELETE_FROM_WISH_LIST
} from 'src/graphql/mutation'
import { constant } from 'src/utils/constants'
import styles from './Movie.module.scss'
import { useAuth } from 'src/context/auth'
import { GET_USER_WANT_TO_WATCH_MOVIES, GET_USER_WATCHED_MOVIES } from 'src/graphql/query'
import { TMovie } from 'src/types'

const Movie: React.FC<{ movie: TMovie }> = ({ movie }) => {
	const {
		state: { user }
	} = useAuth()
	const { data: wantToWatch } = useQuery(GET_USER_WANT_TO_WATCH_MOVIES, {
		variables: { id: user?.id }
	})
	const { data: watched } = useQuery(GET_USER_WATCHED_MOVIES, {
		variables: { id: user?.id }
	})

	const isWatched = watched?.getUserWatchedMovies.some((mov) => mov.id === movie.id)
	const isWanted = wantToWatch?.getUserWantToWatchMovies.some((mov) => mov.id === movie.id)

	const watchedQuery = isWatched ? DELETE_FROM_WATCHED : ADD_TO_WATCHED
	const WantedQuery = isWanted ? DELETE_FROM_WISH_LIST : ADD_TO_WISH_LIST

	const [addToWatched] = useMutation(watchedQuery, {
		variables: {
			movieId: movie.id
		},
		refetchQueries: [{ query: GET_USER_WATCHED_MOVIES, variables: { id: user?.id } }]
	})
	const [addToWishList] = useMutation(WantedQuery, {
		variables: {
			movieId: movie.id
		},
		refetchQueries: [{ query: GET_USER_WANT_TO_WATCH_MOVIES, variables: { id: user?.id } }]
	})

	return (
		<div className={styles.movie}>
			<div className={styles.movie__left}>
				<img
					src={constant.IMAGE_LINK + movie.poster_path}
					alt={movie.title}
					title={movie.title}
					className={styles.movie__poster}
				/>
				<div className={styles.movie__buttons}>
					<Button className={styles.movie__want} onClick={addToWatched}>
						{isWatched ? 'Удалить из просмотренных' : 'Добавить в просмотренные'}
					</Button>
					<Button className={styles.movie__already} onClick={addToWishList}>
						{isWanted ? 'Удалить из списка желаний' : 'Хочу посмотреть'}
					</Button>
				</div>
			</div>
			<div className={styles.movie__right}>
				<h2 className={styles.movie__title}>{movie.title}</h2>
				<h5 className={styles.movie__subtitle}>{movie.original_title}</h5>
				<ul className={styles.info}>
					<li className={styles.info__item}>
						<span className={styles.info__title}>Дата выхода:</span> {movie.release_date}
					</li>
					<li className={styles.info__item}>
						<span className={styles.info__title}>Рейтинг:</span> {movie.vote_average}
					</li>
				</ul>
				<p className={styles.movie__overview}>{movie.overview}</p>
			</div>
		</div>
	)
}

export default Movie
