import React from 'react'
import logoPic from 'public/images/Logo.png'
import Image from 'next/image'
import styles from './Logo.module.scss'

const Logo: React.FC = () => {
	return (
		<div className={styles.logo}>
			<Image src={logoPic} alt="M Box" title="M Box" />
		</div>
	)
}

export default Logo
