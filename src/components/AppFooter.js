import React from 'react'
import styled from 'styled-components'
import { routes } from './App'
import { Link } from 'react-router-dom'

const Wrapper = styled.footer`
	padding: 1rem 0;
	border-top: var(--moe-border-small);
	background-color: var(--moe-light-secondary);
`
const ColumnTitle = styled.h6`
	color: var(--bs-secondary);
	margin-bottom: 0;
`
const LinksContainer = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.25rem;
`
const NavColumn = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
`
const Container = styled.div.attrs(() => ({ className: 'container' }))`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 1rem;

	> hr
	{
		margin: 0;
	}
`
const NavigationContainer = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: auto;
	grid-gap: 2rem;
	justify-content: start;
`
const Author = styled.h6`
	color: var(--bs-secondary);
	font-weight: 400;
	margin-bottom: 0;
`

const AppFooter = () =>
{
	const getAboutLink = () => routes.find(route => route.name == 'About')?.path
	const getContactLink = () => routes.find(route => route.name == 'Contact')?.path
	const getHomeLink = () => routes.find(route => route.name == 'Home')?.path
	const getProductsLink = () => routes.find(route => route.name == 'Products')?.path

	return (
		<Wrapper>
			<Container>
				<NavigationContainer>
					<NavColumn>
						<ColumnTitle>Meaux</ColumnTitle>
						<LinksContainer>
							<Link to={ getAboutLink() }>About</Link>
							<Link to={ getContactLink() }>Contact</Link>
						</LinksContainer>
					</NavColumn>
					<NavColumn>
						<ColumnTitle>Navigate</ColumnTitle>
						<LinksContainer>
							<Link to={ getHomeLink() }>Home</Link>
							<Link to={ getProductsLink() }>Products</Link>
						</LinksContainer>
					</NavColumn>
				</NavigationContainer>
				<hr />
				<Author>Mohanad Abu Sheikha</Author>
			</Container>
		</Wrapper>
	)
}

export default AppFooter