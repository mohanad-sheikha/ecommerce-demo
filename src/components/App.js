import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductsPage from './ProductsPage'
import ProductPage from './ProductPage'
import HomePage from './HomePage'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import Breadcrumbs from './Breadcrumbs'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: hsl(0, 0%, 90%);
`
const Content = styled.div.attrs(() => ({ className: 'container' }))`
	padding: 1rem;
	flex: 1;
`
const BreadcrumbsWrapper = styled.div`
	margin-bottom: 0.5rem;
`

export const routes = [
	{ path: '/', name: 'Home', children: <HomePage />, exact: true, strict: true },
	{ path: '/products', name: 'Products', children: <ProductsPage />, exact: true, strict: true },
	{ path: '/products/:id', name: 'Product', children: <ProductPage />, exact: true, strict: true },
	{ path: '/contact', name: 'Contact', children: <ContactPage /> },
	{ path: '/about', name: 'About', children: <AboutPage /> },
]

const App = () =>
{
	return (
		<Wrapper>
			<Router>
				<AppHeader />
				<Content>
					<BreadcrumbsWrapper><Breadcrumbs /></BreadcrumbsWrapper>
					<Switch>
						{ routes && routes.map(props => (<Route key={ props.path } { ...props } />)) }
					</Switch>
				</Content>
				<AppFooter />
			</Router>
		</Wrapper>
	)
}

export default App