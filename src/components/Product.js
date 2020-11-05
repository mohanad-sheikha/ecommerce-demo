import React from 'react'
import styled from 'styled-components'
import ProductFooter from './ProductFooter'
import ProductImage from './ProductImage'
import ProductCartActions from './ProductCartActions'
import PropTypes from 'prop-types'
import { routes } from './App'
import { Link } from 'react-router-dom'

const ProductImageWrapper = styled.div`
	background-color: white;
	padding: 1rem;
	display: flex;
	height: 200px;
	position: relative;
`
const ProductFooterWrapper = styled.div`
	margin-top: 0.5rem;
`
const Container = styled(Link)`
	color: inherit;
`
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`

const Product = ({ product: { id }, product }) =>
{
	const getProductDetailsLink = () => routes.find(route => route.name == 'Details').path.replace(':id', id)

	return (
		<Wrapper>
			<ProductCartActions product={ product } />
			<Container to={ getProductDetailsLink() }>
				<ProductImageWrapper><ProductImage product={ product } /></ProductImageWrapper>
				<ProductFooterWrapper><ProductFooter product={ product } /></ProductFooterWrapper>
			</Container>
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