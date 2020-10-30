import React from 'react'
import styled from 'styled-components'
import ProductInfo from './ProductInfo'
import ProductImage from './ProductImage'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductImageWrapper = styled.div`
	background-color: white;
	padding: 1rem;
	flex: 1;
`
const ProductInfoWrapper = styled.div`
	margin-top: 0.5rem;
`
const Wrapper = styled(Link)`
	display: flex;
	flex-direction: column;
	color: inherit;
`

export default function Product ({ product })
{
	return (
		<Wrapper to={ `/products/${ product.id }` }>
			<ProductImageWrapper><ProductImage product={ product } /></ProductImageWrapper>
			<ProductInfoWrapper><ProductInfo product={ product } /></ProductInfoWrapper>
		</Wrapper>
	)
}

Product.propTypes =
{
	product: PropTypes.shape({
		id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
	}).isRequired
}