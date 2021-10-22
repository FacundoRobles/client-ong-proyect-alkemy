import {FETCH_CATEGORY_SUCCEEDED, FETCH_CATEGORIES_SUCCEEDED, CLEAN_CATEGORY_FORM} from './types';

const initialState = {
    categoryForm: {
        name: '',
        description: ''
    },
    categoryFields: [
        {
            label: 'Nombre',
            placeholder: 'Nombre',
            type: 'text',
            id: 'name',
            name: 'name'
        },
        {
            label: 'Descripción',
            placeholder: 'Descripción',
            type: 'CKEditor',
            id: 'description',
            name: 'description'
        }
    ],
    list: {
        documents: [],
        total: null
    }
};

const categoryForm = (state = {...initialState}, {type, ...props}) => {
    switch (type) {
        case FETCH_CATEGORY_SUCCEEDED: {
            return {
                ...initialState,
                categoryForm: {
                    ...state.categoryForm,
                    ...props.category
                }
            };
        }
        case FETCH_CATEGORIES_SUCCEEDED: {
            return {
                ...initialState,
                list: {
                    documents: props.documents,
                    total: props.documents.length
                }
            };
        }
        case CLEAN_CATEGORY_FORM: {
            return {
                ...state,
                categoryForm: {
                    ...state,
                    ...initialState.categoryForm
                }
            };
        }
        default:
            return state;
    }
};
export default categoryForm;
