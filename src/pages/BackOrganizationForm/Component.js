/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Row,
    Container
} from 'reactstrap';
import BackForm from '@components/BackForm';
import {getRoutes} from '@utils';
import {
    ERROR_IMAGE,
    ERROR_NAME
} from '@utils/constants';

const backOfficeRoutes = getRoutes('backOffice');

const Component = ({
    form,
    fields,
    match: {params: {id}},
    history: {push},
    submitOrganizationRequested,
    fetchOrganizationRequested,
    title,
    subtitle
}) => {
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = ERROR_NAME;
        }
        if (!values.image || !/^(ftp|http|https):\/\/[^ "]+$/.test(values.image)) {
            errors.image = ERROR_IMAGE;
        }
        return errors;
    };
    const goBack = () => push(backOfficeRoutes.organization.list);
    return (
        <Container className="text-center">
            <h1>{title}</h1>
            <Row className="p-0 m-0">
                <Col sm="12" md="12">
                    <h5 className="m-2">{subtitle}</h5>
                    <BackForm
                        fields={fields}
                        fetch={fetchOrganizationRequested}
                        form={form}
                        id={id}
                        submit={submitOrganizationRequested}
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
    fetchOrganizationRequested: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(),
    form: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        content: PropTypes.string
    }),
    submitOrganizationRequested: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string
};

Component.defaultProps = {
    form: null,
    fields: null,
    title: 'Administrar organizaciones',
    subtitle: 'Agregar una nueva administracion'
};

export default Component;
