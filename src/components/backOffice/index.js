import React, {useState, useEffect} from 'react';
import {
    Col,
    Row,
    Card, Button, CardTitle, CardText
} from 'reactstrap';
import {Link} from 'react-router-dom';
import map from 'lodash/map';
import {useSelector} from 'react-redux';
import fromState from '@selectors';
import get from 'lodash/get';
import filter from 'lodash/filter';
import PropTypes from 'prop-types';

const BackOffice = ({roleId}) => {
    const [office, setOffice] = useState(null);
    const state = useSelector(fromState.Session.menuOffice);
    useEffect(() => {
        if (state) {
            setOffice(state);
        }
    }, [state]);
    let renderOffice = office;
    if (roleId === 2) {
        renderOffice = filter(office, item => get(item, 'title') === 'Editar perfil');
    }
    return (
        <>
            <Row>
                {map(renderOffice, (item, key) => (
                    <Col key={key} lg="3" md="6" xs="12">
                        <Card body className="backoffice-card text-center mt-1 mb-1 ml-auto mr-auto w-75">
                            <CardTitle tag="h6">{get(item, 'title')}</CardTitle>
                            <CardText><item.icon fontSize="large"/></CardText>
                            <Button className="backoffice-card-button m-auto pl-2 pr-2">
                                <Link to={get(item, 'path')}>Ir</Link>
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

BackOffice.propTypes = {
    roleId: PropTypes.number.isRequired
};

export default BackOffice;
