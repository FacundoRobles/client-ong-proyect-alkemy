import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useFormik} from 'formik';
import {
    Label,
    Col,
    Row,
    Button,
    FormGroup,
    Card,
    CardBody,
    Input
} from 'reactstrap';
import map from 'lodash/map';
import get from 'lodash/get';
import {SEND, CANCEL} from '../../utils/constants';

const editorConfig = {
    toolbar: [
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'blockQuote',
        'insertTable',
        'undo',
        'redo'
    ]
};

const BackForm = ({
    form, fields, submit, fetch, id, validate, goBack, push
}) => {
    useEffect(() => {
        fetch(id);
    }, [fetch, id]);

    const Formik = useFormik({
        enableReinitialize: true,
        initialValues: {...form},
        validate,
        onSubmit: payload => submit({payload, id, push})
    });

    return (
        <Row>
            <Col
                md={{size: 8, offset: 2}}
                lg={{size: 6, offset: 3}}
                className="my-5 p-0"
            >
                <Card className="form-card">
                    <CardBody>
                        <form
                            key="form"
                            onSubmit={Formik.handleSubmit}
                        >
                            {map(fields, field => (
                                <FormGroup
                                    key={get(field, 'id')}
                                >
                                    <Col
                                        className="mb-3 px-2"
                                    >
                                        <Label
                                            tag="h4"
                                            for={get(field, 'id')}
                                        >
                                            {get(field, 'label')}
                                        </Label>
                                    </Col>
                                    {get(field, 'type') !== 'CKEditor'
                                        ? (
                                            <>
                                                <Col
                                                    className="mb-3 px-2"
                                                >
                                                    <Input
                                                        className="form-control mx-auto w-100"
                                                        onChange={Formik.handleChange}
                                                        onBlur={Formik.handleBlur}
                                                        value={Formik.values[get(field, 'name')]}
                                                        placeholder={get(field, 'placeholder')}
                                                        type={get(field, 'type')}
                                                        name={get(field, 'name')}
                                                        id={get(field, 'id')}
                                                    />
                                                </Col>
                                                <Col
                                                    className="mb-3 p-0"
                                                >
                                                    {Formik.errors[get(field, 'name')]
                                                && Formik.touched[get(field, 'name')]
                                                && (
                                                    <p className="error animate__animated animate__shakeX text-center">
                                                        {Formik.errors[get(field, 'name')]}
                                                    </p>
                                                )}
                                                </Col>
                                            </>
                                        )
                                        : (
                                            <>
                                                <Col
                                                    className="mb-3 px-2"
                                                >
                                                    <CKEditor
                                                        id={get(field, 'name')}
                                                        editor={ClassicEditor}
                                                        data={form[get(field, 'name')]}
                                                        config={{...editorConfig, placeholder: get(field, 'placeholder')}}
                                                        onChange={(event, editor) => Formik.setFieldValue(get(field, 'name'), editor.getData())}
                                                    />
                                                </Col>
                                                <Col
                                                    className="mb-3 px-2"
                                                >
                                                    {Formik.errors[get(field, 'name')]
                                            && Formik.touched[get(field, 'name')]
                                            && (
                                                <p className="error animate__animated animate__shakeX text-center">
                                                    {Formik.errors[get(field, 'name')]}
                                                </p>
                                            )}
                                                </Col>
                                            </>
                                        )}
                                </FormGroup>
                            ))}
                            <Col
                                className="mt-4 d-flex justify-content-between px-2"
                            >
                                <Button
                                    color="danger"
                                    className="btn-cancel"
                                    onClick={goBack}
                                >
                                    {CANCEL}
                                </Button>
                                <Button
                                    type="submit"
                                    color="primary"
                                    className="px-4 btn-submit"
                                >
                                    {SEND}
                                </Button>
                            </Col>
                        </form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default BackForm;

BackForm.propTypes = {
    form: PropTypes.shape({}).isRequired,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    goBack: PropTypes.func.isRequired,
    id: PropTypes.shape({}),
    submit: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired
};

BackForm.defaultProps = {
    id: null
};
