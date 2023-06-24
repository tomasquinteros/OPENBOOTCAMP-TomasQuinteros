import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'


const tomas = () => {
  return console.log("tomas")
}

console.log(tomas)
function ContactComponent ({contact}) {
  const [conected, setConected] = useState(contact.conected)
  function changeConected () {
    contact.conected = !conected
    setConected(!conected)
  }

  return (
    <div>
      <h2>
        {contact.name}
      </h2>
      <p>
        {contact.lastname}
      </p>
      <p>
        {contact.email} 
      </p>
      <span>
        {contact.conected ? 'Contact online' : 'Contact offline'}
        <input type='checkbox' onClick={ changeConected } />
      </span>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent
