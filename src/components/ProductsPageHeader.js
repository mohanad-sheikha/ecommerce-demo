import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 1rem;
	border-bottom: 2px solid hsl(0, 0%, 80%);
`
const Title = styled.h4`
	margin-bottom: 0;
`
const Actions = styled.div`
	margin-left: 1rem;
`
const SidebarExpandButton = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	padding: 0;
	text-align: right;
`

export default function ProductsPageHeader ({ isSidebarVisible, toggleSidebar })
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