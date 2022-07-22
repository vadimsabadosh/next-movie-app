import React from 'react'
import styles from './AccountPage.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { resetIdCounter } from 'react-tabs'
import { useAuth } from 'src/context/auth'
import WithAuth from 'src/utils/withAuth'
import { useRouter } from 'next/router'
import { WatchedTab, PersonalDataTab, WantToWatchTab } from 'src/components/elements/AccountTabs'
resetIdCounter()

const tabTitles = [
	{ label: 'Персональная информация' },
	{ label: 'Просмотренные фильмы' },
	{ label: 'Хочу посмотреть' }
]

const TabTitles: React.FC<{ onLogout: () => Promise<void> }> = ({ onLogout }) => {
	return (
		<>
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
		</>
	)
}

const AccountPage = () => {
	const { state, logout } = useAuth()
	const { user } = state
	const router = useRouter()

	const onLogout = async () => {
		await router.push('/')
		logout()
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
						<TabTitles onLogout={onLogout} />
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

export default WithAuth(AccountPage)
