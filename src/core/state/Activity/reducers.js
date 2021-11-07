import {
    FETCH_ACTIVITY_SUCCEEDED,
    FETCH_ACTIVITIES_SUCCEEDED,
    CLEAN_ACTIVITY_FORM
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
            name: 'content'
        }
    ],
    list: {
        documents: [],
        total: null
    }
};

const activityForm = (state = {...initialState}, {type, ...props}) => {
    const {activity, documents} = props;
    switch (type) {
        case FETCH_ACTIVITY_SUCCEEDED:
            return {
                ...state,
                form: {
                    name: activity.name,
                    image: activity.image,
                    content: activity.content
                }
            };
        case CLEAN_ACTIVITY_FORM:
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
                    documents,
                    total: documents.length
                }
            };
        default:
            return state;
    }
};
export default activityForm;
