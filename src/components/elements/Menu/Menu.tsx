import React from 'react'
import styles from './Menu.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

const menuList = [
	{
		url: '/',
		name: 'Главная'
	},
	{
		url: '/movies',
		name: 'Фильмы'
	}
]
const Menu: React.FC = () => {
	const router = useRouter()

	return (
		<ul className={styles.menu}>
			{menuList.map((link) => {
				const getClass = classnames(styles.menu_link, {
					[styles.menu_linkActive]: router.asPath === link.url
				})
				return (
					<li className={styles.menu_item} key={link.url}>
						<Link href={link.url}>
							<a className={getClass}>{link.name}</a>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default Menu
