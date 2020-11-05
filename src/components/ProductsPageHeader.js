import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Dropdown from './Dropdown'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 1rem;
	justify-content: space-between;
`
const Title = styled.h4`
	margin-bottom: 0;
`
const ActionGroup = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 1rem;
`
const Action = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	box-shadow: none !important;
`

const ProductsPageHeader = ({ isFilterVisible, toggleFilter }) =>
{
	const sortButtonRef = useRef(null)

	return (
		<Wrapper>
			<Title>Browse Products</Title>
			<ActionGroup>
				<Action onClick={ toggleFilter }><i className='fa fa-sm fa-filter'></i></Action>
				<Action ref={ sortButtonRef }><i className='fa fa-sort'></i></Action>
				<Dropdown reference={ sortButtonRef }>
					<div>Most Relevant</div>
					<div>Lowest Price</div>
				</Dropdown>
			</ActionGroup>
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