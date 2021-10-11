import React from 'react'
import styles from './Account.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import MovieList from 'src/components/elements/MovieList'
import { resetIdCounter } from 'react-tabs'
import { useAuth } from 'src/context/auth'
import WithAuth from 'src/utils/withAuth'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_USER_WANT_TO_WATCH_MOVIES, GET_USER_WATCHED_MOVIES } from 'src/graphql/query'
import Preloader from 'src/components/elements/Preloader'

resetIdCounter()

const tabTitles = [
	{ label: 'Персональная информация' },
	{ label: 'Просмотренные фильмы' },
	{ label: 'Хочу посмотреть' }
]

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
				<div className={styles.panel__value}>{user?.firstName}</div>
			</div>
			<div className={styles.panel__item}>
				<div className={styles.panel__name}>Фамилия:</div>
				<div className={styles.panel__value}>{user?.lastName}</div>
			</div>
			<div className={styles.panel__item}>
				<div className={styles.panel__name}>Почта:</div>
				<div className={styles.panel__value}>{user?.email}</div>
			</div>
		</div>
	)
}

const Account = () => {
	const { state, logout } = useAuth()
	const { user } = state
	const router = useRouter()

	const onLogout = async () => {
		logout()
		await router.push('/')
	}
	return (
		<div className="container">
			<div className={styles.account}>
				<Tabs
					className={styles.tabs}
					selectedTabClassName={styles.tabActive}
					selectedTabPanelClassName={styles.tab__panelActive}
				>
					<TabList className={styles.tab__left}>
						<div className={styles.tab__list}>
							{tabTitles.map((tab) => (
								<Tab className={styles.tab} key={tab.label}>
									{tab.label}
								</Tab>
							))}
						</div>

						<button className={styles.account__logout} onClick={onLogout}>
							Выйти
						</button>
					</TabList>
					<TabPanel className={styles.tab__panel}>
						<PersonalDataTab user={user} />
					</TabPanel>
					<TabPanel className={styles.tab__panel}>
						<WatchedTab id={user?.id} />
					</TabPanel>
					<TabPanel className={styles.tab__panel}>
						<WantToWatchTab id={user?.id} />
					</TabPanel>
				</Tabs>
			</div>
		</div>
	)
}

export default WithAuth(Account)
