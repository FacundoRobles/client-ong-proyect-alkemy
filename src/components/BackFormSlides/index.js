import React from 'react';
import PropTypes from 'prop-types';
import {
    Formik,
    Form,
    Field,
    FieldArray
} from 'formik';
import {
    Label,
    Col,
    Button,
    FormGroup,
    Card,
    CardBody
} from 'reactstrap';
import map from 'lodash/map';
import get from 'lodash/get';
import {SEND, CANCEL} from '@utils/constants';

const BackFormSlides = ({
    form,
    fields,
    submit,
    push,
    validate,
    goBack,
    id
}) => (
    <>
        <Col md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} className="my-5 p-0">
            <Card className="form-card">
                <CardBody>
                    <Formik
                        initialValues={{...form}}
                        validate={validate}
                        onSubmit={values => submit({values, push, id})}
                    >
                        {({errors, touched, values}) => (
                            <Form>
                                {map(fields, (field, idx) => (
                                    <FormGroup key={idx}>
                                        <Col className="mb-3 px-2" tag="h5">
                                            <Label for={get(field, 'id')}>
                                                {get(field, 'label')}
                                            </Label>
                                        </Col>
                                        {get(field, 'type') !== 'array' ? (
                                            <>
                                                <Col className="mb-3 px-2">
                                                    <Field autoFocus className="form-control" as={get(field, 'type')} name={get(field, 'name')}/>
                                                </Col>
                                                <Col>
                                                    {errors[get(field, 'name')] && touched[get(field, 'name')] && (
                                                        <p className="error animate__animated animate__shakeX text-center">
                                                            {errors[get(field, 'name')]}
                                                        </p>
                                                    )}
                                                </Col>
                                            </>
                                        ) : (
                                            <>
                                                <FieldArray
                                                    name={get(field, 'name')}
                                                    render={() => (
                                                        <>
                                                            {map(values[get(field, 'name')], (current, index) => (
                                                                <FormGroup key={index}>
                                                                    <Col>
                                                                        <Label>
                                                                            Slide-
                                                                            {index + 1}
                                                                        </Label>
                                                                    </Col>
                                                                    <Col>
                                                                        <Field
                                                                            className="form-control mb-1"
                                                                            name={`${get(field, 'name')}[${index}].imageUrl`}
                                                                        />
                                                                        {errors[get(field, 'name')]
                                                                        && touched[get(field, 'name')]
                                                                        && touched[get(field, 'name')][index]
                                                                        && (
                                                                            <p className="p-1 error animate__animated animate__shakeX text-center">
                                                                                {errors[get(field, 'name')].imageUrl}
                                                                            </p>
                                                                        )}
                                                                        <Field
                                                                            className="form-control"
                                                                            name={`${get(field, 'name')}.${index}.text`}
                                                                        />
                                                                    </Col>
                                                                    <Col className="p-1">
                                                                        {errors[get(field, 'name')]
                                                                            && touched[get(field, 'name')]
                                                                            && touched[get(field, 'name')][index]
                                                                            && (
                                                                                <p className="error animate__animated animate__shakeX text-center">
                                                                                    {errors[get(field, 'name')].text}
                                                                                </p>
                                                                            )}
                                                                    </Col>
                                                                </FormGroup >
                                                            ))}
                                                        </>
                                                    )}
                                                />
                                            </>
                                        )}
                                    </FormGroup>
                                ))}
                                <Col className="mt-4 d-flex justify-content-between px-2">
                                    <Button color="danger" className="btn-cancel" onClick={goBack}>
                                        {CANCEL}
                                    </Button>
                                    <Button type="submit" color="primary" className="px-4 btn-submit">
                                        {SEND}
                                    </Button>
                                </Col>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </Col>
    </>
);

BackFormSlides.propTypes = {
    form: PropTypes.shape({}).isRequired,
    fields: PropTypes.arrayOf().isRequired,
    goBack: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default BackFormSlides;
