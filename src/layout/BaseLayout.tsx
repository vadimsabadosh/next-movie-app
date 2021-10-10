import React from 'react'
import Footer from 'src/components/modules/Footer'
import Header from 'src/components/modules/Header'

const BaseLayout: React.FC = ({ children }) => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">{children}</main>
			<Footer />
		</div>
	)
}

export default BaseLayout
