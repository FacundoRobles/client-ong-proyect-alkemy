import React from 'react';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    CardImgOverlay
} from 'reactstrap';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import noop from 'lodash/noop';

const CardComponent = ({
    items,
    proceed
}) => (
    <Row>
        <Col>
            <Card>
                {get(items, 'image') && (
                    <>
                        <CardImg
                            top
                            width="100%"
                            height="150px"
                            src={get(items, 'image')}
                            style={{
                                minHeight: '150px',
                                maxHeight: '150px',
                                objectFit: 'cover'
                            }}
                            className="img-fluid"
                        />
                        <CardImgOverlay className="d-flex align-items-end justify-content-center">
                            <CardText
                                style={{
                                    lineHeight: '1.1rem',
                                    fontSize: '0.8rem',
                                    textShadow: '2px 2px 2px #000'
                                }}
                                className="m-0 text-white font-weight-bold font-italic text-truncate"
                            >
                                {get(items, 'text') || get(items, 'name')}
                            </CardText>
                        </CardImgOverlay>
                    </>
                )}
                {get(items, 'imageUrl') && (
                    <>
                        <CardImg
                            top
                            width="100%"
                            height="150px"
                            src={get(items, 'imageUrl')}
                            alt="image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">{get(items, 'title')}</CardTitle>
                            <CardText
                                style={{lineHeight: '1.3rem'}}
                                className="text-truncate"
                            >
                                {get(items, 'text') || get(items, 'name')}
                            </CardText>
                            {proceed && (
                                <Button onClick={proceed} outline color="info">Leer más</Button>
                            )}
                        </CardBody>
                    </>
                )}
            </Card>
        </Col>
    </Row>
);

CardComponent.propTypes = {
    items: PropTypes.shape({
        imageUrl: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string
    }),
    proceed: PropTypes.func
};

CardComponent.defaultProps = {
    items: {
        imageUrl: '',
        title: '',
        text: ''
    },
    proceed: noop
};

export default CardComponent;
