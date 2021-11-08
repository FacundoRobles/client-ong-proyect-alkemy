import {
    FETCH_TESTIMONIAL_SUCCEEDED,
    FETCH_TESTIMONIALS_SUCCEEDED,
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
            label: 'Titulo',
            placeholder: 'Peticion al gobierno',
            type: 'text',
            name: 'name'
        },
        {
            label: 'Imagen',
            placeholder: 'https://picsum.photos/200?random=0',
            type: 'text',
            name: 'image'
        },
        {
            label: 'Contenido',
            placeholder: 'Lorem Ipsum is simply dummy text...',
            type: 'CKEditor',
            name: 'content'
        }
    ],
    list: {
        documents: [],
        total: null
    }
};

const testimonialForm = (state = {...initialState}, {type, ...props}) => {
    switch (type) {
        case FETCH_TESTIMONIAL_SUCCEEDED:
            if (props.testimonial) {
                return {
                    ...state,
                    form: {...props.testimonial}
                };
            }
            return {
                ...state
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
        case FETCH_TESTIMONIALS_SUCCEEDED:
            return {
                ...state,
                list: {
                    documents: {...props},
                    total: props.testimonial.length
                }
            };
        default:
            return state;
    }
};
export default testimonialForm;
