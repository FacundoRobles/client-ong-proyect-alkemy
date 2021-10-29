import {
    FETCH_MEMBERS_SUCCEEDED
} from './types';

const initialState = {
    memberForm: {
        name: '',
        image: ''
    },
    memberFields: [
        {
            label: 'Título',
            placeholder: 'Título',
            type: 'text',
            id: 'name',
            name: 'name'
        },
        {
            label: 'Imagen',
            placeholder: 'Imagen',
            type: 'text',
            id: 'image',
            name: 'image'
        }
    ],
    list: {
        documents: [],
        total: null
    }
};

const Members = (state = {...initialState}, {type, ...props}) => {
    switch (type) {
        case FETCH_MEMBERS_SUCCEEDED: {
            return {
                ...initialState,
                list: {
                    documents: props.documents,
                    total: props.documents.length
                }
            };
        }
        default:
            return state;
    }
};

export default Members;
