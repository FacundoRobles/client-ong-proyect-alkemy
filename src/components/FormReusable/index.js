/* eslint-disable no-console */
import React from 'react';
import {
    FormGroup,
    Row,
    Col,
    Label,
    Button,
    Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const FormReusable = ({
    Formik,
    camps,
    setEditorData,
    fields
}) => (
    <>
        <form className="form-container rounded m-auto" onSubmit={Formik.handleSubmit}>
            {fields && fields.length > 0 ? (
                map(fields, field => (
                    <FormGroup key={field.id} className="m-2">
                        <Row>
                            <Col md="12">
                                <Label className="text-justify m-1" for={field.id}>
                                    {field.label}
                                </Label>
                            </Col>
                            <Col md="12">
                                {field.type === 'CKeditor' ? (
                                    <CKEditor
                                        className="field-textarea rounded"
                                        editor={ClassicEditor}
                                        data={camps ? camps.content : ''}
                                        onChange={(e, editor) => setEditorData(editor.getData())}
                                    />
                                ) : (
                                    <Input
                                        className="field rounded w-100"
                                        onChange={Formik.handleChange}
                                        onBlur={Formik.handleBlur}
                                        value={Formik.values[field.name]}
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        id={field.id}
                                    />
                                )}

                                {Formik.errors[field.name] && Formik.touched[field.name] && (
                                    <p>
                                        {Formik.errors[field.name]}
                                    </p>
                                )}
                            </Col>
                        </Row>
                    </FormGroup>
                ))
            ) : <></>}
            <Button type="submit" className="m-2">
                Submit
            </Button>
        </form>
    </>
);

FormReusable.propTypes = {
    Formik: PropTypes.shape({
        errors: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string
        }),
        touched: PropTypes.shape({
            name: PropTypes.bool,
            image: PropTypes.bool
        }),
        handleChange: PropTypes.func.isRequired,
        handleBlur: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        values: PropTypes.shape({
            email: PropTypes.string,
            password: PropTypes.string
        }),
        validate: PropTypes.func
    }),
    camps: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        content: PropTypes.string
    }),
    setEditorData: PropTypes.func,
    form: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        content: PropTypes.string
    }),
    fields: PropTypes.arrayOf()
};

FormReusable.defaultProps = {
    Formik: {},
    camps: null,
    setEditorData: null,
    form: null,
    fields: null
};

export default FormReusable;
