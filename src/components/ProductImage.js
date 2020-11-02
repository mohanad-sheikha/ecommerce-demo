import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	margin: auto;
`
const ErrorWrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	justify-content: center;
	align-content: center;
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	background-color: white;
	color: var(--bs-secondary);
	pointer-events: none;
`

const ErrorOverlay = () => <ErrorWrapper>
	<i className='fa fa-2x fa-file-image'></i>
</ErrorWrapper>

const ProductImage = ({ product: { imageUrl } }) =>
{
	const [ hasError, setHasError ] = useState(false)

	useEffect(() => { setHasError(false) }, [ imageUrl ])

	return (
		<Wrapper>
			<Image src={ imageUrl } onError={ () => { setHasError(true) } } />
			{ hasError && <ErrorOverlay /> }
		</Wrapper>
	)
}

ProductImage.propTypes =
{
	product: PropTypes.shape({
		imageUrl: PropTypes.string.isRequired
	}).isRequired
}

export default ProductImage