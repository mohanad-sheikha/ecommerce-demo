import React from 'react'
import AppFooter from '../components/AppFooter'
import { Router } from 'react-router-dom'

export default { title: 'Components/App Footer', component: AppFooter, decorators: [ (Story) => <Router><Story /></Router> ] }

const Template = (args) => <AppFooter { ...args } />

export const Default = Template.bind({})