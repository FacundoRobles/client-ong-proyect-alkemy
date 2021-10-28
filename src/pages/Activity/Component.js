import React, {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import {Container, Col, Row} from 'reactstrap';
import {ACTIVITIES_TEXT, ACTIVITIES} from '@utils/constants';
import Slick from '@components/Slick';
import {getRoutes} from '@utils';
import get from 'lodash/get';

const mainRoutes = getRoutes('mainRoutes');

const Component = ({
    fetchActivitiesRequested,
    list,
    settings,
    history: {push}
}) => {
    const onView = prop => {
        const id = get(prop, 'id');
        push(`${mainRoutes.activity}/${id}`);
    };

    useEffect(() => {
        fetchActivitiesRequested();
    }, [fetchActivitiesRequested]);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="text-center mb-4">{ACTIVITIES}</h1>
                    <h3 className="text-center">{ACTIVITIES_TEXT}</h3>
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

export default Component;

Component.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fetchActivitiesRequested: PropTypes.func.isRequired,
    settings: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};
