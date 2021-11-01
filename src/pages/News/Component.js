import React, {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import {Container, Col, Row} from 'reactstrap';
import {NEWS_TEXT, NEWS} from '@utils/constants';
import Slick from '@components/Slick';
import {getRoutes} from '@utils';
import get from 'lodash/get';

const mainRoutes = getRoutes('mainRoutes');

const Component = ({
    fetchNewsRequested,
    list,
    settings,
    history: {push}
}) => {
    const onView = prop => {
        const id = get(prop, 'id');
        push(`${mainRoutes.news}/${id}`);
    };
    useEffect(() => {
        fetchNewsRequested();
    }, [fetchNewsRequested]);
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="text-center mt-5 mb-4">{NEWS}</h1>
                    <h3 className="text-center mb-5">{NEWS_TEXT}</h3>
                </Col>
            </Row>
            <Row className="mx-0 mt-4 mx-md-5 mb-5">
                <Col className="mb-5">
                    <Slick items={list} onView={onView} settings={settings}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Component;

Component.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fetchNewsRequested: PropTypes.func.isRequired,
    settings: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};
