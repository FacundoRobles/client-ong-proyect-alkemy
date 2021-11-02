/* eslint-disable no-console */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Col,
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
        <div className="text-center">
            <h1>{title}</h1>
            <Row className="p-0 m-0">
                <Col sm="12" md="12" className="m-auto">
                    <TableListNew
                        props={activity}
                        erase={deleteActivityRequested}
                        push={push}
                        route={backCategoryRoute}
                    />
                </Col>
                <Col>
                    <Button onClick={() => push(backOfficeRoutes.category.form)}>
                        {buttonText}
                    </Button>
                </Col>
            </Row>
        </div>
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
