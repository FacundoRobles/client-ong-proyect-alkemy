import React, {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import {Container, Col, Row} from 'reactstrap';
import {getRoutes} from '@utils';
import {TESTIMONIAL_TEXT, TESTIMONIAL} from '@utils/constants';
import Slick from '@components/Slick';
import get from 'lodash/get';

const mainRoutes = getRoutes('mainRoutes');

const Component = ({
    fetchTestimonialRequested,
    list,
    settings,
    history: {push}
}) => {
    const onView = prop => {
        const id = get(prop, 'id');
        push(`${mainRoutes.testimonial}/${id}`);
    };
    useEffect(() => {
        fetchTestimonialRequested();
    }, [fetchTestimonialRequested]);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="text-center mt-5 mb-4">{TESTIMONIAL}</h1>
                    <h3 className="text-center mb-5">{TESTIMONIAL_TEXT}</h3>
                </Col>
            </Row>
            <Row className="mx-0 mt-4 mx-md-5 mb-5">
                <Col>
                    <Slick items={list} onView={onView} settings={settings}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Component;

Component.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fetchTestimonialRequested: PropTypes.func.isRequired,
    settings: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};
