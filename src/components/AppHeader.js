import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.header`
	padding: 0.5rem 1rem;
	background-color: hsl(0, 0%, 95%);
	border-bottom: 1px solid hsl(0, 0%, 85%);
`
const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
`

export default function AppHeader ()
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