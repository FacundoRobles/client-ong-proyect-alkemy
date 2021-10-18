import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import '../../scss/card.scss';

const CardComponent = props => (
    <Card>
        <CardImg top width="100%" src={props.items.imageUrl} alt="Card image cap"/>
        <CardBody>
            <CardTitle tag="h5">{props.items.title}</CardTitle>
            <CardText><p style={{lineHeight: '1.3rem'}}>{props.items.text}</p></CardText>
            <Button outline color="info">Leer más</Button>
        </CardBody>
    </Card>
);

CardComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
};

export default CardComponent;
