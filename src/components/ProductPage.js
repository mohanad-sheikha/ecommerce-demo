import React, { Fragment } from 'react'
import styled from 'styled-components'
import ProductsStore from '../mobx/ProductsStore'
import ProductPageError from './ProductPageError'
import ProductPageHeader from './ProductPageHeader'
import ProductImage from './ProductImage'
import ProductSpecifications from './ProductSpecifications'
import { useParams } from 'react-router-dom'
import { useObserver } from 'mobx-react-lite'

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
`

const ProductPage = () =>
{
	const { id } = useParams()
	const product = ProductsStore.byId[ String(id) ]

	return useObserver(() => (
		<Fragment>
			{ product ? (
				<Wrapper>
					<ProductPageHeader product={ product } />
					<ProductImageWrapper>
						<ProductImage product={ product } />
					</ProductImageWrapper>
					<hr />
					<ProductSpecifications product={ product } />
				</Wrapper>
			) : <ProductPageError text="I didn't find that product." />
			}
		</Fragment>
	))
}

export default ProductPage