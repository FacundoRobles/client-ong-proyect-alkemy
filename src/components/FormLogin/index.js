import React from 'react';
import PropTypes from 'prop-types';
import {
    Formik,
    Form,
    Field
} from 'formik';

import {
    Label,
    Col
} from 'reactstrap';

const FormLogin = ({
    fields
}) => (
    <>
        <Formik
            initialValues={{
                email: fields.email,
                password: fields.password
            }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Email required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Password required';
                } else if (
                    !/^[\s\S]{6,25}$/i.test(values.password)
                ) {
                    errors.password = 'Must contain at least 6 characters';
                }
                return errors;
            }}
        >
            {({errors, touched}) => (
                <Form className="form">
                    <Col className="text-center">
                        <Label className="text-justify">Email</Label>
                    </Col>
                    <Col className="text-center">
                        <Field type="email" name="email"/>
                        {errors.email && touched.email && <p>{errors.email}</p>}
                    </Col>
                    <Col className="text-center">
                        <Label className="text-justify">Contraseña</Label>
                    </Col>
                    <Col className="text-center">
                        <Field type="password" name="password"/>
                        {errors.password && touched.password && <p>{errors.password}</p>}
                    </Col>
                </Form>
            )}
        </Formik>
    </>
);

FormLogin.propTypes = {
    fields: PropTypes.shape({
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }).isRequired
};

export default FormLogin;
