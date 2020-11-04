import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 1rem;
	justify-content: space-between;
`
const Title = styled.h4`
	margin-bottom: 0;
`
const Actions = styled.div``
const FilterExpandButton = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	box-shadow: none !important;
`

const ProductsPageHeader = ({ isFilterVisible, toggleFilter }) =>
{
	return (
		<Wrapper>
			<Title>Browse Products</Title>
			<Actions>
				<FilterExpandButton onClick={ toggleFilter }>
					<i className={ `fa fa-sm fa-${ isFilterVisible ? 'chevron-right' : 'chevron-left' }` }></i>
				</FilterExpandButton>
			</Actions>
		</Wrapper>
	)
}

ProductsPageHeader.propTypes =
{
	isFilterVisible: PropTypes.bool,
	toggleFilter: PropTypes.func
}

ProductsPageHeader.defaultProps =
{
	isFilterVisible: true
}

export default ProductsPageHeader