import React from 'react'
import Button from '../Button'
import styles from './RegisterTrigger.module.scss'
import dynamic from 'next/dynamic'
import { useToggle } from 'react-use'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'

const Modal = dynamic(() => import('src/components/elements/Modal'), {
	// eslint-disable-next-line react/display-name
	ssr: false
})

const RegisterTrigger: React.FC = () => {
	const [showSignup, toggleSignup] = useToggle(false)
	const [showLogin, toggleLogin] = useToggle(false)
	return (
		<>
			<div className="container">
				<div className={styles.banner}>
					<div className={styles.banner_image} data-cy="register-trigger">
						<h2 className={styles.banner_title}>
							Ты еще не с нами?
							<br /> Присоединяйся к нам
						</h2>
						<Button onClick={toggleSignup}>Зарегистрироваться</Button>
					</div>
				</div>
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

export default RegisterTrigger
