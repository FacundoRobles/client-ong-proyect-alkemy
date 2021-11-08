import Swal from 'sweetalert2';
import {
    FETCH_LOGIN_SUCCEEDED,
    SET_REQUEST_FLAG,
    LOGOUT,
    SET_SYSTEM_MSG,
    SUBMIT_SLIDES_SUCCEEDED,
    FETCH_SLIDES_SUCCEEDED
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
    ],
    form: {
        welcomeText: 'Texto de bienvenida',
        items: [{
            key: 1,
            imageUrl: 'https://wallpaperaccess.com/full/170249.jpg',
            text: 'A great landscape'
        },
        {
            key: 2,
            imageUrl: 'https://fondosmil.com/fondo/2256.jpg',
            text: 'A greater landscape'
        },
        {
            key: 3,
            imageUrl: 'https://www.solofondos.com/wp-content/uploads/2016/04/3e2af664e061013a3d05aa99fa20c1d4.jpg',
            text: 'A greatest landscape'
        }]
    },
    fields: [
        {
            label: 'Saludo',
            placeholder: 'Nuevo texto de bienvenida',
            type: 'textarea',
            id: 'welcomeText',
            name: 'welcomeText'
        },
        {
            label: 'Slides',
            placeholder: 'Nuevo texto de bienvenida',
            type: 'array',
            id: 'items',
            name: 'items'
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
                ...state,
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
        case FETCH_SLIDES_SUCCEEDED:
            return {
                ...state,
                form: props.documents
            };
        case SET_SYSTEM_MSG:
            Swal.fire(props);
            return {
                ...state
            };
        case SUBMIT_SLIDES_SUCCEEDED:
            return {
                ...state,
                form: {...props}
            };
        default:
            return state;
    }
};

export default Session;
