import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import uniqid from 'uniqid'
import ProductsStore from '../mobx/ProductsStore'
import PropTypes from 'prop-types'
import { useObserver } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 1rem;
`

const Products = ({ products }) =>
{
	return useObserver(() => (
		<Wrapper>
			{ products && products.map(product => <Product key={ product.id } product={ product } />) }
		</Wrapper>
	))
}

Products.propTypes =
{
	products: PropTypes.arrayOf(PropTypes.object)
}

Products.defaultProps =
{
	products: ProductsStore.all
}

export default Products