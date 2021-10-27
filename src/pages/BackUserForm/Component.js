import React from 'react';
import {PropTypes} from 'prop-types';
import {getRoutes} from '@utils';
import {Container, Row, Col} from 'reactstrap';
import BackForm from '../../components/BackForm';
import {REQUIRED} from '../../utils/constants';

const backOfficeRoutes = getRoutes('backOffice');

const Component = ({
    form,
    fields,
    submitUserRequested,
    fetchUserRequested,
    match,
    history: {push}
}) => {
    const validate = values => {
        const errors = {};
        if (!values.firstName || !values.lastName || !values.email) {
            errors.firtName = REQUIRED;
            errors.lastName = REQUIRED;
            errors.email = REQUIRED;
        }
        return errors;
    };

    const goBackToList = () => push(backOfficeRoutes.user.list);

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center mb-4">Editar Usuario</h1>
                    <BackForm
                        key="NewsForm"
                        form={form}
                        fields={fields}
                        submit={submitUserRequested}
                        fetch={fetchUserRequested}
                        id={match.params}
                        validate={validate}
                        goBack={goBackToList}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Component;

Component.propTypes = {
    form: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
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
    submitUserRequested: PropTypes.func.isRequired,
    fetchUserRequested: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

Component.defaultProps = {
    match: {}
};
