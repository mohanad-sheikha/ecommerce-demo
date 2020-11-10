import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import DescriptionList, { Label, Value } from './DescriptionList'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-auto-flow: row;
`
const Title = styled.h5`
	margin-bottom: 0;
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
			<Title>Specifications</Title>
			<DescriptionList>
				{ product && Object.entries(product).map(([ label, value ]) => (
					<Fragment key={ label }>
						<Label>{ humanLabels[ label ] || label }</Label>
						<Value>{ value }</Value>
					</Fragment>
				)) }
			</DescriptionList>
		</Wrapper>
	)
}

ProductSpecifications.propTypes =
{
	product: PropTypes.object.isRequired
}

export default ProductSpecifications