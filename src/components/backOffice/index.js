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

const BackOffice = () => {
    const [office, setOffice] = useState(null);
    const state = useSelector(fromState.Session.menuOffice);
    useEffect(() => {
        if (state) {
            setOffice(state);
        }
    }, [state]);
    return (
        <Row>
            {map(office, (item, key) => (
                <Col key={key} lg="3" md="6" xs="12">
                    <Card body className="backoffice-card text-center mt-1 mb-1 ml-auto mr-auto w-75">
                        <CardTitle tag="h4">{get(item, 'title')}</CardTitle>
                        <CardText><item.icon fontSize="large"/></CardText>
                        <Button className="backoffice-card-button m-auto">
                            <Link to={get(item, 'path')} className="px-3">Ir</Link>
                        </Button>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default BackOffice;
