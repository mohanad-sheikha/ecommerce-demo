import React, { Fragment } from 'react'
import styled from 'styled-components'
import Product from './Product'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 1rem;
`
const loadingState = new Array(3).fill(0).map((value, index) => (
	<Product key={ index } product={ { id: index } } isLoading={ true } />
))

const Products = ({ products, isLoading }) =>
{
	return (
		<Wrapper>
			{ isLoading ? loadingState : <Fragment>
				{ products && products.map(product => <Product key={ product.id } product={ product } />) }
			</Fragment> }
		</Wrapper>
	)
}

Products.propTypes =
{
	products: PropTypes.arrayOf(PropTypes.object),
	isLoading: PropTypes.bool
}

export default Products