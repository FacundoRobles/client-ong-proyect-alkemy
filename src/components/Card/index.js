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

const CardComponent = ({items, onView}) => (
    <Row>
        <Col className="mx-3">
            <Card>
                <CardImg top width="100%" src={get(items, 'imageUrl')} alt={get(items, 'title')}/>
                <CardBody>
                    <CardTitle tag="h5">{get(items, 'title')}</CardTitle>
                    <CardText><p style={{lineHeight: '1.3rem'}}>{get(items, 'text')}</p></CardText>
                    <Button outline color="info" onClick={() => onView(items)}>Leer más</Button>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

CardComponent.propTypes = {
    items: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    onView: PropTypes.func.isRequired
};

export default CardComponent;
