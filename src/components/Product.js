import React from 'react'
import styled from 'styled-components'
import ProductFooter from './ProductFooter'
import ProductImage from './ProductImage'
import PropTypes from 'prop-types'
import { routes } from './App'
import { Link } from 'react-router-dom'

const ProductImageWrapper = styled.div`
	background-color: white;
	padding: 1rem;
	display: flex;
	height: 200px;
`
const ProductFooterWrapper = styled.div`
	margin-top: 0.5rem;
`
const Wrapper = styled(Link)`
	display: flex;
	flex-direction: column;
	color: inherit;
`

const Product = ({ product: { id }, product }) =>
{
	const getLink = () => routes.find(route => route.name == 'Product').path.replace(':id', id)

	return (
		<Wrapper to={ getLink() }>
			<ProductImageWrapper><ProductImage product={ product } /></ProductImageWrapper>
			<ProductFooterWrapper><ProductFooter product={ product } /></ProductFooterWrapper>
		</Wrapper>
	)
}

Product.propTypes =
{
	product: PropTypes.shape({
		id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
	}).isRequired
}

export default Product