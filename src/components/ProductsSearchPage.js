import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Products from './Products'
import ProductsStore from '../mobx/ProductsStore'
import { useParams } from 'react-router-dom'

const Wrapper = styled.div``
const Title = styled.h4`
	margin-bottom: 1rem;
`

const ProductsSearchPage = () =>
{
	const { name } = useParams()
	const [ products, setProducts ] = useState([])

	useEffect(() => { setProducts(ProductsStore.findProducts(name)) }, [ name ])

	return (
		<Wrapper>
			<Title>Showing results for "{ name }"</Title>
			<Products products={ products } />
		</Wrapper>
	)
}

ProductsSearchPage.propTypes =
{
}

export default ProductsSearchPage