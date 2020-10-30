import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ProductsPage from './ProductsPage'
import HomePage from './HomePage'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: hsl(0, 0%, 90%);
`
const Content = styled.div`
	padding: 1rem;
	height: 0;
	flex: 1;
`

export default function App ()
{
	return (
		<Wrapper>
			<Router>
				<AppHeader />
				<Content>
					<Switch>
						<Route exact strict path='/'><HomePage /></Route>
						<Route path='/products'><ProductsPage /></Route>
					</Switch>
				</Content>
				<AppFooter />
			</Router>
		</Wrapper>
	)
}