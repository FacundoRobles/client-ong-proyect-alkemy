import Swal, {noop} from 'sweetalert2';
import get from 'lodash/get';
import isArray from 'lodash/isArray';
import pick from 'lodash/pick';
import isString from 'lodash/isString';
import routeContent from './navigation';

export const getRoutes = entity => {
    if (isArray(entity)) {
        return pick(routeContent, entity);
    }
    if (entity) {
        return get(routeContent, entity);
    }

    return routeContent;
};

export const jsonToString = (stringOrJson, toString = false) => {
    try {
        if (toString) {
            return JSON.stringify(stringOrJson);
        }
        if ((!stringOrJson && stringOrJson !== false) || stringOrJson === 'undefined') {
            return null;
        }
        if (isString(stringOrJson)) {
            return JSON.parse(stringOrJson);
        }
        return stringOrJson;
    } catch (error) {
        return stringOrJson;
    }
};

export const convertToParams = formValues => JSON.stringify(formValues);

export function swalConfirmAction(
    icon, title, text, confirmButtonText, cancelButtonText, actionConfirm, CancelConfirm = noop
) {
    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#d33',
        reverseButtons: true,
        confirmButtonText,
        cancelButtonText
    }).then(result => {
        if (!result.value) {
            return CancelConfirm();
        }
        return actionConfirm();
    });
}
