import React from 'react'
import styled from 'styled-components'
import ProductsSearchInput from './ProductsSearchInput'
import NotificationIndicator from './NotificationIndicator'
import CartStore from '../mobx/CartStore'
import { Link } from 'react-router-dom'
import { routes } from './App'
import { useObserver } from 'mobx-react-lite'

const Wrapper = styled.header`
	padding: 0.5rem 0;
	background-color: var(--moe-light-secondary);
	border-bottom: var(--moe-border-small);
`
const Container = styled.div.attrs(() => ({ className: 'container' }))`
	display: grid;
	grid-template-columns: min-content auto min-content;
	grid-gap: 1rem;
	align-items: center;

	> *
	{
		min-width: 0;
	}
`
const IconLinkGroup = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-auto-flow: column;
`
const IconLink = styled(Link)`
	padding: 0;
	margin: 0;
	position: relative;
`

const AppHeader = () =>
{
	const getProductsLink = () => routes.find(route => route.name == 'Products')?.path
	const getHomeLink = () => routes.find(route => route.name == 'Home')?.path
	const getUserLink = () => routes.find(route => route.name == 'User')?.path
	const getCartLink = () => routes.find(route => route.name == 'Cart')?.path

	return useObserver(() => (
		<Wrapper>
			<Container>
				<IconLinkGroup>
					<IconLink to={ getHomeLink() } title='Home'>
						<i className='fa fa-home'></i>
					</IconLink>
					<IconLink to={ getProductsLink() } title='Products'>
						<i className='fa fa-th-large'></i>
					</IconLink>
				</IconLinkGroup>
				<ProductsSearchInput />
				<IconLinkGroup>
					<IconLink to={ getUserLink() } title='User'>
						<i className='fa fa-user'></i>
					</IconLink>
					<IconLink to={ getCartLink() } title='Cart'>
						<NotificationIndicator isVisible={ CartStore.hasProducts } variant='success' />
						<i className='fa fa-shopping-bag'></i>
					</IconLink>
				</IconLinkGroup>
			</Container>
		</Wrapper>
	))
}

export default AppHeader