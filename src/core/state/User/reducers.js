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

const registerForm = (state = {...initialState}, {type}) => {
    switch (type) {
        default:
            return state;
    }
};
export default registerForm;
