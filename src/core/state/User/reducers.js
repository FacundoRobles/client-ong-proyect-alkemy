import {
    FETCH_USER_SUCCEEDED,
    FETCH_USERS_SUCCEEDED,
    CLEAN_REGISTER_FORM
} from './types';

const initialState = {
    registerForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    },
    registerFields: [
        {
            label: 'Nombre',
            placeholder: 'Nombre',
            type: 'text',
            id: 'firstName',
            name: 'firstName'
        },
        {
            label: 'Apellido',
            placeholder: 'Apellido',
            type: 'text',
            id: 'lastName',
            name: 'lastName'
        },
        {
            label: 'Email',
            placeholder: 'Email',
            type: 'email',
            id: 'email',
            name: 'email'
        },
        {
            label: 'Contraseña',
            placeholder: 'Contraseña',
            type: 'password',
            id: 'password',
            name: 'password'
        }
    ],
    list: {
        documents: [],
        total: null
    }
};

const registerForm = (state = {...initialState}, {type, ...props}) => {
    switch (type) {
        case FETCH_USER_SUCCEEDED: {
            return {
                ...initialState,
                registerForm: {
                    ...state.registerForm,
                    ...props.user
                }
            };
        }
        case FETCH_USERS_SUCCEEDED: {
            return {
                ...state,
                list: {
                    documents: props.documents,
                    total: props.documents.length
                }
            };
        }
        case CLEAN_REGISTER_FORM: {
            return {
                ...state,
                registerForm: {
                    ...initialState.registerForm
                }
            };
        }
        default:
            return state;
    }
};
export default registerForm;
