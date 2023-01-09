import React from 'react'
import ContactComponent from '../pure/ContactComponent'
import { Contact } from '../../models/contact.class'

const contactData = new Contact('Brahian','Tierno','braghian2060@gmail.com',false)

const ContainerContact = props => {
  return (
    <div>
        <ContactComponent dataContact={contactData}></ContactComponent>
    </div>
  )
}



export default ContainerContact