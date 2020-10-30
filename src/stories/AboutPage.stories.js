import React from 'react'
import AboutPage from '../components/AboutPage'

export default { title: 'Pages/About', component: AboutPage }

const Template = (args) => <AboutPage { ...args } />

export const Default = Template.bind({})