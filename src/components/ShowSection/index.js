import React from 'react';
import {
    Row, Col, Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const ShowSection = ({
    // eslint-disable-next-line no-unused-vars
    title, legend, documents, link
}) => (
    <Container>
        <Row className="mt-4">
            <Col>
                <h3>{title}</h3>
                <p>{legend}</p>
            </Col>
            <Row className="mt-4">
                {
                    !isEmpty(documents) && map(documents, value => (
                        <Col key={get(value, '_id')} className="mt-4" md="3">
                            aca se llamaria a la card
                        </Col>
                    ))
                }
            </Row>
        </Row>
    </Container>
);

ShowSection.propTypes = {
    documents: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    title: PropTypes.string,
    legend: PropTypes.string,
    link: PropTypes.string
};

ShowSection.defaultProps = {
    title: '',
    legend: '',
    link: ''
};

export default ShowSection;
