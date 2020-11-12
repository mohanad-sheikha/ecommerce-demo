import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import DescriptionList, { Label, Value } from './DescriptionList'
import styled from 'styled-components'
import moment from 'moment'
import firebase from 'firebase/app'
import Currency from './Currency'

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
	const specifications = {
		'id': { label: 'Identifier' },
		'name': { label: 'Name' },
		'imageUrl': { label: 'Image URL' },
		'size': { label: 'Size' },
		'originalPrice': { label: 'Original Price', formatValue: value => <Currency value={ value } /> },
		'price': { label: 'Price', formatValue: value => <Currency value={ value } /> },
		'dateAdded': { label: 'Date Added', formatValue: value => moment(new firebase.firestore.Timestamp(product.dateAdded._seconds, product.dateAdded._nanoseconds).toDate()).format('MMMM Do YYYY') }
	}

	const getLabel = (label) => specifications[ label ].label || label
	const getValue = (label, value) => specifications[ label ].formatValue?.(value) || value

	return (
		<Wrapper>
			<Title>Specifications</Title>
			<DescriptionList>
				{ product && Object.entries(product).map(([ label, value ]) => (
					<Fragment key={ label }>
						<Label>{ getLabel(label) }</Label>
						<Value>{ getValue(label, value) }</Value>
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