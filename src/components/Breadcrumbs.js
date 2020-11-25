import React, { Fragment } from 'react'
import styled from 'styled-components'
import { routes } from './App'
import { Link, useRouteMatch } from 'react-router-dom'

const Wrapper = styled.div`
	font-size: 0.8rem;
	display: grid;
	grid-gap: 0.5rem;
	grid-auto-flow: column;
	grid-auto-columns: max-content;

	> span
	{
		color: var(--bs-secondary);
	}
	> span:last-child
	{
		display: none;
	}
`

const Breadcrumbs = () =>
{
	const getRoutes = () => routes.filter(({ path }) => useRouteMatch({ path }))
	const getRouteMatches = () => getRoutes().map(({ path, name }) => ({ ...useRouteMatch({ path }), name }))

	return (
		<Wrapper>
			{ getRouteMatches().map(({ url, name }) => <Fragment key={ url }>
				<Link to={ url }>{ name }</Link>
				<span><i className='fa fa-xs fa-chevron-right'></i></span>
			</Fragment>) }
		</Wrapper>
	)
}

export default Breadcrumbs