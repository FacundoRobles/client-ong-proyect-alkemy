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
        <Col>
            <Card className="card-component text-center">
                <CardImg
                    top
                    width="100%"
                    src={get(items, 'imageUrl') || get(items, 'image')}
                    alt={get(items, 'title') || 'image'}
                />
                <CardBody>
                    <CardTitle tag="h5" className="text-center w-100">{get(items, 'title')}</CardTitle>
                    {get(items, 'html')
                        ? (
                            <CardText
                                className="description-text text-truncate"
                                dangerouslySetInnerHTML={{__html: get(items, 'content')}}
                            />
                        ) : (
                            <CardText className="text-truncate" style={{lineHeight: '1.5rem'}}>
                                {get(items, 'text') || get(items, 'name')}
                            </CardText>
                        )}
                    {onView
                            && (
                                <div className="btn-container">
                                    <Button outline color="primary" onClick={() => onView(items)}>Leer más</Button>
                                </div>
                            )}
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
