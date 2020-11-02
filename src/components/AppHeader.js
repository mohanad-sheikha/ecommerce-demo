import React from 'react'
import styled from 'styled-components'
import ProductsSearchInput from './ProductsSearchInput'
import { Link } from 'react-router-dom'

const Wrapper = styled.header`
	padding: 0.5rem 0;
	background-color: var(--moe-light-secondary);
	border-bottom: var(--moe-border-small);
`
const Container = styled.div.attrs(() => ({ className: 'container' }))`
	display: grid;
	grid-template-columns: min-content auto min-content;
	grid-gap: 2rem;
	align-items: center;

	> *
	{
		min-width: 0;
	}
`
const NavContainer = styled.nav`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 1rem;
	min-width: auto !important;
`
const ActionGroup = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-auto-flow: column;
`
const Action = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	padding: 0;
	margin: 0;
`

const AppHeader = () =>
{
	return (
		<Wrapper>
			<Container>
				<NavContainer>
					<Link to='/'>Home</Link>
					<Link to='/products'>Products</Link>
				</NavContainer>
				<ProductsSearchInput />
				<ActionGroup>
					<Action><i className='fa fa-user'></i></Action>
					<Action><i className='fa fa-shopping-bag'></i></Action>
				</ActionGroup>
			</Container>
		</Wrapper>
	)
}

export default AppHeader