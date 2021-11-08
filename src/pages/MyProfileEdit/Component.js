/* eslint-disable no-console */
/* eslint-disable react/prop-types */
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
    submitUserRequested,
    match,
    history: {goBack}
}) => {
    console.log('');
    return (
        <Container>
            <Row>
                <Col className="text-center"><h1 className="mt-3">Mi perfil</h1></Col>
            </Row>
            <Row>
                <Col>
                    <div className="form">
                        <BackForm
                            key="NewsForm"
                            form={form}
                            fields={fields}
                            submit={submitUserRequested}
                            fetch={id => id}
                            id={match.params.id}
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
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired,
    fields: PropTypes.arrayOf(),
    submitUserRequested: PropTypes.func
};

Component.defaultProps = {
    submitUserRequested: null,
    fields: null
};

export default Component;
