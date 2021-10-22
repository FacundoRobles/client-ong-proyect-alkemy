import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const CardComponent = ({items}) => (
    <Card>
        <CardImg top width="100%" src={get(items, 'imageUrl')} alt="Card image cap"/>
        <CardBody>
            <CardTitle tag="h5">{get(items, 'title')}</CardTitle>
            <CardText><p style={{lineHeight: '1.3rem'}}>{get(items, 'text')}</p></CardText>
            <Button outline color="info">Leer más</Button>
        </CardBody>
    </Card>
);

CardComponent.propTypes = {
    items: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};

export default CardComponent;
