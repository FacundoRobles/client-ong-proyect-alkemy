/* eslint-disable lodash/collection-method-value, lodash/collection-return */
import get from 'lodash/get';
import has from 'lodash/has';
import includes from 'lodash/includes';
import isArray from 'lodash/isArray';

import map from 'lodash/map';
import replace from 'lodash/replace';
import set from 'lodash/set';

import {
    convertToParams,
    jsonToString,
    generateDocumentResponse
} from '@utils';

import Http from './Api';

const validStatus = [
    200,
    201,
    204
];

const convertResponse = async (response, fetch) => {
    const jsonData = await response.json();
    if (includes(validStatus, response.status)) {
        if (has(jsonData, 'code')) {
            return {
                errors: []
            };
        }
        if (fetch && has(jsonData, 'data')) {
            const {data} = jsonData;
            if (has(data, 'documents') || isArray(data)) {
                const documents = get(data, 'documents', data);
                if (documents) { return generateDocumentResponse(documents); }
            }
            map(data, (value, key) => {
                set(data, key, jsonToString(replace(value, /'/g, '"')));
            });

            return {
                form: data
            };
        }
        return jsonData;
    }

    return {
        errors: {}
    };
};

class CRUD {
    constructor(API) {
        this.api = API;
        this.fetch = this.fetch.bind(this);
        this.fetchOne = this.fetchOne.bind(this);
        this.submit = this.submit.bind(this);
        this.delete = this.delete.bind(this);
        this.uiComp = this.uiComp.bind(this);
    }

    async fetchOne(id) {
        const response = await Http.get(`${this.api}/${id}`);
        return convertResponse(response, true);
    }

    async fetch(filters) {
        let response;
        if (filters) {
            const params = convertToParams(filters);
            response = await Http.get(`${this.api}?${params.toString()}`);
        } else {
            response = await Http.get(this.api);
        }
        return convertResponse(response, true);
    }

    async submit(id, params) {
        let response;
        if (id) {
            response = await Http.put(`${this.api}/${id}`, params);
        } else {
            response = await Http.post(this.api, params);
        }
        return convertResponse(response);
    }

    async delete(id) {
        const response = await Http.delete(`${this.api}/${id}`);
        return convertResponse(response);
    }

    async uiComp(type) {
        const response = await Http.post(`ui-comp/${this.api}`, JSON.stringify(type));
        return convertResponse(response);
    }
}

export default CRUD;
