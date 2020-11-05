import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		user-select: none;
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
		--moe-light-secondary: hsl(0, 0%, 95%);
	}
`

ReactDOM.render(<Fragment><App /><GlobalStyle /></Fragment>, document.getElementById('app'))