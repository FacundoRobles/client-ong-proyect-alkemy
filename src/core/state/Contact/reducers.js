import {
    FETCH_CONTACT_SUCCEEDED,
    FETCH_CONTACTS_SUCCEEDED,
    CLEAN_REGISTER_FORM
} from './types';

const initialState = {
    form: {
        name: '',
        email: '',
        message: ''
    },
    fields: [
        {
            label: 'Nombre',
            placeholder: 'John Doe',
            type: 'text',
            name: 'name'
        },
        {
            label: 'Email',
            placeholder: 'tunombre@mail.com',
            type: 'text',
            name: 'email'
        },
        {
            label: 'Mensaje',
            placeholder: 'Me gustaria ponerme en contacto contigo',
            type: 'textarea',
            name: 'message'
        }
    ],
    list: {
        documents: [],
        total: null
    }
};

const contactForm = (state = {...initialState}, {type, ...props}) => {
    const {contact} = props;
    switch (type) {
        case FETCH_CONTACT_SUCCEEDED:
            return {
                ...state,
                form: {
                    name: contact.name,
                    email: contact.email,
                    message: contact.message
                }
            };
        case CLEAN_REGISTER_FORM:
            return {
                ...state,
                form: {
                    name: '',
                    email: '',
                    message: ''
                }
            };
        case FETCH_CONTACTS_SUCCEEDED:
            return {
                ...state,
                list: {
                    documents: contact.contacts,
                    total: contact.length
                }
            };
        default:
            return state;
    }
};
export default contactForm;
