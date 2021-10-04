/* global API */
import isString from 'lodash/isString';

// RECORDAR QUE HAY LLAMADAS QUE NO REQUIREN EL TOKE DE USUARIO PORQUE SON PUBLICAS.

const getTokenUser = () => {
    const token = localStorage.getItem('token_agent');
    if (token) {
        return `Bearer ${token}`;
    }
    return null;
};

export default class Api {
    static get(URL) {
        return fetch(
            `${API}/${URL}`,
            {
                headers: {
                    'Content-Type': ' application/json',
                    Authorization: getTokenUser()
                },
                method: 'GET'
            }
        );
    }

    static post(URL, params) {
        return fetch(
            `${API}/${URL}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getTokenUser()
                },
                method: 'POST',
                ...(params ? {
                    body: isString(params) ? params : JSON.stringify(params)
                } : {
                })
            }
        );
    }

    static put(URL, body) {
        return fetch(
            `${API}/${URL}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getTokenUser()
                },
                method: 'PUT',
                body
            }
        );
    }

    static delete(URL, body) {
        return fetch(
            `${API}/${URL}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getTokenUser()
                },
                method: 'DELETE',
                body
            }
        );
    }
}
