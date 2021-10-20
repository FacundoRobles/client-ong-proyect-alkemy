import React from 'react';
import {PropTypes} from 'prop-types';
import NewsForm from '../../components/NewsForm';

const Component = ({
    form, fields, submitNewsRequested, fetchNewsRequested, match
}) => (
    <>
        <h1 className="text-center mb-4">Novedades</h1>
        <NewsForm
            key="NewsForm"
            form={form}
            fields={fields}
            submitNewsRequested={submitNewsRequested}
            fetchNewsRequested={fetchNewsRequested}
            id={match.params}
        />
    </>
);

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
