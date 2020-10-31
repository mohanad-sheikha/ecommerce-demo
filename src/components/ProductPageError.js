import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div.attrs(() => ({ className: 'alert-danger' }))`
	padding: 1rem;
	text-align: center;
`
const Title = styled.h5`
`

const ProductPageError = ({ text }) =>
{
	const titles = [ 'Uh-oh...', 'Hmmm...', 'Apologies...' ]
	return (
		<Wrapper>
			<Title>{ titles[ Math.floor(Math.random() * titles.length) ] }</Title>
			{ text }
		</Wrapper>
	)
}

ProductPageError.propTypes =
{
	text: PropTypes.string.isRequired
}

export default ProductPageError