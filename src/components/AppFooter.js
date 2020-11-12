import React from 'react'
import styled from 'styled-components'
import AppFooterNavigation from './AppFooterNavigation'
import { Link } from 'react-router-dom'

const Wrapper = styled.footer`
	padding: 1rem 0;
	border-top: var(--moe-border-small);
	background-color: var(--moe-secondary-light);
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
const Author = styled.h6`
	color: var(--bs-secondary);
	font-weight: 400;
	margin-bottom: 0;
	font-size: 0.8rem;
`

const AppFooter = () =>
{
	return (
		<Wrapper>
			<Container>
				<AppFooterNavigation />
				<hr />
				<Author>Designed and developed by Mohanad Abu Sheikha</Author>
			</Container>
		</Wrapper>
	)
}

export default AppFooter