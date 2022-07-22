import React from 'react';
import { useQuery } from '@apollo/client'
import MovieList from 'src/components/elements/MovieList'
import { GET_USER_WANT_TO_WATCH_MOVIES, GET_USER_WATCHED_MOVIES } from 'src/graphql/query'
import Preloader from 'src/components/elements/Preloader'
import styles from './AccountTabs.module.scss'

const WatchedTab: React.FC<{ id: string }> = ({ id }) => {
	const { data, loading } = useQuery(GET_USER_WATCHED_MOVIES, {
		variables: { id }
	})

	return (
		<div className={styles.panel}>
			<h3 className={styles.panel__title}>Просмотренные фильмы</h3>
			{loading ? (
				<div className={styles.panel__preloader}>
					<Preloader size="big" />
				</div>
			) : (
				<MovieList movies={data?.getUserWatchedMovies} />
			)}
		</div>
	)
}

const WantToWatchTab: React.FC<{ id: string }> = ({ id }) => {
	const { data, loading } = useQuery(GET_USER_WANT_TO_WATCH_MOVIES, {
		variables: { id }
	})
	return (
		<div className={styles.panel}>
			<h3 className={styles.panel__title}>Хочу посмотреть</h3>
			{loading ? (
				<div className={styles.panel__preloader}>
					<Preloader size="big" />
				</div>
			) : (
				<MovieList movies={data?.getUserWantToWatchMovies} />
			)}
		</div>
	)
}
const PersonalDataTab: React.FC<{ user: any }> = ({ user }) => {
	return (
		<div className={styles.panel}>
			<h3 className={styles.panel__title} data-cy="account-title">
				Персональная информация
			</h3>
			<div className={styles.panel__item}>
				<div className={styles.panel__name}>Имя:</div>
				<div className={styles.panel__value} data-cy="name">
					{user?.firstName}
				</div>
			</div>
			<div className={styles.panel__item}>
				<div className={styles.panel__name}>Фамилия:</div>
				<div className={styles.panel__value} data-cy="lastName">
					{user?.lastName}
				</div>
			</div>
			<div className={styles.panel__item}>
				<div className={styles.panel__name}>Почта:</div>
				<div className={styles.panel__value} data-cy="email">
					{user?.email}
				</div>
			</div>
		</div>
	)
}
export {WatchedTab, PersonalDataTab, WantToWatchTab}