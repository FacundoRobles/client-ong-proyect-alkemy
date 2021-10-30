import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Row
} from 'reactstrap';
import {
    ERROR_NAME,
    ERROR_IMAGE
} from '@utils/constants';
import BackFormSlides from '@components/BackFormSlides';
import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';

const Component = ({
    form,
    fields,
    history: {push, goBack},
    match: {params: {id}},
    submitSlideRequested,
    title,
    subTitle
}) => {
    const validate = values => {
        const errors = {};
        if (isEmpty(values.welcomeText)) {
            errors.welcomeText = ERROR_NAME;
        }
        forEach(values.items, current => {
            if (isEmpty(current.imageUrl) || !/^(ftp|http|https):\/\/[^ "]+$/.test(current.imageUrl)) {
                errors.items = {...errors.items};
                errors.items.imageUrl = ERROR_IMAGE;
            }
            if (isEmpty(current.text)) {
                errors.items = {...errors.items};
                errors.items.text = ERROR_NAME;
            }
        });
        return errors;
    };

    return (
        <div className="text-center">
            <h1>{title}</h1>
            <Row className="p-0 m-0">
                <Col sm="12" md="12">
                    <h5 className="m-2">{subTitle}</h5>
                    <BackFormSlides
                        fields={fields}
                        form={form}
                        push={push}
                        submit={submitSlideRequested}
                        validate={validate}
                        goBack={goBack}
                        id={id}
                    />
                </Col>
            </Row>
        </div>
    );
};

Component.propTypes = {
    fields: PropTypes.arrayOf().isRequired,
    form: PropTypes.shape({
        welcomeText: PropTypes.string.isRequired,
        items: PropTypes.arrayOf().isRequired
    }).isRequired,
    submitSlideRequested: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number
        })
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func,
        goBack: PropTypes.func
    }).isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string
};

Component.defaultProps = {
    title: 'Administrar Slides Home',
    subTitle: 'Editar imagenes y titulo'
};

export default Component;
