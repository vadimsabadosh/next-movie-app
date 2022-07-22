import React from 'react'
import FooterSocials from 'src/components/elements/FooterSocials'
import Logo from 'src/components/elements/Logo'
import styles from './Footer.module.scss'
import Link from 'next/link'
const links = [
	'Media Center',
	'Privacy',
	'Contact us',
	'Investor Relations',
	'Legal Provisions',
	'Help Center',
	'Cookies Preferences',
	'Gift Cards',
	'Terms of Use',
	'Corporate Informations'
]
const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_wrapper}>
				<div className={styles.footer_logo}>
					<Logo />
					<FooterSocials />
				</div>
				<ul className={styles.footer_linkList}>
					{links.map((link) => (
						<li key={link}>
							<Link href="#">
								<a className={styles.footer_link}>{link}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Footer
