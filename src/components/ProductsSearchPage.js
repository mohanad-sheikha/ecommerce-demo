import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Products from './Products'
import ProductsStore from '../mobx/ProductsStore'
import { useParams } from 'react-router-dom'

const Wrapper = styled.div``
const RelevantProductsTitle = styled.h4`
	margin-bottom: 1rem;
`
const OtherProductsTitle = styled.h5`
	margin-bottom: 1rem;
`

const ProductsSearchPage = () =>
{
	const { name } = useParams()
	const [ relevantProducts, setRelevantProducts ] = useState([])
	const [ otherProducts, setOtherProducts ] = useState([])
	const matchThreshold = 0.3

	useEffect(() =>
	{
		const matches = ProductsStore.findFuzzyMatches(name)
		const highMatches = matches.filter(match => match.score <= matchThreshold)
		const lowMatches = matches.filter(match => match.score > matchThreshold)
		setRelevantProducts(highMatches.map(match => match.item))
		setOtherProducts(lowMatches.map(match => match.item))
	}, [ name ])

	return (
		<Wrapper>
			<RelevantProductsTitle>Showing results for "{ name }"</RelevantProductsTitle>
			<Products products={ relevantProducts } />
			{ otherProducts?.length > 0 && <Fragment>
				<hr />
				<OtherProductsTitle>Other results</OtherProductsTitle>
				<Products products={ otherProducts } />
			</Fragment> }
		</Wrapper>
	)
}

export default ProductsSearchPage