import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import BackForm from '@components/BackForm';

const Component = ({
    form,
    fields,
    createContactRequested
}) => {
    const validate = values => {
        const errors = {};
        if (!values.name || !values.email || !values.message) {
            errors.name = 'Todos los campos requeridos';
            errors.email = 'Todos los campos requeridos';
            errors.message = 'Todos los campos requeridos';
        }
        return errors;
    };

    return (
        <Container>
            <Row><h1>Contactate con nosotros</h1></Row>
            <Row>
                <Col>
                    <BackForm
                        key="NewsForm"
                        form={form}
                        fields={fields}
                        submit={createContactRequested}
                        fetch={id => id}
                        id={null}
                        validate={validate}
                    />
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired,
    fields: PropTypes.arrayOf(),
    createContactRequested: PropTypes.func
};

Component.defaultProps = {
    createContactRequested: null,
    fields: null
};

export default Component;
