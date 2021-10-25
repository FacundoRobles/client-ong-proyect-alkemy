import {
    FETCH_ACTIVITY_SUCCEEDED,
    FETCH_ACTIVITIES_SUCCEEDED,
    CLEAN_REGISTER_FORM
} from './types';

const initialState = {
    form: {
        name: '',
        image: '',
        content: ''
    },
    fields: [
        {
            label: 'Nombre',
            placeholder: 'Nombre',
            type: 'text',
            name: 'name'
        },
        {
            label: 'Image',
            placeholder: 'Image',
            type: 'text',
            name: 'image'
        },
        {
            label: 'Content',
            placeholder: 'Content',
            type: 'CKEditor',
            name: 'message'
        }
    ],
    list: {
        documents: [],
        total: null
    }
};

const activityForm = (state = {...initialState}, {type, ...props}) => {
    switch (type) {
        case FETCH_ACTIVITY_SUCCEEDED:
            return {
                ...state,
                form: {
                    name: props.activity.name,
                    image: props.activity.image,
                    content: props.activity.content
                }
            };
        case CLEAN_REGISTER_FORM:
            return {
                ...state,
                form: {
                    name: '',
                    image: '',
                    content: ''
                }
            };
        case FETCH_ACTIVITIES_SUCCEEDED:
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

export default activityForm;