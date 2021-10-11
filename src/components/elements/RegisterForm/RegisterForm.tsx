import React, { useState } from 'react'
import styles from './RegisterForm.module.scss'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import Button from '../Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from 'src/graphql/mutation'
import { useRouter } from 'next/router'
import { useAuth } from 'src/context/auth'
import Preloader from 'src/components/elements/Preloader'
import FormErrors from '../FormErrors'

const validationSchema = yup.object().shape({
	firstName: yup.string().required('Поле обязательно для заполнения'),
	lastName: yup.string().required('Поле обязательно для заполнения'),
	email: yup
		.string()
		.email('Почта должна быть валидна')
		.required('Поле обязательно для заполнения'),
	password: yup.string().required('Поле обязательно для заполнения').min(6),
	passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
})

const registerFields = [
	{
		type: 'email',
		name: 'email',
		placeholder: 'Email Адресс'
	},
	{
		type: 'text',
		name: 'firstName',
		placeholder: 'Имя'
	},
	{
		type: 'text',
		name: 'lastName',
		placeholder: 'Фамилия'
	},
	{
		type: 'password',
		name: 'password',
		placeholder: 'Пароль'
	},
	{
		type: 'password',
		name: 'confirmPassword',
		placeholder: 'Подтвердите пароль'
	}
]

const RegisterForm: React.FC<{ openLogin: () => void; toggleModal: () => void }> = ({
	openLogin,
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

	const showLogin = () => {
		openLogin()
		toggleModal()
	}

	const [registerUser, { loading }] = useMutation(REGISTER_USER, {
		async onCompleted(data) {
			context.login(data.registerUser)
			toggleModal()
			await router.push('/account', undefined, { shallow: true })
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.errors)
		}
	})
	const onSubmit = async (data) => {
		await registerUser({
			variables: {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
				confirmPassword: data.confirmPassword
			}
		})
	}

	return (
		<div className={styles.form}>
			<div className={styles.form_title} data-cy="register">
				Регистрация
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				{registerFields.map((field) => (
					<Input
						key={field.name}
						register={register}
						type={field.type}
						name={field.name}
						placeholder={field.placeholder}
						errors={errors}
					/>
				))}
				{loading ? (
					<Preloader />
				) : (
					<Button className={styles.button} loading={loading}>
						Зарегистрироваться
					</Button>
				)}
			</form>
			<FormErrors errors={apiErrors} />
			<div className={styles.form_question}>
				Вы уже зарегистрированы?
				<button className={styles.form_signup} onClick={showLogin}>
					Войти
				</button>
			</div>
		</div>
	)
}

export default RegisterForm
