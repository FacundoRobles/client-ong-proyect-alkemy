import React, {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import {getRoutes} from '@utils';
import {Row, Col, Container} from 'reactstrap';
import ShowDetail from '@components/ShowDetail';
import DetailNotFound from '@components/DetailNotFound';
import {
    ACTIVITY404CONTENT,
    NOT_FOUND_TITLE,
    NOT_FOUND_IMG,
    GO_ACTIVITIES_LIST
} from '@utils/constants';
import get from 'lodash-es/get';
import isEmpty from 'lodash-es/isEmpty';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');
const Component = ({
    form,
    fetchActivitiesRequested,
    userAgent,
    match: {params: {id: idActivity}},
    history: {push}
}) => {
    useEffect(() => {
        fetchActivitiesRequested({idActivity});
    }, [idActivity, fetchActivitiesRequested]);

    const roleId = isEmpty(userAgent) ? null : userAgent.roleId;

    const goList = () => {
        if (roleId === 1) {
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
        <Container>
            <Row className="my-5">
                <Col>
                    {get(form, 'name') && idActivity
                        ? (
                            <ShowDetail
                                key="ActivityDetail"
                                form={form}
                                goList={goList}
                                goListBtn={GO_ACTIVITIES_LIST}
                            />
                        )
                        : (
                            <DetailNotFound
                                key="ActivityDetailNotFound"
                                data={detailNotFoundData}
                                goList={goList}
                                goListBtn={GO_ACTIVITIES_LIST}
                            />
                        )}
                </Col>
            </Row>
        </Container>
    );
};

export default Component;

Component.propTypes = {
    form: PropTypes.shape({}).isRequired,
    fetchActivitiesRequested: PropTypes.func.isRequired,
    userAgent: PropTypes.shape({roleId: PropTypes.number}),
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
    match: {},
    userAgent: {}
};
