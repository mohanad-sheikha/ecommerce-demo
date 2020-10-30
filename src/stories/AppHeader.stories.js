import React from 'react'
import AppHeader from '../components/AppHeader'
import { Router } from 'react-router-dom'

export default { title: 'Components/App Header', component: AppHeader, decorators: [ (Story) => <Router><Story /></Router> ] }

const Template = (args) => <AppHeader { ...args } />

export const Default = Template.bind({})