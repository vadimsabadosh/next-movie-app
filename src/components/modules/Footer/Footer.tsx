import React from 'react'
import FooterSocials from 'src/components/elements/FooterSocials'
import Logo from 'src/components/elements/Logo'
import styles from './Footer.module.scss'
import Link from 'next/link'
const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_wrapper}>
				<div className={styles.footer_logo}>
					<Logo />
					<FooterSocials />
				</div>
				<ul className={styles.footer_linkList}>
					<li>
						<Link href="#">
							<a className={styles.footer_link}>Media Center</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className={styles.footer_link}>Privacy</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className={styles.footer_link}>Contact us</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className={styles.footer_link}>Investor Relations</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className={styles.footer_link}>Legal Provisions</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className={styles.footer_link}>Help Center</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className={styles.footer_link}>Cookies Preferences</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className={styles.footer_link}>Gift Cards</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className={styles.footer_link}>Terms of Use</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className={styles.footer_link}>Corporate Informations</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
