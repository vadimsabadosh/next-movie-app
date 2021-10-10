import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from 'src/context/auth'

const WithAuth = (Component: React.FC) =>
	function BaseComponent(props) {
		const { state } = useAuth()
		const router = useRouter()
		useEffect(() => {
			;(async () => {
				if (!state?.user) {
					await router.push('/')
				}
			})()
		}, [state?.user])
		return <Component {...props} />
	}

export default WithAuth
