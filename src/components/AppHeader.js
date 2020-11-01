import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.header`
	padding: 0.5rem 1rem;
	background-color: var(--moe-light-secondary);
	border-bottom: var(--moe-border-small);
`
const NavContainer = styled.nav.attrs(() => ({ className: 'container' }))`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 2rem;
	justify-content: center;
`

const AppHeader = () =>
{
	return (
		<Wrapper>
			<NavContainer>
				<div>
					<Link to='/'>Home</Link>
				</div>
				<div>
					<Link to='/products'>Products</Link>
				</div>
			</NavContainer>
		</Wrapper>
	)
}

export default AppHeader