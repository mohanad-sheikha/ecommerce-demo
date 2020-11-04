import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CartStore from '../mobx/CartStore'
import Products from './Products'
import { useObserver } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 1rem;
`
const Title = styled.h4`
	margin-bottom: 0;
`
const MetaText = styled.div`
	color: var(--bs-secondary);
`

const CartPage = () =>
{
	const { all: products } = CartStore
	return useObserver(() => (
		<Wrapper>
			<Title>Shopping Cart</Title>
			{ products?.length > 0 ? <Products products={ products } />
				: <MetaText>Products added to your cart will be here.</MetaText> }
		</Wrapper>
	))
}

export default CartPage