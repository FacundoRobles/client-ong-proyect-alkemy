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
    submitContactRequested
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
            <Row>
                <Col className="text-center"><h1 className="mt-3">Contactate con nosotros</h1></Col>
            </Row>
            <Row>
                <Col>
                    <div className="form">
                        <BackForm
                            key="NewsForm"
                            form={form}
                            fields={fields}
                            submit={submitContactRequested}
                            fetch={id => id}
                            id={{id: null}}
                            validate={validate}
                        />
                    </div>
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
    submitContactRequested: PropTypes.func
};

Component.defaultProps = {
    submitContactRequested: null,
    fields: null
};

export default Component;
