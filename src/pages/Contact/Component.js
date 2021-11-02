import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import {
    ERROR_NAME,
    ERROR_MAIL
} from '@utils/constants';
import BackForm from '@components/BackForm';
import isEmpty from 'lodash/isEmpty';

const Component = ({
    form,
    fields,
    submitContactRequested,
    history: {goBack},
    title
}) => {
    const validate = values => {
        const errors = {};
        if (isEmpty(values.name) || isEmpty(values.message)) {
            errors.name = ERROR_NAME;
            errors.message = ERROR_NAME;
        }
        if (isEmpty(values.email) || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = ERROR_MAIL;
        }
        return errors;
    };

    return (
        <Container>
            <Row>
                <Col className="title-md text-center">
                    <h1 className="mt-3">
                        {title}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="form">
                        <BackForm
                            key="ContactForm"
                            form={form}
                            fields={fields}
                            submit={submitContactRequested}
                            fetch={id => id}
                            id={{id: null}}
                            validate={validate}
                            goBack={goBack}
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
    fields: PropTypes.arrayOf().isRequired,
    submitContactRequested: PropTypes.func.isRequired,
    history: PropTypes.shape({
        goBack: PropTypes.func
    }).isRequired,
    title: PropTypes.string
};

Component.defaultProps = {
    title: 'Contactate con nosotros'
};

export default Component;
