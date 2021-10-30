/* eslint-disable no-console */
import {
    CLEAN_ORGANIZATION_FORM,
    FETCH_ORGANIZATION_SUCCEEDED,
    FETCH_ORGANIZATIONS_SUCCEEDED,
    FETCH_ORGANIZATIONFORM_SUCCEEDED
} from './types';

const initialState = {
    form: {
        name: '',
        image: ''
    },
    fields: [
        {
            label: 'Titulo',
            placeholder: 'Organizacion nueva',
            type: 'text',
            name: 'name'
        },
        {
            label: 'Imagen',
            placeholder: 'https://picsum.photos/200?random=0',
            type: 'text',
            name: 'image'
        }
    ],
    organization: {},
    organizations: []
};
// eslint-disable-next-line no-unused-vars
const Organization = (state = initialState, {type, ...props}) => {
    switch (type) {
        case FETCH_ORGANIZATIONFORM_SUCCEEDED:
            return {
                ...state,
                form: props.documents
            };
        case CLEAN_ORGANIZATION_FORM:
            return {
                ...state,
                form: {
                    name: '',
                    image: ''
                }
            };
        case FETCH_ORGANIZATION_SUCCEEDED:
            return {
                ...state,
                organization: props.documents
            };
        case FETCH_ORGANIZATIONS_SUCCEEDED:
            return {
                ...state,
                organizations: props.documents
            };
        default:
            return state;
    }
};

export default Organization;
