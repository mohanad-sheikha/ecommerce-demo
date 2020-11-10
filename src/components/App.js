import React from 'react'
import styled from 'styled-components'
import ProductsPage from './ProductsPage'
import ProductPage from './ProductPage'
import ProductsSearchPage from './ProductsSearchPage'
import HomePage from './HomePage'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import Breadcrumbs from './Breadcrumbs'
import CartPage from './CartPage'
import UserPage from './UserPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const Wrapper = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-rows: min-content auto min-content;
	background-color: hsl(0, 0%, 90%);
`
const Content = styled.div.attrs(() => ({ className: 'container' }))`
	padding: 2rem 1rem;
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
	grid-auto-rows: min-content;
`

const stripePromise = loadStripe('pk_test_51Hm0uYASDxT7ZGGGHiySXqenGHtXZeVpsWP57KHLMf9zdT2Sf98vhohwr6VyCJYZCeZPoY4WeWmClWgYVpA8y3VW00IMILiKKz')

export const routes = [
	{ path: '/', name: 'Home', children: <HomePage />, exact: true, strict: true },
	{ path: '/products', name: 'Products', children: <ProductsPage />, exact: true, strict: true },
	{ path: '/products/details/:id', name: 'Details', children: <ProductPage />, exact: true, strict: true },
	{ path: '/products/search/:name', name: 'Search', children: <ProductsSearchPage />, exact: true, strict: true },
	{ path: '/cart', name: 'Cart', children: <CartPage /> },
	{ path: '/user', name: 'User', children: <UserPage /> },
	{ path: '/contact', name: 'Contact', children: <ContactPage /> },
	{ path: '/about', name: 'About', children: <AboutPage /> },
]

const App = () =>
{
	return (
		<Wrapper>
			<Router>
				<AppHeader />
				<Elements stripe={ stripePromise }>
					<Content>
						<Breadcrumbs />
						<Switch>
							{ routes && routes.map(props => (<Route key={ props.path } { ...props } />)) }
						</Switch>
					</Content>
				</Elements>
				<AppFooter />
			</Router>
		</Wrapper>
	)
}

export default App