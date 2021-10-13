import React from 'react';
import PropTypes from 'prop-types';
import {
    Label,
    Col
} from 'reactstrap';

const FormLogin = ({
    Formik
}) => (
    <>
        <form className="form" onSubmit={Formik.handleSubmit}>
            <Col className="text-center">
                <Label className="text-justify">Email</Label>
            </Col>
            <Col className="text-center">
                <input
                    type="email"
                    name="email"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    value={Formik.values.email}
                />
                {Formik.errors.email && Formik.touched.email && <p>{Formik.errors.email}</p>}
            </Col>
            <Col className="text-center">
                <Label className="text-justify">Contraseña</Label>
            </Col>
            <Col className="text-center">
                <input
                    type="password"
                    name="password"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    value={Formik.values.password}
                />
                {Formik.errors.password && Formik.touched.password && <p>{Formik.errors.password}</p>}
            </Col>
        </form>
    </>
);

FormLogin.propTypes = {
    Formik: PropTypes.shape({
        errors: PropTypes.shape({
            email: PropTypes.string,
            password: PropTypes.string
        }),
        touched: PropTypes.shape({
            email: PropTypes.bool,
            password: PropTypes.bool
        }),
        handleChange: PropTypes.func.isRequired,
        handleBlur: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        values: PropTypes.shape({
            email: PropTypes.string,
            password: PropTypes.string
        }),
        validate: PropTypes.func
    })
};

FormLogin.defaultProps = {
    Formik: {}
};

export default FormLogin;
