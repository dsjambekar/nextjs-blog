import React from 'react'
import App from 'next/app'

import Layout from '../components/layout'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps}></Component>
		</Layout>
	)
}

export default MyApp;