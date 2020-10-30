import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.img`
	background-color: hsl(0, 0%, 50%);
	width: 100%;
	height: auto;
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