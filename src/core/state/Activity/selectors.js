/* eslint-disable no-return-assign */
import get from 'lodash/get';
import map from 'lodash/map';

const path = 'activity';

export const getActivities = state => get(state, `${path}.list.documents`);
export const getForm = state => get(state, `${path}.form`);
export const getFields = state => get(state, `${path}.fields`);

export const getActivitiesSlick = state => {
    const list = getActivities(state);
    // eslint-disable-next-line no-param-reassign
    const newList = map(list, item => item = {
        imageUrl: item.image,
        title: item.name,
        key: item.id,
        text: item.content,
        ...item

    });
    return newList;
};
