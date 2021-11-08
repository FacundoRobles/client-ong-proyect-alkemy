import React from 'react';
import PropType from 'prop-types';
import {
    Col,
    Row,
    Button,
    CardImg
} from 'reactstrap';
import carita1 from '../../images/niño1.png';
import carita2 from '../../images/niño-2.png';
import carita3 from '../../images/niña1.png';
import carita4 from '../../images/niña-2.png';

const Component = ({link}) => (
    <Row className="container-contribute text-center justify-content-center align-items-center">
        <Col xs="12" sm="6">
            <h2 className="title-md mb-0">¡Contribuye!</h2>
        </Col>
        <Col xs="12" sm="6">
            <Button className="px-4" color="primary" onClick={() => window.location.assign(link)}>Contribuir</Button>
        </Col>
        <Col xs="3" sm="2" md="1">
            <CardImg
                src={carita1}
                width="100%"
                alt="niño"
            />
        </Col>
        <Col xs="3" sm="2" md="1">
            <CardImg
                src={carita3}
                width="100%"
                alt="niño"
            />
        </Col>
        <Col xs="3" sm="2" md="1">
            <CardImg
                src={carita2}
                width="100%"
                alt="niño"
            />
        </Col>
        <Col xs="3" sm="2" md="1">
            <CardImg
                src={carita4}
                width="100%"
                alt="niño"
            />
        </Col>
    </Row>
);

Component.propTypes = {
    link: PropType.string
};

Component.defaultProps = {
    link: 'https://www.mercadopago.com.ar'
};
export default Component;
