import Swal from 'sweetalert2';
import {
    FETCH_LOGIN_SUCCEEDED,
    SET_REQUEST_FLAG,
    LOGOUT,
    SET_SYSTEM_MSG
} from './types';

const initialState = {
    requestingSession: false,
    user: {
        userAgent: {}
    },
    isAuthenticate: false,
    flagRequest: false,
    sessionForm: {
        firstName: '',
        lastName: '',
        email: ''
    },
    sessionFields: [
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
        }
    ]
};

const Session = (state = initialState, {type, ...props}) => {
    switch (type) {
        case SET_REQUEST_FLAG: {
            return {
                ...state,
                flagRequest: props.flag
            };
        }

        case LOGOUT:
            return {
                requestingSession: false,
                user: {
                    userAgent: {}
                },
                isAuthenticate: false
            };

        case FETCH_LOGIN_SUCCEEDED:
            return {
                ...state,
                requestingSession: false,
                user: {
                    userAgent: props
                },
                isAuthenticate: true,
                sessionForm: props
            };

        case SET_SYSTEM_MSG:
            Swal.fire(props);
            return {
                ...state
            };
        default:
            return state;
    }
};

export default Session;
