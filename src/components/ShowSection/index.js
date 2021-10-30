import React from 'react';
import {
    Row, Col, Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import CardComponent from '../Card';

const ShowSection = ({
    // eslint-disable-next-line no-unused-vars
    title,
    legend,
    documents,
    subtitle,
    subtitleV2,
    legendV2
}) => (
    <Container>
        <Row className="mt-4">
            <Col xs="12" className="card-us">
                <h2>{subtitle}</h2>
                {map(legend, (value, key) => (
                    <ul key={key}>
                        <li>{key}</li>
                        <p>{value}</p>
                    </ul>
                ))}
                <h2 className="pt-4">{subtitleV2}</h2>
                {map(legendV2, (value, key) => (
                    <ul key={key}>
                        <li>{key}</li>
                        <p>{value}</p>
                    </ul>
                ))}
            </Col>
            <Col className="items-section text-center">
                <h1>{title}</h1>
                <Row className="justify-content-center mt-4">
                    {
                        !isEmpty(documents) && map(documents, (value, idx) => (
                            <Col key={idx} className="mt-4" xs="12" sm="6" md="3">
                                <CardComponent items={value}/>
                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Row>
    </Container>
);

ShowSection.propTypes = {
    documents: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    title: PropTypes.string,
    legend: PropTypes.shape({}),
    subtitle: PropTypes.string,
    subtitleV2: PropTypes.string,
    legendV2: PropTypes.shape({})
};

ShowSection.defaultProps = {
    title: '',
    legend: '',
    subtitle: '',
    subtitleV2: '',
    legendV2: ''
};

export default ShowSection;
