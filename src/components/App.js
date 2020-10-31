import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ProductsPage from './ProductsPage'
import ProductPage from './ProductPage'
import HomePage from './HomePage'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
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
	height: 0;
	flex: 1;
`

const App = () =>
{
	return (
		<Wrapper>
			<Router>
				<AppHeader />
				<Content>
					<Switch>
						<Route exact strict path='/'><HomePage /></Route>
						<Route exact strict path='/products'><ProductsPage /></Route>
						<Route exact strict path='/products/:id'><ProductPage /></Route>
						<Route path='/contact'><ContactPage /></Route>
						<Route path='/about'><AboutPage /></Route>
					</Switch>
				</Content>
				<AppFooter />
			</Router>
		</Wrapper>
	)
}

export default App