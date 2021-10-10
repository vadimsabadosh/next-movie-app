import React from 'react'
import Account from 'src/components/modules/Account'
import Head from 'next/head'

const AccountPage = () => {
	return (
		<>
			<Head>
				<title>Аккаунт</title>
			</Head>
			<Account />
		</>
	)
}

export default AccountPage
