import React, { Fragment, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CartStore from '../mobx/CartStore'
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
	position: absolute;
	top: 1rem; right: 1rem; bottom: 1rem; left: 1rem;
	display: flex;
	opacity: 0;
	pointer-events: none;
	transition: opacity 300ms;

	${ props => props.isVisible && `
		opacity: 1;
		pointer-events: auto;
	`}
`
const Container = styled.div`
	margin-left: auto;
	margin-bottom: auto;
	background-color: var(--moe-light-secondary);
	display: grid;
	grid-template-columns: min-content auto min-content;
	grid-gap: 1rem;
	z-index: 1;
	padding: 0.25rem 1rem;
	border-radius: 50rem;
`
const Action = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	box-shadow: none !important;
`

const ProductCartActions = ({ product }) =>
{
	const getProductFromCart = () => CartStore.all.find(({ id }) => id == product.id)
	const getQuantity = () => getProductFromCart()?.quantity ?? 0
	const increaseQuantity = () => CartStore.addProduct(product)
	const decreaseQuantity = () => CartStore.removeProduct(product)

	return (
		<Wrapper isVisible={ getProductFromCart() }>
			<Container>
				<Action onClick={ () => { decreaseQuantity() } }>
					<i className='fa fa-sm fa-minus'></i>
				</Action>
				<div>{ getQuantity() }</div>
				<Action onClick={ () => { increaseQuantity() } }>
					<i className='fa fa-sm fa-plus'></i>
				</Action>
			</Container>
		</Wrapper>
	)
}

ProductCartActions.propTypes =
{
	product: PropTypes.shape({
		id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
	}).isRequired
}

export default observer(ProductCartActions)