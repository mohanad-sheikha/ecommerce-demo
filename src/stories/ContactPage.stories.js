import React from 'react'
import ContactPage from '../components/ContactPage'

export default { title: 'Pages/Contact', component: ContactPage }

const Template = (args) => <ContactPage { ...args } />

export const Default = Template.bind({})