import React from 'react'
import Image from 'next/image'
import fb from 'public/images/facebook.svg'
import linkedin from 'public/images/linkedin.svg'
import twitter from 'public/images/twitter.svg'
import inst from 'public/images/instagram.svg'
import styles from './FooterSocials.module.scss'

const links = [
	{
		href: '#',
		image: fb
	},
	{
		href: '#',
		image: twitter
	},
	{
		href: '#',
		image: linkedin
	},
	{
		href: '#',
		image: inst
	}
]

const FooterSocials = () => {
	return (
		<ul className={styles.footer_socials}>
			{links.map((link) => (
				<li key={link.image}>
					<a href={link.href} className={styles.footer_socialLink}>
						<Image src={link.image} alt="Facebook" />
					</a>
				</li>
			))}
		</ul>
	)
}

export default FooterSocials
