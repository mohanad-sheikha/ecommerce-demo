import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.dl`
	display: grid;
	grid-template-columns: min-content minmax(min-content, 300px);
	grid-row-gap: 0.5rem;
	grid-column-gap: 2rem;
	margin: 0;
	align-items: baseline;
`
const Label = styled.dt`
	font-weight: 400;
	white-space: nowrap;
`
const Value = styled.dd`
	margin: 0;
	line-break: anywhere;
	color: var(--bs-secondary);
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`

const ProductSpecifications = ({ product }) =>
{
	const humanLabels = {
		'id': 'Identifier',
		'originalPrice': 'Original Price',
		'price': 'Price',
		'name': 'Name',
		'imageUrl': 'Image URL',
		'size': 'Size',
	}

	return (
		<Wrapper>
			{ product && Object.entries(product).map(([ label, value ]) => (
				<Fragment key={ label }>
					<Label>{ humanLabels[ label ] || label }</Label>
					<Value>{ value }</Value>
				</Fragment>
			)) }
		</Wrapper>
	)
}

ProductSpecifications.propTypes =
{
	product: PropTypes.object.isRequired
}

export default ProductSpecifications