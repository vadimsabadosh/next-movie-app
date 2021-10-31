import React from 'react'
import loginPic from 'public/images/user-icon.svg'
import Image from 'next/image'
import styles from './Login.module.scss'
import dynamic from 'next/dynamic'
import { useToggle } from 'react-use'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'
import { useAuth } from 'src/context/auth'
import Link from 'next/link'

const Modal = dynamic(() => import('src/components/elements/Modal'), {
	// eslint-disable-next-line react/display-name
	ssr: false
})
const Login: React.FC = () => {
	const [showSignup, toggleSignup] = useToggle(false)
	const [showLogin, toggleLogin] = useToggle(false)
	const {
		state: { user }
	} = useAuth()

	return (
		<>
			<div className={styles.login}>
				{user ? (
					<Link href="/profile">
						<a className={styles.logout} data-cy="account-btn">
							Аккаунт
						</a>
					</Link>
				) : (
					<button data-cy="login-button" className={styles.loginButton} onClick={toggleLogin}>
						<Image src={loginPic} alt="Войти" title="Войти" />
					</button>
				)}
			</div>
			{showSignup && (
				<Modal toggleModal={toggleSignup} show={showSignup}>
					<RegisterForm openLogin={toggleLogin} toggleModal={toggleSignup} />
				</Modal>
			)}
			{showLogin && (
				<Modal toggleModal={toggleLogin} show={showLogin}>
					<LoginForm openRegister={toggleSignup} toggleModal={toggleLogin} />
				</Modal>
			)}
		</>
	)
}

export default Login
