import React, { Fragment } from 'react'
import styled from 'styled-components'
import Product from './Product'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 1rem;

	${ props => props.size == 'small' && `
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	`}
	${ props => props.size == 'medium' && `
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	`}
`
const EmptyTitle = styled.h6`
	color: var(--bs-secondary);
`
const loadingState = (size) => new Array(3).fill(0).map((value, index) => (
	<Product key={ index } product={ { id: index } } isLoading={ true } size={ size } />
))
const emptyState = <EmptyTitle>Please check back later</EmptyTitle>

const Products = ({ products, isLoading, size }) =>
{
	return (
		<Wrapper size={ size }>
			{ isLoading ? loadingState(size) : <Fragment>
				{ products && products.length > 0 ? products.map(product => <Product key={ product.id } product={ product } size={ size } />) : emptyState }
			</Fragment> }
		</Wrapper>
	)
}

Products.propTypes =
{
	products: PropTypes.arrayOf(PropTypes.object),
	isLoading: PropTypes.bool,
	size: PropTypes.oneOf([ 'small', 'medium', 'large' ])
}

export default Products