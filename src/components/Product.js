import React from 'react'
import styled from 'styled-components'
import ProductInfo from './ProductInfo'
import ProductImage from './ProductImage'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	background-color: white;
	padding: 1rem;
`
const ProductInfoWrapper = styled.div`
	margin-top: 1rem;
`

export default function Product ({ product })
{
	return (
		<Wrapper>
			<ProductImage product={ product } />
			<ProductInfoWrapper>
				<ProductInfo product={ product } />
			</ProductInfoWrapper>
		</Wrapper>
	)
}

Product.propTypes =
{
	product: PropTypes.object.isRequired
}