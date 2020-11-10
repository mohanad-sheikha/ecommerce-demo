import React, { Fragment } from 'react'
import styled from 'styled-components'
import ProductFooter from './ProductFooter'
import ProductImage from './ProductImage'
import ProductCartActions from './ProductCartActions'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import { routes } from './App'
import { Link } from 'react-router-dom'

const ProductImageWrapper = styled.div`
	background-color: white;
	padding: 1rem;
	display: grid;
	height: 200px;
	position: relative;
	border-radius: 0.25rem;
	overflow: hidden;
`
const Container = styled(Link)`
	color: inherit;
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
`
const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	position: relative;
`
const loadingState = <Fragment>
	<Container as='div'>
		<Skeleton width={ '100%' } height={ 200 } />
		<Skeleton />
		<Skeleton width={ '50%' } />
	</Container>
</Fragment>

const Product = ({ product: { id }, product, isLoading }) =>
{
	const getProductDetailsLink = () => routes.find(route => route.name == 'Details').path.replace(':id', id)

	return (
		<Wrapper>
			{ isLoading ? loadingState : <Fragment>
				<ProductCartActions product={ product } />
				<Container to={ getProductDetailsLink() }>
					<ProductImageWrapper>
						<ProductImage product={ product } />
					</ProductImageWrapper>
					<ProductFooter product={ product } />
				</Container>
			</Fragment> }
		</Wrapper>
	)
}

Product.propTypes =
{
	product: PropTypes.shape({
		id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
	}).isRequired,
	isLoading: PropTypes.bool
}

export default Product