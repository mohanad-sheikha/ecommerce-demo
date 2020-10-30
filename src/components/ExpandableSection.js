import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
`
const Title = styled.h6`
	margin-bottom: 0;
`
const ExpandButton = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	padding: 0;
	flex: 1;
	text-align: right;
`
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-content: center;

	${ ExpandButton }
	{
		margin-left: 1rem;
	}
`
const Container = styled.div`
	display: none;

	${ props => props.isExpanded && `
		display: block;
	`}
`

export default function ExpandableSection ({ title, children })
{
	const [ isExpanded, setIsExpanded ] = useState(false)
	const toggleExpanded = () => { setIsExpanded(!isExpanded) }

	return (
		<Wrapper>
			<Header>
				<Title>{ title }</Title>
				<ExpandButton onClick={ toggleExpanded }>
					<i className={ `fas fa-sm fa-${ isExpanded ? 'minus' : 'plus' }` }></i>
				</ExpandButton>
			</Header>
			<Container isExpanded={ isExpanded }>
				{ children }
			</Container>
		</Wrapper>
	)
}

ExpandableSection.propTypes =
{
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]).isRequired
}