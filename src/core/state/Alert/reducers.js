import Swal from 'sweetalert2';
import {SET_SYSTEM_MSG} from './types';

const initialState = {
    alertMessage: false
};

const Alert = (state = initialState, {type, ...props}) => {
    switch (type) {
        case SET_SYSTEM_MSG:
            return Swal.fire(props);
        default:
            return state;
    }
};

export default Alert;
