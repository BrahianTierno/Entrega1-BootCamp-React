import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'


const ContactComponent = ({dataContact}) => {
  return (
    <div>
    <h3>Name:{dataContact.name}</h3>
    <h3>Lastname:{dataContact.lastname}</h3>
    <h3>Email:{dataContact.email}</h3>
    <h3>State:{dataContact.conected ? 'On-Line' : 'Offline'}</h3>
    </div>
  )
}

ContactComponent.propTypes = {
   dataContact : PropTypes.instanceOf(Contact)  
}

export default ContactComponent