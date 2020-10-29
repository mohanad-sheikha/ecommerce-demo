import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`
const Title = styled.h4`
	margin-bottom: 0;
`
const Actions = styled.div`
	margin-left: 1rem;
`

export default function ProductsPageHeader ()
{
	return (
		<Wrapper>
			<Title>Browse Products</Title>
			<Actions>
				<button className='btn p-0'><i className='fa fa-chevron-left'></i></button>
			</Actions>
		</Wrapper>
	)
}