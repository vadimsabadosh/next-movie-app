import React from 'react'
import Image from 'next/image'
import fb from 'public/images/facebook.svg'
import linkedin from 'public/images/linkedin.svg'
import twitter from 'public/images/twitter.svg'
import inst from 'public/images/instagram.svg'
import styles from './FooterSocials.module.scss'

const FooterSocials = () => {
	return (
		<ul className={styles.footer_socials}>
			<li>
				<a href="#" className={styles.footer_socialLink}>
					<Image src={fb} alt="Facebook" />
				</a>
			</li>
			<li>
				<a href="#" className={styles.footer_socialLink}>
					<Image src={twitter} alt="Facebook" />
				</a>
			</li>
			<li>
				<a href="#" className={styles.footer_socialLink}>
					<Image src={linkedin} alt="Facebook" />
				</a>
			</li>
			<li>
				<a href="#" className={styles.footer_socialLink}>
					<Image src={inst} alt="Facebook" />
				</a>
			</li>
		</ul>
	)
}

export default FooterSocials
