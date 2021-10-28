import React from 'react';
import {Col, Row} from 'reactstrap';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import CardComponent from '../Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slick = ({items, onView, settings}) => (
    <Row>
        <Col>
            <Slider {...settings}>
                {map(items, item => (
                    <div key={item.key}>
                        <CardComponent items={item} onView={onView}/>
                    </div>
                )
                )}
            </Slider>
        </Col>
    </Row>
);

Slick.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    onView: PropTypes.func.isRequired,
    settings: PropTypes.shape({}).isRequired
};
export default Slick;
