import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CartStore from '../mobx/CartStore'
import Products from './Products'
import CartPageFooter from './CartPageFooter'
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 1rem;

	hr
	{
		margin: 0;
	}
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

	return (
		<Wrapper>
			<Title>Shopping Cart</Title>
			{ products?.length > 0 ? (
				<Fragment>
					<Products products={ products } />
					<hr />
					<CartPageFooter />
				</Fragment>)
				: <MetaText>Products added to your cart will be here</MetaText> }
		</Wrapper>
	)
}

export default observer(CartPage)