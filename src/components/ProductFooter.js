import React from 'react'
import styled from 'styled-components'
import Currency from './Currency'
import PropTypes from 'prop-types'

const ProductName = styled.h6`
	font-weight: 400;
	overflow: hidden;
	overflow-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`
const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	overflow: hidden;
`
const ProductPrice = styled.div`
	color: black !important;
`

const ProductFooter = ({ product: { name, price } }) =>
{
	return (
		<Wrapper>
			<ProductName>{ name }</ProductName>
			<ProductPrice><Currency value={ price } /></ProductPrice>
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