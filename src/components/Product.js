import React, { Fragment } from 'react'
import styled from 'styled-components'
import ProductFooter from './ProductFooter'
import ProductImage from './ProductImage'
import ProductCartActions from './ProductCartActions'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import { routes } from './App'
import { Link } from 'react-router-dom'

const ProductImageWrapper = styled.div`
	background-color: white;
	padding: 1rem;
	display: grid;
	height: 200px;
	position: relative;
	border-radius: 0.25rem;
	overflow: hidden;

	${ props => props.isLoading && `
		background-color: transparent;
		padding: 0;
	`}
`
const Container = styled(Link)`
	color: inherit;
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
`
const ProductFooterWrapper = styled.div``
const ProductCartActionsWrapper = styled.div``
const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	position: relative;

	${ props => props.size == 'small' && `
		${ ProductImageWrapper }
		{
			height: 100px;
			padding: 0;
		}
		${ ProductFooterWrapper }, ${ ProductCartActionsWrapper }
		{
			display: none;
			pointer-events: none;
		}
	`}
	${ props => props.size == 'medium' && `
		${ ProductImageWrapper }
		{
			height: 150px;
		}
	`}
`
const loadingState = <Wrapper>
	<Container as='div'>
		<ProductImageWrapper isLoading>
			<Skeleton width={ '100%' } height={ '100%' } />
		</ProductImageWrapper>
		<Skeleton />
		<Skeleton width={ '50%' } />
	</Container>
</Wrapper >

const Product = ({ product: { id }, product, isLoading, size }) =>
{
	const getProductDetailsLink = () => routes.find(route => route.name == 'Details').path.replace(':id', id)

	return (
		<Wrapper size={ size }>
			{ isLoading ? loadingState : <Fragment>
				<ProductCartActionsWrapper><ProductCartActions product={ product } /></ProductCartActionsWrapper>
				<Container to={ getProductDetailsLink() }>
					<ProductImageWrapper><ProductImage product={ product } /></ProductImageWrapper>
					<ProductFooterWrapper><ProductFooter product={ product } /></ProductFooterWrapper>
				</Container>
			</Fragment> }
		</Wrapper>
	)
}

Product.propTypes =
{
	product: PropTypes.shape({
		id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
	}).isRequired,
	isLoading: PropTypes.bool,
	size: PropTypes.oneOf([ 'small', 'medium', 'large' ])
}

export default Product