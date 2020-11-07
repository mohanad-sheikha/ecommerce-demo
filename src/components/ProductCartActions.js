import React, { Fragment, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CartStore from '../mobx/CartStore'
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
	position: absolute;
	top: 1rem; right: 1rem;
	display: grid;
	grid-template-columns: min-content auto min-content;
	grid-gap: 1rem;
	opacity: 0;
	background-color: var(--moe-light-secondary);
	z-index: 1;
	padding: 0.25rem 1rem;
	border-radius: 0.5rem;
	transition: opacity 300ms;
	pointer-events: none;

	${ props => props.isVisible && `
		opacity: 1;
		pointer-events: auto;
	`}
`
const Action = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	box-shadow: none !important;
	display: flex;

	> i
	{
		margin: auto;
	}
`

const ProductCartActions = ({ product }) =>
{
	const getProductFromCart = () => CartStore.all.find(({ id }) => id == product.id)
	const getQuantity = () => getProductFromCart()?.quantity ?? 0
	const increaseQuantity = () => CartStore.addProduct(product)
	const decreaseQuantity = () => CartStore.removeProduct(product)

	return (
		<Wrapper isVisible={ getProductFromCart() }>
			<Action onClick={ () => { decreaseQuantity() } }>
				<i className='fa fa-xs fa-minus'></i>
			</Action>
			<div>{ getQuantity() }</div>
			<Action onClick={ () => { increaseQuantity() } }>
				<i className='fa fa-xs fa-plus'></i>
			</Action>
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