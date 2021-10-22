/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import BackForm from '@components/BackForm';
import {getRoutes} from '@utils';

const backOfficeRoutes = getRoutes('backOffice');

const Component = ({
    form,
    fields,
    match: {params: {id}},
    history: {push},
    submitTestimonialRequested,
    fetchTestimonialRequested
}) => {
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Campo requerido';
        }
        if (!values.image || !/^(ftp|http|https):\/\/[^ "]+$/.test(values.image)) {
            errors.image = 'Deberia de ser una URL';
        }
        return errors;
    };
    const goBack = () => push(backOfficeRoutes.testimonial.list);
    return (
        <div className="text-center">
            <Container fluid>
                <h1>Administrar testimonios</h1>
            </Container>
            <Row className="p-0 m-0">
                <Col sm="12" md="12">
                    <h5 className="m-2">Agrega un nuevo testimonio</h5>
                    <BackForm
                        fields={fields}
                        fetch={fetchTestimonialRequested}
                        form={form}
                        id={id}
                        submit={submitTestimonialRequested}
                        validate={validate}
                        push={push}
                        goBack={goBack}
                    />
                </Col>
            </Row>
        </div>
    );
};

Component.propTypes = {
    fetchTestimonialRequested: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(),
    form: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        content: PropTypes.string
    }),
    submitTestimonialRequested: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired
};

Component.defaultProps = {
    form: null,
    fields: null
};

export default Component;
