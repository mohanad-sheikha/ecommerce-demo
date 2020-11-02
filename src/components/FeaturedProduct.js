import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProductImage from './ProductImage'
import FeaturedProductInfo from './FeaturedProductInfo'
import { Link } from 'react-router-dom'
import { routes } from './App'

const Wrapper = styled(Link)`
	min-height: 0;
	position: relative;
`

const FeaturedProduct = ({ product: { id, name, price, originalPrice, imageUrl }, product }) =>
{
	const getLink = () => routes.find(route => route.name == 'Details').path.replace(':id', id)

	return (
		<Wrapper to={ getLink() }>
			<ProductImage product={ product } />
			<FeaturedProductInfo product={ product } />
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