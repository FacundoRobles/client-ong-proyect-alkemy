/* eslint-disable no-console */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Col,
    Container,
    Row
} from 'reactstrap';
import TableListNew from '@components/TableListNew';
import {getRoutes} from '@utils';

const backOfficeRoutes = getRoutes('backOffice');
const backTestimonialRoute = backOfficeRoutes.testimonial.list;

const Component = ({
    history: {push},
    testimonial,
    deleteTestimonialRequested,
    fetchTestimonialRequested,
    title,
    buttonText
}) => {
    useEffect(() => {
        fetchTestimonialRequested({});
    }, [fetchTestimonialRequested]);
    return (
        <Container>
            <Row className="text-center p-0 m-0">
                <Col sm="12" md="12" className="m-auto">
                    <h1>{title}</h1>
                    <TableListNew
                        props={testimonial}
                        erase={deleteTestimonialRequested}
                        push={push}
                        route={backTestimonialRoute}
                    />
                </Col>
                <Col>
                    <Button onClick={() => push(backOfficeRoutes.testimonial.form)}>
                        {buttonText}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    deleteTestimonialRequested: PropTypes.func.isRequired,
    fetchTestimonialRequested: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    testimonial: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
    buttonText: PropTypes.string
};

Component.defaultProps = {
    title: 'Listado de testimonios',
    buttonText: 'crear uno nuevo',
    testimonial: []
};

export default Component;
