import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.dl`
	display: grid;
	grid-template-columns: auto auto;
	grid-row-gap: 0.5rem;
	grid-column-gap: 2rem;
	margin: 0;
	align-items: baseline;
`
const Label = styled.dt`
	font-weight: 400;
	color: var(--bs-secondary);
	white-space: nowrap;
`
const Value = styled.dd`
	margin: 0;
	line-break: anywhere;
`

const ProductSpecifications = ({ product }) =>
{
	const humanLabels = {
		'id': 'Identifier',
		'price': 'Price',
		'name': 'Name',
		'imageUrl': 'Image URL',
	}

	return (
		<Wrapper>
			{ product && Object.entries(product).map(([ label, value ]) => (
				<React.Fragment key={ label }>
					<Label>{ humanLabels[ label ] || label }</Label>
					<Value>{ value }</Value>
				</React.Fragment>
			)) }
		</Wrapper>
	)
}

ProductSpecifications.propTypes =
{
	product: PropTypes.object.isRequired
}

export default ProductSpecifications