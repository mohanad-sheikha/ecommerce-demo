import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

const GlobalStyle = createGlobalStyle`
	* {
		user-select: none;
		-webkit-user-drag: none;
	}
	input {
		user-select: auto;
	}
	a {
		text-decoration: none;
	}
	button {
		text-decoration: none;
	}
	.btn-link {
		box-shadow: none;
		outline: none;
		padding: 0;
		border: none;
		line-height: 1;
		text-decoration: none;
		border-radius: 0;
	}
	body
	{
		line-height: normal;
		background-color: var(--moe-secondary-light);
	}
	.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6
	{
		line-height: normal;
	}
	:root
	{
		--moe-border-style: solid;
		--moe-border-color: hsl(0, 0%, 80%);
		--moe-border-small: 1px var(--moe-border-style) var(--moe-border-color);
		--moe-border-medium: 2px var(--moe-border-style) var(--moe-border-color);
		--moe-secondary-light: hsl(0, 0%, 92%);
		--moe-app-background: hsl(0, 0%, 87%);
	}
`

ReactDOM.render(<BrowserRouter><App /><GlobalStyle /></BrowserRouter>, document.getElementById('app'))