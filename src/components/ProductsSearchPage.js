import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import Products from './Products'
import ProductsStore from '../mobx/ProductsStore'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 1rem;
	
	> hr
	{
		margin: 0;
	}
`
const RelevantProductsTitle = styled.h4`
	margin-bottom: 0;
`
const OtherProductsTitle = styled.h5`
	margin-bottom: 0;
`
const loadingState = <Fragment>
	<RelevantProductsTitle><Skeleton width={ 300 } /></RelevantProductsTitle>
	<Products isLoading={ true } />
</Fragment>

const ProductsSearchPage = () =>
{
	const { name } = useParams()
	const [ relevantProducts, setRelevantProducts ] = useState(null)
	const [ otherProducts, setOtherProducts ] = useState(null)
	const matchThreshold = 0.3

	useEffect(() =>
	{
		ProductsStore.findFuzzyMatches(name).then(matches =>
		{
			const highMatches = matches.filter(match => match.score <= matchThreshold)
			const lowMatches = matches.filter(match => match.score > matchThreshold)
			setRelevantProducts(highMatches.map(match => match.item))
			setOtherProducts(lowMatches.map(match => match.item))
		})
	}, [ name ])

	return (
		<Wrapper>
			{ ProductsStore.isSearching ? loadingState : <Fragment>
				{ relevantProducts?.length > 0 && <Fragment>
					<RelevantProductsTitle>Results for "{ name }"</RelevantProductsTitle>
					<Products products={ relevantProducts } />
				</Fragment> }
				{ relevantProducts?.length > 0 && otherProducts?.length > 0 && <hr /> }
				{ otherProducts?.length > 0 && <Fragment>
					<OtherProductsTitle>Other results</OtherProductsTitle>
					<Products products={ otherProducts } />
				</Fragment> }
			</Fragment> }
		</Wrapper>
	)
}

export default observer(ProductsSearchPage)