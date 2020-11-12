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
import { Switch, Route, useLocation } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useTransition, animated, config } from 'react-spring'

const Wrapper = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-rows: min-content auto min-content;
	background-color: var(--moe-app-background);
`
const Content = styled(animated.div).attrs(() => ({ className: 'container' }))`
	padding: 2rem 1rem;
	display: grid;
	grid-auto-flow: row;
	grid-gap: 1rem;
	grid-auto-rows: min-content;
	will-change: opacity;
`
const SwitchWrapper = styled(animated.div)`
	will-change: opacity;
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
	const location = useLocation()
	const transitions = useTransition(location, location => location.pathname, {
		from: { opacity: 0 }, enter: { opacity: 1 }, leave: { display: 'none' }, config: config.gentle
	})

	return (
		<Wrapper>
			<Elements stripe={ stripePromise }>
				<AppHeader />
				<Content>
					<Breadcrumbs />
					{ transitions.map(({ props: style, key }) => (
						<SwitchWrapper key={ key } style={ style }>
							<Switch>
								{ routes && routes.map(props => <Route key={ props.path } { ...props } />) }
							</Switch>
						</SwitchWrapper>
					)) }
				</Content>
				<AppFooter />
			</Elements>
		</Wrapper>
	)
}

export default App