import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import DescriptionList, { Label, Value } from './DescriptionList'

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
		<DescriptionList>
			{ product && Object.entries(product).map(([ label, value ]) => (
				<Fragment key={ label }>
					<Label>{ humanLabels[ label ] || label }</Label>
					<Value>{ value }</Value>
				</Fragment>
			)) }
		</DescriptionList>
	)
}

ProductSpecifications.propTypes =
{
	product: PropTypes.object.isRequired
}

export default ProductSpecifications