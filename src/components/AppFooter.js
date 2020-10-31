import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.footer`
	padding: 0.5rem 1rem;
	border-top: 1px solid hsl(0, 0%, 80%);
`
const ColumnTitle = styled.h6`
`
const LinksContainer = styled.div`
	display: grid;
	grid-auto-flow: row;
`
const NavColumn = styled.div`
	display: flex;
	flex-direction: column;
`
const Container = styled.div.attrs(() => ({ className: 'container' }))`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 2rem;
	justify-content: space-evenly;
`

const AppFooter = () =>
{
	return (
		<Wrapper>
			<Container>
				<NavColumn>
					<ColumnTitle>Ecommerce Demo</ColumnTitle>
					<LinksContainer>
						<Link to='/about'>About</Link>
						<Link to='/contact'>Contact</Link>
					</LinksContainer>
				</NavColumn>
				<NavColumn>
					<ColumnTitle>Navigate</ColumnTitle>
					<LinksContainer>
						<Link to='/'>Home</Link>
						<Link to='/products'>Products</Link>
					</LinksContainer>
				</NavColumn>
			</Container>
		</Wrapper>
	)
}

export default AppFooter