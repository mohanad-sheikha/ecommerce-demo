import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.dl`
	display: grid;
	grid-template-columns: min-content minmax(min-content, auto);
	grid-row-gap: 0.5rem;
	grid-column-gap: 2rem;
	margin: 0;
`
export const Label = styled.dt`
	font-weight: 400;
	white-space: nowrap;
`
export const Value = styled.dd`
	margin: 0;
	line-break: anywhere;
	color: var(--bs-secondary);
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	user-select: text;
`

const DescriptionList = forwardRef(({ children, ...rest }, ref) =>
{
	return (
		<Wrapper { ...rest } ref={ ref }>
			{ children }
		</Wrapper>
	)
})

export default DescriptionList