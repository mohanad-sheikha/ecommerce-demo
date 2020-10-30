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
`

ReactDOM.render(<><App /><GlobalStyle /></>, document.getElementById('app'))