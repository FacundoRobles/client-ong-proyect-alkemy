/* global API, TOKEN, FormData */
import isString from 'lodash/isString';

const getTokenApp = () => TOKEN;
const getTokenUser = () => {
    const token = localStorage.getItem('token_agent');

    if (token) {
        return `Bearer ${token}`;
    }

    return null;
};

export default class Api {
    static get(URL, api = true) {
        let url = API;

        if (api) {
            url += 'api/';
        } else {
            url += 'public-api/';
        }

        url += URL;

        return fetch(
            url,
            {
                headers: {
                    'Content-Type': ' application/json',
                    Authorization: getTokenUser(),
                    appToken: getTokenApp()
                },
                method: 'GET'
            }
        );
    }

    static post(URL, params, api = true) {
        let url = API;
        if (api) {
            url += 'api/';
        } else {
            url += 'public-api/';
        }

        url += URL;

        return fetch(
            url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getTokenUser(),
                    appToken: getTokenApp()
                },
                method: 'POST',
                ...(params ? {
                    body: isString(params) ? params : JSON.stringify(params)
                } : {
                })
            }
        );
    }

    static put(URL, body, api = true) {
        let url = API;

        if (api) {
            url += 'api/';
        } else {
            url += 'public-api/';
        }

        url += URL;

        return fetch(
            url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getTokenUser(),
                    appToken: getTokenApp()
                },
                method: 'PUT',
                body
            }
        );
    }

    static delete(URL, body, api = true) {
        let url = API;

        if (api) {
            url += 'api/';
        } else {
            url += 'public-api/';
        }

        url += URL;

        return fetch(
            url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getTokenUser(),
                    appToken: getTokenApp()
                },
                method: 'DELETE',
                body
            }
        );
    }

    static async postFile(URL, file, api = true) {
        let url = API;

        if (api) {
            url += 'api/';
        } else {
            url += 'public-api/';
        }

        url += URL;

        const data = new FormData();
        // eslint-disable-next-line no-undef
        append('file', file);
        const response = await fetch(
            url, {
                method: 'POST',
                body: data,
                headers: {
                    Authorization: getTokenUser(),
                    appToken: getTokenApp()
                }
            }
        );
        return response;
    }

    static async getFile(URL, api = true) {
        let url = API;

        if (api) {
            url += 'api/';
        } else {
            url += 'public-api/';
        }

        url += URL;
        const response = await fetch(
            url, {
                method: 'GET',
                headers: {
                    Authorization: getTokenUser(),
                    appToken: getTokenApp()
                }
            }
        );
        return response;
    }

    static localPost(uri, body) {
        return fetch(
            `/${uri}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getTokenUser(),
                    appToken: getTokenApp()
                },
                method: 'POST',
                body: JSON.stringify(body)
            }
        );
    }
}
