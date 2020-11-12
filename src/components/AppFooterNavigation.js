import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { routes } from './App'
import { Link } from 'react-router-dom'

const Title = styled.h6`
	color: var(--bs-secondary);
	margin-bottom: 0;
`
const LinksContainer = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.25rem;
`
const Column = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
`
const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: auto;
	grid-gap: 2rem;
	justify-content: start;
`

const AppFooterNavigation = () =>
{
	const getAboutLink = () => routes.find(route => route.name == 'About')?.path
	const getContactLink = () => routes.find(route => route.name == 'Contact')?.path
	const getHomeLink = () => routes.find(route => route.name == 'Home')?.path
	const getProductsLink = () => routes.find(route => route.name == 'Products')?.path

	return (
		<Wrapper>
			<Column>
				<Title>Creator</Title>
				<LinksContainer>
					<Link to={ getAboutLink() }>About</Link>
					<Link to={ getContactLink() }>Contact</Link>
				</LinksContainer>
			</Column>
			<Column>
				<Title>Navigate</Title>
				<LinksContainer>
					<Link to={ getHomeLink() }>Home</Link>
					<Link to={ getProductsLink() }>Products</Link>
				</LinksContainer>
			</Column>
		</Wrapper>
	)
}

AppFooterNavigation.propTypes =
{
}

export default AppFooterNavigation