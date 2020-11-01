import React from 'react'
import styled from 'styled-components'
import ProductPrice from './ProductPrice'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
`
const Title = styled.h4`
`

const ProductPageHeader = ({ product: { name, price, originalPrice } }) =>
{
	return (
		<Wrapper>
			<Title>{ name }</Title>
			<ProductPrice value={ price } originalValue={ originalPrice } />
		</Wrapper>
	)
}

ProductPageHeader.propTypes =
{
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		originalPrice: PropTypes.number,
	}).isRequired
}

export default ProductPageHeader