/* eslint-disable no-console */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import TableListNew from '@components/TableListNew';
import {getRoutes} from '@utils';

const backOfficeRoutes = getRoutes('backOffice');
const backOrganizationRoute = backOfficeRoutes.organization.list;

const Component = ({
    history: {push},
    organizations,
    fetchOrganizationRequested,
    deleteOrganizationRequested
}) => {
    useEffect(() => {
        fetchOrganizationRequested({});
    }, []);
    return (
        <div className="text-center">
            <Container fluid>
                <h1>Listado de organizaciones</h1>
            </Container>
            <Row className="p-0 m-0">
                <Col sm="12" md="12" className="m-auto">
                    <TableListNew
                        props={organizations}
                        push={push}
                        route={backOrganizationRoute}
                        erase={deleteOrganizationRequested}
                    />
                </Col>
            </Row>
        </div>
    );
};

Component.propTypes = {
    deleteOrganizationRequested: PropTypes.func.isRequired,
    fetchOrganizationRequested: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    organizations: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        content: PropTypes.string
    }))
};

Component.defaultProps = {
    organizations: null
};

export default Component;