import React from 'react';
import {Col, Row} from 'reactstrap';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import CardComponent from '../CardSlick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slick = ({items, onView, settings}) => (
    <Row>
        <Col>
            {items.length > 0
                    && (
                        <Slider {...settings} className="slick-slider">
                            {map(items, item => (
                                <div key={item.key}>
                                    <CardComponent key={item.key} items={item} onView={onView}/>
                                </div>
                            )
                            )}
                        </Slider>
                    )}
        </Col>
    </Row>
);

Slick.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
        imageUrl: PropTypes.string,
        text: PropTypes.string
    })),
    onView: PropTypes.func.isRequired,
    settings: PropTypes.shape({}).isRequired
};

Slick.defaultProps = {
    items: {
        key: '',
        imageUrl: '',
        text: ''
    }
};

export default Slick;
