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
const Title = styled.h4`
	margin-bottom: 0;
`
const MetaText = styled.div`
	color: var(--bs-secondary);
`
const loadingState = <Fragment>
	<Title><Skeleton width={ 300 } /></Title>
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
		let unmounted = false
		ProductsStore.findFuzzyMatches(name).then(matches =>
		{
			if (!unmounted)
			{
				const goodMatches = matches.filter(match => match.score <= matchThreshold)
				const badMatches = matches.filter(match => match.score > matchThreshold)
				setRelevantProducts(goodMatches.map(match => match.item))
				setOtherProducts(badMatches.map(match => match.item))
			}
		})
		return () => { unmounted = true }
	}, [ name ])

	return (
		<Wrapper>
			{ ProductsStore.isSearching ? loadingState : <Fragment>
				{ relevantProducts?.length > 0 && <Fragment>
					<Title>Results for "{ name }"</Title>
					<Products products={ relevantProducts } />
				</Fragment> }
				{ relevantProducts?.length > 0 && otherProducts?.length > 0 && <hr /> }
				{ otherProducts?.length > 0 && <Fragment>
					<Title>Other results</Title>
					<Products products={ otherProducts } />
				</Fragment> }
				{ relevantProducts?.length == 0 && otherProducts?.length == 0 && <Fragment>
					<MetaText>No results found for "{ name }"</MetaText>
				</Fragment> }
			</Fragment> }
		</Wrapper>
	)
}

export default observer(ProductsSearchPage)