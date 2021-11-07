/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import {
    ERROR_NAME,
    ERROR_IMAGE
} from '@utils/constants';
import isEmpty from 'lodash/isEmpty';
import BackForm from '@components/BackForm';

const Component = ({
    form,
    fields,
    match: {params: {id}},
    history: {push, goBack},
    submitTestimonialRequested,
    fetchTestimonialRequested,
    title,
    subTitle
}) => {
    const validate = values => {
        const errors = {};
        if (isEmpty(values.name)) {
            errors.name = ERROR_NAME;
        }
        if (isEmpty(values.image) || !/^(ftp|http|https):\/\/[^ "]+$/.test(values.image)) {
            errors.image = ERROR_IMAGE;
        }
        return errors;
    };

    return (
        <Container>
            <Row className="p-0 m-0 text-center">
                <Col sm="12" md="12">
                    <h1>{title}</h1>
                    <h5 className="m-2">{subTitle}</h5>
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
        </Container>
    );
};

Component.propTypes = {
    fetchTestimonialRequested: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf().isRequired,
    form: PropTypes.shape({}).isRequired,
    submitTestimonialRequested: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number
        })
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func,
        goBack: PropTypes.func
    }).isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string
};

Component.defaultProps = {
    title: 'Administrar testimonios',
    subTitle: 'Agrega un nuevo testimonio'
};

export default Component;
