import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`

export default function ProductImage ({ product: { imageUrl } })
{
	return (
		<Wrapper src={ imageUrl }></Wrapper>
	)
}

ProductImage.propTypes =
{
	product: PropTypes.shape({
		imageUrl: PropTypes.string.isRequired
	}).isRequired
}