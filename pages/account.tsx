import React from 'react'
import AccountPage from 'src/components/modules/AccountPage'
import Head from 'next/head'

const Account = () => {
	return (
		<>
			<Head>
				<title>Аккаунт</title>
			</Head>
			<AccountPage />
		</>
	)
}

export default Account
