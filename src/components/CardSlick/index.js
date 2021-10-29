import React from 'react';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const CardSlickComponent = ({items, onView}) => (
    <Row>
        <Col className="mx-3">
            <Card className="card-component">
                <CardImg top width="100%" src={get(items, 'imageUrl')} alt={get(items, 'title')}/>
                <CardBody>
                    <CardTitle tag="h5">{get(items, 'title')}</CardTitle>
                    <CardText><p style={{lineHeight: '1.3rem'}}>{get(items, 'text')}</p></CardText>
                    <Button outline className="btn-login" color="primary" onClick={() => onView(items)}>Leer más</Button>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

CardSlickComponent.propTypes = {
    items: PropTypes.shape({
        imageUrl: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string
    }),
    onView: PropTypes.func.isRequired
};

CardSlickComponent.defaultProps = {
    items: {
        imageUrl: '',
        title: '',
        text: ''
    }
};

export default CardSlickComponent;
