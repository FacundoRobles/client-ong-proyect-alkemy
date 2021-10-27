import get from 'lodash/get';

const path = 'contact';

export const getContacts = state => get(state, `${path}.list.documents`);
export const getForm = state => get(state, `${path}.form`);
export const getFields = state => get(state, `${path}.fields`);
export const getList = state => get(state, `${path}.list`);

export const getTableProps = () => {
    const headers = [
        {
            label: '#ID',
            key: 'id',
            className: 'border-0 pointer'
        },
        {
            label: 'Nombre',
            key: 'name',
            className: 'border-0 pointer text-left'
        },
        {
            label: 'Email',
            key: 'email',
            className: 'border-0 pointer'
        },
        {
            label: 'Message',
            key: 'message',
            className: 'border-0 pointer text-center'
        }
    ];
    const columns = [
        {
            key: 'id',
            drawInformation: document => get(document, 'id')
        },
        {
            key: 'name',
            drawInformation: document => get(document, 'name'),
            className: 'text-left'
        },
        {
            key: 'email',
            drawInformation: document => get(document, 'email')
        },
        {
            key: 'message',
            drawInformation: document => get(document, 'message')
        },
        {
            actions: false,
            edit: false,
            view: false,
            delete: false,
            className: 'text-center'
        }
    ];
    return {
        headers,
        columns
    };
};
