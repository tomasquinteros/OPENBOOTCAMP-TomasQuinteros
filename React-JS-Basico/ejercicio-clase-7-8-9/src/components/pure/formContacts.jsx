import {useRef} from 'react'
import { Contacts } from '../../models/contacts.class'
import {PropTypes} from 'prop-types'

export const FormContacts = ({add}) => {
    const nameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    function addContact(e) {
        e.preventDefault()
        const contact = new Contacts(nameRef.current.value, lastnameRef.current.value, true, emailRef.current.value)
        add(contact)
    }
    return (
        <div className='w-full flex flex-col items-center justify-center gap-8 border-2 border-gray-300'>
            <h1 className='border-b-2 bg- w-full text-center p-8 border-gray-300 bg-slate-200'>Add new Contact</h1>
            <form onSubmit={(e) => addContact(e)} className='p-4 flex flex-col w-full gap-6'>
                <input required className='border-2 border-gray-200 rounded-md p-2' type="text" placeholder='Name...' ref={nameRef} />
                <input required className='border-2 border-gray-200 rounded-md p-2' type="text" placeholder='Lastname...' ref={lastnameRef}/>
                <input required className='border-2 border-gray-200 rounded-md p-2' type="email" placeholder='example@email.com' ref={emailRef} />
                <button className='px-8 py-2 bg-gray-800 text-gray-200 rounded-md m-4' type='submit'>Add</button>
            </form>
        </div>
    )
}

FormContacts.propTypes = {
    add: PropTypes.func.isRequired
}
