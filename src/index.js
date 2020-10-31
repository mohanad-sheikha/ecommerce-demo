import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	a {
		text-decoration: none;
	}
	button {
		text-decoration: none !important;
	}
	.btn-link {
		box-shadow: none !important;
		outline: none !important;
		border: none !important;
	}
	:root
	{
		--moe-border-style: solid;
		--moe-border-color: hsl(0, 0%, 80%);
		--moe-border-small: 1px var(--moe-border-style) var(--moe-border-color);
		--moe-border-medium: 2px var(--moe-border-style) var(--moe-border-color);
	}
`

ReactDOM.render(<React.Fragment><App /><GlobalStyle /></React.Fragment>, document.getElementById('app'))