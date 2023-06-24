import { useState } from "react"
import { Contacts } from "../../models/contacts.class"
import { ContactComponent } from "../pure/contacts"

export default function ContactList() {
    const defaultContacts = new Contacts('Tomás', 'Quinteros', true, 'tomassaidquinteros@gmail.com')
    const [contacts, setContacts] = useState([defaultContacts])

    function state(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].state = !tempContacts[index].state

        setContacts(tempContacts)
    }

    function deleteContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index, 1)
        setContacts(tempContacts)
    }

    function addContact(contact) {
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    return (
        <div className='w-2/4 flex flex-col items-center justify-center gap-8'>
            <div>
            <div className='p-8 bg-slate-200 w-full text-center border-2 border-gray-300'>
                <h1>Contacts</h1> 
            </div>
            <table className='border-x-2 border-b-2 w-full'>
                <thead>
                <tr className='grid grid-cols-4 gap-4 p-2 place-items-center'>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Emails</th>
                    <th>State</th>
                </tr>
                </thead>
                <tbody>
                {
                    contacts.map((value, index) => <ContactComponent key={index} contact={value} add={addContact} remove={deleteContact} state={state} />)
                }
                </tbody>
            </table>
            </div>
        </div>
    )
    }
