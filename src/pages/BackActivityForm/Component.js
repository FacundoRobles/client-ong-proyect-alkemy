import React from 'react';
import {PropTypes} from 'prop-types';
import {Container, Col, Row} from 'reactstrap';
import BackForm from '@components/BackForm';

const Component = ({
    form, fields, submitActivityRequested, fetchActivitiesRequested, match
}) => {
    const validate = values => {
        const errors = {};
        if (!values.name || !values.image || !values.content) {
            errors.name = 'Todos los campos requeridos';
            errors.image = 'Todos los campos requeridos';
            errors.content = 'Todos los campos requeridos';
        }
        return errors;
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center mb-4">Administrar Actividades</h1>
                    <BackForm
                        key="ActivityForm"
                        form={form}
                        fields={fields}
                        submit={submitActivityRequested}
                        fetch={fetchActivitiesRequested}
                        id={match.params}
                        validate={validate}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Component;

Component.propTypes = {
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired

        }).isRequired
    ).isRequired,
    submitActivityRequested: PropTypes.func.isRequired,
    fetchActivitiesRequested: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    })
};

Component.defaultProps = {
    match: {}
};
