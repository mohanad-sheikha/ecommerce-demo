import React from 'react'
import styled from 'styled-components'
import ProductPrice from './ProductPrice'
import PropTypes from 'prop-types'

const ProductName = styled.h6`
	font-weight: 400;
	overflow: hidden;
	overflow-wrap: break-word;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	margin-bottom: 0;
`
const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
`

const ProductFooter = ({ product: { name, price, originalPrice } }) =>
{
	return (
		<Wrapper>
			<ProductName>{ name }</ProductName>
			<ProductPrice value={ price } originalValue={ originalPrice } />
		</Wrapper>
	)
}

ProductFooter.propTypes =
{
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	}).isRequired
}

export default ProductFooter