import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import ProductsStore from '../mobx/ProductsStore'
import Products from './Products'
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: min-content auto;
	grid-gap: 1rem;
	min-height: 250px;
`
const Title = styled.h4`
	margin-bottom: 0;
`
const MetaTitle = styled.h6`
	margin-bottom: 0;
	font-size: 0.9rem;
	color: var(--bs-secondary);
`
const Header = styled.div``
const loadingState = <Fragment>
	<Title><Skeleton width={ 250 } /></Title>
</Fragment>

const NewProducts = () =>
{
	const { newlyAdded: products, isLoading } = ProductsStore

	return (
		<Wrapper>
			{ isLoading ? loadingState : <Header>
				<Title>New Releases</Title>
			</Header> }
			<Products products={ products } isLoading={ isLoading } size='medium' />
		</Wrapper>
	)
}

export default observer(NewProducts)