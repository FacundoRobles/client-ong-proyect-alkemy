import get from 'lodash/get';
import filter from 'lodash/filter';

const path = 'user';

export const getRegisterForm = state => get(state, `${path}.registerForm`);
export const getRegisterFields = state => get(state, `${path}.registerFields`);
export const getRegisterFieldsEdit = state => {
    const fields = getRegisterFields(state);
    // eslint-disable-next-line lodash/prefer-reject
    const editFields = filter(fields, field => field.type !== 'password');
    return editFields;
};

export const getList = state => get(state, `${path}.list`);

export const getTableProps = () => {
    const headers = [
        {
            label: 'Nombre',
            key: 'firstName',
            className: 'border-0 pointer text-left px-1'
        },
        {
            label: 'Apellido',
            key: 'lastName',
            className: 'border-0 pointer px-1 '
        },
        {
            label: 'Email',
            key: 'email',
            className: 'border-0 pointer w-25 px-1'
        },
        {
            label: 'Acciones',
            key: 'actions',
            className: 'border-0 pointer text-center px-0 justify-content-md-end d-md-flex mr-md-2'
        }
    ];
    const columns = [
        {
            key: 'firstName',
            drawInformation: document => get(document, 'firstName'),
            className: 'text-left px-0'
        },
        {
            key: 'lastName',
            drawInformation: document => get(document, 'lastName'),
            className: 'px-0'
        },
        {
            key: 'email',
            drawInformation: document => get(document, 'email'),
            className: 'px-0'
        },
        {
            actions: true,
            edit: true,
            delete: true,
            className: 'text-center px-0 justify-content-md-end d-md-flex'
        }
    ];
    return {
        headers,
        columns
    };
};
