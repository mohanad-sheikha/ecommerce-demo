import React, { Fragment } from 'react'
import styled from 'styled-components'
import ProductsStore from '../mobx/ProductsStore'
import ProductPageError from './ProductPageError'
import ProductPageHeader from './ProductPageHeader'
import ProductImage from './ProductImage'
import ProductSpecifications from './ProductSpecifications'
import ProductCartActions from './ProductCartActions'
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
const ProductImageWrapper = styled.div`
	padding: 2rem;
	background-color: white;
	height: 300px;
	position: relative;
	border-radius: 0.25rem;
`
const loadingState = <Fragment>
	<Skeleton width={ 200 } />
	<Skeleton width={ 100 } />
</Fragment>

const ProductPage = () =>
{
	const { id } = useParams()
	const product = ProductsStore.byId[ id ]
	const { isLoading } = ProductsStore

	return (
		<Fragment>
			{ isLoading ? loadingState : <Fragment>
				{ product ? (
					<Wrapper>
						<ProductPageHeader product={ product } />
						<ProductImageWrapper>
							<ProductCartActions product={ product } />
							<ProductImage product={ product } />
						</ProductImageWrapper>
						<hr />
						<ProductSpecifications product={ product } />
					</Wrapper>
				) : <ProductPageError text="I didn't find that product." />
				}
			</Fragment> }
		</Fragment>
	)
}

export default observer(ProductPage)