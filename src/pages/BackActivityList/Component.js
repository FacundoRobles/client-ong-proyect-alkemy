/* eslint-disable no-console */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Col,
    Container,
    Row
} from 'reactstrap';
import TableListNew from '@components/TableListNew';
import {getRoutes} from '@utils';

const backOfficeRoutes = getRoutes('backOffice');
const backCategoryRoute = backOfficeRoutes.activity.list;

const Component = ({
    history: {push},
    activity,
    deleteActivityRequested,
    fetchActivitiesRequested,
    title,
    buttonText
}) => {
    useEffect(() => {
        fetchActivitiesRequested();
    }, [fetchActivitiesRequested]);

    return (
        <Container>
            <Row className="p-0 m-0 text-center">
                <Col sm="12" md="12" className="m-auto">
                    <h1>{title}</h1>
                    <TableListNew
                        props={activity}
                        erase={deleteActivityRequested}
                        push={push}
                        route={backCategoryRoute}
                    />
                </Col>
                <Col>
                    <Button onClick={() => push(backOfficeRoutes.activity.form)}>
                        {buttonText}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    fetchActivitiesRequested: PropTypes.func.isRequired,
    deleteActivityRequested: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    activity: PropTypes.arrayOf().isRequired,
    title: PropTypes.string,
    buttonText: PropTypes.string
};

Component.defaultProps = {
    title: 'Listado de actividades',
    buttonText: 'crear uno nuevo'
};

export default Component;
