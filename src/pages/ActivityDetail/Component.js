import React, {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import {getRoutes} from '@utils';
import {Row, Col} from 'reactstrap';
import ShowDetail from '@components/ShowDetail';
import DetailNotFound from '@components/DetailNotFound';
import {
    ACTIVITY404CONTENT,
    NOT_FOUND_TITLE,
    NOT_FOUND_IMG
} from '@utils/constants';
import get from 'lodash-es/get';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');
const Component = ({
    form,
    fetchActivitiesRequested,
    isAuthenticate,
    match: {params: {id: idActivity}},
    history: {push}
}) => {
    useEffect(() => {
        fetchActivitiesRequested({idActivity});
    }, [idActivity, fetchActivitiesRequested]);

    const goList = () => {
        if (isAuthenticate) {
            return push(backOfficeRoutes.activity.list);
        }
        return push(mainRoutes.activity);
    };

    const detailNotFoundData = {
        title: NOT_FOUND_TITLE,
        content: ACTIVITY404CONTENT,
        image: NOT_FOUND_IMG
    };

    return (
        <>
            <Row>
                <Col>
                    {get(form, 'name') && idActivity
                        ? (
                            <ShowDetail
                                key="ActivityDetail"
                                form={form}
                                goList={goList}
                            />
                        )
                        : (
                            <DetailNotFound
                                key="ActivityDetailNotFound"
                                data={detailNotFoundData}
                                goList={goList}
                            />
                        )}
                </Col>
            </Row>
        </>
    );
};

export default Component;

Component.propTypes = {
    form: PropTypes.shape({}).isRequired,
    fetchActivitiesRequested: PropTypes.func.isRequired,
    isAuthenticate: PropTypes.bool.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

Component.defaultProps = {
    match: {}
};
