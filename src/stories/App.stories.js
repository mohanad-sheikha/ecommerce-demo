import React from 'react'
import App from '../components/App'

export default { title: 'Components/App', component: App }

const Template = (args) => <App { ...args } />

export const Default = Template.bind({})