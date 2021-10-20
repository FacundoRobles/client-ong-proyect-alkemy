import React from 'react';
import PropTypes from 'prop-types';
import {useFormik} from 'formik';
import {
    // Col,
    Container,
    Row
} from 'reactstrap';
import FormEdit from '@components/FormReusable';

const Component = ({
    fields,
    createContact
}) => {
    const validateContact = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Campo requerido';
        }
        return errors;
    };

    const FormikContact = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: validateContact,
        onSubmit: values => {
            const obj = values;
            createContact(obj);
        }
    });
    return (
        <Container>
            <Row><h1>Contactate con nosotros</h1></Row>
            <Row>
                <FormEdit
                    Formik={FormikContact}
                    camps={{}}
                    fields={fields}
                />
            </Row>
        </Container>
    );
};

Component.propTypes = {
    fields: PropTypes.arrayOf(),
    createContact: PropTypes.func
};

Component.defaultProps = {
    createContact: null,
    fields: null
};

export default Component;
