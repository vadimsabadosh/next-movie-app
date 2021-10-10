import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'

const Button: React.FC<{ onClick?: () => void; className?: string; loading?: boolean }> = ({
	children,
	onClick,
	className
}) => {
	const buttonClass = classnames(styles.button, className)
	return (
		<button className={buttonClass} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
