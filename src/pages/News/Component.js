import React, {useEffect} from 'react';
import {
    Row,
    Col,
    Container
} from 'reactstrap';
import Slick from '@components/Slick';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import {getRoutes} from '@utils';
import {NEWS} from '@utils/constants';

const Component = ({
    fetchNewsRequested,
    list,
    settings,
    history: {push}
}) => {
    const mainRoutes = getRoutes('mainRoutes');
    const onView = prop => {
        const id = get(prop, 'id');
        push(`${mainRoutes.news}/${id}`);
    };
    useEffect(() => {
        fetchNewsRequested({});
    }, [fetchNewsRequested]);
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="text-center mb-4">{NEWS}</h1>
                </Col>
            </Row>
            <Row className="mx-0 mt-4 mx-md-5">
                <Col>
                    <Slick items={list} onView={onView} settings={settings}/>
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fetchNewsRequested: PropTypes.func.isRequired,
    settings: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default Component;
