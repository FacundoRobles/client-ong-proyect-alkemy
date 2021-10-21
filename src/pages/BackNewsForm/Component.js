import React from 'react';
import {PropTypes} from 'prop-types';
import BackForm from '../../components/BackForm';
import {REQUIRED} from '../../utils/constants';

const Component = ({
    form, fields, submitNewsRequested, fetchNewsRequested, match
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
    return (
        <>
            <h1 className="text-center mb-4">Administrar Novedades</h1>
            <BackForm
                key="NewsForm"
                form={form}
                fields={fields}
                submit={submitNewsRequested}
                fetch={fetchNewsRequested}
                id={match.params.id}
                validate={validate}
            />
        </>
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
    })
};

Component.defaultProps = {
    match: {}
};
