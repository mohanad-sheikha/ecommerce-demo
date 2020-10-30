import React from 'react'
import styled from 'styled-components'
import ProductInfo from './ProductInfo'
import ProductImage from './ProductImage'
import PropTypes from 'prop-types'

const ProductImageWrapper = styled.div`
	background-color: white;
	padding: 1rem;
`
const ProductInfoWrapper = styled.div`
	margin-top: 1rem;
`
const Wrapper = styled.div`
`

export default function Product ({ product })
{
	return (
		<Wrapper>
			<ProductImageWrapper><ProductImage product={ product } /></ProductImageWrapper>
			<ProductInfoWrapper><ProductInfo product={ product } /></ProductInfoWrapper>
		</Wrapper>
	)
}

Product.propTypes =
{
	product: PropTypes.object.isRequired
}