import React, {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import {Container, Col, Row} from 'reactstrap';
import ShowDetail from '@components/ShowDetail';
import DetailNotFound from '@components/DetailNotFound';
import {
    NEWS404CONTENT,
    NOT_FOUND_TITLE,
    NOT_FOUND_IMG,
    GOBACK
} from '@utils/constants';
import get from 'lodash/get';

const Component = ({
    form,
    fetchTestimonialRequested,
    match: {params: {id}},
    history: {goBack}
}) => {
    useEffect(() => {
        fetchTestimonialRequested(id);
    }, [id, fetchTestimonialRequested]);

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
                                key="TestimonialDetail"
                                form={form}
                                goList={goBack}
                                goListBtn={GOBACK}
                            />
                        )
                        : (
                            <DetailNotFound
                                key="TestimonialDetailNotFound"
                                data={detailNotFoundData}
                                goList={goBack}
                                goListBtn={GOBACK}
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
    fetchTestimonialRequested: PropTypes.func.isRequired,
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
