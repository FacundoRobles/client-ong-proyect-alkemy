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
            placeholder: 'Nombre',
            type: 'text',
            name: 'name'
        },
        {
            label: 'Email',
            placeholder: 'Email',
            type: 'text',
            name: 'email'
        },
        {
            label: 'Message',
            placeholder: 'Message',
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
    switch (type) {
        case FETCH_CONTACT_SUCCEEDED:
            return {
                ...state,
                form: {
                    name: props.contact.name,
                    email: props.contact.email,
                    message: props.contact.message
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
                    documents: props
                }
            };
        default:
            return state;
    }
};
export default contactForm;
