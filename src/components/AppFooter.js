import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.footer`
	padding: 2rem 1rem;
	border-top: var(--moe-border-small);
	background-color: var(--moe-light-secondary);
`
const ColumnTitle = styled.h6`
	color: var(--bs-secondary);
`
const LinksContainer = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.25rem;
`
const NavColumn = styled.div`
	display: flex;
	flex-direction: column;
`
const Container = styled.div.attrs(() => ({ className: 'container' }))`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 2rem;
	justify-content: start;
`

const AppFooter = () =>
{
	return (
		<Wrapper>
			<Container>
				<NavColumn>
					<ColumnTitle>Maux</ColumnTitle>
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