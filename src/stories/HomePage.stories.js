import React from 'react'
import HomePage from '../components/HomePage'

export default { title: 'Pages/Home', component: HomePage }

const Template = (args) => <HomePage { ...args } />

export const Default = Template.bind({})