import get from 'lodash/get';
import isArray from 'lodash/isArray';
import pick from 'lodash/pick';
import isString from 'lodash/isString';
import map from 'lodash/map';
import replace from 'lodash/replace';
import size from 'lodash/size';
import set from 'lodash/set';
import forEach from 'lodash/forEach';
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

export const generateDocumentResponse = documents => ({
    resultsCount: size(documents),
    documents: map(documents, doc => {
        forEach(doc, (value, key) => set(doc, key, jsonToString(replace(value, /'/g, '"'))));
        return doc;
    }),
    hasOwnPagination: true
});
