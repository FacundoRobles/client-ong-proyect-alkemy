import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Button,
    Container,
    Row
} from 'reactstrap';
import get from 'lodash/get';
import {getRoutes} from '@utils';
import TableList from '@components/TableList';
import {GOBACK} from '@utils/constants';

const mainRoutes = getRoutes('mainRoutes');

const Component = ({
    fetchContactsRequested,
    list,
    table,
    history: {push}
}) => {
    useEffect(() => {
        fetchContactsRequested();
    }, [fetchContactsRequested]);

    return (
        <Container>
            <Row className="list-row">
                <Col sm="12" className="mr-2">
                    <Row className="d-flex justify-content-between align-items-center">
                        <Button className="ml-3 px-3 btn-cancel" onClick={() => push(mainRoutes.backOffice)}>
                            {GOBACK}
                        </Button>
                        <h1 className="text-center mb-3 my-1">Contactos</h1>
                        <div className="ml-5">     </div>
                    </Row>
                    <TableList
                        documents={get(list, 'documents')}
                        onDelete={null}
                        onEdit={null}
                        onView={null}
                        {...table}
                    />
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    fetchContactsRequested: PropTypes.func.isRequired,
    list: PropTypes.shape({}).isRequired,
    table: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default Component;
