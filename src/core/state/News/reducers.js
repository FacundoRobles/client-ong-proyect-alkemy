import {FETCH_NEWS_SUCCEEDED, FETCH_ONE_NEWS_SUCCEEDED} from './types';

const initialState = {
    newsForm: {
        name: '',
        image: '',
        content: '',
        categoryId: 1,
        type: 'news'
    },
    newsFields: [
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
        },
        {
            label: 'Contenido',
            placeholder: 'Contenido',
            type: 'CKEditor',
            id: 'content',
            name: 'content'
        }
    ],
    list: {
        documents: [],
        total: null
    }
};

const newsForm = (state = {...initialState}, {type, ...props}) => {
    switch (type) {
        case FETCH_ONE_NEWS_SUCCEEDED: {
            return {
                ...initialState,
                newsForm: {
                    ...state.newsForm,
                    ...props.entry
                }
            };
        }
        case FETCH_NEWS_SUCCEEDED: {
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
export default newsForm;
