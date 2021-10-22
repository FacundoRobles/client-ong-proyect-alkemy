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
        fetchTestimonialRequested({})
    }, [])
    return (
        <div className="text-center">
            <Container fluid>
                <h1>{title}</h1>
            </Container>
            <Row className="p-0 m-0">
                <Col sm="12" md="12" className="m-auto">
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
        </div>
    );
}

Component.propTypes = {
    deleteTestimonialRequested: PropTypes.func.isRequired,
    fetchTestimonialRequested: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    testimonial: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        content: PropTypes.string
    })),
    title: PropTypes.string,
    buttonText: PropTypes.string
};

Component.defaultProps = {
    testimonial: null,
    title: 'Listado de testimonios',
    buttonText: 'crear uno nuevo'
};

export default Component;