/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import ProfileDetail from '@components/ProfileDetail';
import {getRoutes, swalConfirmAction} from '@utils';
import get from 'lodash/get';

const mainRoutes = getRoutes('mainRoutes');

const Component = ({
    form,
    history: {push},
    deleteUserRequested,
    fetchSessionLogout
}) => {
    console.log(form);
    const onDelete = () => {
        const deleteField = () => {
            deleteUserRequested(get(form, 'id'));
            fetchSessionLogout();
        };
        swalConfirmAction('warning', 'Eliminar Registro', '', 'Confirmar', 'Cancelar', deleteField);
    };

    const onEdit = () => {
        const id = get(form, 'id');
        push(`${mainRoutes.myProfile}/${id}/edit`);
    };
    return (
        <Container>
            <Row>
                <Col className="text-center"><h1 className="mt-3">Mi perfil</h1></Col>
            </Row>
            <Row>
                <Col>
                    <ProfileDetail
                        form={form}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                </Col>
            </Row>
        </Container>
    );
};
Component.propTypes = {
    form: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired,
    deleteUserRequested: PropTypes.func,
    fetchSessionLogout: PropTypes.func
};

Component.defaultProps = {
    deleteUserRequested: null,
    fetchSessionLogout: null
};

export default Component;
