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
const SidebarExpandButton = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	padding: 0;
	box-shadow: none !important;
`

const ProductsPageHeader = ({ isSidebarVisible, toggleSidebar }) =>
{
	return (
		<Wrapper>
			<Title>Browse Products</Title>
			<Actions>
				<SidebarExpandButton onClick={ toggleSidebar }>
					<i className={ `fa fa-sm fa-${ isSidebarVisible ? 'chevron-right' : 'chevron-left' }` }></i>
				</SidebarExpandButton>
			</Actions>
		</Wrapper>
	)
}

ProductsPageHeader.propTypes =
{
	isSidebarVisible: PropTypes.bool,
	toggleSidebar: PropTypes.func
}

ProductsPageHeader.defaultProps =
{
	isSidebarVisible: true
}

export default ProductsPageHeader