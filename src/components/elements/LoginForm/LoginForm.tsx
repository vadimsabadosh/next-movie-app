import React, { useState } from 'react'
import styles from './LoginForm.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import Input from '../Input'
import Button from '../Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from 'src/graphql/mutation'
import { useAuth } from 'src/context/auth'
import { useRouter } from 'next/router'
import Preloader from '../Preloader'
import FormErrors from '../FormErrors'

const validationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Почта должна быть валидна')
		.required('Поле обязательно для заполнения'),
	password: yup.string().required('Поле обязательно для заполнения').min(6)
})
type Inputs = {
	email: string
	password: string
}

const LoginForm: React.FC<{ openRegister: () => void; toggleModal: () => void }> = ({
	openRegister,
	toggleModal
}) => {
	const [apiErrors, setErrors] = useState({})
	const router = useRouter()
	const context = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(validationSchema)
	})

	const [loginUser, { loading }] = useMutation(LOGIN_USER, {
		async onCompleted(data) {
			context.login(data.loginUser)
			toggleModal()
			await router.push('/account', undefined, { shallow: true })
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.errors)
		}
	})

	const showRegister = () => {
		openRegister()
		toggleModal()
	}
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		await loginUser({
			variables: {
				email: data.email,
				password: data.password
			}
		})
	}

	return (
		<div className={styles.loginForm}>
			<div className={styles.loginForm_title} data-cy="login-title">
				Авторизация
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					register={register}
					type="email"
					name="email"
					placeholder="Email Адресс"
					errors={errors}
				/>
				<Input
					register={register}
					type="password"
					name="password"
					placeholder="Пароль"
					errors={errors}
				/>
				{loading ? (
					<Preloader />
				) : (
					<Button className={styles.button} loading={loading}>
						Войти
					</Button>
				)}
			</form>
			<FormErrors errors={apiErrors} />
			<div className={styles.loginForm_question}>
				У вас нет аккаунта?
				<button className={styles.loginForm_signup} onClick={showRegister}>
					Регистрация
				</button>
			</div>
		</div>
	)
}

export default LoginForm
