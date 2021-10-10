import React from 'react'
import styles from './Header.module.scss'
import Logo from 'src/components/elements/Logo/Logo'
import Menu from 'src/components/elements/Menu'
import Login from 'src/components/elements/Login'

const Header: React.FC = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<Menu />
			<Login />
		</div>
	)
}

export default Header
