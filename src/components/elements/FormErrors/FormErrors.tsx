import React from 'react'
import styles from './FormErrors.module.scss'

const FormErrors = ({ errors }) => {
	return (
		<>
			{Object.keys(errors).length > 0 && (
				<div className={styles.errorBlock}>
					<ul className={styles.list}>
						{Object.values(errors).map((value: string) => {
							return (
								<li key={value} className={styles.list__item}>
									{value}
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</>
	)
}

export default FormErrors
