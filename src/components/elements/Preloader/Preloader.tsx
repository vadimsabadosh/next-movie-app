import React from 'react'
import styles from './Preloader.module.scss'
import classNames from 'classnames'

const Preloader: React.FC<{ size?: 'small' | 'medium' | 'big' }> = ({ size = 'small' }) => {
	const getClass = classNames(styles.loader, styles[size])
	return (
		<div className={getClass}>
			<div className={styles.inner + ' ' + styles.one}></div>
			<div className={styles.inner + ' ' + styles.two}></div>
			<div className={styles.inner + ' ' + styles.three}></div>
		</div>
	)
}

export default Preloader
