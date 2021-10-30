/* eslint-disable no-console */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Row,
    Container
} from 'reactstrap';
import TableListNew from '@components/TableListNew';

const Component = ({
    title,
    history: {push},
    members,
    fetchMembersRequested
}) => {
    useEffect(() => {
        fetchMembersRequested({});
    }, [fetchMembersRequested]);
    return (
        <Container className="text-center">
            <Row className="p-0 m-0">
                <Col sm="12" md="12" className="m-auto">
                    <h1>{title}</h1>
                    <TableListNew
                        props={members}
                        push={push}
                    />
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    fetchMembersRequested: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string
    })).isRequired,
    title: PropTypes.string
};

Component.defaultProps = {
    title: 'Lista de miembros'
};

export default Component;
