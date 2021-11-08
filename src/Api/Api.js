/* global API */
/* eslint-disable no-console */
import isString from 'lodash/isString';
import axios from 'axios';

// const {API} = process.env;

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
            return await axios.get(`${API}/${URL}`, {
                headers: token ? {
                    Authorization: token
                } : {}
            });
        } catch (err) {
            return console.log(err.message);
        }
    }

    static async post(URL, body) {
        const token = getTokenUser();
        try {
            return await axios.post(
                `${API}/${URL}`, isString(body) ? body : JSON.stringify(body), {
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token || false
                    }
                }
            );
        } catch (err) {
            return err;
        }
    }

    static async put(URL, body) {
        const token = getTokenUser();
        try {
            return await axios.put(
                `${API}/${URL}`, body, {
                    headers: token ? {
                        'Content-Type': 'application/json',
                        Authorization: token
                    } : {
                        'Content-Type': 'application/json'
                    }
                }
            );
        } catch (err) {
            return console.log(err.message);
        }
    }

    static async delete(URL, body) {
        const token = getTokenUser();
        try {
            return await axios.delete(
                `${API}/${URL}`, body, {
                    headers: token ? {
                        'Content-Type': 'application/json',
                        Authorization: token
                    } : {
                        'Content-Type': 'application/json'
                    }
                }
            );
        } catch (err) {
            return console.log(err.message);
        }
    }
}
