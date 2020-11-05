import React, { Fragment } from 'react'
import styled from 'styled-components'
import ProductsStore from '../mobx/ProductsStore'
import ProductPageError from './ProductPageError'
import ProductPageHeader from './ProductPageHeader'
import ProductImage from './ProductImage'
import ProductSpecifications from './ProductSpecifications'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import ProductCartActions from './ProductCartActions'

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
`

const ProductPage = () =>
{
	const { id } = useParams()
	const product = ProductsStore.byId[ String(id) ]

	return (
		<Fragment>
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
		</Fragment>
	)
}

export default observer(ProductPage)