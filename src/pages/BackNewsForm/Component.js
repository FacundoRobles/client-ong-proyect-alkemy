import React from 'react';
import {PropTypes} from 'prop-types';
import {getRoutes} from '@utils';
import {Container, Col, Row} from 'reactstrap';
import BackForm from '../../components/BackForm';
import {REQUIRED} from '../../utils/constants';

const backOfficeRoutes = getRoutes('backOffice');

const Component = ({
    form,
    fields,
    submitNewsRequested,
    fetchNewsRequested,
    match,
    history: {push}
}) => {
    const validate = values => {
        const errors = {};
        if (!values.name || !values.image || !values.content) {
            errors.name = REQUIRED;
            errors.image = REQUIRED;
            errors.content = REQUIRED;
        }
        return errors;
    };

    const goBackToList = () => push(backOfficeRoutes.news.list);

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center mb-4">Administrar Novedades</h1>
                    <BackForm
                        key="NewsForm"
                        form={form}
                        fields={fields}
                        submit={submitNewsRequested}
                        fetch={fetchNewsRequested}
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
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
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
    submitNewsRequested: PropTypes.func.isRequired,
    fetchNewsRequested: PropTypes.func.isRequired,
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
