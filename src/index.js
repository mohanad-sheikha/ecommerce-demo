import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	a {
		text-decoration: none;
	}
`

ReactDOM.render( <><App /><GlobalStyle /></>, document.getElementById( 'app' ) )