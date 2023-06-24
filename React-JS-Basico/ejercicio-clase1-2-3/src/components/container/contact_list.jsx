import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'

export default function ContactList () {
  const defaultContact = new Contact('Tomas', 'Quinteros', 'tomassaidquinteros@gmail.com', true)
  return (
    <div>
      <h1>
        Your Contacts
      </h1>
      <ContactComponent contact={defaultContact} />
    </div>
  )
}
