import { useMutation, useLazyQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import Button from 'src/components/elements/Button'
import {
	ADD_TO_WATCHED,
	ADD_TO_WISH_LIST,
	DELETE_FROM_WATCHED,
	DELETE_FROM_WISH_LIST
} from 'src/graphql/mutation'
import dynamic from 'next/dynamic'
import { CONSTANT } from 'src/utils/constants'
import styles from './MoviePage.module.scss'
import { useAuth } from 'src/context/auth'
import { GET_USER_WANT_TO_WATCH_MOVIES, GET_USER_WATCHED_MOVIES } from 'src/graphql/query'
import { TMovie } from 'src/types'
import { useToggle } from 'react-use'
import LoginForm from 'src/components/elements/LoginForm'
import RegisterForm from 'src/components/elements/RegisterForm'

const Modal = dynamic(() => import('src/components/elements/Modal'), {
	// eslint-disable-next-line react/display-name
	ssr: false
})

const MoviePage: React.FC<{ movie: TMovie }> = ({ movie }) => {
	const {
		state: { user }
	} = useAuth()
	const [showLogin, toggleLogin] = useToggle(false)
	const [showSignup, toggleSignup] = useToggle(false)

	const [loadWanted, { data: wantToWatch }] = useLazyQuery(GET_USER_WANT_TO_WATCH_MOVIES)
	const [loadWatched, { data: watched }] = useLazyQuery(GET_USER_WATCHED_MOVIES)

	useEffect(() => {
		if (user) {
			loadWatched({ variables: { id: user?.id } })
			loadWanted({ variables: { id: user?.id } })
		}
	}, [user])

	const isWatched = watched?.getUserWatchedMovies.some((mov) => mov.id === movie.id)
	const isWanted = wantToWatch?.getUserWantToWatchMovies.some((mov) => mov.id === movie.id)

	const watchedQuery = isWatched ? DELETE_FROM_WATCHED : ADD_TO_WATCHED
	const WantedQuery = isWanted ? DELETE_FROM_WISH_LIST : ADD_TO_WISH_LIST

	const [watchedAction, { loading: watchedLoading }] = useMutation(watchedQuery, {
		refetchQueries: [{ query: GET_USER_WATCHED_MOVIES, variables: { id: user?.id } }]
	})
	const [wantedAction, { loading: wantedLoading }] = useMutation(WantedQuery, {
		refetchQueries: [{ query: GET_USER_WANT_TO_WATCH_MOVIES, variables: { id: user?.id } }]
	})

	const onAddToWatched = () => {
		if (user) {
			watchedAction({
				variables: {
					movieId: movie.id
				}
			})
		} else {
			toggleLogin()
		}
	}
	const onAddToWishList = () => {
		if (user) {
			wantedAction({
				variables: {
					movieId: movie.id
				}
			})
		} else {
			toggleLogin()
		}
	}

	return (
		<>
			<div className={styles.movie}>
				<div className={styles.movie__left}>
					<img
						src={CONSTANT.IMAGE_LINK + movie.poster_path}
						alt={movie.title}
						title={movie.title}
						className={styles.movie__poster}
					/>
					<div className={styles.movie__buttons}>
						<Button
							className={styles.movie__want}
							onClick={onAddToWatched}
							loading={watchedLoading}
						>
							{isWatched ? 'Удалить из просмотренных' : 'Добавить в просмотренные'}
						</Button>
						<Button
							className={styles.movie__already}
							onClick={onAddToWishList}
							loading={wantedLoading}
						>
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
			{showLogin && (
				<Modal toggleModal={toggleLogin} show={showLogin}>
					<LoginForm openRegister={toggleSignup} toggleModal={toggleLogin} />
				</Modal>
			)}
			{showSignup && (
				<Modal toggleModal={toggleSignup} show={showSignup}>
					<RegisterForm openLogin={toggleLogin} toggleModal={toggleSignup} />
				</Modal>
			)}
		</>
	)
}

export default MoviePage
