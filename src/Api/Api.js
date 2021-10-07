/* global API */
import isString from 'lodash/isString';
import axios from 'axios';

// RECORDAR QUE HAY LLAMADAS QUE NO REQUIREN EL TOKE DE USUARIO PORQUE SON PUBLICAS.

const getTokenUser = () => {
    const token = localStorage.getItem('token_agent');
    if (token) {
        return `Bearer ${token}`;
    }
    return null;
};

export default class Api {
    static async get(URL) {
        const token = getTokenUser();
        try {
            return await axios.get(URL, {
                headers: token ? {
                    Authorization: token
                } : {}
            });
        } catch (err) {
            // eslint-disable-next-line no-console
            return console.log(err.message);
        }
    }

    static async post(URL, params) {
        const token = getTokenUser();
        try {
            return await axios.post(
                `${API}/${URL}`, params ? {
                    body: isString(params) ? params : JSON.stringify(params)
                } : {}, {
                    headers: token ? {
                        Authorization: token
                    } : {}
                }
            );
        } catch (err) {
            // eslint-disable-next-line no-console
            return console.log(err.message);
        }
    }

    static put(URL, body) {
        return fetch(
            `${API}/${URL}`, {
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
            `${API}/${URL}`, {
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
