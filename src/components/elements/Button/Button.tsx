import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'

const BtnLoader = () => {
	return (
		<div className={styles.loader}>
			<span className={styles.dot}></span>
			<div className={styles.dots}>
				<span className={styles.dots__span}></span>
				<span className={styles.dots__span}></span>
				<span className={styles.dots__span}></span>
			</div>
		</div>
	)
}
const Button: React.FC<{ onClick?: () => void; className?: string; loading?: boolean }> = ({
	children,
	onClick,
	className,
	loading
}) => {
	const buttonClass = classnames(styles.button, className, {
		[styles.button__bg]: loading
	})
	return (
		<button className={buttonClass} onClick={onClick}>
			{loading && <BtnLoader />}
			{children}
		</button>
	)
}

export default Button
