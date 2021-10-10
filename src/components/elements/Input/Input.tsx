import React from 'react'
import styles from './Input.module.scss'
import classnames from 'classnames'

const Input: React.FC<{
	register: any
	placeholder: string
	name: string
	type: string
	className?: string
	errors: any
}> = ({ register, placeholder, name, type, className, errors }) => {
	const getClass = classnames(styles.inputBlock_input, className, {
		[styles.inputBlock_input_border]: errors[name]
	})
	return (
		<div className={styles.inputBlock}>
			<label className={styles.inputBlock_label}>{placeholder}</label>
			<input
				{...register(name, { required: true })}
				type={type}
				placeholder={placeholder}
				className={getClass}
			/>
			{errors[name] && <span className={styles.inputBlock_error}>{errors[name]?.message}</span>}
		</div>
	)
}

export default Input
