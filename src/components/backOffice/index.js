import React from 'react';
// import PropTypes from 'prop-types';
import {
    Col,
    Row,
    Card, Button, CardTitle, CardText
} from 'reactstrap';
import {Link} from 'react-router-dom';
import map from 'lodash/map';
import {MENUOFFICE} from '@utils/constants';

const BackOffice = () => (
    <>
        <Row>
            {map(MENUOFFICE, (item, key) => (
                <Col key={key} lg="3" md="6" xs="12">
                    <Card body className="--card-backoffice text-center mt-1 mb-1 ml-auto mr-auto w-75">
                        <CardTitle tag="h6">{item.title}</CardTitle>
                        <CardText><item.icon fontSize="large"/></CardText>
                        <Button className="--button-card m-auto pl-2 pr-2">
                            <Link to={item.path}>Ir</Link>
                        </Button>
                    </Card>
                </Col>
            ))}
        </Row>
    </>
);

// BackOffice.propTypes = {
//     MENUOFFICE: PropTypes.array
// };

export default BackOffice;
