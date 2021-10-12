/* global API */
import isString from 'lodash/isString';
import axios from 'axios';

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

    static async put(URL, body) {
        const token = getTokenUser();
        try {
            return await axios.put(
                `${API}/${URL}`, body, {
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

    static async delete(URL, body) {
        const token = getTokenUser();
        try {
            return await axios.delete(
                `${API}/${URL}`, body, {
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
}
