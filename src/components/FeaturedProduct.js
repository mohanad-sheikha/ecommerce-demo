import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProductImage from './ProductImage'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
	min-height: 0;
`

const FeaturedProduct = ({ product: { id, name, price, originalPrice, imageUrl }, product }) =>
{
	return (
		<Wrapper to={ `/products/${ id }` }>
			<ProductImage product={ product } />
		</Wrapper>
	)
}

FeaturedProduct.propTypes =
{
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		originalPrice: PropTypes.number,
		imageUrl: PropTypes.string.isRequired
	})
}

export default FeaturedProduct