import React from 'react';
import PropTypes from 'prop-types';
import {
    Label,
    Col,
    Row,
    FormGroup
} from 'reactstrap';
import map from 'lodash/map';

const RegisterForm = ({fields, Formik}) => (
    <Row>
        <Col>
            <form key="form" onSubmit={Formik.handleSubmit} className="form">
                {map(fields, field => (
                    <FormGroup key={field.id} className="text-center">
                        <Col className="text-center">
                            <Label className="text-justify" for={field.id}>
                                {field.label}
                            </Label>
                        </Col>
                        <Col className="text-center justify-content-center d-flex">
                            <input
                                className="form-control"
                                onChange={Formik.handleChange}
                                onBlur={Formik.handleBlur}
                                value={Formik.values[field.name]}
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                id={field.id}
                            />
                        </Col>
                        <Col>
                            {Formik.errors[field.name] && Formik.touched[field.name] && (
                                <p>
                                    {Formik.errors[field.name]}
                                </p>
                            )}
                        </Col>
                    </FormGroup>
                ))}
            </form>
        </Col>
    </Row>
);

export default RegisterForm;

RegisterForm.propTypes = {
    Formik: PropTypes.shape({
        errors: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            password: PropTypes.string
        }),
        touched: PropTypes.shape({
            firstName: PropTypes.bool,
            lastName: PropTypes.bool,
            email: PropTypes.bool,
            password: PropTypes.bool
        }),
        handleChange: PropTypes.func.isRequired,
        handleBlur: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        values: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            password: PropTypes.string
        }),
        validate: PropTypes.func
    }),
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            placeholder: PropTypes.string,
            type: PropTypes.string.isRequired,
            id: PropTypes.string,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

RegisterForm.defaultProps = {
    Formik: {}
};
