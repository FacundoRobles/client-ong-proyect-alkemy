import React, {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import {getRoutes} from '@utils';
import {Container, Col, Row} from 'reactstrap';
import ShowDetail from '@components/ShowDetail';
import DetailNotFound from '@components/DetailNotFound';
import {
    NEWS404CONTENT,
    NOT_FOUND_TITLE,
    NOT_FOUND_IMG,
    GO_NEWS_LIST
} from '@utils/constants';
import get from 'lodash-es/get';
import isEmpty from 'lodash-es/isEmpty';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');
const Component = ({
    form,
    fetchNewsRequested,
    userAgent,
    match: {params: {id}},
    history: {push}
}) => {
    useEffect(() => {
        fetchNewsRequested({id});
    }, [id, fetchNewsRequested]);

    const roleId = isEmpty(userAgent) ? null : userAgent.roleId;

    const goList = () => {
        if (roleId === 1) {
            return push(backOfficeRoutes.news.list);
        }
        return push(mainRoutes.news);
    };

    const detailNotFoundData = {
        title: NOT_FOUND_TITLE,
        content: NEWS404CONTENT,
        image: NOT_FOUND_IMG
    };

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    {get(form, 'name') && id
                        ? (
                            <ShowDetail
                                key="NewsDetail"
                                form={form}
                                goList={goList}
                                goListBtn={GO_NEWS_LIST}
                            />
                        )
                        : (
                            <DetailNotFound
                                key="NewsDetailNotFound"
                                data={detailNotFoundData}
                                goList={goList}
                                goListBtn={GO_NEWS_LIST}
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
    fetchNewsRequested: PropTypes.func.isRequired,
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
    userAgent:{}
};
