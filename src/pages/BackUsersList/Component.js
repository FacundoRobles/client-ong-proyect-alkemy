import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Row,
    Container
} from 'reactstrap';
import get from 'lodash/get';
import {getRoutes, swalConfirmAction} from '@utils';
import TableList from '@components/TableList';

const backOfficeRoutes = getRoutes('backOffice');

const Component = ({
    fetchUserRequested,
    deleteUserRequested,
    list,
    table,
    history: {push}
}) => {
    useEffect(() => {
        fetchUserRequested();
    }, [fetchUserRequested]);

    const onDelete = prop => {
        const deleteField = () => {
            deleteUserRequested(get(prop, 'id'));
            fetchUserRequested();
        };
        swalConfirmAction('warning', 'Eliminar Registro', '', 'Confirmar', 'Cancelar', deleteField);
    };

    const onEdit = prop => {
        const id = get(prop, 'id');
        push(`${backOfficeRoutes.user.list}/${id}/edit`);
    };

    return (
        <Container>
            <Row className="list-row">
                <Col sm="12" className="px-1 px-md-3">
                    <h1 className="text-center mb-3 my-1">Usuarios</h1>
                    <TableList
                        documents={get(list, 'documents')}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        {...table}
                    />
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    fetchUserRequested: PropTypes.func.isRequired,
    deleteUserRequested: PropTypes.func.isRequired,
    list: PropTypes.shape({}).isRequired,
    table: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default Component;
