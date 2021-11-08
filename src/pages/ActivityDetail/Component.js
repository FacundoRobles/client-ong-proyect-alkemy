import React, {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import {Row, Col, Container} from 'reactstrap';
import ShowDetail from '@components/ShowDetail';
import DetailNotFound from '@components/DetailNotFound';
import {
    ACTIVITY404CONTENT,
    NOT_FOUND_TITLE,
    NOT_FOUND_IMG,
    GO_ACTIVITIES_LIST
} from '@utils/constants';
import get from 'lodash/get';

const Component = ({
    form,
    fetchActivitiesRequested,
    match: {params: {id}},
    history: {goBack}
}) => {
    useEffect(() => {
        fetchActivitiesRequested(id);
    }, [id, fetchActivitiesRequested]);

    const detailNotFoundData = {
        title: NOT_FOUND_TITLE,
        content: ACTIVITY404CONTENT,
        image: NOT_FOUND_IMG
    };

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    {get(form, 'name') && id
                        ? (
                            <ShowDetail
                                key="ActivityDetail"
                                form={form}
                                goList={goBack}
                                goListBtn={GO_ACTIVITIES_LIST}
                            />
                        )
                        : (
                            <DetailNotFound
                                key="ActivityDetailNotFound"
                                data={detailNotFoundData}
                                goList={goBack}
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
        goBack: PropTypes.func.isRequired
    }).isRequired
};

Component.defaultProps = {
    match: {},
    userAgent: {}
};
