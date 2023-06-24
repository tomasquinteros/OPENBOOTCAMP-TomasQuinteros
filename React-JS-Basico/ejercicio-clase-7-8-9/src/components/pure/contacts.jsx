import PropTypes from 'prop-types'
import { Contacts } from '../../models/contacts.class'
import { ToggleOffIcon, ToggleOnIcon, TrashIcon } from '../icons'

export const ContactComponent = ({contact, remove, state}) => {
    return (
            <tr className='grid grid-cols-4 p-4 place-content-start'>
            <td>
                <h1 className='font-bold'>
                { contact.name }
                </h1>
            </td>
            <td>
                <p>
                { contact.lastname }
                </p>
            </td>
            <td>
                <p>
                { contact.email }
                </p>
            </td>
            <td className='mx-auto'>
                { contact.completed ? 
                    <button onClick={() => state(contact)} className='text-green-500'>
                    <ToggleOnIcon/>
                    </button> : 
                    <button onClick={() => state(contact)} className='text-gray-800'>
                    <ToggleOffIcon />
                    </button>
                }
                <button onClick={() => remove(contact)} className='text-red-500'>
                <TrashIcon />
                </button>
            </td>
            </tr>
        )
}
ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacts).isRequired,
    remove: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired
}